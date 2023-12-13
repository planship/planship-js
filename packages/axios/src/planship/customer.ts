import {
  EntitlementsApi,
  ProductsApi,
  MeteredUsageApi,
  CustomerSubscriptionsApi,
} from '../openapi-gen'

import {
  SubscriptionCustomer,
  CustomerSubscriptionWithPlan,
  CustomerSubscriptionWithPlanFromJSON,
  SubscriptionWithPlan,
  SubscriptionWithPlanFromJSON,
  SubscriptionCustomerInDbBase,
  MeteringRecord,
  MeteringRecordFromJSON,
  MeteredUsageIn,
  LeverUsage,
  LeverUsageFromJSON,
  JSONValue,
  TokenGetter,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters,
} from '@planship/models'


import { PlanshipBase } from './base'

import { PlanshipSubscription } from './subscription';

import { AxiosResponse } from 'axios';

export { CustomerSubscriptionWithPlan, MeteringRecord, LeverUsage}


export class PlanshipCustomer extends PlanshipBase {

  readonly customerId: string
  private planshipSubscription: (subscriptionId: string) => PlanshipSubscription

  constructor(productSlug: string, customerId: string, url: string, getAccessToken: TokenGetter)
  constructor(productSlug: string, customerId: string, url: string, clientId: string, clientSecret: string)
  constructor(productSlug: string, customerId: string, url: string, clientIdOrGetAccessToken: string | TokenGetter, clientSecret: string = "") {
      super(productSlug, url, clientIdOrGetAccessToken, clientSecret);
      this.customerId = customerId;
      this.planshipSubscription = (subscriptionId: string) => new PlanshipSubscription(
        productSlug,
        customerId,
        subscriptionId,
        url,
        this._getAccessToken
      )
  }

  public createSubscription(planSlug: string, options?:CreateSubscriptionOptions): Promise<SubscriptionWithPlan> {
    const subscriptionCustomerIn = {
      customer_id: this.customerId,
      ...options,
    }
    return this.planshipApiInstance(ProductsApi)
    .createPlanSubscription(this.productSlug, planSlug, subscriptionCustomerIn)
    .then((response: AxiosResponse) => Promise.resolve(SubscriptionWithPlanFromJSON(response.data)))
  }

  public listSubscriptions(): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipApiInstance(CustomerSubscriptionsApi)
    .listCustomerPlanSubscriptions(this.customerId)
    .then((response: AxiosResponse) => Promise.resolve(response.data.map(CustomerSubscriptionWithPlanFromJSON)))
  }

  public getSubscription(subscriptionId: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipApiInstance(CustomerSubscriptionsApi)
    .getCustomerPlanSubscription(this.customerId, subscriptionId)
    .then((response: AxiosResponse) => Promise.resolve(CustomerSubscriptionWithPlanFromJSON(response.data)))
  }

  public modifySubscription(subscriptionId: string, params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId)
    .modify(params)
  }

  public getEntitlements(): Promise<JSONValue> {
    return this.planshipApiInstance(EntitlementsApi)
    .getProductEntitlementsForCustomer(this.productSlug, this.customerId)
    .then((response: AxiosResponse) => Promise.resolve(response.data))
  }

  public getLeverUsage(leverSlug: string): Promise<LeverUsage> {
    return this.planshipApiInstance(MeteredUsageApi)
    .getLeverUsageForCustomer(this.customerId, this.productSlug, leverSlug)
    .then((response: AxiosResponse) => Promise.resolve(LeverUsageFromJSON(response.data)))
  }

  public getMeteringIdUsage(meteringId: string): Promise<{ [key: string]: LeverUsage }> {
    return this.planshipApiInstance(MeteredUsageApi)
    .getMeteringIdLeversUsageForCustomer(this.customerId, this.productSlug, meteringId)
    .then((response: AxiosResponse) => Promise.resolve(
      Object.keys(response.data).reduce(function(result: { [key: string]: LeverUsage }, key: string) {
        result[key] = LeverUsageFromJSON(response.data[key])
        return result
      }, {})
    ))
  }

  public reportUsage(meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord> {
    const meteredUsageIn: MeteredUsageIn = {usage: usage}
    if (bucket!==undefined) {
      meteredUsageIn['bucket'] = bucket
    }

    return this.planshipApiInstance(MeteredUsageApi)
    .reportMeteredUsageForCustomer(
      this.customerId,
      this.productSlug,
      meteringId,
      meteredUsageIn
    ).then((response: AxiosResponse) => Promise.resolve(MeteringRecordFromJSON(response.data)))
  }

  public listSubscriptionCustomers(customerId: string, subscriptionId: string): Promise<Array<SubscriptionCustomer>> {
    return this.planshipSubscription(subscriptionId)
    .listCustomers()
  }

  public addSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToAdd: string,
    isAdministrator: boolean = false,
    isSubscriber: boolean = true,
    metadata?: object
    ): Promise<SubscriptionCustomer> {
    return this.planshipSubscription(subscriptionId)
    .addCustomer(
      customerIdToAdd,
      isAdministrator,
      isSubscriber,
      metadata,
    )
  }

  public removeSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToRemove: string,
    ): Promise<SubscriptionCustomerInDbBase> {
    return this.planshipSubscription(subscriptionId)
    .removeCustomer(customerIdToRemove)
  }

}
