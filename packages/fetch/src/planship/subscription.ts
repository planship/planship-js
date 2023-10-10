import {
  SubscriptionsApi,
  SubscriptionCustomersApi,
  FetchAPI,
} from '../openapi-gen'

import {
  CustomerSubscriptionWithPlan,
  SubscriptionCustomer,
  SubscriptionCustomerInDbBase,
  TokenGetter,
} from '@planship/models'


import { PlanshipBase } from './base'


/**
 * Subscription update parameters
 * @interface ModifySubscriptionParameters
 */
export interface ModifySubscriptionParameters {
  /**
   * Plan slug
   * @type {string}
   */
  planSlug?: string;

  /**
   * Renew plan slug
   * @type {string}
   */
  renewPlanSlug?: string;

  /**
   * Maximum number of subscribers
   * @type {number}
   */
  maxSubscribers?: number;
}

export class PlanshipSubscription extends PlanshipBase {

  readonly customerId: string
  readonly subscriptionId: string


  constructor(productSlug: string, customerId: string, subscriptionId: string, url: string, getAccessToken: TokenGetter, fetchApi?: FetchAPI)
  constructor(productSlug: string, customerId: string, subscriptionId: string, url: string, clientId: string, clientSecret: string, fetchApi?: FetchAPI)
  constructor(productSlug: string, customerId: string, subscriptionId: string, url: string, clientIdOrGetAccessToken: string | TokenGetter, secretOrFetchApi?: string | FetchAPI, fetchApi?: FetchAPI) {
      super(productSlug, url, clientIdOrGetAccessToken, secretOrFetchApi, fetchApi);

      this.customerId = customerId;
      this.subscriptionId = subscriptionId;
  }

  public changePlan(planSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({planSlug: planSlug});
  }

  public changeRenewPlan(renewPlanSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({renewPlanSlug: renewPlanSlug});
  }

  public changeMaxSubscribers(maxSubscribers: number): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({maxSubscribers: maxSubscribers});
  }

  /**
   * Modify the current subscription
   * @param  {ModifySubscriptionParameters}          params Object containing new plan, renew plan and maximum subscribers values.
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  public modify(params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan> {
    const subscriptionUpdate = {
      planSlug: params.planSlug,
      renew_planSlug: params.renewPlanSlug,
      max_subscribers: params.maxSubscribers,
    }
    return this.planshipApiInstance(SubscriptionsApi)
    .modifyCustomerPlanSubscription({
      customerId: this.customerId,
      subscriptionId: this.subscriptionId,
      subscriptionUpdateWithSlugs: subscriptionUpdate
    })
  }

  public listCustomers(): Promise<Array<SubscriptionCustomer>> {
    return this.planshipApiInstance(SubscriptionCustomersApi)
    .listSubscriptionCustomers({customerId: this.customerId, subscriptionId: this.subscriptionId})
  }

  public addCustomer(
    customerIdToAdd: string,
    isAdministrator: boolean = false,
    isSubscriber: boolean = true,
    metadata?: object
    ): Promise<SubscriptionCustomer> {
    return this.planshipApiInstance(SubscriptionCustomersApi)
    .addCustomerToSubscription({
      customerId: this.customerId,
      subscriptionId: this.subscriptionId,
      subscriptionCustomerCreate: {
        customerId: customerIdToAdd,
        isAdministrator: isAdministrator,
        isSubscriber: isSubscriber,
        metadata: metadata,
      }
    })
  }

  public removeCustomer(
    customerIdToRemove: string,
    ): Promise<SubscriptionCustomerInDbBase> {
    return this.planshipApiInstance(SubscriptionCustomersApi)
    .removeCustomerFromSubscription({
      customerId: this.customerId,
      subscriptionId: this.subscriptionId,
      id: customerIdToRemove,
    })
  }
}
