/* tslint:disable */
/* eslint-disable */
/**
 * Planship API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { IdNameSlugOrmBase } from './id-name-slug-orm-base';

/**
 * 
 * @export
 * @interface CustomerSubscriptionWithPlan
 */
export interface CustomerSubscriptionWithPlan {
    /**
     * 
     * @type {object}
     * @memberof CustomerSubscriptionWithPlan
     */
    'metadata_'?: object;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerSubscriptionWithPlan
     */
    'is_administrator'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerSubscriptionWithPlan
     */
    'is_subscriber'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubscriptionWithPlan
     */
    'customer_id': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubscriptionWithPlan
     */
    'subscription_id': string;
    /**
     * 
     * @type {number}
     * @memberof CustomerSubscriptionWithPlan
     */
    'max_subscribers'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerSubscriptionWithPlan
     */
    'auto_renew': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerSubscriptionWithPlan
     */
    'is_active': boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubscriptionWithPlan
     */
    'renew_at': string;
    /**
     * 
     * @type {string}
     * @memberof CustomerSubscriptionWithPlan
     */
    'last_renewed_at': string;
    /**
     * 
     * @type {IdNameSlugOrmBase}
     * @memberof CustomerSubscriptionWithPlan
     */
    'plan': IdNameSlugOrmBase;
    /**
     * 
     * @type {IdNameSlugOrmBase}
     * @memberof CustomerSubscriptionWithPlan
     */
    'renew_plan': IdNameSlugOrmBase;
}

