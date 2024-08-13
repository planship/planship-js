/* tslint:disable */
/* eslint-disable */
/**
 * Planship API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
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
export function instanceOfCustomerInDbBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "organizationId" in value;

    return isInstance;
}

export function CustomerInDbBaseFromJSON(json: any): CustomerInDbBase {
    return CustomerInDbBaseFromJSONTyped(json, false);
}

export function CustomerInDbBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerInDbBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'metadata': !exists(json, 'metadata_') ? undefined : json['metadata_'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'alternativeId': !exists(json, 'alternative_id') ? undefined : json['alternative_id'],
        'organizationId': json['organization_id'],
    };
}

export function CustomerInDbBaseToJSON(value?: CustomerInDbBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'metadata_': value.metadata,
        'name': value.name,
        'email': value.email,
        'alternative_id': value.alternativeId,
        'organization_id': value.organizationId,
    };
}

