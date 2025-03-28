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


import * as runtime from '../runtime.js';
import type {
  HTTPValidationError,
} from '../models/index.js';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index.js';

export interface GetProductEntitlementsForCustomerRequest {
    customerId: string;
    productSlug: string;
}

/**
 * 
 */
export class EntitlementsApi extends runtime.BaseAPI {

    /**
     * List all entitlements for the customer with a given id and the product with a given slug. Entitlements are returned as a dictionary keyed by lever slugs.
     * Get Product Entitlements For Customer
     */
    async getProductEntitlementsForCustomerRaw(requestParameters: GetProductEntitlementsForCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling getProductEntitlementsForCustomer().'
            );
        }

        if (requestParameters['productSlug'] == null) {
            throw new runtime.RequiredError(
                'productSlug',
                'Required parameter "productSlug" was null or undefined when calling getProductEntitlementsForCustomer().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}/products/{product_slug}/entitlements`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"product_slug"}}`, encodeURIComponent(String(requestParameters['productSlug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List all entitlements for the customer with a given id and the product with a given slug. Entitlements are returned as a dictionary keyed by lever slugs.
     * Get Product Entitlements For Customer
     */
    async getProductEntitlementsForCustomer(requestParameters: GetProductEntitlementsForCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getProductEntitlementsForCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
