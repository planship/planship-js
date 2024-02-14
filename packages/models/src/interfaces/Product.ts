import { PlanshipBaseApi } from './Base'

import { Product, Plan as PlanDetails, PlanInList as Plan } from '../openapi-gen/models'

/**
 * PlanshipProduct API client interface
 */
export interface PlanshipProductApi extends PlanshipBaseApi {
  /**
   * Retrieve information about the current product
   * @group Product
   *
   * @returns A promise that resolves with an instance of the Product class
   */
  getProduct(): Promise<Product>

  /**
   * Retrieve a list of plans for the current product
   * @group Product
   *
   * @returns A promise that resolves with a list of ProductItem instances
   */
  listPlans(): Promise<Array<Plan>>

  /**
   * Retrieve detailed information about the plan with a given slug
   * @group Product
   *
   * @param {string} planSlug - plan slug
   * @returns A promise that resolves with an instance of the PlanDetails class
   */
  getPlan(planSlug: string): Promise<PlanDetails>
}
