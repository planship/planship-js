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
import type { IdNameSlugOrmBase } from './IdNameSlugOrmBase';
import {
    IdNameSlugOrmBaseFromJSON,
    IdNameSlugOrmBaseFromJSONTyped,
    IdNameSlugOrmBaseToJSON,
} from './IdNameSlugOrmBase';

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
export function instanceOfSubscriptionWithPlan(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "autoRenew" in value;
    isInstance = isInstance && "isActive" in value;
    isInstance = isInstance && "planId" in value;
    isInstance = isInstance && "renewPlanId" in value;
    isInstance = isInstance && "renewAt" in value;
    isInstance = isInstance && "lastRenewedAt" in value;
    isInstance = isInstance && "maxSubscribers" in value;
    isInstance = isInstance && "startAt" in value;
    isInstance = isInstance && "plan" in value;
    isInstance = isInstance && "renewPlan" in value;

    return isInstance;
}

export function SubscriptionWithPlanFromJSON(json: any): SubscriptionWithPlan {
    return SubscriptionWithPlanFromJSONTyped(json, false);
}

export function SubscriptionWithPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionWithPlan {
    if ((json === undefined) || (json === null)) {
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
        'plan': IdNameSlugOrmBaseFromJSON(json['plan']),
        'renewPlan': IdNameSlugOrmBaseFromJSON(json['renew_plan']),
    };
}

export function SubscriptionWithPlanToJSON(value?: SubscriptionWithPlan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'auto_renew': value.autoRenew,
        'is_active': value.isActive,
        'plan_id': value.planId,
        'renew_plan_id': value.renewPlanId,
        'renew_at': (value.renewAt.toISOString()),
        'last_renewed_at': (value.lastRenewedAt.toISOString()),
        'max_subscribers': value.maxSubscribers,
        'start_at': (value.startAt.toISOString()),
        'plan': IdNameSlugOrmBaseToJSON(value.plan),
        'renew_plan': IdNameSlugOrmBaseToJSON(value.renewPlan),
    };
}

