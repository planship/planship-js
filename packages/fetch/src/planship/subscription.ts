import { CustomerSubscriptionsApi, SubscriptionCustomersApi } from '../openapi-gen/index.js'

import {
  CustomerSubscriptionWithPlan,
  SubscriptionCustomer,
  SubscriptionCustomerInDbBase,
  ModifySubscriptionParameters,
  IPlanshipOptions,
  IClientCredentials,
  TokenGetter
} from '@planship/models'

import { PlanshipBase } from './base.js'

export class PlanshipSubscription extends PlanshipBase {
  readonly customerId: string
  readonly subscriptionId: string

  constructor(
    productSlug: string,
    customerId: string,
    subscriptionId: string,
    auth: IClientCredentials | TokenGetter,
    options?: IPlanshipOptions
  ) {
    super(productSlug, auth, options)

    this.customerId = customerId
    this.subscriptionId = subscriptionId
  }

  public changePlan(planSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({ planSlug: planSlug })
  }

  public changeRenewPlan(renewPlanSlug: string): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({ renewPlanSlug: renewPlanSlug })
  }

  public changeMaxSubscribers(maxSubscribers: number): Promise<CustomerSubscriptionWithPlan> {
    return this.modify({ maxSubscribers: maxSubscribers })
  }

  /**
   * Modify the current subscription
   * @param  {ModifySubscriptionParameters}          params Object containing new plan, renew plan and maximum subscribers values.
   * @returns A Promise that resolves with an instance of the SubscriptionWithPlan class.
   */
  public modify(params: ModifySubscriptionParameters): Promise<CustomerSubscriptionWithPlan> {
    const subscriptionUpdate = {
      planSlug: params.planSlug,
      renewPlanSlug: params.renewPlanSlug,
      maxSubscribers: params.maxSubscribers,
      autoRenew: params.autoRenew,
      renewAt: params.renewAt
    }
    return this.planshipApiInstance(CustomerSubscriptionsApi).modifyCustomerPlanSubscription({
      customerId: this.customerId,
      subscriptionId: this.subscriptionId,
      subscriptionUpdateWithSlugs: subscriptionUpdate
    })
  }

  public listCustomers(): Promise<Array<SubscriptionCustomer>> {
    return this.planshipApiInstance(SubscriptionCustomersApi).listSubscriptionCustomers({
      customerId: this.customerId,
      subscriptionId: this.subscriptionId
    })
  }

  public addCustomer(
    customerIdToAdd: string,
    isAdministrator: boolean = false,
    isSubscriber: boolean = true,
    metadata?: object
  ): Promise<SubscriptionCustomer> {
    return this.planshipApiInstance(SubscriptionCustomersApi).addCustomerToSubscription({
      customerId: this.customerId,
      subscriptionId: this.subscriptionId,
      subscriptionCustomerAdd: {
        customerId: customerIdToAdd,
        isAdministrator: isAdministrator,
        isSubscriber: isSubscriber,
        metadata: metadata
      }
    })
  }

  public removeCustomer(customerIdToRemove: string): Promise<SubscriptionCustomerInDbBase> {
    return this.planshipApiInstance(SubscriptionCustomersApi).removeCustomerFromSubscription({
      customerId: this.customerId,
      subscriptionId: this.subscriptionId,
      id: customerIdToRemove
    })
  }
}
