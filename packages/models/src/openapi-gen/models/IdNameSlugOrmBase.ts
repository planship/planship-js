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
/**
 * 
 * @export
 * @interface IdNameSlugOrmBase
 */
export interface IdNameSlugOrmBase {
    /**
     * 
     * @type {string}
     * @memberof IdNameSlugOrmBase
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof IdNameSlugOrmBase
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof IdNameSlugOrmBase
     */
    slug: string;
}

/**
 * Check if a given object implements the IdNameSlugOrmBase interface.
 */
export function instanceOfIdNameSlugOrmBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "slug" in value;

    return isInstance;
}

export function IdNameSlugOrmBaseFromJSON(json: any): IdNameSlugOrmBase {
    return IdNameSlugOrmBaseFromJSONTyped(json, false);
}

export function IdNameSlugOrmBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdNameSlugOrmBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'slug': json['slug'],
    };
}

export function IdNameSlugOrmBaseToJSON(value?: IdNameSlugOrmBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'slug': value.slug,
    };
}

