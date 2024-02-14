import { ProductsApi, CustomersApi, FetchAPI } from '../openapi-gen'

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
  JSONValue,
  TokenGetter,
  CreateCustomerParameters,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters
} from '@planship/models'

import { PlanshipBase } from './base'

export {
  PlanshipProductApi,
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
 * Planship Product API class
 */

export class PlanshipProduct extends PlanshipBase implements PlanshipProductApi {
  constructor(
    productSlug: string,
    url: string,
    clientIdOrGetAccessToken: string | TokenGetter,
    secretOrFetchApi?: string | FetchAPI,
    fetchApi?: FetchAPI
  ) {
    super(productSlug, url, clientIdOrGetAccessToken, secretOrFetchApi, fetchApi)
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
