import {
  SubscriptionsApi,
  EntitlementsApi,
  ProductsApi,
  MeteredUsageApi,
  FetchAPI,
} from '../openapi-gen'

import {
  SubscriptionCustomer,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  MeteringRecord,
  MeteredUsageIn,
  ResourceUsage,
  SubscriptionInDbBase,
  SubscriptionCustomerInDbBase,
  JSONValue,
  TokenGetter,
} from '@planship/models'


import { PlanshipBase } from './base'

import { PlanshipSubscription, ModifySubscriptionParameters } from './subscription';

export { CustomerSubscriptionWithPlan, MeteringRecord, ResourceUsage}

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

  public createSubscription(planSlug: string, isSubscriber: boolean = true, metadata?: object): Promise<SubscriptionWithPlan> {
    const subscriptionCustomerIn = {
      customerId: this.customerId,
      isAdministrator: true,
      isSubscriber: isSubscriber,
      metadata: metadata
    }
    return this.planshipApiInstance(ProductsApi)
    .createPlanSubscription({
      productSlug: this.productSlug,
      slug: planSlug,
      planSubscriptionCreate: subscriptionCustomerIn
    })
  }

  public deleteSubscription(subscriptionId: string):Promise<SubscriptionInDbBase> {
    return this.planshipApiInstance(SubscriptionsApi)
    .deletePlanSubscription({ customerId: this.customerId, subscriptionId: subscriptionId })
  }

  public listSubscriptions(): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipApiInstance(SubscriptionsApi)
    .listCustomerPlanSubscriptions({ customerId: this.customerId })
  }

  public getSubscription(subscriptionId: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipApiInstance(SubscriptionsApi)
    .getCustomerPlanSubscription({ customerId: this.customerId, subscriptionId: subscriptionId })
  }

  public modifySubscription(subscriptionId: string, params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId)
    .modify(params)
  }

  public getEntitlements(): Promise<JSONValue> {
    return this.planshipApiInstance(EntitlementsApi)
    .listProductEntitlementsForCustomer({ productSlug: this.productSlug, customerId: this.customerId })
    .then((entitlements) => <JSONValue>entitlements)
  }

  public getResourceUsage(resourceSlug: string): Promise<ResourceUsage> {
    return this.planshipApiInstance(MeteredUsageApi)
    .getResourceUsageForCustomer({ customerId: this.customerId, productSlug: this.productSlug, resourceSlug })
  }

  public getMeteringIdResourcesUsage(meteringId: string): Promise<{ [key: string]: ResourceUsage }> {
    return this.planshipApiInstance(MeteredUsageApi)
    .getMeteringIdResourcesUsageForCustomer({ customerId: this.customerId, productSlug: this.productSlug, meteringId })
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
