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


/**
 * An enumeration.
 * @export
 */
export const TimeUnits = {
    Minute: 'minute',
    Hour: 'hour',
    Day: 'day',
    Week: 'week',
    Month: 'month',
    Year: 'year',
    Perpetual: 'perpetual'
} as const;
export type TimeUnits = typeof TimeUnits[keyof typeof TimeUnits];


export function TimeUnitsFromJSON(json: any): TimeUnits {
    return TimeUnitsFromJSONTyped(json, false);
}

export function TimeUnitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeUnits {
    return json as TimeUnits;
}

export function TimeUnitsToJSON(value?: TimeUnits | null): any {
    return value as any;
}

