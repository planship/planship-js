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



/**
 * 
 * @export
 * @interface MeteringRecord
 */
export interface MeteringRecord {
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof MeteringRecord
     */
    'is_allocated'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MeteringRecord
     */
    'usage': number;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    'metering_id': string;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    'customer_id': string;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    'product_id': string;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    'subscription_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    'bucket'?: string;
}

