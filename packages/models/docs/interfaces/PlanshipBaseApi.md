# Interface: PlanshipBaseApi

Planship API client base interface

## Hierarchy

- **`PlanshipBaseApi`**

  ↳ [`PlanshipProductApi`](PlanshipProductApi.md)

## Authentication

### getAccessToken

▸ **getAccessToken**(): `Promise`\<[`TokenResponse`](TokenResponse.md)\>

Obtain an access token using a client ID/secret pair stored by this instance

#### Returns

`Promise`\<[`TokenResponse`](TokenResponse.md)\>

A promise that resolves with a TokenResponse object

## Customer

### createCustomer

▸ **createCustomer**(`params?`): `Promise`\<[`Customer`](Customer.md)\>

Register a new customer with Planship.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`CreateCustomerParameters`](CreateCustomerParameters.md) |

#### Returns

`Promise`\<[`Customer`](Customer.md)\>

A promise that resolves with an instance of the Customer class

___

### deleteCustomer

▸ **deleteCustomer**(`customerId`): `Promise`\<[`CustomerInDbBase`](CustomerInDbBase.md)\>

Delete the customer with a given customer IDfrom Planship

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer ID |

#### Returns

`Promise`\<[`CustomerInDbBase`](CustomerInDbBase.md)\>

A promise that resolves with the deleted customer object

___

### getCustomer

▸ **getCustomer**(`customerId`): `Promise`\<[`CustomerInDbBase`](CustomerInDbBase.md)\>

Get the customer with a given customer IDfrom Planship

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer ID |

#### Returns

`Promise`\<[`CustomerInDbBase`](CustomerInDbBase.md)\>

A promise that resolves with the customer object
