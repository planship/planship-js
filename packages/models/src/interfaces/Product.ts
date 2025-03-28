import { PlanshipBaseApi } from './Base.js'

import { Product, Plan as PlanDetails, PlanInList as Plan, LeverInList as Lever } from '../openapi-gen/models/index.js'

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
   * @param {Array<string>} entitlementsOrderBy - optional entitlements order by column
   * @returns A promise that resolves with an instance of the PlanDetails class
   */
  getPlan(planSlug: string, entitlementsOrderBy?: Array<string>): Promise<PlanDetails>

  /**
   * Retrieve a list of plans for the current product
   * @group Product
   * @param {Array<string>} orderBy - optional order by column
   * @returns A promise that resolves with a list of ProductItem instances
   */
  listLevers(orderBy?: Array<string>): Promise<Array<Lever>>
}
