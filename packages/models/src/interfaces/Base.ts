import { TokenResponse } from '../openapi-gen/models'

/**
 * Planship API client base interface
*/
export interface PlanshipBaseApi {

  /**
   * Obtain an access token using a client id/secret pair stored by this instance
   * @group Authentication
   * 
   * @returns A promise that resolves with a TokenResponse object
   */
  getAccessToken(): Promise<TokenResponse>;
}
