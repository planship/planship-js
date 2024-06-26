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

import { exists, mapValues } from '../runtime';
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
    metadata?: object;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomerInDbBase
     */
    isAdministrator?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomerInDbBase
     */
    isSubscriber?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomerInDbBase
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomerInDbBase
     */
    subscriptionId: string;
}

/**
 * Check if a given object implements the SubscriptionCustomerInDbBase interface.
 */
export function instanceOfSubscriptionCustomerInDbBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "subscriptionId" in value;

    return isInstance;
}

export function SubscriptionCustomerInDbBaseFromJSON(json: any): SubscriptionCustomerInDbBase {
    return SubscriptionCustomerInDbBaseFromJSONTyped(json, false);
}

export function SubscriptionCustomerInDbBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCustomerInDbBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata_') ? undefined : json['metadata_'],
        'isAdministrator': !exists(json, 'is_administrator') ? undefined : json['is_administrator'],
        'isSubscriber': !exists(json, 'is_subscriber') ? undefined : json['is_subscriber'],
        'customerId': json['customer_id'],
        'subscriptionId': json['subscription_id'],
    };
}

export function SubscriptionCustomerInDbBaseToJSON(value?: SubscriptionCustomerInDbBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata_': value.metadata,
        'is_administrator': value.isAdministrator,
        'is_subscriber': value.isSubscriber,
        'customer_id': value.customerId,
        'subscription_id': value.subscriptionId,
    };
}

