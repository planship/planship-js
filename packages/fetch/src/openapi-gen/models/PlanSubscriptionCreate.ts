/* tslint:disable */
/* eslint-disable */
/**
 * Planship API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.3.0
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
 * @interface PlanSubscriptionCreate
 */
export interface PlanSubscriptionCreate {
    /**
     * 
     * @type {object}
     * @memberof PlanSubscriptionCreate
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof PlanSubscriptionCreate
     */
    customerId: string;
    /**
     * 
     * @type {boolean}
     * @memberof PlanSubscriptionCreate
     */
    isSubscriber?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PlanSubscriptionCreate
     */
    maxSubscribers?: number;
    /**
     * 
     * @type {Date}
     * @memberof PlanSubscriptionCreate
     */
    renewAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof PlanSubscriptionCreate
     */
    autoRenew?: boolean;
}

/**
 * Check if a given object implements the PlanSubscriptionCreate interface.
 */
export function instanceOfPlanSubscriptionCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "customerId" in value;

    return isInstance;
}

export function PlanSubscriptionCreateFromJSON(json: any): PlanSubscriptionCreate {
    return PlanSubscriptionCreateFromJSONTyped(json, false);
}

export function PlanSubscriptionCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanSubscriptionCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'customerId': json['customer_id'],
        'isSubscriber': !exists(json, 'is_subscriber') ? undefined : json['is_subscriber'],
        'maxSubscribers': !exists(json, 'max_subscribers') ? undefined : json['max_subscribers'],
        'renewAt': !exists(json, 'renew_at') ? undefined : (new Date(json['renew_at'])),
        'autoRenew': !exists(json, 'auto_renew') ? undefined : json['auto_renew'],
    };
}

export function PlanSubscriptionCreateToJSON(value?: PlanSubscriptionCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'metadata': value.metadata,
        'customer_id': value.customerId,
        'is_subscriber': value.isSubscriber,
        'max_subscribers': value.maxSubscribers,
        'renew_at': value.renewAt === undefined ? undefined : (value.renewAt.toISOString()),
        'auto_renew': value.autoRenew,
    };
}

