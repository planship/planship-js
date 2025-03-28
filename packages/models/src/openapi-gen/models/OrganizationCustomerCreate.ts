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
 * @interface OrganizationCustomerCreate
 */
export interface OrganizationCustomerCreate {
    /**
     * 
     * @type {string}
     * @memberof OrganizationCustomerCreate
     */
    alternativeId?: string;
    /**
     * 
     * @type {object}
     * @memberof OrganizationCustomerCreate
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCustomerCreate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationCustomerCreate
     */
    email?: string;
}

/**
 * Check if a given object implements the OrganizationCustomerCreate interface.
 */
export function instanceOfOrganizationCustomerCreate(value: object): value is OrganizationCustomerCreate {
    return true;
}

export function OrganizationCustomerCreateFromJSON(json: any): OrganizationCustomerCreate {
    return OrganizationCustomerCreateFromJSONTyped(json, false);
}

export function OrganizationCustomerCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationCustomerCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'alternativeId': json['alternative_id'] == null ? undefined : json['alternative_id'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'name': json['name'] == null ? undefined : json['name'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function OrganizationCustomerCreateToJSON(value?: OrganizationCustomerCreate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'alternative_id': value['alternativeId'],
        'metadata': value['metadata'],
        'name': value['name'],
        'email': value['email'],
    };
}

