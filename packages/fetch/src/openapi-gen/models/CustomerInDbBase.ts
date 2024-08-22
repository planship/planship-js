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

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface CustomerInDbBase
 */
export interface CustomerInDbBase {
    /**
     * 
     * @type {string}
     * @memberof CustomerInDbBase
     */
    id: string;
    /**
     * 
     * @type {object}
     * @memberof CustomerInDbBase
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof CustomerInDbBase
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerInDbBase
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerInDbBase
     */
    alternativeId?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerInDbBase
     */
    organizationId: string;
}

/**
 * Check if a given object implements the CustomerInDbBase interface.
 */
export function instanceOfCustomerInDbBase(value: object): value is CustomerInDbBase {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('organizationId' in value) || value['organizationId'] === undefined) return false;
    return true;
}

export function CustomerInDbBaseFromJSON(json: any): CustomerInDbBase {
    return CustomerInDbBaseFromJSONTyped(json, false);
}

export function CustomerInDbBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerInDbBase {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'metadata': json['metadata_'] == null ? undefined : json['metadata_'],
        'name': json['name'] == null ? undefined : json['name'],
        'email': json['email'] == null ? undefined : json['email'],
        'alternativeId': json['alternative_id'] == null ? undefined : json['alternative_id'],
        'organizationId': json['organization_id'],
    };
}

export function CustomerInDbBaseToJSON(value?: CustomerInDbBase | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'metadata_': value['metadata'],
        'name': value['name'],
        'email': value['email'],
        'alternative_id': value['alternativeId'],
        'organization_id': value['organizationId'],
    };
}

