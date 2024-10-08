import { PlanshipProductApi } from './Product.js'

import { Entitlements, EntitlementsCallback } from '../types.js'

import { ModifySubscriptionParameters } from './Subscription.js'
import { CreateSubscriptionOptions } from './Customer.js'

import {
  SubscriptionCustomer,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  LeverUsage,
  SubscriptionCustomerInDbBase,
  MeteringRecord
} from '../openapi-gen/models/index.js'

/**
 * Planship API client interface
 */
export interface PlanshipApi extends PlanshipProductApi {
  /**
   * Create a new subscription to the plan with a given slug for the customer with a given ID
   * @group Customer
   *
   * @param  {string} customerId - Planship customer ID
   * @param  {string} planSlug - Plan slug
   * @param  {CreateSubscriptionOptions} [options] - Additional options
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class
   */
  createSubscription(
    customerId: string,
    planSlug: string,
    options?: CreateSubscriptionOptions
  ): Promise<SubscriptionWithPlan>

  /**
   * Retrieve detailed information about the subscription with a given ID for the customer with a given ID
   * @group Subscription
   *
   * @param  {string}                                customerId     Planship customer ID
   * @param  {string}                                subscriptionId Planship subscription ID
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  getSubscription(customerId: string, subscriptionId: string): Promise<CustomerSubscriptionWithPlan>

  /**
   * Change the plan of the subscription with a given ID for the customer with a given ID.
   * The new plan is specified with a given plan slug.
   * @group Subscription
   *
   * @param  {string}                                customerId     Planship customer ID
   * @param  {string}                                subscriptionId Planship subscription ID
   * @param  {string}                                planSlug       New plan slug
   * @returns {Promise<CustomerSubscriptionWithPlan>}                A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  changeSubscriptionPlan(
    customerId: string,
    subscriptionId: string,
    planSlug: string
  ): Promise<CustomerSubscriptionWithPlan>

  /**
   * Change the renew plan of the subscription with a given ID for the customer with a given ID.
   * New renew plan is specified with a given plan slug.
   * @group Subscription
   *
   * @param  {string}                                customerId     Planship customer ID
   * @param  {string}                                subscriptionId Planship subscription ID
   * @param  {string}                                renewPlanSlug  New renew plan slug
   * @returns {Promise<CustomerSubscriptionWithPlan>}                A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  changeSubscriptionRenewPlan(
    customerId: string,
    subscriptionId: string,
    renewPlanSlug: string
  ): Promise<CustomerSubscriptionWithPlan>

  /**
   * Change the maximum allowed number of subscribers for a subscription with a given ID
   * @group Subscription
   *
   * @param  {string} customerId - Id of the planship customer performing this operation
   * @param  {string} subscriptionId - Planship subscription ID
   * @param  {string} maxSubscribers - Maximum number of subscribers
   * @returns  {Promise<CustomerSubscriptionWithPlan>} A promise that resolves with the CustomerSubscriptionWithPlan object
   */
  changeSubscriptionMaxSubscribers(
    customerId: string,
    subscriptionId: string,
    maxSubscribers: number
  ): Promise<CustomerSubscriptionWithPlan>

  /**
   * Set the autoRenew property for a subscription with a given ID
   * @group Subscription
   *
   * @param  {string} customerId - Id of the planship customer performing this operation
   * @param  {string} subscriptionId - Planship subscription ID
   * @param  {boolean} autoRenew - New autoRenew value
   * @returns  {Promise<CustomerSubscriptionWithPlan>} A promise that resolves with the CustomerSubscriptionWithPlan object
   */
  setSubscriptionAutoRenew(
    customerId: string,
    subscriptionId: string,
    autoRenew: boolean
  ): Promise<CustomerSubscriptionWithPlan>

  /**
   * Set the isActive property for a subscription with a given ID
   * @group Subscription
   *
   * @param  {string} customerId - Id of the planship customer performing this operation
   * @param  {string} subscriptionId - Planship subscription ID
   * @param  {boolean} isActive - New isActive value
   * @returns  {Promise<CustomerSubscriptionWithPlan>} A promise that resolves with the CustomerSubscriptionWithPlan object
   */
  setSubscriptionIsActive(
    customerId: string,
    subscriptionId: string,
    isActive: boolean
  ): Promise<CustomerSubscriptionWithPlan>

