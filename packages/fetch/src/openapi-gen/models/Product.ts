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
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    alternativeId?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    organizationId: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    id: string;
}

/**
 * Check if a given object implements the Product interface.
 */
export function instanceOfProduct(value: object): value is Product {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('organizationId' in value) || value['organizationId'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ProductFromJSON(json: any): Product {
    return ProductFromJSONTyped(json, false);
}

export function ProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): Product {
    if (json == null) {
        return json;
    }
    return {
        
        'alternativeId': json['alternative_id'] == null ? undefined : json['alternative_id'],
        'description': json['description'] == null ? undefined : json['description'],
        'name': json['name'],
        'organizationId': json['organization_id'],
        'slug': json['slug'],
        'id': json['id'],
    };
}

export function ProductToJSON(value?: Product | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'alternative_id': value['alternativeId'],
        'description': value['description'],
        'name': value['name'],
        'organization_id': value['organizationId'],
        'slug': value['slug'],
        'id': value['id'],
    };
}

