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
import type { TimeUnits } from './TimeUnits';
import {
    TimeUnitsFromJSON,
    TimeUnitsFromJSONTyped,
    TimeUnitsToJSON,
} from './TimeUnits';

/**
 * 
 * @export
 * @interface PlanInDbBase
 */
export interface PlanInDbBase {
    /**
     * 
     * @type {string}
     * @memberof PlanInDbBase
     */
    slug: string;
    /**
     * 
     * @type {number}
     * @memberof PlanInDbBase
     */
    displayOrder?: number;
    /**
     * 
     * @type {string}
     * @memberof PlanInDbBase
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanInDbBase
     */
    displayDescription?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PlanInDbBase
     */
    displayExtraAttributes?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof PlanInDbBase
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanInDbBase
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PlanInDbBase
     */
    maxSubscribers?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PlanInDbBase
     */
    isSelfServe?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PlanInDbBase
     */
    isPublic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PlanInDbBase
     */
    autoRenew?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PlanInDbBase
     */
    durationPeriod?: number;
    /**
     * 
     * @type {TimeUnits}
     * @memberof PlanInDbBase
     */
    durationUnit?: TimeUnits;
    /**
     * 
     * @type {string}
     * @memberof PlanInDbBase
     */
    id: string;
}

/**
 * Check if a given object implements the PlanInDbBase interface.
 */
export function instanceOfPlanInDbBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function PlanInDbBaseFromJSON(json: any): PlanInDbBase {
    return PlanInDbBaseFromJSONTyped(json, false);
}

export function PlanInDbBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanInDbBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'slug': json['slug'],
        'displayOrder': !exists(json, 'display_order') ? undefined : json['display_order'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'displayDescription': !exists(json, 'display_description') ? undefined : json['display_description'],
        'displayExtraAttributes': !exists(json, 'display_extra_attributes') ? undefined : json['display_extra_attributes'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': json['name'],
        'maxSubscribers': !exists(json, 'max_subscribers') ? undefined : json['max_subscribers'],
        'isSelfServe': !exists(json, 'is_self_serve') ? undefined : json['is_self_serve'],
        'isPublic': !exists(json, 'is_public') ? undefined : json['is_public'],
        'autoRenew': !exists(json, 'auto_renew') ? undefined : json['auto_renew'],
        'durationPeriod': !exists(json, 'duration_period') ? undefined : json['duration_period'],
        'durationUnit': !exists(json, 'duration_unit') ? undefined : TimeUnitsFromJSON(json['duration_unit']),
        'id': json['id'],
    };
}

export function PlanInDbBaseToJSON(value?: PlanInDbBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'slug': value.slug,
        'display_order': value.displayOrder,
        'display_name': value.displayName,
        'display_description': value.displayDescription,
        'display_extra_attributes': value.displayExtraAttributes,
        'description': value.description,
        'name': value.name,
        'max_subscribers': value.maxSubscribers,
        'is_self_serve': value.isSelfServe,
        'is_public': value.isPublic,
        'auto_renew': value.autoRenew,
        'duration_period': value.durationPeriod,
        'duration_unit': TimeUnitsToJSON(value.durationUnit),
        'id': value.id,
    };
}

