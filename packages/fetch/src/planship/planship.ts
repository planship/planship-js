
import {
  ProductsApi,
  CustomersApi,
  FetchAPI,
} from '../openapi-gen'

import {
  Product,
  Plan as PlanDetails,
  PlanInList as Plan,
  Customer,
  OrganizationCustomerCreate,
  SubscriptionCustomer,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  LeverUsage,
  CustomerInDbBase,
  SubscriptionCustomerInDbBase,
  PlanshipApi,
  JSONValue,
  TokenGetter,
  CreateCustomerParameters,
  CreateSubscriptionOptions,
  EntitlementsCallback,
  ModifySubscriptionParameters
} from '@planship/models'

import { PlanshipBase } from './base'

import { PlanshipCustomer, MeteringRecord } from './customer'
import { PlanshipSubscription } from './subscription'

export  { PlanshipApi, Product, Plan, PlanDetails, SubscriptionCustomer, Customer, CustomerSubscriptionWithPlan, JSONValue, SubscriptionWithPlan, LeverUsage, ModifySubscriptionParameters, CreateSubscriptionOptions }

/**
 * Planship API client
*/

export class Planship extends PlanshipBase implements PlanshipApi {

  private entitlementsWebSocket?: WebSocket
  private webSocketUrl?: string

  private planshipCustomer: (customerId: string) => PlanshipCustomer
  private planshipSubscription: (customerId: string, subscriptionId: string) => PlanshipSubscription

  /**
   * Create a Planship API client that uses an authentication token from an external authentication flow.
   * This client instance is client-side (browser) safe.
   *
   * @param {string} productSlug - product slug
   * @param {string} url - Planship API server URL
   * @param {TokenGetter} getAccessToken - function that returns a Promise that resolves
   * with a Planship access token for a given clientId
   * @param {string} webSocketUrl - (optional) override the websocket URL
   * @returns An instance of the Planship class
   */
  constructor(productSlug: string, url: string, getAccessToken: TokenGetter, webSocketUrl?: string)

  /**
   * Create a Planship API client that uses an authentication token from an external authentication flow.
   * This client instance is client-side (browser) safe.
   *
   * @param {string} productSlug - product slug
   * @param {string} url - Planship API server URL
   * @param {TokenGetter} getAccessToken - function that returns a Promise that resolves
   * with a Planship access token for a given clientId
   * @param {FetchAPI} fetchApi - (optional) override the default fetch implementation
   * @param {string} webSocketUrl - (optional) override the websocket URL
   * @returns An instance of the Planship class
   */
  constructor(productSlug: string, url: string, getAccessToken: TokenGetter, fetchApi?: FetchAPI, webSocketUrl?: string)

  /**
   * Create a Planship API client that uses client id and secret to obtain an access token
   * via the client credentials OAuth2 exchange with the Planship auth endpoint.
   * This client instance should be used only where the Planship client secret can be securely stored.
   *
   *
   * @param {string} productSlug - product slug
   * @param {string} url - Planship API server URL
   * @param {string} clientId - Planship API client ID
   * @param {string} clientSecret - Planship API client secret
   * @param {string} webSocketUrl - (optional) override the websocket URL
   *
   * @returns An instance of the Planship class
   */
  constructor(productSlug: string, url: string, clientId: string, clientSecret: string, webSocketUrl?: string)

  /**
   * Create a Planship API client that uses client id and secret to obtain an access token
   * via the client credentials OAuth2 exchange with the Planship auth endpoint.
   * This client instance should be used only where the Planship client secret can be securely stored.
   *
   *
   * @param {string} productSlug - product slug
   * @param {string} url - Planship API server URL
   * @param {string} clientId - Planship API client ID
   * @param {string} clientSecret - Planship API client secret
   * @param {FetchAPI} fetchApi - (optional) override the default fetch implementation
   * @param {string} webSocketUrl - (optional) override the websocket URL
   *
   * @returns An instance of the Planship class
   */
  constructor(productSlug: string, url: string, clientId: string, clientSecret: string, fetchApi?: FetchAPI, webSocketUrl?: string)

