import { CustomerSubscriptionsApi, SubscriptionCustomersApi } from '../openapi-gen'

import {
  CustomerSubscriptionWithPlan,
  CustomerSubscriptionWithPlanFromJSON,
  SubscriptionCustomer,
  SubscriptionCustomerFromJSON,
  SubscriptionCustomerInDbBase,
  SubscriptionCustomerInDbBaseFromJSON,
  TokenGetter,
  ModifySubscriptionParameters,
  PlanshipSubscriptionApi
} from '@planship/models'

import { AxiosResponse } from 'axios'

import { PlanshipBase } from './base'

export class PlanshipSubscription extends PlanshipBase implements PlanshipSubscriptionApi {
  readonly customerId: string
  readonly subscriptionId: string

  constructor(productSlug: string, customerId: string, subscriptionId: string, url: string, getAccessToken: TokenGetter)
  constructor(
    productSlug: string,
    customerId: string,
    subscriptionId: string,
    url: string,
    clientId: string,
    clientSecret: string
  )
  constructor(
    productSlug: string,
    customerId: string,
    subscriptionId: string,
    url: string,
    clientIdOrGetAccessToken: string | TokenGetter,
    clientSecret: string = ''
  ) {
    super(productSlug, url, clientIdOrGetAccessToken, clientSecret)

    this.customerId = customerId
    this.subscriptionId = subscriptionId
  }

  public changePlan(planSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({ planSlug: planSlug })
  }

  public changeRenewPlan(renewPlanSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({ renewPlanSlug: renewPlanSlug })
  }

  public changeMaxSubscribers(maxSubscribers: number): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({ maxSubscribers: maxSubscribers })
  }

  public setAutoRenew(autoRenew: boolean): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({ autoRenew: autoRenew })
  }

  /**
   * Modify the current subscription
   * @param  {ModifySubscriptionParameters}          params Object containing new plan, renew plan and maximum subscribers values.
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  public modify(params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan> {
    const subscriptionUpdate = {
      plan_slug: params.planSlug,
      renew_plan_slug: params.renewPlanSlug,
      max_subscribers: params.maxSubscribers,
      auto_renew: params.autoRenew,
      renew_at: params.renewAt?.toISOString()
    }
    return this.planshipApiInstance(CustomerSubscriptionsApi)
      .modifyCustomerPlanSubscription(this.customerId, this.subscriptionId, subscriptionUpdate)
      .then((response: AxiosResponse) => Promise.resolve(CustomerSubscriptionWithPlanFromJSON(response.data)))
  }

  public listCustomers(): Promise<Array<SubscriptionCustomer>> {
    return this.planshipApiInstance(SubscriptionCustomersApi)
      .listSubscriptionCustomers(this.customerId, this.subscriptionId)
      .then((response: AxiosResponse) => Promise.resolve(response.data.map(SubscriptionCustomerFromJSON)))
  }

  public addCustomer(
    customerIdToAdd: string,
    isAdministrator: boolean = false,
    isSubscriber: boolean = true,
    metadata?: object
  ): Promise<SubscriptionCustomer> {
    return this.planshipApiInstance(SubscriptionCustomersApi)
      .addCustomerToSubscription(this.customerId, this.subscriptionId, {
        customer_id: customerIdToAdd,
        is_administrator: isAdministrator,
        is_subscriber: isSubscriber,
        metadata: metadata
      })
      .then((response: AxiosResponse) => Promise.resolve(SubscriptionCustomerFromJSON(response.data)))
  }

  public removeCustomer(customerIdToRemove: string): Promise<SubscriptionCustomerInDbBase> {
    return this.planshipApiInstance(SubscriptionCustomersApi)
      .removeCustomerFromSubscription(this.customerId, this.subscriptionId, customerIdToRemove)
      .then((response: AxiosResponse) => Promise.resolve(SubscriptionCustomerInDbBaseFromJSON(response.data)))
  }
}
