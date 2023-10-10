/* tslint:disable */
/* eslint-disable */
/**
 * Planship API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { PlanEntitlement } from './plan-entitlement';

/**
 * 
 * @export
 * @interface Plan
 */
export interface Plan {
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    'slug': string;
    /**
     * Plan name
     * @type {string}
     * @memberof Plan
     */
    'name': string;
    /**
     * Plan description
     * @type {string}
     * @memberof Plan
     */
    'description': string;
    /**
     * Plan display order
     * @type {number}
     * @memberof Plan
     */
    'order'?: number;
    /**
     * 
     * @type {Array<PlanEntitlement>}
     * @memberof Plan
     */
    'entitlements': Array<PlanEntitlement>;
}
