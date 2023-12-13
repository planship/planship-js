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
import { SubscriptionCustomer } from '../models';
// @ts-ignore
import { SubscriptionCustomerAdd } from '../models';
// @ts-ignore
import { SubscriptionCustomerInDbBase } from '../models';
/**
 * SubscriptionCustomersApi - axios parameter creator
 * @export
 */
export const SubscriptionCustomersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add Customer To Subscription
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {SubscriptionCustomerAdd} subscriptionCustomerAdd 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCustomerToSubscription: async (customerId: string, subscriptionId: string, subscriptionCustomerAdd: SubscriptionCustomerAdd, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('addCustomerToSubscription', 'customerId', customerId)
            // verify required parameter 'subscriptionId' is not null or undefined
            assertParamExists('addCustomerToSubscription', 'subscriptionId', subscriptionId)
            // verify required parameter 'subscriptionCustomerAdd' is not null or undefined
            assertParamExists('addCustomerToSubscription', 'subscriptionCustomerAdd', subscriptionCustomerAdd)
            const localVarPath = `/api/v1/customers/{customer_id}/subscriptions/{subscription_id}/customers`
                .replace(`{${"customer_id"}}`, encodeURIComponent(String(customerId)))
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(subscriptionCustomerAdd, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List Subscription Customers
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionCustomers: async (customerId: string, subscriptionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('listSubscriptionCustomers', 'customerId', customerId)
            // verify required parameter 'subscriptionId' is not null or undefined
            assertParamExists('listSubscriptionCustomers', 'subscriptionId', subscriptionId)
            const localVarPath = `/api/v1/customers/{customer_id}/subscriptions/{subscription_id}/customers`
                .replace(`{${"customer_id"}}`, encodeURIComponent(String(customerId)))
                .replace(`{${"subscription_id"}}`, encodeURIComponent(String(subscriptionId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
        /**
         * 
         * @summary Remove Customer From Subscription
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeCustomerFromSubscription: async (customerId: string, subscriptionId: string, id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('removeCustomerFromSubscription', 'customerId', customerId)
            // verify required parameter 'subscriptionId' is not null or undefined
            assertParamExists('removeCustomerFromSubscription', 'subscriptionId', subscriptionId)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeCustomerFromSubscription', 'id', id)
            const localVarPath = `/api/v1/customers/{customer_id}/subscriptions/{subscription_id}/customers/{id}`
                .replace(`{${"customer_id"}}`, encodeURIComponent(String(customerId)))
                .replace(`{${"subscription_id"}}`, encodeURIComponent(String(subscriptionId)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
 * SubscriptionCustomersApi - functional programming interface
 * @export
 */
export const SubscriptionCustomersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SubscriptionCustomersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add Customer To Subscription
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {SubscriptionCustomerAdd} subscriptionCustomerAdd 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addCustomerToSubscription(customerId: string, subscriptionId: string, subscriptionCustomerAdd: SubscriptionCustomerAdd, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionCustomer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addCustomerToSubscription(customerId, subscriptionId, subscriptionCustomerAdd, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List Subscription Customers
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSubscriptionCustomers(customerId: string, subscriptionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SubscriptionCustomer>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSubscriptionCustomers(customerId, subscriptionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Remove Customer From Subscription
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeCustomerFromSubscription(customerId: string, subscriptionId: string, id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionCustomerInDbBase>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeCustomerFromSubscription(customerId, subscriptionId, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SubscriptionCustomersApi - factory interface
 * @export
 */
export const SubscriptionCustomersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SubscriptionCustomersApiFp(configuration)
    return {
        /**
         * 
         * @summary Add Customer To Subscription
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {SubscriptionCustomerAdd} subscriptionCustomerAdd 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCustomerToSubscription(customerId: string, subscriptionId: string, subscriptionCustomerAdd: SubscriptionCustomerAdd, options?: any): AxiosPromise<SubscriptionCustomer> {
            return localVarFp.addCustomerToSubscription(customerId, subscriptionId, subscriptionCustomerAdd, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Subscription Customers
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSubscriptionCustomers(customerId: string, subscriptionId: string, options?: any): AxiosPromise<Array<SubscriptionCustomer>> {
            return localVarFp.listSubscriptionCustomers(customerId, subscriptionId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Remove Customer From Subscription
         * @param {string} customerId 
         * @param {string} subscriptionId 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeCustomerFromSubscription(customerId: string, subscriptionId: string, id: string, options?: any): AxiosPromise<SubscriptionCustomerInDbBase> {
            return localVarFp.removeCustomerFromSubscription(customerId, subscriptionId, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SubscriptionCustomersApi - object-oriented interface
 * @export
 * @class SubscriptionCustomersApi
 * @extends {BaseAPI}
 */
export class SubscriptionCustomersApi extends BaseAPI {
    /**
     * 
     * @summary Add Customer To Subscription
     * @param {string} customerId 
     * @param {string} subscriptionId 
     * @param {SubscriptionCustomerAdd} subscriptionCustomerAdd 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionCustomersApi
     */
    public addCustomerToSubscription(customerId: string, subscriptionId: string, subscriptionCustomerAdd: SubscriptionCustomerAdd, options?: AxiosRequestConfig) {
        return SubscriptionCustomersApiFp(this.configuration).addCustomerToSubscription(customerId, subscriptionId, subscriptionCustomerAdd, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Subscription Customers
     * @param {string} customerId 
     * @param {string} subscriptionId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionCustomersApi
     */
    public listSubscriptionCustomers(customerId: string, subscriptionId: string, options?: AxiosRequestConfig) {
        return SubscriptionCustomersApiFp(this.configuration).listSubscriptionCustomers(customerId, subscriptionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Remove Customer From Subscription
     * @param {string} customerId 
     * @param {string} subscriptionId 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionCustomersApi
     */
    public removeCustomerFromSubscription(customerId: string, subscriptionId: string, id: string, options?: AxiosRequestConfig) {
        return SubscriptionCustomersApiFp(this.configuration).removeCustomerFromSubscription(customerId, subscriptionId, id, options).then((request) => request(this.axios, this.basePath));
    }
}
