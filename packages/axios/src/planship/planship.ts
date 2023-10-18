
import {
  ProductsApi,
  CustomersApi,
} from '../openapi-gen'

import {
  PlanshipApi,
  Product,
  ProductFromJSON,
  Plan as PlanDetails,
  PlanInList as Plan,
  PlanFromJSON,
  PlanInListFromJSON,
  Customer,
  CustomerFromJSON,
  CustomerInDbBase,
  OrganizationCustomerCreate,
  SubscriptionCustomer,
  SubscriptionCustomerInDbBase,
  CustomerSubscriptionWithPlan,
  SubscriptionInDbBase,
  SubscriptionWithPlan,
  ResourceUsage,
  JSONValue,
  TokenGetter,
} from '@planship/models'

import { PlanshipBase } from './base'

import { PlanshipCustomer, MeteringRecord } from './customer'
import { PlanshipSubscription, ModifySubscriptionParameters } from './subscription'
import { AxiosResponse } from 'axios'

export  { PlanshipApi, Product, Plan, PlanDetails, SubscriptionCustomer, Customer, CustomerSubscriptionWithPlan, JSONValue, SubscriptionWithPlan, ResourceUsage }

/**
 * Planship API client class
*/
export class Planship extends PlanshipBase implements PlanshipApi {

  private planshipCustomer: (customerId: string) => PlanshipCustomer
  private planshipSubscription: (customerId: string, subscriptionId: string) => PlanshipSubscription

  /**
   * Create a Planship API client that uses an authentication token from an external authentication flow.
   * This client instance is client-side (browser) safe.
   *
   * @param {string} productSlug - product slug
   * @param {string} url - Planship API server URL
   * @param {string} clientId - Planship API client ID
   * @param {TokenGetter} getAccessToken - function that returns a Promise that resolves
   * with a Planship access token for a given clientId
   *
   * @returns An instance of the Planship class
   */
  constructor(productSlug: string, url: string, getAccessToken: TokenGetter)
  /**
   * Create a Planship API client that uses client id and secret to obtain an access token
   * via the client credentials OAuth2 exchnage with Planship auth endpoint.
   * This client instance should be used only where the Planship client secret can be securly stored.
   *
   *
   * @param {string} productSlug - product slug
   * @param {string} url - Planship API server URL
   * @param {string} clientId - Planship API client ID
   * @param {string} clientSecret - Planship API client secret
   *
   * @returns An instance of the Planship class
   */
  constructor(productSlug: string, url: string, clientId: string, clientSecret: string)
  constructor(productSlug: string, url: string, clientIdOrGetAccessToken: string | TokenGetter, clientSecret: string = "") {
    super(productSlug, url, clientIdOrGetAccessToken, clientSecret)
    this.planshipCustomer = (customerId: string) => new PlanshipCustomer(
      productSlug,
      customerId,
      url,
      this._getAccessToken,
    )

    this.planshipSubscription = (customerId: string, subscriptionId: string) => new PlanshipSubscription(
      productSlug,
      customerId,
      subscriptionId,
      url,
      this._getAccessToken,
    )
  }


  public getProduct(): Promise<Product> {
    return this.planshipApiInstance(ProductsApi).getProduct(this.productSlug)
    .then((response: AxiosResponse) => Promise.resolve(ProductFromJSON(response.data)))
  }


  public listPlans(): Promise<[Plan]> {
    return this.planshipApiInstance(ProductsApi).listProductPlans(this.productSlug)
      .then((response: AxiosResponse) => Promise.resolve(response.data.map(PlanInListFromJSON)))
  }


  public getPlan(planSlug: string): Promise<PlanDetails> {
    return this.planshipApiInstance(ProductsApi).getProductPlan(this.productSlug, planSlug)
      .then((response: AxiosResponse) => Promise.resolve(PlanFromJSON(response.data)))
  }


  public createCustomer(name?: string, email?: string, metadata?: object): Promise<Customer> {
    const customerIn: OrganizationCustomerCreate = {
      name,
      email,
      metadata,
    }
    return this.planshipApiInstance(CustomersApi).createCustomer(customerIn)
      .then((response: AxiosResponse) => Promise.resolve(CustomerFromJSON(response.data)));
  }


  public createCustomerWithAlternativeId(alternativeId: string, name?: string, email?: string, metadata?: object): Promise<Customer> {
    const customerIn: OrganizationCustomerCreate = {
      alternativeId,
      name,
      email,
      metadata,
    }
    return this.planshipApiInstance(CustomersApi).createCustomer(customerIn)
      .then((response: AxiosResponse) => Promise.resolve(CustomerFromJSON(response.data)));
  }


  public deleteCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi).deleteCustomer(customerId)
      .then((response: AxiosResponse) => Promise.resolve(response.data.id))
  }


  public createSubscription(customerId: string, planSlug: string, isSubscriber: boolean = true, metadata?: object): Promise<SubscriptionWithPlan> {
    return this.planshipCustomer(customerId).createSubscription(
      planSlug,
      isSubscriber,
      metadata,
    )
  }


  public deleteSubscription(customerId: string, subscriptionId: string):Promise<SubscriptionInDbBase> {
    return this.planshipCustomer(customerId).deleteSubscription(
      subscriptionId,
    )
  }


  public getSubscription(customerId: string, subscriptionId: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).getSubscription(subscriptionId)
  }


  public changeSubscriptionPlan(customerId: string, subscriptionId: string, planSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(
      subscriptionId, {planSlug: planSlug}
    )
  }


  public changeSubscriptionRenewPlan(customerId: string, subscriptionId: string, renewPlanSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(
      subscriptionId, {renewPlanSlug: renewPlanSlug}
    )
  }

  public changeSubscriptionMaxSubscribers(customerId: string, subscriptionId: string, maxSubscribers: number): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(
      subscriptionId, {maxSubscribers: maxSubscribers}
    )
  }


  public modifySubscription(customerId: string, subscriptionId: string, params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(subscriptionId, params)
  }



  public listSubscriptions(customerId: string): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipCustomer(customerId).listSubscriptions()
  }


  public getEntitlements(customerId: string): Promise<JSONValue> {
    return this.planshipCustomer(customerId).getEntitlements()
  }


  public getResourceUsage(customerId: string, resourceSlug: string): Promise<ResourceUsage> {
    return this.planshipCustomer(customerId).getResourceUsage(resourceSlug)
  }


  public getMeteringIdResourcesUsage(customerId: string, meteringId: string): Promise<{ [key: string]: ResourceUsage}> {
    return this.planshipCustomer(customerId).getMeteringIdResourcesUsage(meteringId)
  }


  public reportUsage(customerId: string, meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord> {
    return this.planshipCustomer(customerId).reportUsage(meteringId, usage, bucket)
  }


  public listSubscriptionCustomers(customerId: string, subscriptionId: string): Promise<Array<SubscriptionCustomer>> {
    return this.planshipSubscription(customerId, subscriptionId).listCustomers();
  }


  public addSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToAdd: string,
    isAdministrator: boolean = false,
    isSubscriber: boolean = true,
    metadata?: object
    ): Promise<SubscriptionCustomer> {
    return this.planshipSubscription(customerId, subscriptionId).addCustomer(
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
    return this.planshipSubscription(customerId, subscriptionId).removeCustomer(
      customerIdToRemove,
    )
  }
}
