import { JSONValue, EntitlementsCallback } from '../types'

import { ModifySubscriptionParameters } from './Subscription'

import {
  SubscriptionCustomer,
  SubscriptionCustomerInDbBase,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  MeteringRecord,
  LeverUsage
} from '../openapi-gen/models'
import { PlanshipProductApi } from './Product'

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
  isSubscriber?: boolean

  /**
   * Determine if a subscription should auto renew
   * @type {boolean}
   */
  autoRenew?: boolean

  /**
   * Subscription renewal date
   * @type {Date}
   */
  renewAt?: Date

  /**
   * Customer metadata
   * @type {object}
   */
  metadata?: object
}

/**
 * PlanshipCustomer API client interface
 */
export interface PlanshipCustomerApi extends PlanshipProductApi {
  /**
   * Create a new subscription to the plan with a given slug
   * @group Subscription
   *
   * @param  {string} planSlug - Plan slug
   * @param  {CreateSubscriptionOptions} [options] - Additional options
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class
   */
  createSubscription(planSlug: string, options?: CreateSubscriptionOptions): Promise<SubscriptionWithPlan>

  /**
   * Retrieve detailed information about the subscription with a given id
   * @group Subscription
   *
   * @param  {string}                                subscriptionId Planship subscription id
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  getSubscription(subscriptionId: string): Promise<CustomerSubscriptionWithPlan>

  /**
   * Change the plan of the subscription with a given id.
   * The new plan is specified with a given plan slug.
   * @group Subscription
   *
   * @param  {string}                                subscriptionId Planship subscription id
   * @param  {string}                                planSlug       New plan slug
   * @returns {Promise<CustomerSubscriptionWithPlan>}                A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  changeSubscriptionPlan(subscriptionId: string, planSlug: string): Promise<CustomerSubscriptionWithPlan>

  /**
   * Change the renew plan of the subscription with a given id.
   * New renew plan is specified with a given plan slug.
   * @group Subscription
   *
   * @param  {string}                                subscriptionId Planship subscription id
   * @param  {string}                                renewPlanSlug  New renew plan slug
   * @returns {Promise<CustomerSubscriptionWithPlan>}                A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  changeSubscriptionRenewPlan(subscriptionId: string, renewPlanSlug: string): Promise<CustomerSubscriptionWithPlan>

  /**
   * Change the maximum allowed number of subscribers for a subscription with a given id
   * @group Subscription
   *
   * @param  {string} subscriptionId - Planship subscription id
   * @param  {string} maxSubscribers - Maximum number of subscribers
   * @returns  {Promise<CustomerSubscriptionWithPlan>} A promise that resolves with the CustomerSubscriptionWithPlan object
   */
  changeSubscriptionMaxSubscribers(
    subscriptionId: string,
    maxSubscribers: number
  ): Promise<CustomerSubscriptionWithPlan>

  /**
   * Set the autoRenew property for a subscription with a given id
   * @group Subscription
   *
   * @param  {string} subscriptionId - Planship subscription id
   * @param  {boolean} autoRenew - New autoRenew value
   * @returns  {Promise<CustomerSubscriptionWithPlan>} A promise that resolves with the CustomerSubscriptionWithPlan object
   */
  setSubscriptionAutoRenew(subscriptionId: string, autoRenew: boolean): Promise<CustomerSubscriptionWithPlan>

  /**
   * Set the isActive property for a subscription with a given id
   * @group Subscription
   *
   * @param  {string} subscriptionId - Planship subscription id
   * @param  {boolean} isActive - New isActive value
   * @returns  {Promise<CustomerSubscriptionWithPlan>} A promise that resolves with the CustomerSubscriptionWithPlan object
   */
  setSubscriptionIsActive(subscriptionId: string, isActive: boolean): Promise<CustomerSubscriptionWithPlan>

  /**
   * Modify the subscription with a given id
   * New plan, renew plan and maximum subscribers values are passed via params object.
   * @group Subscription
   *
   * @param  {string}                                subscriptionId Planship subscription id
   * @param  {ModifySubscriptionParameters}          params         Object containing subscription parameters to modify
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  modifySubscription(
    subscriptionId: string,
    params: ModifySubscriptionParameters
  ): Promise<CustomerSubscriptionWithPlan>

  /**
   * List subscription
   * @group Customer
   *
   * @returns A promise that resolves with a list of CustomerSubscriptionWithPlan objects
   */
  listSubscriptions(): Promise<Array<CustomerSubscriptionWithPlan>>

  /**
   * Retrieve all product entitlements
   * @group Customer
   *
   * @param  {EntitlementsCallback} callback - Optional callback for entitlement updates via a WebSockets
   * @returns A promise that resolves with an object containing entitlement values
   * keyed by lever slugs
   */
  getEntitlements(callback?: EntitlementsCallback): Promise<JSONValue>

  /**
   * Retrieve customer usage data for the metered lever with a given slug
   * @group Customer
   *
   * @param  {string} leverSlug - lever slug
   * @returns A promise that resolves with CustomerLeverUsage object
   */
  getLeverUsage(leverSlug: string): Promise<LeverUsage>

  /**
   * Retrieve customer usage data for all metered levers with a given metering id
   * @group Customer
   *
   * @param  {string} meteringId - metering id
   * @returns A promise that resolves with LeverUsage object
   */
  getMeteringIdUsage(meteringId: string): Promise<{ [key: string]: LeverUsage }>

  /**
   * Report customer usage for a given metering id
   * @group Customer
   *
   * @param {string} meteringId - Metering id string
   * @param {number} usage - Usage to report
   * @param {string} [bucket] - Optional usage bucket name
   * @returns A promise that resolves with a new MeteringRecord
   */
  reportUsage(meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord>

  /**
   * Retrieve a list of all customers that belong to the subscription with a given id
   * @group Subscription
   *
   * @param  {string} subscriptionId - Planship subscription id
   * @returns A promise that resolves with a list of SubscriptionCustomer objects
   */
  listSubscriptionCustomers(subscriptionId: string): Promise<Array<SubscriptionCustomer>>

  /**
   * Add the existing Planship customer to the existing subscription with a given ID
   * @group Subscription
   *
   * @param  {string} subscriptionId - Planship subscription id
   * @param  {string} customerIdToAdd - Id of the planship customer to add to the subscription
   * @param  {boolean} [isAdministrator] - Optional flag to specify if the added customer is the administrator of the subscription (default: false)
   * @param  {boolean} [isSubscriber] - Optional flag to specify if the added customer is the subscriber of the subscription (default: true)
   * @param  {object} [metadata] -  Optional metadata to store for the new customer on the subscription
   * @returns A promises that resolves with the SubscriptionCustomer object
   */
  addSubscriptionCustomer(
    subscriptionId: string,
    customerIdToAdd: string,
    isAdministrator?: boolean,
    isSubscriber?: boolean,
    metadata?: object
  ): Promise<SubscriptionCustomer>

  /**
   * Remove the Planship customer with a given ID from the subscription with a given ID
   * @group Subscription
   *
   * @param  {string} subscriptionId - Planship subscription id
   * @param  {string} customerIdToRemove -  Id of the planship customer to remove from the subscription
   * @returns  A promise that resolves with the id of the customer removed from the subscription
   */
  removeSubscriptionCustomer(subscriptionId: string, customerIdToRemove: string): Promise<SubscriptionCustomerInDbBase>
}
