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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SubscriptionCustomerAdd
 */
export interface SubscriptionCustomerAdd {
    /**
     * 
     * @type {object}
     * @memberof SubscriptionCustomerAdd
     */
    metadata?: object;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomerAdd
     */
    isAdministrator?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomerAdd
     */
    isSubscriber?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomerAdd
     */
    customerId: string;
}

/**
 * Check if a given object implements the SubscriptionCustomerAdd interface.
 */
export function instanceOfSubscriptionCustomerAdd(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customerId" in value;

    return isInstance;
}

export function SubscriptionCustomerAddFromJSON(json: any): SubscriptionCustomerAdd {
    return SubscriptionCustomerAddFromJSONTyped(json, false);
}

export function SubscriptionCustomerAddFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCustomerAdd {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'isAdministrator': !exists(json, 'is_administrator') ? undefined : json['is_administrator'],
        'isSubscriber': !exists(json, 'is_subscriber') ? undefined : json['is_subscriber'],
        'customerId': json['customer_id'],
    };
}

export function SubscriptionCustomerAddToJSON(value?: SubscriptionCustomerAdd | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': value.metadata,
        'is_administrator': value.isAdministrator,
        'is_subscriber': value.isSubscriber,
        'customer_id': value.customerId,
    };
}

