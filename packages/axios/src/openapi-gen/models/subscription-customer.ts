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
import { PlanInDbBase } from './plan-in-db-base';

/**
 * 
 * @export
 * @interface SubscriptionCustomer
 */
export interface SubscriptionCustomer {
    /**
     * 
     * @type {object}
     * @memberof SubscriptionCustomer
     */
    'metadata_'?: object;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomer
     */
    'is_administrator'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomer
     */
    'is_subscriber'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomer
     */
    'customer_id': string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomer
     */
    'subscription_id': string;
    /**
     * 
     * @type {PlanInDbBase}
     * @memberof SubscriptionCustomer
     */
    'plan': PlanInDbBase;
}

