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
import { CustomerId } from './customer-id';

/**
 * 
 * @export
 * @interface PlanSubscriptionCreate
 */
export interface PlanSubscriptionCreate {
    /**
     * 
     * @type {object}
     * @memberof PlanSubscriptionCreate
     */
    'metadata'?: object;
    /**
     * 
     * @type {CustomerId}
     * @memberof PlanSubscriptionCreate
     */
    'customer_id': CustomerId;
    /**
     * 
     * @type {boolean}
     * @memberof PlanSubscriptionCreate
     */
    'is_subscriber'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PlanSubscriptionCreate
     */
    'max_subscribers'?: number;
}
