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
 * @interface PlanInList
 */
export interface PlanInList {
    /**
     * 
     * @type {string}
     * @memberof PlanInList
     */
    slug: string;
    /**
     * Plan name
     * @type {string}
     * @memberof PlanInList
     */
    name: string;
    /**
     * Plan description
     * @type {string}
     * @memberof PlanInList
     */
    description: string;
    /**
     * Plan display order
     * @type {number}
     * @memberof PlanInList
     */
    order?: number;
}

/**
 * Check if a given object implements the PlanInList interface.
 */
export function instanceOfPlanInList(value: object): value is PlanInList {
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function PlanInListFromJSON(json: any): PlanInList {
    return PlanInListFromJSONTyped(json, false);
}

export function PlanInListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanInList {
    if (json == null) {
        return json;
    }
    return {
        
        'slug': json['slug'],
        'name': json['name'],
        'description': json['description'],
        'order': json['order'] == null ? undefined : json['order'],
    };
}

export function PlanInListToJSON(value?: PlanInList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'slug': value['slug'],
        'name': value['name'],
        'description': value['description'],
        'order': value['order'],
    };
}

