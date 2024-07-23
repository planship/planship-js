import { Configuration, AuthApi, BaseAPI, ResponseContext, CustomersApi, ErrorContext } from '../openapi-gen'

import {
  CreateCustomerParameters,
  PlanshipBaseApi,
  TokenGetter,
  TokenResponse,
  Customer,
  OrganizationCustomerCreate,
  CustomerInDbBase,
  isClientCredentials,
  IClientCredentials,
  IPlanshipOptions
} from '@planship/models'

export { PlanshipBaseApi }

const MAX_AUTH_RETRIES: number = 3

/**
 * Planship Base class
 */
export class PlanshipBase implements PlanshipBaseApi {
  /** @internal */
  /** @ignore */
  readonly productSlug: string
  private _accessToken: string = ''
  private authRetries: number = 0

  private configuration: Configuration
  private clientId: string = ''
  private clientSecret: string = ''
  protected readonly baseUrl: string
  private externalTokenGetter?: TokenGetter = undefined
  protected debugLogging: boolean = false

  constructor(productSlug: string, auth: IClientCredentials | TokenGetter, options?: IPlanshipOptions) {
    this.baseUrl = options?.baseUrl || 'https://api.planship.io'
    this.debugLogging = options?.debugLogging || false
    if (isClientCredentials(auth)) {
      this.clientId = (auth as IClientCredentials).clientId
      this.clientSecret = (auth as IClientCredentials).clientSecret
    } else {
      this.externalTokenGetter = auth as TokenGetter
    }

    this.configuration = new Configuration({
      basePath: this.baseUrl,
      username: this.clientId,
      password: this.clientSecret,
      accessToken: async () => {
        const token = await this._getAccessToken(false)
        return `Bearer ${token}`
      },
      fetchApi: options?.extras?.fetchApi,
      middleware: [
        {
          post: this.onPostFetch.bind(this),
          onError: this.onErrorFetch.bind(this)
        }
      ]
    })
    this.productSlug = productSlug
  }

  protected debugLog(message: string) {
    if (this.debugLogging) console.log(`[${this.constructor.name}] ${message}`)
  }

  private async onPostFetch(context: ResponseContext): Promise<Response | void> {
    this.debugLog(`onPostFetch for ${context.url}: ${context.response.status}`)
    if (context.response.status === 401) {
      this.debugLog(`onPostFetch 401 detected, getting a new token, retry #${this.authRetries}`)
      let authRetries = 0
      while (authRetries++ < MAX_AUTH_RETRIES) {
        try {
          const newToken = await this._getAccessToken(true)
          context.init.headers = new Headers(context.init.headers)
          context.init.headers.set('Authorization', `Bearer ${newToken}`)
          this.debugLog(`onPostFetch for ${context.url}: got a new token, retry # ${authRetries}`)
          return context.fetch(context.url, context.init)
        } catch (error) {
          this.debugLog(`Error getting a token: ${error}`)
        }
      }
    }
    return Promise.resolve(context.response)
  }

  private async onErrorFetch(context: ErrorContext): Promise<Response | void> {
    this.debugLog(`onErrorFetch for ${context.url}: ${context.error}`)
    return context.response
  }

  protected planshipApiInstance<A extends BaseAPI>(apiClass: new (configuration: Configuration) => A): A {
    return new apiClass(this.configuration)
  }

  protected _getAccessToken = async (forceRefresh: boolean = false) => {
    this.debugLog(`Call to _getAccessToken, forceRefresh: ${forceRefresh}`)
    if (forceRefresh) return this.refreshAccessToken(true)
    if (this._accessToken) {
      this.debugLog(`Return current _accessToken: ${this._accessToken}`)
      return Promise.resolve(this._accessToken)
    }
    return this.refreshAccessToken(false)
  }

  protected refreshAccessToken = async (forceRefresh: boolean) => {
    this.debugLog(`Call to refreshAccessToken, forceRefresh: ${forceRefresh}`)
    if (this.externalTokenGetter !== undefined) {
      this.debugLog('Calling the external token getter')
      return this.externalTokenGetter(forceRefresh).then((accessToken: string) => {
        if (accessToken === undefined) return Promise.reject()
        this._accessToken = accessToken
        this.debugLog(`Access token from the external getter: ${this._accessToken}`)
        return Promise.resolve(this._accessToken)
      })
    }
    return this.getAccessToken().then((tokenData: TokenResponse) => {
      this._accessToken = tokenData.accessToken
      this.debugLog(`New access token: ${this._accessToken}`)
      return Promise.resolve(this._accessToken)
    })
  }

  public getAccessToken(): Promise<TokenResponse> {
    this.debugLog('Getting access token via Planship API')
    const headers = new Headers({
      Authorization: `Basic ${btoa(this.clientId + ':' + this.clientSecret)}`
    })

    return this.planshipApiInstance(AuthApi).getAccessToken({
      headers: headers,
      cache: 'no-store'
    })
  }

  public createCustomer(params?: CreateCustomerParameters): Promise<Customer> {
    const customerIn: OrganizationCustomerCreate = {
      ...params
    }
    return this.planshipApiInstance(CustomersApi).createCustomer({
      organizationCustomerCreate: customerIn
    })
  }

  public getCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi).getCustomer({
      customerId: customerId
    })
  }

  public deleteCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi).deleteCustomer({
      customerId: customerId
    })
  }
}
