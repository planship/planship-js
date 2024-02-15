import { EntitlementsApi, ProductsApi, MeteredUsageApi, FetchAPI, CustomerSubscriptionsApi } from '../openapi-gen'

import {
  SubscriptionCustomer,
  PlanshipCustomerApi,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  MeteringRecord,
  MeteredUsageIn,
  LeverUsage,
  SubscriptionCustomerInDbBase,
  JSONValue,
  TokenGetter,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters,
  EntitlementsCallback
} from '@planship/models'

import { PlanshipSubscription } from './subscription'
import { PlanshipProduct } from './product'

export { PlanshipCustomerApi, CustomerSubscriptionWithPlan, MeteringRecord, LeverUsage }

/**
 * Planship Customer API class
 */

export class PlanshipCustomer extends PlanshipProduct implements PlanshipCustomerApi {
  protected readonly customerId: string

  private entitlementsWebSocket?: WebSocket
  private webSocketUrl?: string

  private planshipSubscription: (subscriptionId: string) => PlanshipSubscription

  /**
   * Create a Planship Customer API client that uses an authentication token from an external authentication flow.
   * This client instance is client-side (browser) safe.
   *
   * @param {string} productSlug - product slug
   * @param {string} customerId - Customer ID
   * @param {string} url - Planship API server URL
   * @param {TokenGetter} getAccessToken - function that returns a Promise that resolves
   * with a Planship access token for a given clientId
   * @param {string} webSocketUrl - (optional) override the websocket URL
   * @returns An instance of the PlanshipCustomer class
   */
  constructor(productSlug: string, customerId: string, url: string, getAccessToken: TokenGetter, webSocketUrl?: string)

  /**
   * Create a Planship Customer API client that uses an authentication token from an external authentication flow.
   * This client instance is client-side (browser) safe.
   *
   * @param {string} productSlug - product slug
   * @param {string} customerId - Customer ID
   * @param {string} url - Planship API server URL
   * @param {TokenGetter} getAccessToken - function that returns a Promise that resolves
   * with a Planship access token for a given clientId
   * @param {FetchAPI} fetchApi - (optional) override the default fetch implementation
   * @param {string} webSocketUrl - (optional) override the websocket URL
   * @returns An instance of the PlanshipCustomer class
   */
  constructor(
    productSlug: string,
    customerId: string,
    url: string,
    getAccessToken: TokenGetter,
    fetchApi?: FetchAPI,
    webSocketUrl?: string
  )

  /**
   * Create a Planship Customer API client that uses client id and secret to obtain an access token
   * via the client credentials OAuth2 exchange with the Planship auth endpoint.
   * This client instance should be used only where the Planship client secret can be securely stored.
   *
   *
   * @param {string} productSlug - product slug
   * @param {string} customerId - Customer ID
   * @param {string} url - Planship API server URL
   * @param {string} clientId - Planship API client ID
   * @param {string} clientSecret - Planship API client secret
   * @param {string} webSocketUrl - (optional) override the websocket URL
   *
   * @returns An instance of the PlanshipCustomer class
   */
  constructor(
    productSlug: string,
    customerId: string,
    url: string,
    clientId: string,
    clientSecret: string,
    webSocketUrl?: string
  )

  /**
   * Create a Planship Customer API client that uses client id and secret to obtain an access token
   * via the client credentials OAuth2 exchange with the Planship auth endpoint.
   * This client instance should be used only where the Planship client secret can be securely stored.
   *
   *
   * @param {string} productSlug - product slug
   * @param {string} customerId - Customer ID
   * @param {string} url - Planship API server URL
   * @param {string} clientId - Planship API client ID
   * @param {string} clientSecret - Planship API client secret
   * @param {FetchAPI} fetchApi - (optional) override the default fetch implementation
   * @param {string} webSocketUrl - (optional) override the websocket URL
   *
   * @returns An instance of the PlanshipCustomer class
   */
  constructor(
    productSlug: string,
    customerId: string,
    url: string,
    clientId: string,
    clientSecret: string,
    fetchApi?: FetchAPI,
    webSocketUrl?: string
  )

  constructor(
    productSlug: string,
    customerId: string,
    url: string,
    clientIdOrGetAccessToken: string | TokenGetter,
    secretOrFetchApiOrWebSocketUrl?: string | FetchAPI,
    fetchApiOrWebSocketUrl?: FetchAPI | string,
    webSocketUrl?: string
  ) {
    let fetchApi: FetchAPI | undefined = undefined
    let secretOrFetchApi: FetchAPI | string | undefined

    if (typeof clientIdOrGetAccessToken === 'string') {
      secretOrFetchApi = secretOrFetchApiOrWebSocketUrl
      if (typeof fetchApiOrWebSocketUrl !== 'string') {
        fetchApi = fetchApiOrWebSocketUrl
      }
    } else {
      if (typeof secretOrFetchApiOrWebSocketUrl === 'string') {
        webSocketUrl = secretOrFetchApiOrWebSocketUrl
      } else {
        secretOrFetchApi = secretOrFetchApiOrWebSocketUrl
      }
    }

    if (typeof fetchApiOrWebSocketUrl === 'string') {
      webSocketUrl = fetchApiOrWebSocketUrl
    } else {
      fetchApi = fetchApiOrWebSocketUrl
    }

    super(productSlug, url, clientIdOrGetAccessToken, secretOrFetchApi, fetchApi)

    this.webSocketUrl = webSocketUrl
    this.customerId = customerId

    this.planshipSubscription = (subscriptionId: string) =>
      new PlanshipSubscription(productSlug, customerId, subscriptionId, url, this._getAccessToken, fetchApi)
  }

