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


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  SubscriptionWithPlan,
} from '../models';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    SubscriptionWithPlanFromJSON,
    SubscriptionWithPlanToJSON,
} from '../models';

export interface ForceRenewSubscriptionRequest {
    subscriptionId: string;
}

/**
 * 
 */
export class SubscriptionsApi extends runtime.BaseAPI {

    /**
     * Force Renew Subscription
     */
    async forceRenewSubscriptionRaw(requestParameters: ForceRenewSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionWithPlan>> {
        if (requestParameters.subscriptionId === null || requestParameters.subscriptionId === undefined) {
            throw new runtime.RequiredError('subscriptionId','Required parameter requestParameters.subscriptionId was null or undefined when calling forceRenewSubscription.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oAuth2ClientCredentials", []);
        }

        const response = await this.request({
            path: `/api/v1/subscriptions/{subscription_id}/renewals`.replace(`{${"subscription_id"}}`, encodeURIComponent(String(requestParameters.subscriptionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionWithPlanFromJSON(jsonValue));
    }

    /**
     * Force Renew Subscription
     */
    async forceRenewSubscription(requestParameters: ForceRenewSubscriptionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionWithPlan> {
        const response = await this.forceRenewSubscriptionRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
