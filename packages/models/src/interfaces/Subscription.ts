import { CustomerSubscriptionWithPlan, SubscriptionCustomer, SubscriptionCustomerInDbBase } from '../openapi-gen/models/index.js'

import { PlanshipBaseApi } from './Base.js'

/**
 * Subscription update parameters
 * @interface ModifySubscriptionParameters
 */
export interface ModifySubscriptionParameters {
  /**
   * Plan slug
   * @type {string}
   */
  planSlug?: string

  /**
   * Renew plan slug
   * @type {string}
   */
  renewPlanSlug?: string

  /**
   * Maximum number of subscribers
   * @type {number}
   */
  maxSubscribers?: number

  /**
   * Determine if a subscription should auto renew
   * @type {boolean}
   */
  autoRenew?: boolean

  /**
   * Determine if a subscription is active
   * @type {boolean}
   */
  isActive?: boolean

  /**
   * Subscription renewal date
   * @type {Date}
   */
  renewAt?: Date
}

export interface PlanshipSubscriptionApi extends PlanshipBaseApi {
  // changePlan(planSlug: string): Promise<CustomerSubscriptionWithPlan>;

  // changeRenewPlan(renewPlanSlug: string): Promise<CustomerSubscriptionWithPlan>;

  // changeMaxSubscribers(maxSubscribers: number): Promise<CustomerSubscriptionWithPlan>;

  // setAutoRenew(autoRenew: boolean): Promise<CustomerSubscriptionWithPlan>;

  // setIsActive(isActive: boolean): Promise<CustomerSubscriptionWithPlan>;

  /**
   * Modify the current subscription
   * @param  {ModifySubscriptionParameters}          params Object containing new plan, renew plan and maximum subscribers values.
   * @returns A Promise that resolves with an instance of the CustomerSubscriptionWithPlan class.
   */
  modify(params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan>

  listCustomers(): Promise<Array<SubscriptionCustomer>>

  addCustomer(
    customerIdToAdd: string,
    isAdministrator: boolean,
    isSubscriber: boolean,
    metadata?: object
  ): Promise<SubscriptionCustomer>

  removeCustomer(customerIdToRemove: string): Promise<SubscriptionCustomerInDbBase>
}
