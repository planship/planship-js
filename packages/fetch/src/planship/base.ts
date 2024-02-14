import { Configuration, AuthApi, BaseAPI, FetchAPI, ResponseContext, CustomersApi } from '../openapi-gen'

import {
  CreateCustomerParameters,
  PlanshipBaseApi,
  TokenGetter,
  TokenResponse,
  Customer,
  OrganizationCustomerCreate,
  CustomerInDbBase
} from '@planship/models'

export { PlanshipBaseApi, TokenResponse }

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
  protected readonly url: string
  private externalTokenGetter?: TokenGetter

  /**
   * Create a new instance
   * @param {PlanshipBaseParameters} param [description]
   */
  constructor(
    productSlug: string,
    url: string,
    clientIdOrGetAccessToken: string | TokenGetter,
    secretOrFetchApi?: string | FetchAPI,
    fetchApi?: FetchAPI
  ) {
    this.url = url

    if (typeof clientIdOrGetAccessToken === 'string') {
      this.clientId = clientIdOrGetAccessToken
    } else {
      this.externalTokenGetter = clientIdOrGetAccessToken
    }

    if (typeof secretOrFetchApi === 'string') {
      this.clientSecret = secretOrFetchApi
    } else {
      fetchApi = secretOrFetchApi
    }

    this.configuration = new Configuration({
      basePath: this.url,
      username: this.clientId,
      password: this.clientSecret,
      accessToken: async () => {
        const token = await this._getAccessToken(false)
        return `Bearer ${token}`
      },
      fetchApi,
      middleware: [
        {
          post: this.onPostFetch.bind(this)
        }
      ]
    })
    this.productSlug = productSlug
  }

  private async onPostFetch(context: ResponseContext): Promise<Response | void> {
    if (context.response.status === 401 && this.authRetries < MAX_AUTH_RETRIES) {
      this.authRetries++
      return this._getAccessToken(true)
        .then((newToken) => {
          context.init.headers = new Headers(context.init.headers)
          context.init.headers.set('Authorization', `Bearer ${newToken}`)
          return context.fetch(context.url, context.init)
        })
        .catch((error) => Promise.reject(error))
    }
    return Promise.resolve(context.response)
  }

  protected planshipApiInstance<A extends BaseAPI>(apiClass: new (configuration: Configuration) => A): A {
    return new apiClass(this.configuration)
  }

  protected _getAccessToken = async (forceRefresh: boolean = false) => {
    if (forceRefresh) return this.refreshAccessToken(true)
    if (this._accessToken) return Promise.resolve(this._accessToken)
    return this.refreshAccessToken(false)
  }

  protected refreshAccessToken = async (forceRefresh: boolean) => {
    if (this.externalTokenGetter !== undefined) {
      return this.externalTokenGetter(forceRefresh).then((accessToken: string) => {
        if (accessToken === undefined) return Promise.reject()
        this._accessToken = accessToken
        return Promise.resolve(this._accessToken)
      })
    }
    return this.getAccessToken().then((tokenData: TokenResponse) => {
      this._accessToken = tokenData.accessToken
      return Promise.resolve(this._accessToken)
    })
  }

  public getAccessToken(): Promise<TokenResponse> {
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
