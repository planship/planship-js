/* tslint:disable */
/* eslint-disable */
/**
 * Planship API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.4
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
 * @interface IdNameOrmBase
 */
export interface IdNameOrmBase {
    /**
     * 
     * @type {string}
     * @memberof IdNameOrmBase
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof IdNameOrmBase
     */
    name: string;
}

/**
 * Check if a given object implements the IdNameOrmBase interface.
 */
export function instanceOfIdNameOrmBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function IdNameOrmBaseFromJSON(json: any): IdNameOrmBase {
    return IdNameOrmBaseFromJSONTyped(json, false);
}

export function IdNameOrmBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdNameOrmBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function IdNameOrmBaseToJSON(value?: IdNameOrmBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

