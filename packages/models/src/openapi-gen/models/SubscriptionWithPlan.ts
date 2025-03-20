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
import type { IdNameSlugOrmBase } from './IdNameSlugOrmBase.js';
import {
    IdNameSlugOrmBaseFromJSON,
    IdNameSlugOrmBaseFromJSONTyped,
    IdNameSlugOrmBaseToJSON,
} from './IdNameSlugOrmBase.js';

/**
 * 
 * @export
 * @interface SubscriptionWithPlan
 */
export interface SubscriptionWithPlan {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionWithPlan
     */
    autoRenew: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionWithPlan
     */
    isActive: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    planId: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    renewPlanId: string;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionWithPlan
     */
    renewAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionWithPlan
     */
    lastRenewedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionWithPlan
     */
    maxSubscribers: number;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionWithPlan
     */
    startAt: Date;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionWithPlan
     */
    alternativeId?: string;
    /**
     * 
     * @type {IdNameSlugOrmBase}
     * @memberof SubscriptionWithPlan
     */
    plan: IdNameSlugOrmBase;
    /**
     * 
     * @type {IdNameSlugOrmBase}
     * @memberof SubscriptionWithPlan
     */
    renewPlan: IdNameSlugOrmBase;
}

/**
 * Check if a given object implements the SubscriptionWithPlan interface.
 */
export function instanceOfSubscriptionWithPlan(value: object): value is SubscriptionWithPlan {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('autoRenew' in value) || value['autoRenew'] === undefined) return false;
    if (!('isActive' in value) || value['isActive'] === undefined) return false;
    if (!('planId' in value) || value['planId'] === undefined) return false;
    if (!('renewPlanId' in value) || value['renewPlanId'] === undefined) return false;
    if (!('renewAt' in value) || value['renewAt'] === undefined) return false;
    if (!('lastRenewedAt' in value) || value['lastRenewedAt'] === undefined) return false;
    if (!('maxSubscribers' in value) || value['maxSubscribers'] === undefined) return false;
    if (!('startAt' in value) || value['startAt'] === undefined) return false;
    if (!('plan' in value) || value['plan'] === undefined) return false;
    if (!('renewPlan' in value) || value['renewPlan'] === undefined) return false;
    return true;
}

export function SubscriptionWithPlanFromJSON(json: any): SubscriptionWithPlan {
    return SubscriptionWithPlanFromJSONTyped(json, false);
}

export function SubscriptionWithPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionWithPlan {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'autoRenew': json['auto_renew'],
        'isActive': json['is_active'],
        'planId': json['plan_id'],
        'renewPlanId': json['renew_plan_id'],
        'renewAt': (new Date(json['renew_at'])),
        'lastRenewedAt': (new Date(json['last_renewed_at'])),
        'maxSubscribers': json['max_subscribers'],
        'startAt': (new Date(json['start_at'])),
        'alternativeId': json['alternative_id'] == null ? undefined : json['alternative_id'],
        'plan': IdNameSlugOrmBaseFromJSON(json['plan']),
        'renewPlan': IdNameSlugOrmBaseFromJSON(json['renew_plan']),
    };
}

export function SubscriptionWithPlanToJSON(value?: SubscriptionWithPlan | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'auto_renew': value['autoRenew'],
        'is_active': value['isActive'],
        'plan_id': value['planId'],
        'renew_plan_id': value['renewPlanId'],
        'renew_at': ((value['renewAt']).toISOString()),
        'last_renewed_at': ((value['lastRenewedAt']).toISOString()),
        'max_subscribers': value['maxSubscribers'],
        'start_at': ((value['startAt']).toISOString()),
        'alternative_id': value['alternativeId'],
        'plan': IdNameSlugOrmBaseToJSON(value['plan']),
        'renew_plan': IdNameSlugOrmBaseToJSON(value['renewPlan']),
    };
}

