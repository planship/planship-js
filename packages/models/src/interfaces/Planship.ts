
import { PlanshipBaseApi } from './Base'

import { JSONValue } from '../types'

import { ModifySubscriptionParameters } from './Subscription'

import {
  Product,
  Plan as PlanDetails,
  PlanInList as Plan,
  Customer,
  SubscriptionCustomer,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  ResourceUsage,
  CustomerInDbBase,
  SubscriptionInDbBase,
  SubscriptionCustomerInDbBase,
  MeteringRecord,
} from '../openapi-gen/models'

/**
 * Planship API client interface
*/
export interface PlanshipApi extends PlanshipBaseApi {
  /**
   * Retrieve information about the current product
   * @group Product
   *
   * @returns A promise that resolves with an instance of the Product class
   */
  getProduct(): Promise<Product>;

  /**
   * Retrieve a list of plans for the current product
   * @group Product
   *
   * @returns A promise that resolves with a list of ProductItem instances
   */
  listPlans(): Promise<Array<Plan>>;


  /**
   * Retrieve detailed information about the plan with a given slug.
   * @group Product
   *
   * @param {string} planSlug - plan slug
   * @returns A promise that resolves with an instance of the PlanDetails class
   */
  getPlan(planSlug: string): Promise<PlanDetails>;


  /**
   * Register a new customer with Planship.
   * @group Customer
   *
   * @param  {string} [name] - Customer name
   * @param  {string} [email] - Customer email address
   * @param  {object} [metadata] - Customer metadata
   * @returns A promise that resolves with an instance of the Customer class
   */
  createCustomer(name?: string, email?: string, metadata?: object): Promise<Customer>;


  /**
   * Delete the customer with a given customer id from Planship
   * @group Customer
   *
   * @param  {string} customerId - Planship customer id
   * @returns A promise that resolves with the deleted customer object
   */
  deleteCustomer(customerId: string): Promise<CustomerInDbBase>;

  /**
   * Create a new subscription to the plan with a given slug for the customer with a given id
   * @group Customer
   *
   * @param  {string} customerId - Planship customer id
   * @param  {string} planSlug - Plan slug
   * @param  {boolean} [isSubscriber]
   * @param  {object} [metadata] - Optional metadata to be stored in the subscription
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class
   */
  createSubscription(customerId: string, planSlug: string, isSubscriber?: boolean, metadata?: object): Promise<SubscriptionWithPlan>;


  /**
   * Delete the subscription with a given id for the customer with a given id
   * @group Subscription
   *
   * @param  {string} customerId - Planship customer id
   * @param  {string} subscriptionId - Planship subscription id
   * @returns A promise that resolves with the deleted subscription obkect
   */
  deleteSubscription(customerId: string, subscriptionId: string):Promise<SubscriptionInDbBase>;

  /**
   * Retrieve detailed information about the subscription with a given id for the customer with a given id
   * @group Subscription
   *
   * @param  {string}                                customerId     Planship customer id
   * @param  {string}                                subscriptionId Planship subscription id
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  getSubscription(customerId: string, subscriptionId: string): Promise<CustomerSubscriptionWithPlan>;

  /**
   * Change the plan of the subscription with a given id for the customer with a given id.
   * The new plan is specified with a given plan slug.
   * @group Subscription
   *
   * @param  {string}                                customerId     Planship customer id
   * @param  {string}                                subscriptionId Planship subscription id
   * @param  {string}                                planSlug       New plan slug
   * @returns {Promise<CustomerSubscriptionWithPlan>}                A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  changeSubscriptionPlan(
    customerId: string, subscriptionId: string, planSlug: string
  ): Promise<CustomerSubscriptionWithPlan>;

  /**
   * Change the renew plan of the subscription with a given id for the customer with a given id.
   * New renew plan is specified with a given plan slug.
   * @group Subscription
   *
   * @param  {string}                                customerId     Planship customer id
   * @param  {string}                                subscriptionId Planship subscription id
   * @param  {string}                                renewPlanSlug  New renew plan slug
   * @returns {Promise<CustomerSubscriptionWithPlan>}                A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  changeSubscriptionRenewPlan(customerId: string, subscriptionId: string, renewPlanSlug: string): Promise<CustomerSubscriptionWithPlan>;

  /**
   * Change the maximum allowed number of subscribers for a subscription with a given id
   * @group Subscription
   *
   * @param  {string} customerId - Id of the planship customer performing this operation
   * @param  {string} subscriptionId - Planship subscription id
   * @param  {string} maxSubscribers - Maximum number of subscribers
   * @returns  {Promise<CustomerSubscriptionWithPlan>} A promise that resolves with the CustomerSubscriptionWithPlan object
   */
  changeSubscriptionMaxSubscribers(
    customerId: string,
    subscriptionId: string,
    maxSubscribers: number
  ): Promise<CustomerSubscriptionWithPlan>;

