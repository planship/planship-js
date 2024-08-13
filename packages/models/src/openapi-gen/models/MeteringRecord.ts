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

import { exists, mapValues } from '../runtime';
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
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof MeteringRecord
     */
    isAllocated?: boolean;
    /**
     * 
     * @type {number}
     * @memberof MeteringRecord
     */
    usage: number;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    meteringId: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    productId: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    subscriptionId?: string;
    /**
     * 
     * @type {string}
     * @memberof MeteringRecord
     */
    bucket?: string;
}

/**
 * Check if a given object implements the MeteringRecord interface.
 */
export function instanceOfMeteringRecord(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "usage" in value;
    isInstance = isInstance && "meteringId" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "productId" in value;

    return isInstance;
}

export function MeteringRecordFromJSON(json: any): MeteringRecord {
    return MeteringRecordFromJSONTyped(json, false);
}

export function MeteringRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeteringRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'isAllocated': !exists(json, 'is_allocated') ? undefined : json['is_allocated'],
        'usage': json['usage'],
        'meteringId': json['metering_id'],
        'customerId': json['customer_id'],
        'productId': json['product_id'],
        'subscriptionId': !exists(json, 'subscription_id') ? undefined : json['subscription_id'],
        'bucket': !exists(json, 'bucket') ? undefined : json['bucket'],
    };
}

export function MeteringRecordToJSON(value?: MeteringRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'is_allocated': value.isAllocated,
        'usage': value.usage,
        'metering_id': value.meteringId,
        'customer_id': value.customerId,
        'product_id': value.productId,
        'subscription_id': value.subscriptionId,
        'bucket': value.bucket,
    };
}

