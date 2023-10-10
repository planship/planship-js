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

import { exists, mapValues } from '../runtime';
import type { PlanInDbBase } from './PlanInDbBase';
import {
    PlanInDbBaseFromJSON,
    PlanInDbBaseFromJSONTyped,
    PlanInDbBaseToJSON,
} from './PlanInDbBase';

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
    metadata?: object;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomer
     */
    isAdministrator?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCustomer
     */
    isSubscriber?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomer
     */
    customerId: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCustomer
     */
    subscriptionId: string;
    /**
     * 
     * @type {PlanInDbBase}
     * @memberof SubscriptionCustomer
     */
    plan: PlanInDbBase;
}

/**
 * Check if a given object implements the SubscriptionCustomer interface.
 */
export function instanceOfSubscriptionCustomer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "subscriptionId" in value;
    isInstance = isInstance && "plan" in value;

    return isInstance;
}

export function SubscriptionCustomerFromJSON(json: any): SubscriptionCustomer {
    return SubscriptionCustomerFromJSONTyped(json, false);
}

export function SubscriptionCustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCustomer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata_') ? undefined : json['metadata_'],
        'isAdministrator': !exists(json, 'is_administrator') ? undefined : json['is_administrator'],
        'isSubscriber': !exists(json, 'is_subscriber') ? undefined : json['is_subscriber'],
        'customerId': json['customer_id'],
        'subscriptionId': json['subscription_id'],
        'plan': PlanInDbBaseFromJSON(json['plan']),
    };
}

export function SubscriptionCustomerToJSON(value?: SubscriptionCustomer | null): any {
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
        'plan': PlanInDbBaseToJSON(value.plan),
    };
}
