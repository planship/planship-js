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


import * as runtime from '../runtime';
import type {
  Customer,
  CustomerInDbBase,
  HTTPValidationError,
  OrganizationCustomerCreate,
} from '../models';
import {
    CustomerFromJSON,
    CustomerToJSON,
    CustomerInDbBaseFromJSON,
    CustomerInDbBaseToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    OrganizationCustomerCreateFromJSON,
    OrganizationCustomerCreateToJSON,
} from '../models';

export interface CreateCustomerRequest {
    organizationCustomerCreate: OrganizationCustomerCreate;
}

export interface DeleteCustomerRequest {
    customerId: string;
}

/**
 * 
 */
export class CustomersApi extends runtime.BaseAPI {

    /**
     * Create a new customer in the current organization.
     * Create Customer
     */
    async createCustomerRaw(requestParameters: CreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters.organizationCustomerCreate === null || requestParameters.organizationCustomerCreate === undefined) {
            throw new runtime.RequiredError('organizationCustomerCreate','Required parameter requestParameters.organizationCustomerCreate was null or undefined when calling createCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationCustomerCreateToJSON(requestParameters.organizationCustomerCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Create a new customer in the current organization.
     * Create Customer
     */
    async createCustomer(requestParameters: CreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.createCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete the customer with a given id from the current organization.
     * Delete Customer
     */
    async deleteCustomerRaw(requestParameters: DeleteCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerInDbBase>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling deleteCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerInDbBaseFromJSON(jsonValue));
    }

    /**
     * Delete the customer with a given id from the current organization.
     * Delete Customer
     */
    async deleteCustomer(requestParameters: DeleteCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerInDbBase> {
        const response = await this.deleteCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
