import { ProductsApi } from '../openapi-gen'

import {
  PlanshipProductApi,
  Product,
  ProductFromJSON,
  Plan as PlanDetails,
  PlanInList as Plan,
  PlanFromJSON,
  PlanInListFromJSON,
  Customer,
  SubscriptionCustomer,
  CustomerSubscriptionWithPlan,
  SubscriptionWithPlan,
  LeverUsage,
  Entitlements,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters,
  IPlanshipOptions,
  IClientCredentials,
  TokenGetter,
  LeverInListFromJSON,
  LeverInList as Lever
} from '@planship/models'

import { PlanshipBase } from './base'

import { AxiosResponse } from 'axios'

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
 * Planship Product API client class
 */
export class PlanshipProduct extends PlanshipBase implements PlanshipProductApi {
  constructor(productSlug: string, auth: IClientCredentials | TokenGetter, options?: IPlanshipOptions) {
    super(productSlug, auth, options)
  }

  public getProduct(): Promise<Product> {
    return this.planshipApiInstance(ProductsApi)
      .getProduct(this.productSlug)
      .then((response: AxiosResponse) => Promise.resolve(ProductFromJSON(response.data)))
  }

  public listPlans(): Promise<[Plan]> {
    return this.planshipApiInstance(ProductsApi)
      .listProductPlans(this.productSlug)
      .then((response: AxiosResponse) => Promise.resolve(response.data.map(PlanInListFromJSON)))
  }

  public listLevers(orderBy?: string): Promise<[Lever]> {
    return this.planshipApiInstance(ProductsApi)
      .listProductLevers(this.productSlug, orderBy)
      .then((response: AxiosResponse) => Promise.resolve(response.data.map(LeverInListFromJSON)))
  }

  public getPlan(planSlug: string, entitlementsOrderBy?: string): Promise<PlanDetails> {
    return this.planshipApiInstance(ProductsApi)
      .getProductPlan(this.productSlug, planSlug, entitlementsOrderBy)
      .then((response: AxiosResponse) => Promise.resolve(PlanFromJSON(response.data)))
  }
}
