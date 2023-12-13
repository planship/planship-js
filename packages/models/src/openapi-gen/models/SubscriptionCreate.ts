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
 * @interface SubscriptionCreate
 */
export interface SubscriptionCreate {
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCreate
     */
    autoRenew: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionCreate
     */
    isActive: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreate
     */
    planId: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreate
     */
    renewPlanId: string;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionCreate
     */
    renewAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionCreate
     */
    lastRenewedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionCreate
     */
    maxSubscribers?: number;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionCreate
     */
    startAt: Date;
}

/**
 * Check if a given object implements the SubscriptionCreate interface.
 */
export function instanceOfSubscriptionCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "autoRenew" in value;
    isInstance = isInstance && "isActive" in value;
    isInstance = isInstance && "planId" in value;
    isInstance = isInstance && "renewPlanId" in value;
    isInstance = isInstance && "renewAt" in value;
    isInstance = isInstance && "lastRenewedAt" in value;
    isInstance = isInstance && "startAt" in value;

    return isInstance;
}

export function SubscriptionCreateFromJSON(json: any): SubscriptionCreate {
    return SubscriptionCreateFromJSONTyped(json, false);
}

export function SubscriptionCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoRenew': json['auto_renew'],
        'isActive': json['is_active'],
        'planId': json['plan_id'],
        'renewPlanId': json['renew_plan_id'],
        'renewAt': (new Date(json['renew_at'])),
        'lastRenewedAt': (new Date(json['last_renewed_at'])),
        'maxSubscribers': !exists(json, 'max_subscribers') ? undefined : json['max_subscribers'],
        'startAt': (new Date(json['start_at'])),
    };
}

export function SubscriptionCreateToJSON(value?: SubscriptionCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auto_renew': value.autoRenew,
        'is_active': value.isActive,
        'plan_id': value.planId,
        'renew_plan_id': value.renewPlanId,
        'renew_at': (value.renewAt.toISOString()),
        'last_renewed_at': (value.lastRenewedAt.toISOString()),
        'max_subscribers': value.maxSubscribers,
        'start_at': (value.startAt.toISOString()),
    };
}

