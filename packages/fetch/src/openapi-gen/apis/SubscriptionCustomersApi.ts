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


import * as runtime from '../runtime.js';
import type {
  HTTPValidationError,
  SubscriptionCustomer,
  SubscriptionCustomerAdd,
  SubscriptionCustomerInDbBase,
} from '../models/index.js';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    SubscriptionCustomerFromJSON,
    SubscriptionCustomerToJSON,
    SubscriptionCustomerAddFromJSON,
    SubscriptionCustomerAddToJSON,
    SubscriptionCustomerInDbBaseFromJSON,
    SubscriptionCustomerInDbBaseToJSON,
} from '../models/index.js';

export interface AddCustomerToSubscriptionRequest {
    customerId: string;
    subscriptionId: string;
    subscriptionCustomerAdd: SubscriptionCustomerAdd;
}

export interface ListSubscriptionCustomersRequest {
    customerId: string;
    subscriptionId: string;
}

export interface RemoveCustomerFromSubscriptionRequest {
    customerId: string;
    subscriptionId: string;
    id: string;
}

/**
 * 
 */
export class SubscriptionCustomersApi extends runtime.BaseAPI {

    /**
     * Add Customer To Subscription
     */
    async addCustomerToSubscriptionRaw(requestParameters: AddCustomerToSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionCustomer>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling addCustomerToSubscription().'
            );
        }

        if (requestParameters['subscriptionId'] == null) {
            throw new runtime.RequiredError(
                'subscriptionId',
                'Required parameter "subscriptionId" was null or undefined when calling addCustomerToSubscription().'
            );
        }

        if (requestParameters['subscriptionCustomerAdd'] == null) {
            throw new runtime.RequiredError(
                'subscriptionCustomerAdd',
                'Required parameter "subscriptionCustomerAdd" was null or undefined when calling addCustomerToSubscription().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}/subscriptions/{subscription_id}/customers`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"subscription_id"}}`, encodeURIComponent(String(requestParameters['subscriptionId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionCustomerAddToJSON(requestParameters['subscriptionCustomerAdd']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionCustomerFromJSON(jsonValue));
    }

    /**
     * Add Customer To Subscription
     */
    async addCustomerToSubscription(requestParameters: AddCustomerToSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionCustomer> {
        const response = await this.addCustomerToSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Subscription Customers
     */
    async listSubscriptionCustomersRaw(requestParameters: ListSubscriptionCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<SubscriptionCustomer>>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling listSubscriptionCustomers().'
            );
        }

        if (requestParameters['subscriptionId'] == null) {
            throw new runtime.RequiredError(
                'subscriptionId',
                'Required parameter "subscriptionId" was null or undefined when calling listSubscriptionCustomers().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}/subscriptions/{subscription_id}/customers`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"subscription_id"}}`, encodeURIComponent(String(requestParameters['subscriptionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SubscriptionCustomerFromJSON));
    }

    /**
     * List Subscription Customers
     */
    async listSubscriptionCustomers(requestParameters: ListSubscriptionCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<SubscriptionCustomer>> {
        const response = await this.listSubscriptionCustomersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove Customer From Subscription
     */
    async removeCustomerFromSubscriptionRaw(requestParameters: RemoveCustomerFromSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionCustomerInDbBase>> {
        if (requestParameters['customerId'] == null) {
            throw new runtime.RequiredError(
                'customerId',
                'Required parameter "customerId" was null or undefined when calling removeCustomerFromSubscription().'
            );
        }

        if (requestParameters['subscriptionId'] == null) {
            throw new runtime.RequiredError(
                'subscriptionId',
                'Required parameter "subscriptionId" was null or undefined when calling removeCustomerFromSubscription().'
            );
        }

        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling removeCustomerFromSubscription().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}/subscriptions/{subscription_id}/customers/{id}`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters['customerId']))).replace(`{${"subscription_id"}}`, encodeURIComponent(String(requestParameters['subscriptionId']))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionCustomerInDbBaseFromJSON(jsonValue));
    }

    /**
     * Remove Customer From Subscription
     */
    async removeCustomerFromSubscription(requestParameters: RemoveCustomerFromSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionCustomerInDbBase> {
        const response = await this.removeCustomerFromSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
