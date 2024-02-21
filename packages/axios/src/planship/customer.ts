import { EntitlementsApi, ProductsApi, MeteredUsageApi, CustomerSubscriptionsApi } from '../openapi-gen'

import {
  SubscriptionCustomer,
  CustomerSubscriptionWithPlan,
  CustomerSubscriptionWithPlanFromJSON,
  SubscriptionWithPlan,
  SubscriptionWithPlanFromJSON,
  SubscriptionCustomerInDbBase,
  MeteringRecord,
  MeteringRecordFromJSON,
  MeteredUsageIn,
  LeverUsage,
  LeverUsageFromJSON,
  Entitlements,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters,
  IPlanshipOptions,
  IClientCredentials,
  TokenGetter
} from '@planship/models'

import { PlanshipSubscription } from './subscription'

import { AxiosResponse } from 'axios'
import { PlanshipProduct } from './product'
import { PlanshipCustomerApi } from '@planship/models'
import { EntitlementsCallback } from '@planship/models'

export { PlanshipCustomerApi, CustomerSubscriptionWithPlan, MeteringRecord, LeverUsage }

/**
 * Planship Customer API client class
 */
export class PlanshipCustomer extends PlanshipProduct implements PlanshipCustomerApi {
  private entitlementsWebSocket?: WebSocket
  private webSocketUrl?: string
  private planshipSubscription: (subscriptionId: string) => PlanshipSubscription

  private readonly customerId: string

  /**
   * Create a PlanshipCustomer API client instance for a given product slug and a customer ID.
   * Authentication configuration like client ID/secret or access token promise are passed via
   * the options parameter.
   *
   *
   * @param {string} productSlug - product slug
   * @param {string} customerId - customer ID
   * @param {IPlanshipOptions} options - Planship client options
   *
   * @returns An instance of the PlanshipCustomer class
   */
  constructor(
    productSlug: string,
    customerId: string,
    auth: IClientCredentials | TokenGetter,
    options?: IPlanshipOptions
  ) {
    super(productSlug, auth, options)
    this.customerId = customerId
    this.webSocketUrl = options?.webSocketUrl || 'wss://websockets-api.planship.io'
    this.planshipSubscription = (subscriptionId: string) =>
      new PlanshipSubscription(productSlug, customerId, subscriptionId, this._getAccessToken, options)
  }

  public createSubscription(planSlug: string, options?: CreateSubscriptionOptions): Promise<SubscriptionWithPlan> {
    const subscriptionCustomerIn = {
      customer_id: this.customerId,
      ...options
    }
    return this.planshipApiInstance(ProductsApi)
      .createPlanSubscription(this.productSlug, planSlug, subscriptionCustomerIn)
      .then((response: AxiosResponse) => Promise.resolve(SubscriptionWithPlanFromJSON(response.data)))
  }

  public listSubscriptions(): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipApiInstance(CustomerSubscriptionsApi)
      .listCustomerPlanSubscriptions(this.customerId)
      .then((response: AxiosResponse) => Promise.resolve(response.data.map(CustomerSubscriptionWithPlanFromJSON)))
  }

  public getSubscription(subscriptionId: string): Promise<CustomerSubscriptionWithPlan> {
    return this.planshipApiInstance(CustomerSubscriptionsApi)
      .getCustomerPlanSubscription(this.customerId, subscriptionId)
      .then((response: AxiosResponse) => Promise.resolve(CustomerSubscriptionWithPlanFromJSON(response.data)))
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

  public getEntitlements(callback?: EntitlementsCallback): Promise<Entitlements> {
    const entitlements = this.planshipApiInstance(EntitlementsApi)
      .getProductEntitlementsForCustomer(this.productSlug, this.customerId)
      .then((response: AxiosResponse) => Promise.resolve(response.data))

    if (callback !== undefined && typeof window !== 'undefined' && 'WebSocket' in window) {
      const endpoint = `${this.webSocketUrl}/api/v1/ws/customers/${this.customerId}/products/${this.productSlug}/entitlements`
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
    return this.planshipApiInstance(MeteredUsageApi)
      .getLeverUsageForCustomer(this.customerId, this.productSlug, leverSlug)
      .then((response: AxiosResponse) => Promise.resolve(LeverUsageFromJSON(response.data)))
  }

  public getMeteringIdUsage(meteringId: string): Promise<{ [key: string]: LeverUsage }> {
    return this.planshipApiInstance(MeteredUsageApi)
      .getMeteringIdLeversUsageForCustomer(this.customerId, this.productSlug, meteringId)
      .then((response: AxiosResponse) =>
        Promise.resolve(
          Object.keys(response.data).reduce(function (result: { [key: string]: LeverUsage }, key: string) {
            result[key] = LeverUsageFromJSON(response.data[key])
            return result
          }, {})
        )
      )
  }

  public reportUsage(meteringId: string, usage: number, bucket?: string): Promise<MeteringRecord> {
    const meteredUsageIn: MeteredUsageIn = { usage: usage }
    if (bucket !== undefined) {
      meteredUsageIn['bucket'] = bucket
    }

    return this.planshipApiInstance(MeteredUsageApi)
      .reportMeteredUsageForCustomer(this.customerId, this.productSlug, meteringId, meteredUsageIn)
      .then((response: AxiosResponse) => Promise.resolve(MeteringRecordFromJSON(response.data)))
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
