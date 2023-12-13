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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { SubscriptionWithPlan } from '../models';
/**
 * SubscriptionsApi - axios parameter creator
 * @export
 */
export const SubscriptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Force Renew Subscription
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forceRenewSubscription: async (subscriptionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'subscriptionId' is not null or undefined
            assertParamExists('forceRenewSubscription', 'subscriptionId', subscriptionId)
            const localVarPath = `/api/v1/subscriptions/{subscription_id}/renewals`
                .replace(`{${"subscription_id"}}`, encodeURIComponent(String(subscriptionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oAuth2ClientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oAuth2ClientCredentials", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SubscriptionsApi - functional programming interface
 * @export
 */
export const SubscriptionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SubscriptionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Force Renew Subscription
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forceRenewSubscription(subscriptionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionWithPlan>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forceRenewSubscription(subscriptionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SubscriptionsApi - factory interface
 * @export
 */
export const SubscriptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SubscriptionsApiFp(configuration)
    return {
        /**
         * 
         * @summary Force Renew Subscription
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forceRenewSubscription(subscriptionId: string, options?: any): AxiosPromise<SubscriptionWithPlan> {
            return localVarFp.forceRenewSubscription(subscriptionId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SubscriptionsApi - object-oriented interface
 * @export
 * @class SubscriptionsApi
 * @extends {BaseAPI}
 */
export class SubscriptionsApi extends BaseAPI {
    /**
     * 
     * @summary Force Renew Subscription
     * @param {string} subscriptionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionsApi
     */
    public forceRenewSubscription(subscriptionId: string, options?: AxiosRequestConfig) {
        return SubscriptionsApiFp(this.configuration).forceRenewSubscription(subscriptionId, options).then((request) => request(this.axios, this.basePath));
    }
}
