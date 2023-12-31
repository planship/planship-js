import {
  EntitlementsApi,
  ProductsApi,
  MeteredUsageApi,
  FetchAPI,
  CustomerSubscriptionsApi,
} from '../openapi-gen'

import {
  SubscriptionCustomer,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  MeteringRecord,
  MeteredUsageIn,
  LeverUsage,
  SubscriptionCustomerInDbBase,
  JSONValue,
  TokenGetter,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters
} from '@planship/models'


import { PlanshipBase } from './base'

import { PlanshipSubscription } from './subscription';

export { CustomerSubscriptionWithPlan, MeteringRecord, LeverUsage}

export class PlanshipCustomer extends PlanshipBase {

  readonly customerId: string
  private planshipSubscription: (subscriptionId: string) => PlanshipSubscription

  constructor(productSlug: string, customerId: string, url: string, getAccessToken: TokenGetter, fetchApi?: FetchAPI)
  constructor(productSlug: string, customerId: string, url: string, clientId: string, clientSecret: string, fetchApi?: FetchAPI)
  constructor(productSlug: string, customerId: string, url: string, clientIdOrGetAccessToken: string | TokenGetter, secretOrFetchApi?: string | FetchAPI, fetchApi?: FetchAPI) {
      super(productSlug, url, clientIdOrGetAccessToken, secretOrFetchApi, fetchApi);
      this.customerId = customerId;
      this.planshipSubscription = (subscriptionId: string) => new PlanshipSubscription(
        productSlug,
        customerId,
        subscriptionId,
        url,
        this._getAccessToken,
        fetchApi,
      )
  }

  public createSubscription(planSlug: string, options?: CreateSubscriptionOptions): Promise<SubscriptionWithPlan> {
    const subscriptionCustomerIn = {
      customerId: this.customerId,
      ...options,
    }
    return this.planshipApiInstance(ProductsApi)
    .createPlanSubscription({
      productSlug: this.productSlug,
      slug: planSlug,
      planSubscriptionCreate: subscriptionCustomerIn
    })
  }

  public listSubscriptions(): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipApiInstance(CustomerSubscriptionsApi)
    .listCustomerPlanSubscriptions({ customerId: this.customerId })
  }

  public getSubscription(subscriptionId: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipApiInstance(CustomerSubscriptionsApi)
    .getCustomerPlanSubscription({ customerId: this.customerId, subscriptionId: subscriptionId })
  }

  public modifySubscription(subscriptionId: string, params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId)
    .modify(params)
  }

  public getEntitlements(): Promise<JSONValue> {
    return this.planshipApiInstance(EntitlementsApi)
    .getProductEntitlementsForCustomer({ productSlug: this.productSlug, customerId: this.customerId })
    .then((entitlements) => <JSONValue>entitlements)
  }

  public getLeverUsage(leverSlug: string): Promise<LeverUsage> {
    return this.planshipApiInstance(MeteredUsageApi)
    .getLeverUsageForCustomer({ customerId: this.customerId, productSlug: this.productSlug, leverSlug })
  }

  public getMeteringIdUsage(meteringId: string): Promise<{ [key: string]: LeverUsage }> {
    return this.planshipApiInstance(MeteredUsageApi)
    .getMeteringIdLeversUsageForCustomer({ customerId: this.customerId, productSlug: this.productSlug, meteringId })
  }

  public reportUsage(meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord> {
    const meteredUsageIn: MeteredUsageIn = {usage: usage}
    if (bucket!==undefined) {
      meteredUsageIn['bucket'] = bucket
    }

    return this.planshipApiInstance(MeteredUsageApi)
    .reportMeteredUsageForCustomer({
      customerId: this.customerId,
      productSlug: this.productSlug,
      meteredUsageIn,
      meteringId
    })
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
