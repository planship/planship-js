import { PlanshipBaseApi } from './Base'

import { JSONValue } from '../types'

import { ModifySubscriptionParameters } from './Subscription'


import {
  SubscriptionCustomer,
  SubscriptionCustomerInDbBase,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  MeteringRecord,
  LeverUsage,
} from '../openapi-gen/models'


/**
 * Create subscription additional options
 * @interface CreateSubscriptionOptions
 */
export interface CreateSubscriptionOptions {

  /**
   * Subscribers limit
   * @type {number}
   */
  maxSubscribers?: number

  /**
   * Determine if a creating customer is a subscriber
   * @type {boolean}
   */
  isSubscriber?: boolean;

  /**
   * Determine if a subscription should auto renew
   * @type {boolean}
   */
  autoRenew?: boolean;

  /**
   * Subscription renewal date
   * @type {Date}
   */
  renewAt?: Date;

  /**
   * Customer metadata
   * @type {object}
   */
  metadata?: object;

}


export interface PlanshipCustomerApi extends PlanshipBaseApi {


  createSubscription(planSlug: string, isSubscriber: boolean, metadata?: object): Promise<SubscriptionWithPlan>;

  deleteSubscription(subscriptionId: string):Promise<string>;

  listSubscriptions(): Promise<Array<CustomerSubscriptionWithPlan>>;

  getSubscription(subscriptionId: string): Promise<CustomerSubscriptionWithPlan>;

  modifySubscription(subscriptionId: string, params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan>;

  getEntitlements(): Promise<JSONValue>;

  getLeverUsage(leverSlug: string): Promise<LeverUsage>;

  getMeteringIdUsage(meteringId: string): Promise<{ [key: string]: LeverUsage }>;

  reportUsage(meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord>;

  listSubscriptionCustomers(customerId: string, subscriptionId: string): Promise<Array<SubscriptionCustomer>>;

  addSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToAdd: string,
    isAdministrator: boolean,
    isSubscriber: boolean,
    metadata?: object
    ): Promise<SubscriptionCustomer>;

  removeSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToRemove: string,
    ): Promise<SubscriptionCustomerInDbBase>;

}
