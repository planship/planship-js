/* tslint:disable */
/* eslint-disable */
/**
 * Planship API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SubscriptionCustomerInDbBase
 */
export interface SubscriptionCustomerInDbBase {
    /**
     * 
     * @type {object}
     * @memberof SubscriptionCustomerInDbBase
     */
    'metadata_'?: object;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomerInDbBase
     */
    'is_administrator'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomerInDbBase
     */
    'is_subscriber'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomerInDbBase
     */
    'customer_id': string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomerInDbBase
     */
    'subscription_id': string;
}

