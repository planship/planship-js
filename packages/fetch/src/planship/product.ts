import { ProductsApi, CustomersApi } from '../openapi-gen'

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
  PlanshipProductApi,
  Entitlements,
  CreateCustomerParameters,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters,
  IPlanshipOptions
} from '@planship/models'

import { PlanshipBase } from './base'
import { IClientCredentials } from '@planship/models'
import { TokenGetter } from '@planship/models'

export {
  PlanshipProductApi,
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
  CreateSubscriptionOptions
}

/**
 * Planship Product API class
 */

export class PlanshipProduct extends PlanshipBase implements PlanshipProductApi {
  constructor(productSlug: string, auth: IClientCredentials | TokenGetter, options?: IPlanshipOptions) {
    super(productSlug, auth, options)
  }

  public getProduct(): Promise<Product> {
    return this.planshipApiInstance(ProductsApi).getProduct({
      slug: this.productSlug
    })
  }

  public listPlans(): Promise<Array<Plan>> {
    return this.planshipApiInstance(ProductsApi).listProductPlans({
      slug: this.productSlug
    })
  }

  public getPlan(planSlug: string): Promise<PlanDetails> {
    return this.planshipApiInstance(ProductsApi).getProductPlan({
      productSlug: this.productSlug,
      slug: planSlug
    })
  }

  public createCustomer(params?: CreateCustomerParameters): Promise<Customer> {
    const customerIn: OrganizationCustomerCreate = {
      ...params
    }
    return this.planshipApiInstance(CustomersApi).createCustomer({
      organizationCustomerCreate: customerIn
    })
  }

  public getCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi).getCustomer({
      customerId: customerId
    })
  }

  public deleteCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi).deleteCustomer({
      customerId: customerId
    })
  }
}
