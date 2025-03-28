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

import { mapValues } from '../runtime.js';
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
    /**
     * 
     * @type {string}
     * @memberof SubscriptionCreate
     */
    alternativeId?: string;
}

/**
 * Check if a given object implements the SubscriptionCreate interface.
 */
export function instanceOfSubscriptionCreate(value: object): value is SubscriptionCreate {
    if (!('autoRenew' in value) || value['autoRenew'] === undefined) return false;
    if (!('isActive' in value) || value['isActive'] === undefined) return false;
    if (!('planId' in value) || value['planId'] === undefined) return false;
    if (!('renewPlanId' in value) || value['renewPlanId'] === undefined) return false;
    if (!('renewAt' in value) || value['renewAt'] === undefined) return false;
    if (!('lastRenewedAt' in value) || value['lastRenewedAt'] === undefined) return false;
    if (!('startAt' in value) || value['startAt'] === undefined) return false;
    return true;
}

export function SubscriptionCreateFromJSON(json: any): SubscriptionCreate {
    return SubscriptionCreateFromJSONTyped(json, false);
}

export function SubscriptionCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'autoRenew': json['auto_renew'],
        'isActive': json['is_active'],
        'planId': json['plan_id'],
        'renewPlanId': json['renew_plan_id'],
        'renewAt': (new Date(json['renew_at'])),
        'lastRenewedAt': (new Date(json['last_renewed_at'])),
        'maxSubscribers': json['max_subscribers'] == null ? undefined : json['max_subscribers'],
        'startAt': (new Date(json['start_at'])),
        'alternativeId': json['alternative_id'] == null ? undefined : json['alternative_id'],
    };
}

export function SubscriptionCreateToJSON(value?: SubscriptionCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'auto_renew': value['autoRenew'],
        'is_active': value['isActive'],
        'plan_id': value['planId'],
        'renew_plan_id': value['renewPlanId'],
        'renew_at': ((value['renewAt']).toISOString()),
        'last_renewed_at': ((value['lastRenewedAt']).toISOString()),
        'max_subscribers': value['maxSubscribers'],
        'start_at': ((value['startAt']).toISOString()),
        'alternative_id': value['alternativeId'],
    };
}

