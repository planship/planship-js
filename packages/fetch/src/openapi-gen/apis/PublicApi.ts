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
  Plan,
  PlanInList,
} from '../models/index.js';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    PlanFromJSON,
    PlanToJSON,
    PlanInListFromJSON,
    PlanInListToJSON,
} from '../models/index.js';

export interface GetPublicPlanRequest {
    organizationSlug: string;
    productSlug: string;
    planSlug: string;
}

export interface ListPublicPlansRequest {
    organizationSlug: string;
    productSlug: string;
}

/**
 * 
 */
export class PublicApi extends runtime.BaseAPI {

    /**
     * Get Public Plan
     */
    async getPublicPlanRaw(requestParameters: GetPublicPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Plan>> {
        if (requestParameters['organizationSlug'] == null) {
            throw new runtime.RequiredError(
                'organizationSlug',
                'Required parameter "organizationSlug" was null or undefined when calling getPublicPlan().'
            );
        }

        if (requestParameters['productSlug'] == null) {
            throw new runtime.RequiredError(
                'productSlug',
                'Required parameter "productSlug" was null or undefined when calling getPublicPlan().'
            );
        }

        if (requestParameters['planSlug'] == null) {
            throw new runtime.RequiredError(
                'planSlug',
                'Required parameter "planSlug" was null or undefined when calling getPublicPlan().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/public/{organization_slug}/{product_slug}/plans/{plan_slug}`.replace(`{${"organization_slug"}}`, encodeURIComponent(String(requestParameters['organizationSlug']))).replace(`{${"product_slug"}}`, encodeURIComponent(String(requestParameters['productSlug']))).replace(`{${"plan_slug"}}`, encodeURIComponent(String(requestParameters['planSlug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlanFromJSON(jsonValue));
    }

    /**
     * Get Public Plan
     */
    async getPublicPlan(requestParameters: GetPublicPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Plan> {
        const response = await this.getPublicPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List Public Plans
     */
    async listPublicPlansRaw(requestParameters: ListPublicPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PlanInList>>> {
        if (requestParameters['organizationSlug'] == null) {
            throw new runtime.RequiredError(
                'organizationSlug',
                'Required parameter "organizationSlug" was null or undefined when calling listPublicPlans().'
            );
        }

        if (requestParameters['productSlug'] == null) {
            throw new runtime.RequiredError(
                'productSlug',
                'Required parameter "productSlug" was null or undefined when calling listPublicPlans().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/public/{organization_slug}/{product_slug}/plans`.replace(`{${"organization_slug"}}`, encodeURIComponent(String(requestParameters['organizationSlug']))).replace(`{${"product_slug"}}`, encodeURIComponent(String(requestParameters['productSlug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlanInListFromJSON));
    }

    /**
     * List Public Plans
     */
    async listPublicPlans(requestParameters: ListPublicPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PlanInList>> {
        const response = await this.listPublicPlansRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
