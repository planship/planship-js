/**
 *
 * @export
 * @type Entitlements
 */
export type Entitlements = { [x: string]: string | number | boolean | Array<string | number | boolean> }

/**
 *
 * @export
 * @type TokenGetter
 */
export type TokenGetter = (forceRefresh?: boolean) => Promise<string>

/**
 *
 * @export
 * @type EntitlementsCallback
 */
export type EntitlementsCallback = (entitlements: Entitlements) => void

/**
 * Client credentials
 */
export interface IClientCredentials {
  /**
   * Planship API client ID
   * @type {string}
   */
  clientId: string

  /**
   * Planship API client secret
   * @type {string}
   */
  clientSecret: string
}

export function isClientCredentials(obj: any) {
  return typeof obj?.clientId === 'string' && typeof obj?.clientSecret === 'string'
}

/**
 * Planship options
 */
export interface IPlanshipOptions {
  /**
   * Custom URL for the Planship API. Default: https://api.planship.io
   * @type {string}
   */
  baseUrl?: string

  /**
   * Custom URL for the Planship API WebSocket. Default: wss://websockets-api.planship.io
   * @type {string}
   */
  webSocketUrl?: string

  /**
   * Enable/disable debug logging. Default: false
   * @type {boolean}
   */
  debugLogging?: boolean

  /**
   * Optional extra params e.g. custom provided FetchAPI
   * @type {  { [x: string]: any } }
   */
  extras?: { [x: string]: any }
}