  public createSubscription(planSlug: string, options?: CreateSubscriptionOptions): Promise<SubscriptionWithPlan> {
    const subscriptionCustomerIn = {
      customerId: this.customerId,
      ...options
    }
    return this.planshipApiInstance(ProductsApi).createPlanSubscription({
      productSlug: this.productSlug,
      slug: planSlug,
      planSubscriptionCreate: subscriptionCustomerIn
    })
  }

  public listSubscriptions(): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipApiInstance(CustomerSubscriptionsApi).listCustomerPlanSubscriptions({
      customerId: this.customerId
    })
  }

  public getSubscription(subscriptionId: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipApiInstance(CustomerSubscriptionsApi).getCustomerPlanSubscription({
      customerId: this.customerId,
      subscriptionId: subscriptionId
    })
  }

  public changeSubscriptionPlan(subscriptionId: string, planSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId).changePlan(planSlug)
  }

  public changeSubscriptionRenewPlan(
    subscriptionId: string,
    renewPlanSlug: string
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId).changeRenewPlan(renewPlanSlug)
  }

  public changeSubscriptionMaxSubscribers(
    subscriptionId: string,
    maxSubscribers: number
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId).changeMaxSubscribers(maxSubscribers)
  }

  public setSubscriptionAutoRenew(subscriptionId: string, autoRenew: boolean): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId).modify({
      autoRenew: autoRenew
    })
  }

  public setSubscriptionIsActive(subscriptionId: string, isActive: boolean): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId).modify({
      isActive: isActive
    })
  }

  public modifySubscription(
    subscriptionId: string,
    params: ModifySubscriptionParameters
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipSubscription(subscriptionId).modify(params)
  }

  public getEntitlements(callback?: EntitlementsCallback): Promise<JSONValue> {
    const entitlements = this.planshipApiInstance(EntitlementsApi)
      .getProductEntitlementsForCustomer({
        productSlug: this.productSlug,
        customerId: this.customerId
      })
      .then((entitlements) => <JSONValue>entitlements)

    if (callback !== undefined && typeof window !== 'undefined' && 'WebSocket' in window) {
      const url = this.webSocketUrl || `wss://websockets-${new URL(this.url).host}`
      const endpoint = `${url}/api/v1/ws/customers/${this.customerId}/products/${this.productSlug}/entitlements`
      if (this.entitlementsWebSocket && !this.entitlementsWebSocket.url.includes(endpoint)) {
        this.entitlementsWebSocket.close()
        this.entitlementsWebSocket = undefined
      }
      if (this.entitlementsWebSocket === undefined) {
        this._getAccessToken(true).then((token: string) => {
          this.entitlementsWebSocket = new WebSocket(`${endpoint}?token=${token}`)
          this.entitlementsWebSocket.onmessage = function (event) {
            callback(JSON.parse(event.data))
          }
        })
      }
    }
    return entitlements
  }

  public getLeverUsage(leverSlug: string): Promise<LeverUsage> {
    return this.planshipApiInstance(MeteredUsageApi).getLeverUsageForCustomer({
      customerId: this.customerId,
      productSlug: this.productSlug,
      leverSlug
    })
  }

  public getMeteringIdUsage(meteringId: string): Promise<{ [key: string]: LeverUsage }> {
    return this.planshipApiInstance(MeteredUsageApi).getMeteringIdLeversUsageForCustomer({
      customerId: this.customerId,
      productSlug: this.productSlug,
      meteringId
    })
  }

  public reportUsage(meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord> {
    const meteredUsageIn: MeteredUsageIn = { usage: usage }
    if (bucket !== undefined) {
      meteredUsageIn['bucket'] = bucket
    }

    return this.planshipApiInstance(MeteredUsageApi).reportMeteredUsageForCustomer({
      customerId: this.customerId,
      productSlug: this.productSlug,
      meteredUsageIn,
      meteringId
    })
  }

  public listSubscriptionCustomers(subscriptionId: string): Promise<Array<SubscriptionCustomer>> {
    return this.planshipSubscription(subscriptionId).listCustomers()
  }

  public addSubscriptionCustomer(
    subscriptionId: string,
    customerIdToAdd: string,
    isAdministrator: boolean = false,
    isSubscriber: boolean = true,
    metadata?: object
  ): Promise<SubscriptionCustomer> {
    return this.planshipSubscription(subscriptionId).addCustomer(
      customerIdToAdd,
      isAdministrator,
      isSubscriber,
      metadata
    )
  }

  public removeSubscriptionCustomer(
    subscriptionId: string,
    customerIdToRemove: string
  ): Promise<SubscriptionCustomerInDbBase> {
    return this.planshipSubscription(subscriptionId).removeCustomer(customerIdToRemove)
  }
}
