import {
  PlanshipApi,
  Product,
  Plan as PlanDetails,
  PlanInList as Plan,
  Customer,
  SubscriptionCustomer,
  SubscriptionCustomerInDbBase,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  LeverUsage,
  JSONValue,
  TokenGetter,
  CreateSubscriptionOptions,
  EntitlementsCallback,
  ModifySubscriptionParameters
} from '@planship/models'

import { PlanshipCustomer, MeteringRecord } from './customer'
import { PlanshipSubscription } from './subscription'
import { PlanshipProduct } from './product'

export {
  PlanshipApi,
  Product,
  Plan,
  PlanDetails,
  SubscriptionCustomer,
  Customer,
  CustomerSubscriptionWithPlan,
  JSONValue,
  SubscriptionWithPlan,
  LeverUsage,
  ModifySubscriptionParameters,
  CreateSubscriptionOptions
}

/**
 * Planship API client class
 */
export class Planship extends PlanshipProduct implements PlanshipApi {
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

  constructor(
    productSlug: string,
    url: string,
    clientIdOrGetAccessToken: string | TokenGetter,
    secretOrWebSocketUrl?: string,
    webSocketUrl?: string
  ) {
    let clientSecret: string | undefined = undefined

    if (typeof secretOrWebSocketUrl === 'string' && typeof clientIdOrGetAccessToken === 'string') {
      clientSecret = secretOrWebSocketUrl
    } else {
      webSocketUrl = secretOrWebSocketUrl
    }
    super(productSlug, url, clientIdOrGetAccessToken, clientSecret)

    this.planshipCustomer = (customerId: string) =>
      new PlanshipCustomer(productSlug, customerId, url, this._getAccessToken, webSocketUrl)

    this.planshipSubscription = (customerId: string, subscriptionId: string) =>
      new PlanshipSubscription(productSlug, customerId, subscriptionId, url, this._getAccessToken)
  }

  public createSubscription(
    customerId: string,
    planSlug: string,
    options?: CreateSubscriptionOptions
  ): Promise<SubscriptionWithPlan> {
    return this.planshipCustomer(customerId).createSubscription(planSlug, options)
  }

  public getSubscription(customerId: string, subscriptionId: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).getSubscription(subscriptionId)
  }

  public changeSubscriptionPlan(
    customerId: string,
    subscriptionId: string,
    planSlug: string
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(subscriptionId, { planSlug: planSlug })
  }

  public changeSubscriptionRenewPlan(
    customerId: string,
    subscriptionId: string,
    renewPlanSlug: string
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(subscriptionId, { renewPlanSlug: renewPlanSlug })
  }

  public changeSubscriptionMaxSubscribers(
    customerId: string,
    subscriptionId: string,
    maxSubscribers: number
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(subscriptionId, { maxSubscribers: maxSubscribers })
  }

  public setSubscriptionAutoRenew(
    customerId: string,
    subscriptionId: string,
    autoRenew: boolean
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(subscriptionId, { autoRenew: autoRenew })
  }

  public setSubscriptionIsActive(
    customerId: string,
    subscriptionId: string,
    isActive: boolean
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(subscriptionId, { isActive: isActive })
  }

  public modifySubscription(
    customerId: string,
    subscriptionId: string,
    params: ModifySubscriptionParameters
  ): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipCustomer(customerId).modifySubscription(subscriptionId, params)
  }

  public listSubscriptions(customerId: string): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipCustomer(customerId).listSubscriptions()
  }

  public getEntitlements(customerId: string, callback?: EntitlementsCallback): Promise<JSONValue> {
    return this.planshipCustomer(customerId).getEntitlements(callback)
  }

  public getLeverUsage(customerId: string, leverSlug: string): Promise<LeverUsage> {
    return this.planshipCustomer(customerId).getLeverUsage(leverSlug)
  }

  public getMeteringIdUsage(customerId: string, meteringId: string): Promise<{ [key: string]: LeverUsage }> {
    return this.planshipCustomer(customerId).getMeteringIdUsage(meteringId)
  }

  public reportUsage(customerId: string, meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord> {
    return this.planshipCustomer(customerId).reportUsage(meteringId, usage, bucket)
  }

  public listSubscriptionCustomers(customerId: string, subscriptionId: string): Promise<Array<SubscriptionCustomer>> {
    return this.planshipSubscription(customerId, subscriptionId).listCustomers()
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
      metadata
    )
  }

  public removeSubscriptionCustomer(
    customerId: string,
    subscriptionId: string,
    customerIdToRemove: string
  ): Promise<SubscriptionCustomerInDbBase> {
    return this.planshipSubscription(customerId, subscriptionId).removeCustomer(customerIdToRemove)
  }
}