  constructor(productSlug: string, url: string, clientIdOrGetAccessToken: string | TokenGetter, secretOrFetchApiOrWebSocketUrl?: string | FetchAPI, fetchApiOrWebSocketUrl?: FetchAPI | string, webSocketUrl?: string) {

    let fetchApi: FetchAPI | undefined = undefined
    let secretOrFetchApi : FetchAPI | string | undefined

    if (typeof clientIdOrGetAccessToken === "string") {
      secretOrFetchApi = secretOrFetchApiOrWebSocketUrl
      if (typeof fetchApiOrWebSocketUrl !== "string") {
        fetchApi = fetchApiOrWebSocketUrl
      }
    } else {
      if (typeof secretOrFetchApiOrWebSocketUrl === "string") {
        webSocketUrl = secretOrFetchApiOrWebSocketUrl
      }
    }

    if (typeof fetchApiOrWebSocketUrl === 'string') {
      webSocketUrl = fetchApiOrWebSocketUrl
    } else {
      fetchApi = fetchApiOrWebSocketUrl
    }

    super(productSlug, url, clientIdOrGetAccessToken, secretOrFetchApi, fetchApi)

    this.webSocketUrl = webSocketUrl

    this.planshipCustomer = (customerId: string) => new PlanshipCustomer(
      productSlug,
      customerId,
      url,
      this._getAccessToken,
      fetchApi,
    )

    this.planshipSubscription = (customerId: string, subscriptionId: string) => new PlanshipSubscription(
      productSlug,
      customerId,
      subscriptionId,
      url,
      this._getAccessToken,
      fetchApi,
    )
  }


  public getProduct(): Promise<Product> {
    return this.planshipApiInstance(ProductsApi).getProduct({slug: this.productSlug})
  }


  public listPlans(): Promise<Array<Plan>> {
    return this.planshipApiInstance(ProductsApi).listProductPlans({slug: this.productSlug})
  }


  public getPlan(planSlug: string): Promise<PlanDetails> {
    return this.planshipApiInstance(ProductsApi).getProductPlan({productSlug: this.productSlug, slug: planSlug})
  }


  public createCustomer(params?: CreateCustomerParameters): Promise<Customer> {
    const customerIn: OrganizationCustomerCreate = {
      ...params
    }
    return this.planshipApiInstance(CustomersApi).createCustomer({organizationCustomerCreate: customerIn})
  }


  public getCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi).getCustomer({customerId: customerId})
  }


  public deleteCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi).deleteCustomer({customerId: customerId})
  }


  public createSubscription(customerId: string, planSlug: string, options?: CreateSubscriptionOptions): Promise<SubscriptionWithPlan> {
    return this.planshipCustomer(customerId).createSubscription(
      planSlug,
      options,
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


  public setSubscriptionAutoRenew(customerId: string, subscriptionId: string, autoRenew: boolean): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(
      subscriptionId, {autoRenew: autoRenew}
    )
  }

  public setSubscriptionIsActive(customerId: string, subscriptionId: string, isActive: boolean): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(
      subscriptionId, {isActive: isActive}
    )
  }


  public modifySubscription(customerId: string, subscriptionId: string, params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(subscriptionId, params)
  }


  public listSubscriptions(customerId: string): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipCustomer(customerId).listSubscriptions()
  }


  public getEntitlements(customerId: string, callback?: EntitlementsCallback): Promise<JSONValue> {
    const entitlements = this.planshipCustomer(customerId).getEntitlements()
    if (callback !=  undefined && typeof window !== "undefined" && 'WebSocket' in window) {
      const url = this.webSocketUrl || `wss://websockets-${new URL(this.url).host}`
      const endpoint = `${url}/api/v1/ws/customers/${customerId}/products/${this.productSlug}/entitlements`
      if (this.entitlementsWebSocket && ! this.entitlementsWebSocket.url.includes(endpoint)) {
        this.entitlementsWebSocket.close()
        this.entitlementsWebSocket = undefined
      }
      if (this.entitlementsWebSocket === undefined) {
        this._getAccessToken(true).then((token: string) => {
          this.entitlementsWebSocket = new WebSocket(`${endpoint}?token=${token}`);
          this.entitlementsWebSocket.onmessage = function(event) {
            callback(JSON.parse(event.data))
          };
        })
      }
    }
    return entitlements
  }


  public getLeverUsage(customerId: string, leverSlug: string): Promise<LeverUsage> {
    return this.planshipCustomer(customerId).getLeverUsage(leverSlug)
  }


  public getMeteringIdUsage(customerId: string, meteringId: string): Promise<{ [key: string]: LeverUsage}> {
    return this.planshipCustomer(customerId).getMeteringIdUsage(meteringId)
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
