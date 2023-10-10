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
export function instanceOfPlanInList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function PlanInListFromJSON(json: any): PlanInList {
    return PlanInListFromJSONTyped(json, false);
}

export function PlanInListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanInList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'slug': json['slug'],
        'name': json['name'],
        'description': json['description'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function PlanInListToJSON(value?: PlanInList | null): any {
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
    };
}
