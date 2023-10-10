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
import type { PlanEntitlement } from './PlanEntitlement';
import {
    PlanEntitlementFromJSON,
    PlanEntitlementFromJSONTyped,
    PlanEntitlementToJSON,
} from './PlanEntitlement';

/**
 * 
 * @export
 * @interface Plan
 */
export interface Plan {
    /**
     * 
     * @type {string}
     * @memberof Plan
     */
    slug: string;
    /**
     * Plan name
     * @type {string}
     * @memberof Plan
     */
    name: string;
    /**
     * Plan description
     * @type {string}
     * @memberof Plan
     */
    description: string;
    /**
     * Plan display order
     * @type {number}
     * @memberof Plan
     */
    order?: number;
    /**
     * 
     * @type {Array<PlanEntitlement>}
     * @memberof Plan
     */
    entitlements: Array<PlanEntitlement>;
}

/**
 * Check if a given object implements the Plan interface.
 */
export function instanceOfPlan(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "entitlements" in value;

    return isInstance;
}

export function PlanFromJSON(json: any): Plan {
    return PlanFromJSONTyped(json, false);
}

export function PlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): Plan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'slug': json['slug'],
        'name': json['name'],
        'description': json['description'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'entitlements': ((json['entitlements'] as Array<any>).map(PlanEntitlementFromJSON)),
    };
}

export function PlanToJSON(value?: Plan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'slug': value.slug,
        'name': value.name,
        'description': value.description,
        'order': value.order,
        'entitlements': ((value.entitlements as Array<any>).map(PlanEntitlementToJSON)),
    };
}

