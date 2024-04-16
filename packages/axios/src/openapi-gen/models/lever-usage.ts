/* tslint:disable */
/* eslint-disable */
/**
 * Planship API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { BucketUsage } from './bucket-usage';

/**
 * 
 * @export
 * @interface LeverUsage
 */
export interface LeverUsage {
    /**
     * 
     * @type {number}
     * @memberof LeverUsage
     */
    'total': number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof LeverUsage
     */
    'by_bucket': { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: Array<BucketUsage>; }}
     * @memberof LeverUsage
     */
    'by_subscription': { [key: string]: Array<BucketUsage>; };
}

