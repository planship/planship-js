
import { Configuration, AuthApi } from '../openapi-gen'

import { TokenResponse, TokenResponseFromJSON, PlanshipBaseApi, TokenGetter } from '@planship/models'

import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios'

import { BaseAPI } from '../openapi-gen/base'

export { TokenResponse }

const MAX_AUTH_RETRIES: number = 3

export class PlanshipBase implements PlanshipBaseApi {

  /** @internal */
  /** @ignore */
  readonly productSlug: string

  private _accessToken: string = ""
  private authRetries: number = 0
  private configuration: Configuration
  private axiosInstance: AxiosInstance = axios.create()
  private clientId: string = ""
  private clientSecret: string = ""
  private url: string
  private externalTokenGetter?: TokenGetter = undefined

  constructor(productSlug: string, url: string, clientIdOrTokenGetter: string | TokenGetter, clientSecret: string = "") {
    this.clientSecret = clientSecret
    this.url = url

    if(typeof clientIdOrTokenGetter === 'string') {
      this.clientId = clientIdOrTokenGetter
    } else {
      this.externalTokenGetter = clientIdOrTokenGetter
    }


    this.configuration = new Configuration(
      {
        basePath: this.url,
        username: this.clientId,
        password: this.clientSecret,
        accessToken: async () => this._getAccessToken(false),
      }
    )
    this.productSlug = productSlug
    this.initializeAxios()
  }

  protected initializeAxios() {
    this.axiosInstance.interceptors.response.use(response => response, error => {
      const status = error.response ? error.response.status : null
      if (status === 401 && this.authRetries < MAX_AUTH_RETRIES) {
        this.authRetries++
        return this._getAccessToken(true)
        .then((newToken) => {
          error.config.headers["Authorization"] = `Bearer ${newToken}`
          return this.axiosInstance.request(error.config);
        })
        .catch((error: AxiosError) => Promise.reject(error))
      }
      return Promise.reject(error);
    });
  }

  protected planshipApiInstance<A extends BaseAPI>(apiClass: new (configuration: Configuration, basePath: string, axios: AxiosInstance) => A): A  {
    return new apiClass(this.configuration, this.url, this.axiosInstance)
  }

  protected _getAccessToken = async (forceRefresh: boolean = false) => {
    if (forceRefresh) return this.refreshAccessToken(true);
    if (this._accessToken) return Promise.resolve(this._accessToken);
    return this.refreshAccessToken(false);
  }

  protected refreshAccessToken = async (forceRefresh: boolean) => {
    console.log(`${this.constructor.name}: refreshAccessToken called with forceRefresh=${forceRefresh}`)
    if (this.externalTokenGetter !== undefined) {
      console.log(`${this.constructor.name}: Getting a token via an external getter`)
      return this.externalTokenGetter(forceRefresh).then((accessToken: string) => {
        if (accessToken === undefined)
          return Promise.reject()
        console.log(`${this.constructor.name}: Got a token via an external getter`)
        console.log(accessToken)
        this._accessToken = accessToken
        return Promise.resolve(this._accessToken)
      })
    }
    console.log(`${this.constructor.name}: Getting a token via the exchange`)
    return this.getAccessToken().then((tokenData: TokenResponse) => {
      console.log(`${this.constructor.name}: Got a token via the exchange`)
      this._accessToken = tokenData.accessToken
      console.dir(tokenData)
      return Promise.resolve(this._accessToken)
    })
  }


  public getAccessToken(): Promise<TokenResponse> {

    const authAxios: AxiosRequestConfig = {
      auth: { username: this.clientId, password: this.clientSecret }
    }

    return this.planshipApiInstance(AuthApi).getAccessToken(authAxios)
    .then((response: AxiosResponse) => {
      return Promise.resolve(TokenResponseFromJSON(response.data))
    })
  }
}
