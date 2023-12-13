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
import { Customer } from '../models';
// @ts-ignore
import { CustomerInDbBase } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { OrganizationCustomerCreate } from '../models';
/**
 * CustomersApi - axios parameter creator
 * @export
 */
export const CustomersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new customer in the current organization.
         * @summary Create Customer
         * @param {OrganizationCustomerCreate} organizationCustomerCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomer: async (organizationCustomerCreate: OrganizationCustomerCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'organizationCustomerCreate' is not null or undefined
            assertParamExists('createCustomer', 'organizationCustomerCreate', organizationCustomerCreate)
            const localVarPath = `/api/v1/customers`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(organizationCustomerCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete the customer with a given id from the current organization.
         * @summary Delete Customer
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomer: async (customerId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('deleteCustomer', 'customerId', customerId)
            const localVarPath = `/api/v1/customers/{customer_id}`
                .replace(`{${"customer_id"}}`, encodeURIComponent(String(customerId)));
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
        /**
         * Get the customer with a given id
         * @summary Get Customer
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomer: async (customerId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('getCustomer', 'customerId', customerId)
            const localVarPath = `/api/v1/customers/{customer_id}`
                .replace(`{${"customer_id"}}`, encodeURIComponent(String(customerId)));
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
    }
};

/**
 * CustomersApi - functional programming interface
 * @export
 */
export const CustomersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomersApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new customer in the current organization.
         * @summary Create Customer
         * @param {OrganizationCustomerCreate} organizationCustomerCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomer(organizationCustomerCreate: OrganizationCustomerCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomer(organizationCustomerCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete the customer with a given id from the current organization.
         * @summary Delete Customer
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomer(customerId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerInDbBase>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomer(customerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the customer with a given id
         * @summary Get Customer
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomer(customerId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomerInDbBase>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomer(customerId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomersApi - factory interface
 * @export
 */
export const CustomersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomersApiFp(configuration)
    return {
        /**
         * Create a new customer in the current organization.
         * @summary Create Customer
         * @param {OrganizationCustomerCreate} organizationCustomerCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomer(organizationCustomerCreate: OrganizationCustomerCreate, options?: any): AxiosPromise<Customer> {
            return localVarFp.createCustomer(organizationCustomerCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete the customer with a given id from the current organization.
         * @summary Delete Customer
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomer(customerId: string, options?: any): AxiosPromise<CustomerInDbBase> {
            return localVarFp.deleteCustomer(customerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the customer with a given id
         * @summary Get Customer
         * @param {string} customerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomer(customerId: string, options?: any): AxiosPromise<CustomerInDbBase> {
            return localVarFp.getCustomer(customerId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomersApi - object-oriented interface
 * @export
 * @class CustomersApi
 * @extends {BaseAPI}
 */
export class CustomersApi extends BaseAPI {
    /**
     * Create a new customer in the current organization.
     * @summary Create Customer
     * @param {OrganizationCustomerCreate} organizationCustomerCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public createCustomer(organizationCustomerCreate: OrganizationCustomerCreate, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).createCustomer(organizationCustomerCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete the customer with a given id from the current organization.
     * @summary Delete Customer
     * @param {string} customerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public deleteCustomer(customerId: string, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).deleteCustomer(customerId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the customer with a given id
     * @summary Get Customer
     * @param {string} customerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getCustomer(customerId: string, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).getCustomer(customerId, options).then((request) => request(this.axios, this.basePath));
    }
}
