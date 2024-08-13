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


import * as runtime from '../runtime';
import type {
  CustomerSubscriptionWithPlan,
  HTTPValidationError,
  SubscriptionCreate,
  SubscriptionUpdateWithSlugs,
  SubscriptionWithPlan,
} from '../models';
import {
    CustomerSubscriptionWithPlanFromJSON,
    CustomerSubscriptionWithPlanToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    SubscriptionCreateFromJSON,
    SubscriptionCreateToJSON,
    SubscriptionUpdateWithSlugsFromJSON,
    SubscriptionUpdateWithSlugsToJSON,
    SubscriptionWithPlanFromJSON,
    SubscriptionWithPlanToJSON,
} from '../models';

export interface CreatePlanSubscriptionForCustomerRequest {
    customerId: string;
    subscriptionCreate: SubscriptionCreate;
}

export interface GetCustomerPlanSubscriptionRequest {
    customerId: string;
    subscriptionId: string;
}

export interface ListCustomerPlanSubscriptionsRequest {
    customerId: string;
    productSlug?: string;
}

export interface ModifyCustomerPlanSubscriptionRequest {
    customerId: string;
    subscriptionId: string;
    subscriptionUpdateWithSlugs: SubscriptionUpdateWithSlugs;
}

/**
 * 
 */
export class CustomerSubscriptionsApi extends runtime.BaseAPI {

    /**
     * Create Plan Subscription For Customer
     */
    async createPlanSubscriptionForCustomerRaw(requestParameters: CreatePlanSubscriptionForCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionWithPlan>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling createPlanSubscriptionForCustomer.');
        }

        if (requestParameters.subscriptionCreate === null || requestParameters.subscriptionCreate === undefined) {
            throw new runtime.RequiredError('subscriptionCreate','Required parameter requestParameters.subscriptionCreate was null or undefined when calling createPlanSubscriptionForCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}/subscriptions`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionCreateToJSON(requestParameters.subscriptionCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionWithPlanFromJSON(jsonValue));
    }

    /**
     * Create Plan Subscription For Customer
     */
    async createPlanSubscriptionForCustomer(requestParameters: CreatePlanSubscriptionForCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionWithPlan> {
        const response = await this.createPlanSubscriptionForCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Customer Plan Subscription
     */
    async getCustomerPlanSubscriptionRaw(requestParameters: GetCustomerPlanSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerSubscriptionWithPlan>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling getCustomerPlanSubscription.');
        }

        if (requestParameters.subscriptionId === null || requestParameters.subscriptionId === undefined) {
            throw new runtime.RequiredError('subscriptionId','Required parameter requestParameters.subscriptionId was null or undefined when calling getCustomerPlanSubscription.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}/subscriptions/{subscription_id}`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"subscription_id"}}`, encodeURIComponent(String(requestParameters.subscriptionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSubscriptionWithPlanFromJSON(jsonValue));
    }

    /**
     * Get Customer Plan Subscription
     */
    async getCustomerPlanSubscription(requestParameters: GetCustomerPlanSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerSubscriptionWithPlan> {
        const response = await this.getCustomerPlanSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Customer Plan Subscriptions
     */
    async listCustomerPlanSubscriptionsRaw(requestParameters: ListCustomerPlanSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CustomerSubscriptionWithPlan>>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling listCustomerPlanSubscriptions.');
        }

        const queryParameters: any = {};

        if (requestParameters.productSlug !== undefined) {
            queryParameters['product_slug'] = requestParameters.productSlug;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}/subscriptions`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CustomerSubscriptionWithPlanFromJSON));
    }

    /**
     * List Customer Plan Subscriptions
     */
    async listCustomerPlanSubscriptions(requestParameters: ListCustomerPlanSubscriptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CustomerSubscriptionWithPlan>> {
        const response = await this.listCustomerPlanSubscriptionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modify Customer Plan Subscription
     */
    async modifyCustomerPlanSubscriptionRaw(requestParameters: ModifyCustomerPlanSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerSubscriptionWithPlan>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling modifyCustomerPlanSubscription.');
        }

        if (requestParameters.subscriptionId === null || requestParameters.subscriptionId === undefined) {
            throw new runtime.RequiredError('subscriptionId','Required parameter requestParameters.subscriptionId was null or undefined when calling modifyCustomerPlanSubscription.');
        }

        if (requestParameters.subscriptionUpdateWithSlugs === null || requestParameters.subscriptionUpdateWithSlugs === undefined) {
            throw new runtime.RequiredError('subscriptionUpdateWithSlugs','Required parameter requestParameters.subscriptionUpdateWithSlugs was null or undefined when calling modifyCustomerPlanSubscription.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/customers/{customer_id}/subscriptions/{subscription_id}`.replace(`{${"customer_id"}}`, encodeURIComponent(String(requestParameters.customerId))).replace(`{${"subscription_id"}}`, encodeURIComponent(String(requestParameters.subscriptionId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionUpdateWithSlugsToJSON(requestParameters.subscriptionUpdateWithSlugs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerSubscriptionWithPlanFromJSON(jsonValue));
    }

    /**
     * Modify Customer Plan Subscription
     */
    async modifyCustomerPlanSubscription(requestParameters: ModifyCustomerPlanSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerSubscriptionWithPlan> {
        const response = await this.modifyCustomerPlanSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
