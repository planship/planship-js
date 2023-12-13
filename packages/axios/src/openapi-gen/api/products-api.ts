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
import { IdNameOrmBase } from '../models';
// @ts-ignore
import { IdNameSlugOrmBase } from '../models';
// @ts-ignore
import { Lever } from '../models';
// @ts-ignore
import { Plan } from '../models';
// @ts-ignore
import { PlanInList } from '../models';
// @ts-ignore
import { PlanSubscriptionCreate } from '../models';
// @ts-ignore
import { Product } from '../models';
// @ts-ignore
import { SubscriptionWithPlan } from '../models';
/**
 * ProductsApi - axios parameter creator
 * @export
 */
export const ProductsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a subscription to the product plan with given product and plan slugs for the customer described in subscription_customer_in. Organization is determined by the Planship API auth token.
         * @summary Create Plan Subscription
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {PlanSubscriptionCreate} planSubscriptionCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlanSubscription: async (productSlug: string, slug: string, planSubscriptionCreate: PlanSubscriptionCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productSlug' is not null or undefined
            assertParamExists('createPlanSubscription', 'productSlug', productSlug)
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('createPlanSubscription', 'slug', slug)
            // verify required parameter 'planSubscriptionCreate' is not null or undefined
            assertParamExists('createPlanSubscription', 'planSubscriptionCreate', planSubscriptionCreate)
            const localVarPath = `/api/v1/products/{product_slug}/plans/{slug}/subscriptions`
                .replace(`{${"product_slug"}}`, encodeURIComponent(String(productSlug)))
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(planSubscriptionCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct: async (slug: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getProduct', 'slug', slug)
            const localVarPath = `/api/v1/products/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
         * Get the product lever for given product and lever slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Lever
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductLever: async (productSlug: string, slug: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productSlug' is not null or undefined
            assertParamExists('getProductLever', 'productSlug', productSlug)
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getProductLever', 'slug', slug)
            const localVarPath = `/api/v1/products/{product_slug}/levers/{slug}`
                .replace(`{${"product_slug"}}`, encodeURIComponent(String(productSlug)))
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
         * Get the product plan for given product and lever slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Plan
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductPlan: async (productSlug: string, slug: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productSlug' is not null or undefined
            assertParamExists('getProductPlan', 'productSlug', productSlug)
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getProductPlan', 'slug', slug)
            const localVarPath = `/api/v1/products/{product_slug}/plans/{slug}`
                .replace(`{${"product_slug"}}`, encodeURIComponent(String(productSlug)))
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
         * List all entitlements for the product plan with given product and plan slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Plan Entitlements
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductPlanEntitlements: async (productSlug: string, slug: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productSlug' is not null or undefined
            assertParamExists('getProductPlanEntitlements', 'productSlug', productSlug)
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getProductPlanEntitlements', 'slug', slug)
            const localVarPath = `/api/v1/products/{product_slug}/plans/{slug}/entitlements`
                .replace(`{${"product_slug"}}`, encodeURIComponent(String(productSlug)))
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
         * List all levers for the product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Product Levers
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProductLevers: async (slug: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('listProductLevers', 'slug', slug)
            const localVarPath = `/api/v1/products/{slug}/levers`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
         * List all plans for the product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Product Plans
         * @param {string} slug 
         * @param {boolean} [publicOnly] 
         * @param {string} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProductPlans: async (slug: string, publicOnly?: boolean, orderBy?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('listProductPlans', 'slug', slug)
            const localVarPath = `/api/v1/products/{slug}/plans`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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

            if (publicOnly !== undefined) {
                localVarQueryParameter['public_only'] = publicOnly;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all products in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Products
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProducts: async (skip?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/products`;
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

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
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
 * ProductsApi - functional programming interface
 * @export
 */
export const ProductsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a subscription to the product plan with given product and plan slugs for the customer described in subscription_customer_in. Organization is determined by the Planship API auth token.
         * @summary Create Plan Subscription
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {PlanSubscriptionCreate} planSubscriptionCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPlanSubscription(productSlug: string, slug: string, planSubscriptionCreate: PlanSubscriptionCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SubscriptionWithPlan>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPlanSubscription(productSlug, slug, planSubscriptionCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProduct(slug: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Product>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProduct(slug, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the product lever for given product and lever slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Lever
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductLever(productSlug: string, slug: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Lever>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductLever(productSlug, slug, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the product plan for given product and lever slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Plan
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductPlan(productSlug: string, slug: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Plan>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductPlan(productSlug, slug, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all entitlements for the product plan with given product and plan slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Plan Entitlements
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProductPlanEntitlements(productSlug: string, slug: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IdNameOrmBase>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProductPlanEntitlements(productSlug, slug, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all levers for the product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Product Levers
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProductLevers(slug: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IdNameSlugOrmBase>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listProductLevers(slug, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all plans for the product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Product Plans
         * @param {string} slug 
         * @param {boolean} [publicOnly] 
         * @param {string} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProductPlans(slug: string, publicOnly?: boolean, orderBy?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PlanInList>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listProductPlans(slug, publicOnly, orderBy, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all products in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Products
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProducts(skip?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<IdNameSlugOrmBase>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listProducts(skip, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductsApi - factory interface
 * @export
 */
export const ProductsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductsApiFp(configuration)
    return {
        /**
         * Create a subscription to the product plan with given product and plan slugs for the customer described in subscription_customer_in. Organization is determined by the Planship API auth token.
         * @summary Create Plan Subscription
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {PlanSubscriptionCreate} planSubscriptionCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlanSubscription(productSlug: string, slug: string, planSubscriptionCreate: PlanSubscriptionCreate, options?: any): AxiosPromise<SubscriptionWithPlan> {
            return localVarFp.createPlanSubscription(productSlug, slug, planSubscriptionCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct(slug: string, options?: any): AxiosPromise<Product> {
            return localVarFp.getProduct(slug, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the product lever for given product and lever slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Lever
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductLever(productSlug: string, slug: string, options?: any): AxiosPromise<Lever> {
            return localVarFp.getProductLever(productSlug, slug, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the product plan for given product and lever slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Plan
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductPlan(productSlug: string, slug: string, options?: any): AxiosPromise<Plan> {
            return localVarFp.getProductPlan(productSlug, slug, options).then((request) => request(axios, basePath));
        },
        /**
         * List all entitlements for the product plan with given product and plan slugs in the current organization. Organization is determined by the Planship API auth token.
         * @summary Get Product Plan Entitlements
         * @param {string} productSlug 
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductPlanEntitlements(productSlug: string, slug: string, options?: any): AxiosPromise<Array<IdNameOrmBase>> {
            return localVarFp.getProductPlanEntitlements(productSlug, slug, options).then((request) => request(axios, basePath));
        },
        /**
         * List all levers for the product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Product Levers
         * @param {string} slug 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProductLevers(slug: string, options?: any): AxiosPromise<Array<IdNameSlugOrmBase>> {
            return localVarFp.listProductLevers(slug, options).then((request) => request(axios, basePath));
        },
        /**
         * List all plans for the product with a given slug in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Product Plans
         * @param {string} slug 
         * @param {boolean} [publicOnly] 
         * @param {string} [orderBy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProductPlans(slug: string, publicOnly?: boolean, orderBy?: string, options?: any): AxiosPromise<Array<PlanInList>> {
            return localVarFp.listProductPlans(slug, publicOnly, orderBy, options).then((request) => request(axios, basePath));
        },
        /**
         * List all products in the current organization. Organization is determined by the Planship API auth token.
         * @summary List Products
         * @param {number} [skip] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProducts(skip?: number, limit?: number, options?: any): AxiosPromise<Array<IdNameSlugOrmBase>> {
            return localVarFp.listProducts(skip, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductsApi - object-oriented interface
 * @export
 * @class ProductsApi
 * @extends {BaseAPI}
 */
export class ProductsApi extends BaseAPI {
    /**
     * Create a subscription to the product plan with given product and plan slugs for the customer described in subscription_customer_in. Organization is determined by the Planship API auth token.
     * @summary Create Plan Subscription
     * @param {string} productSlug 
     * @param {string} slug 
     * @param {PlanSubscriptionCreate} planSubscriptionCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public createPlanSubscription(productSlug: string, slug: string, planSubscriptionCreate: PlanSubscriptionCreate, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).createPlanSubscription(productSlug, slug, planSubscriptionCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a product with a given slug in the current organization. Organization is determined by the Planship API auth token.
     * @summary Get Product
     * @param {string} slug 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public getProduct(slug: string, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).getProduct(slug, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the product lever for given product and lever slugs in the current organization. Organization is determined by the Planship API auth token.
     * @summary Get Product Lever
     * @param {string} productSlug 
     * @param {string} slug 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public getProductLever(productSlug: string, slug: string, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).getProductLever(productSlug, slug, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the product plan for given product and lever slugs in the current organization. Organization is determined by the Planship API auth token.
     * @summary Get Product Plan
     * @param {string} productSlug 
     * @param {string} slug 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public getProductPlan(productSlug: string, slug: string, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).getProductPlan(productSlug, slug, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all entitlements for the product plan with given product and plan slugs in the current organization. Organization is determined by the Planship API auth token.
     * @summary Get Product Plan Entitlements
     * @param {string} productSlug 
     * @param {string} slug 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public getProductPlanEntitlements(productSlug: string, slug: string, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).getProductPlanEntitlements(productSlug, slug, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all levers for the product with a given slug in the current organization. Organization is determined by the Planship API auth token.
     * @summary List Product Levers
     * @param {string} slug 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public listProductLevers(slug: string, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).listProductLevers(slug, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all plans for the product with a given slug in the current organization. Organization is determined by the Planship API auth token.
     * @summary List Product Plans
     * @param {string} slug 
     * @param {boolean} [publicOnly] 
     * @param {string} [orderBy] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public listProductPlans(slug: string, publicOnly?: boolean, orderBy?: string, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).listProductPlans(slug, publicOnly, orderBy, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all products in the current organization. Organization is determined by the Planship API auth token.
     * @summary List Products
     * @param {number} [skip] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductsApi
     */
    public listProducts(skip?: number, limit?: number, options?: AxiosRequestConfig) {
        return ProductsApiFp(this.configuration).listProducts(skip, limit, options).then((request) => request(this.axios, this.basePath));
    }
}
