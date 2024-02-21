import { TokenResponse, CustomerInDbBase, Customer } from '../openapi-gen/models'

/**
 * Parameters for creating a customer
 * @interface ModifySubscriptionParameters
 */
export interface CreateCustomerParameters {
  /**
   * Customer alternative ID
   * @type {string}
   */
  alternativeId?: string

  /**
   * Customer name
   * @type {string}
   */
  name?: string

  /**
   * Customer email
   * @type {string}
   */
  email?: string

  /**
   * Customer metadata
   * @type {object}
   */
  metadata?: object
}

/**
 * Planship API client base interface
 */
export interface PlanshipBaseApi {
  /**
   * Obtain an access token using a client ID/secret pair stored by this instance
   * @group Authentication
   *
   * @returns A promise that resolves with a TokenResponse object
   */
  getAccessToken(): Promise<TokenResponse>

  /**
   * Register a new customer with Planship.
   * @group Customer
   *
   * @param  {CreateCustomerParameters} [parmas] - Create customer parameters
   * @returns A promise that resolves with an instance of the Customer class
   */
  createCustomer(params?: CreateCustomerParameters): Promise<Customer>

  /**
   * Get the customer with a given customer IDfrom Planship
   * @group Customer
   *
   * @param  {string} customerId - Planship customer ID
   * @returns A promise that resolves with the customer object
   */
  getCustomer(customerId: string): Promise<CustomerInDbBase>

  /**
   * Delete the customer with a given customer IDfrom Planship
   * @group Customer
   *
   * @param  {string} customerId - Planship customer ID
   * @returns A promise that resolves with the deleted customer object
   */
  deleteCustomer(customerId: string): Promise<CustomerInDbBase>
}
