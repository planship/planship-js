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
  JSONValue,
  TokenGetter,
  CreateSubscriptionOptions,
  ModifySubscriptionParameters
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
  JSONValue,
  SubscriptionWithPlan,
  LeverUsage,
  ModifySubscriptionParameters,
  CreateSubscriptionOptions
}

/**
 * Planship Product API client class
 */
export class PlanshipProduct extends PlanshipBase implements PlanshipProductApi {
  constructor(productSlug: string, url: string, clientIdOrGetAccessToken: string | TokenGetter, clientSecret?: string) {
    super(productSlug, url, clientIdOrGetAccessToken, clientSecret)
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

  public getPlan(planSlug: string): Promise<PlanDetails> {
    return this.planshipApiInstance(ProductsApi)
      .getProductPlan(this.productSlug, planSlug)
      .then((response: AxiosResponse) => Promise.resolve(PlanFromJSON(response.data)))
  }
}
