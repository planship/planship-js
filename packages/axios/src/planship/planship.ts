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
  Entitlements,
  CreateSubscriptionOptions,
  EntitlementsCallback,
  ModifySubscriptionParameters,
  TokenResponse,
  IPlanshipOptions,
  IClientCredentials,
  TokenGetter
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
  Entitlements,
  SubscriptionWithPlan,
  LeverUsage,
  ModifySubscriptionParameters,
  CreateSubscriptionOptions,
  TokenResponse
}

/**
 * Planship API client class
 */
export class Planship extends PlanshipProduct implements PlanshipApi {
  private planshipCustomer: (customerId: string) => PlanshipCustomer
  private planshipSubscription: (customerId: string, subscriptionId: string) => PlanshipSubscription

  /**
   * Create a Planship API client instance for a given product slug. Authentication configuration
   * like client ID/secret or access token promise are passed via the options parameter.
   *
   *
   * @param {string} productSlug - product slug
   * @param {IPlanshipOptions} options - Planship client options
   *
   * @returns An instance of the PlanshipCustomer class
   */
  constructor(productSlug: string, auth: IClientCredentials | TokenGetter, options?: IPlanshipOptions) {
    super(productSlug, auth, options)

    this.planshipCustomer = (customerId: string) =>
      new PlanshipCustomer(productSlug, customerId, this._getAccessToken, options)

    this.planshipSubscription = (customerId: string, subscriptionId: string) =>
      new PlanshipSubscription(productSlug, customerId, subscriptionId, this._getAccessToken, options)
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

  public listSubscriptions(customerId: string, productSlug?: string): Promise<Array<CustomerSubscriptionWithPlan>> {
    return this.planshipCustomer(customerId).listSubscriptions(productSlug)
  }

  public getEntitlements(customerId: string, callback?: EntitlementsCallback): Promise<Entitlements> {
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