  /**
   * Modify the subscription with a given id for the customer with a given id.
   * New plan, renew plan and maximum subscribers values are passed via params object.
   * @group Subscription
   *
   * @param  {string}                                customerId     Planship customer id
   * @param  {string}                                subscriptionId Planship subscription id
   * @param  {ModifySubscriptionParameters}          params         Object containing new plan, renew plan and max subscribers values
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  modifySubscription(customerId: string, subscriptionId: string, params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan>;


  /**
   * List subscription the customer with a given id
   * @group Customer
   *
   * @param  {string} customerId - Planship customer id
   * @returns A promise that resolves with a list of CustomerSubscriptionWithPlan objects
   */
  listSubscriptions(customerId: string): Promise<Array<CustomerSubscriptionWithPlan>>;


  /**
   * Retrieve all product entitlements for the customer with a given id
   * @group Customer
   *
   * @param  {string} customerId - Planship customer id
   * @returns A promise that resolves with an object containing entitlement values
   * keyed by resource slugs
   */
  getEntitlements(customerId: string): Promise<JSONValue>;


  /**
   * Retrieve customer usage data for the metered resource with a given if
   * @group Customer
   *
   * @param  {string} customerId - Planship customer id
   * @param  {string} resourceSlug - resource slug
   * @returns A promise that resolves with CustomerResourceUsage object
   */
  getResourceUsage(customerId: string, resourceSlug: string): Promise<ResourceUsage>;

  /**
   * Retrieve customer usage data for all metered resources with a given metering id
   * @group Customer
   *
   * @param  {string} customerId - Planship customer id
   * @param  {string} meteringId - metering id
   * @returns A promise that resolves with CustomerResourceUsage object
   */
  getMeteringIdResourcesUsage(customerId: string, meteringId: string): Promise<{ [key: string]: ResourceUsage}>;

  /**
   * Report customer usage for the metered resource with a given slug
   * @group Customer
   *
   * @param {string} customerId - Planship customer id
   * @param {string} resourceSlug - Metered resource slug
   * @param {number} usage - Usage to report
   * @returns A promise that resolves with a new MeteringRecord
   */
  reportUsage(
    customerId: string,
    resourceSlug: string,
    usage: number,
    bucket?: string
  ): Promise<MeteringRecord>;


  /**
   * Retrieve a list of all customers that belong to the subscription with a given id
   * @group Subscription
   *
   * @param  {string} customerId - Planship customer id
   * @param  {string} subscriptionId - Planship subscription id
   * @returns A promise that resolves with a list of SubscriptionCustomer objects
   */
  listSubscriptionCustomers(customerId: string, subscriptionId: string): Promise<Array<SubscriptionCustomer>>;

  /**
   * Add the existing Planship customer to the existing subscription
   * @group Subscription
   *
   * @param  {string} customerId - Id of the planship customer performing this operation
   * @param  {string} subscriptionId - Planship subscription id
   * @param  {string} customerIdToAdd - Id of the planship customer to add to the subscription
   * @param  {boolean} [isAdministor] - Optional flag to specify if the added customer is the administrator of the subscription (default: false)
   * @param  {boolean} [isSubscriber] - Optional flag to specify if the added customer is the subscriber of the subscription (default: true)
   * @param  {object} [metadata] -  Optional metadata to store for the new customer on the subscription
   * @returns A promises that resolves with the SubscriptionCustomer object
  */
  addSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToAdd: string,
    isAdministrator: boolean,
    isSubscriber: boolean,
    metadata?: object
    ): Promise<SubscriptionCustomer>;


  /**
   * Remove the Planship customer from the subscription
   * @group Subscription
   *
   * @param  {string} customerId - Id of the planship customer performing this operation
   * @param  {string} subscriptionId - Planship subscription id
   * @param  {string} customerIdToRemove -  Id of the planship customer to remove from the subscription
   * @returns  A promise that resolves with the id of the customer removed from the subscription
   */
  removeSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToRemove: string,
    ): Promise<SubscriptionCustomerInDbBase>;
}
