/* tslint:disable */
/* eslint-disable */
/**
 * Planship API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.3.1
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
 * @interface SubscriptionWithPlan
 */
export interface SubscriptionWithPlan {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionWithPlan
     */
    'auto_renew': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionWithPlan
     */
    'is_active': boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    'plan_id': string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    'renew_plan_id': string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    'renew_at': string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    'last_renewed_at': string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionWithPlan
     */
    'max_subscribers': number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    'start_at': string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    'alternative_id'?: string;
    /**
     * 
     * @type {IdNameSlugOrmBase}
     * @memberof SubscriptionWithPlan
     */
    'plan': IdNameSlugOrmBase;
    /**
     * 
     * @type {IdNameSlugOrmBase}
     * @memberof SubscriptionWithPlan
     */
    'renew_plan': IdNameSlugOrmBase;
}

