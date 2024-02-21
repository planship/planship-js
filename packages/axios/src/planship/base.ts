import { Configuration, AuthApi, CustomersApi } from '../openapi-gen'

import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

import { BaseAPI } from '../openapi-gen/base'
import {
  OrganizationCustomerCreate,
  CustomerInDbBase,
  CreateCustomerParameters,
  CustomerFromJSON,
  Customer,
  TokenResponse,
  TokenResponseFromJSON,
  PlanshipBaseApi,
  TokenGetter,
  IPlanshipOptions,
  isClientCredentials,
  IClientCredentials
} from '@planship/models'

const MAX_AUTH_RETRIES: number = 3

export class PlanshipBase implements PlanshipBaseApi {
  /** @internal */
  /** @ignore */
  readonly productSlug: string

  private _accessToken: string = ''
  private authRetries: number = 0
  private configuration: Configuration
  private axiosInstance: AxiosInstance = axios.create()
  private clientId: string = ''
  private clientSecret: string = ''
  protected baseUrl: string
  private externalTokenGetter?: TokenGetter = undefined

  constructor(productSlug: string, auth: IClientCredentials | TokenGetter, options?: IPlanshipOptions) {
    this.baseUrl = options?.baseUrl || 'https://api.planship.io'

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
      accessToken: async () => this._getAccessToken(false)
    })
    this.productSlug = productSlug
    this.initializeAxios()
  }

  protected initializeAxios() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response ? error.response.status : null
        if (status === 401 && this.authRetries < MAX_AUTH_RETRIES) {
          this.authRetries++
          return this._getAccessToken(true)
            .then((newToken) => {
              error.config.headers['Authorization'] = `Bearer ${newToken}`
              return this.axiosInstance.request(error.config)
            })
            .catch((error: AxiosError) => Promise.reject(error))
        }
        return Promise.reject(error)
      }
    )
  }

  protected planshipApiInstance<A extends BaseAPI>(
    apiClass: new (configuration: Configuration, basePath: string, axios: AxiosInstance) => A
  ): A {
    return new apiClass(this.configuration, this.baseUrl, this.axiosInstance)
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
    const authAxios: AxiosRequestConfig = {
      auth: { username: this.clientId, password: this.clientSecret }
    }

    return this.planshipApiInstance(AuthApi)
      .getAccessToken(authAxios)
      .then((response: AxiosResponse) => {
        return Promise.resolve(TokenResponseFromJSON(response.data))
      })
  }

  public createCustomer(params?: CreateCustomerParameters): Promise<Customer> {
    const customerIn: OrganizationCustomerCreate = {
      ...params
    }
    return this.planshipApiInstance(CustomersApi)
      .createCustomer(customerIn)
      .then((response: AxiosResponse) => Promise.resolve(CustomerFromJSON(response.data)))
  }

  public getCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi)
      .getCustomer(customerId)
      .then((response: AxiosResponse) => Promise.resolve(response.data.id))
  }

  public deleteCustomer(customerId: string): Promise<CustomerInDbBase> {
    return this.planshipApiInstance(CustomersApi)
      .deleteCustomer(customerId)
      .then((response: AxiosResponse) => Promise.resolve(response.data.id))
  }
}