  /**
   * Modify the subscription with a given ID for the customer with a given ID.
   * New plan, renew plan and maximum subscribers values are passed via params object.
   * @group Subscription
   *
   * @param  {string}                                customerId     Planship customer ID
   * @param  {string}                                subscriptionId Planship subscription ID
   * @param  {ModifySubscriptionParameters}          params         Object containing subscription parameters to modify
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  modifySubscription(
    customerId: string,
    subscriptionId: string,
    params: ModifySubscriptionParameters
  ): Promise<CustomerSubscriptionWithPlan>

  /**
   * List subscription the customer with a given ID
   * @group Customer
   *
   * @param  {string} customerId - Planship customer ID
   * @param  {string} productSlug - Planship product slug
   * @returns A promise that resolves with a list of CustomerSubscriptionWithPlan objects
   */
  listSubscriptions(customerId: string, productSlug?: string): Promise<Array<CustomerSubscriptionWithPlan>>

  /**
   * Retrieve all product entitlements for the customer with a given ID
   * @group Customer
   *
   * @param  {string} customerId - Planship customer ID
   * @param  {EntitlementsCallback} callback - Optional callback for entitlement updates via a WebSockets
   * @returns A promise that resolves with an object containing entitlement values
   * keyed by lever slugs
   */
  getEntitlements(customerId: string, callback?: EntitlementsCallback): Promise<Entitlements>

  /**
   * Retrieve customer usage data for the metered lever with a given slug
   * @group Customer
   *
   * @param  {string} customerId - Planship customer ID
   * @param  {string} leverSlug - lever slug
   * @returns A promise that resolves with CustomerLeverUsage object
   */
  getLeverUsage(customerId: string, leverSlug: string): Promise<LeverUsage>

  /**
   * Retrieve customer usage data for all metered levers with a given metering ID
   * @group Customer
   *
   * @param  {string} customerId - Planship customer ID
   * @param  {string} meteringId - metering ID
   * @returns A promise that resolves with LeverUsage object
   */
  getMeteringIdUsage(customerId: string, meteringId: string): Promise<{ [key: string]: LeverUsage }>

  /**
   * Report customer usage for a given metering ID
   * @group Customer
   *
   * @param {string} customerId - Planship customer ID
   * @param {string} meteringId - Metering ID string
   * @param {number} usage - Usage to report
   * @param {string} [bucket] - Optional usage bucket name
   * @returns A promise that resolves with a new MeteringRecord
   */
  reportUsage(customerId: string, meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord>

  /**
   * Retrieve a list of all customers that belong to the subscription with a given ID
   * @group Subscription
   *
   * @param  {string} customerId - Planship customer ID
   * @param  {string} subscriptionId - Planship subscription ID
   * @returns A promise that resolves with a list of SubscriptionCustomer objects
   */
  listSubscriptionCustomers(customerId: string, subscriptionId: string): Promise<Array<SubscriptionCustomer>>

  /**
   * Add the existing Planship customer to the existing subscription
   * @group Subscription
   *
   * @param  {string} customerId - Id of the planship customer performing this operation
   * @param  {string} subscriptionId - Planship subscription ID
   * @param  {string} customerIdToAdd - Id of the planship customer to add to the subscription
   * @param  {boolean} [isAdministrator] - Optional flag to specify if the added customer is the administrator of the subscription (default: false)
   * @param  {boolean} [isSubscriber] - Optional flag to specify if the added customer is the subscriber of the subscription (default: true)
   * @param  {object} [metadata] -  Optional metadata to store for the new customer on the subscription
   * @returns A promises that resolves with the SubscriptionCustomer object
   */
  addSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToAdd: string,
    isAdministrator?: boolean,
    isSubscriber?: boolean,
    metadata?: object
  ): Promise<SubscriptionCustomer>

  /**
   * Remove the Planship customer from the subscription
   * @group Subscription
   *
   * @param  {string} customerId - Id of the planship customer performing this operation
   * @param  {string} subscriptionId - Planship subscription ID
   * @param  {string} customerIdToRemove -  Id of the planship customer to remove from the subscription
   * @returns  A promise that resolves with the ID of the customer removed from the subscription
   */
  removeSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToRemove: string
  ): Promise<SubscriptionCustomerInDbBase>
}
