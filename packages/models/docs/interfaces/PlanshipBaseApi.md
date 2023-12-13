# Interface: PlanshipBaseApi

Planship API client base interface

## Hierarchy

- **`PlanshipBaseApi`**

  ↳ [`PlanshipApi`](PlanshipApi.md)

## Authentication

### getAccessToken

▸ **getAccessToken**(): `Promise`<[`TokenResponse`](TokenResponse.md)\>

Obtain an access token using a client id/secret pair stored by this instance

#### Returns

`Promise`<[`TokenResponse`](TokenResponse.md)\>

A promise that resolves with a TokenResponse object
