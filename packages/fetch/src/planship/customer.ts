import { EntitlementsApi, ProductsApi, MeteredUsageApi, CustomerSubscriptionsApi } from '../openapi-gen/index.js'

import {
  SubscriptionCustomer,
  PlanshipCustomerApi,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  MeteringRecord,
  MeteredUsageIn,
  LeverUsage,
  SubscriptionCustomerInDbBase,
  Entitlements,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters,
  EntitlementsCallback
} from '@planship/models'

import { PlanshipSubscription } from './subscription.js'
import { PlanshipProduct } from './product.js'
import { IPlanshipOptions } from '@planship/models'
import { TokenGetter } from '@planship/models'
import { IClientCredentials } from '@planship/models'

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
   * Create a PlanshipCustomer API client instance for a given product slug and a customer ID. Authentication
   * configuration like client ID/secret or an access token promise are passed via the options parameter.
   *
   *
   * @param {string} productSlug - product slug
   * @param {string} customerId - customer ID
   * @param {IClientCredentials | TokenGetter} auth - Auth credentials or access token getter
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

    this.webSocketUrl = options?.webSocketUrl || 'wss://websockets-api.planship.io'
    this.customerId = customerId

    this.planshipSubscription = (subscriptionId: string) =>
      new PlanshipSubscription(productSlug, customerId, subscriptionId, this._getAccessToken, options)
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

  public listSubscriptions(productSlug?: string): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipApiInstance(CustomerSubscriptionsApi).listCustomerPlanSubscriptions({
      customerId: this.customerId,
      productSlug: productSlug
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

  public getEntitlements(callback?: EntitlementsCallback): Promise<Entitlements> {
    const entitlements = this.planshipApiInstance(EntitlementsApi)
      .getProductEntitlementsForCustomer({
        productSlug: this.productSlug,
        customerId: this.customerId
      })
      .then((entitlements) => <Entitlements>entitlements)

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
