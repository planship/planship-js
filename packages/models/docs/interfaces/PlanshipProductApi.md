# Interface: PlanshipProductApi

PlanshipProduct API client interface

## Hierarchy

- [`PlanshipBaseApi`](PlanshipBaseApi.md)

  ↳ **`PlanshipProductApi`**

  ↳↳ [`PlanshipApi`](PlanshipApi.md)

  ↳↳ [`PlanshipCustomerApi`](PlanshipCustomerApi.md)

## Authentication

### getAccessToken

▸ **getAccessToken**(): `Promise`\<[`TokenResponse`](TokenResponse.md)\>

Obtain an access token using a client ID/secret pair stored by this instance

#### Returns

`Promise`\<[`TokenResponse`](TokenResponse.md)\>

A promise that resolves with a TokenResponse object

#### Inherited from

[PlanshipBaseApi](PlanshipBaseApi.md).[getAccessToken](PlanshipBaseApi.md#getaccesstoken)

## Product

### getPlan

▸ **getPlan**(`planSlug`): `Promise`\<[`Plan`](Plan.md)\>

Retrieve detailed information about the plan with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planSlug` | `string` | plan slug |

#### Returns

`Promise`\<[`Plan`](Plan.md)\>

A promise that resolves with an instance of the PlanDetails class

___

### getProduct

▸ **getProduct**(): `Promise`\<[`Product`](Product.md)\>

Retrieve information about the current product

#### Returns

`Promise`\<[`Product`](Product.md)\>

A promise that resolves with an instance of the Product class

___

### listPlans

▸ **listPlans**(): `Promise`\<[`PlanInList`](PlanInList.md)[]\>

Retrieve a list of plans for the current product

#### Returns

`Promise`\<[`PlanInList`](PlanInList.md)[]\>

A promise that resolves with a list of ProductItem instances

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

#### Inherited from

[PlanshipBaseApi](PlanshipBaseApi.md).[createCustomer](PlanshipBaseApi.md#createcustomer)

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

#### Inherited from

[PlanshipBaseApi](PlanshipBaseApi.md).[deleteCustomer](PlanshipBaseApi.md#deletecustomer)

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

#### Inherited from

[PlanshipBaseApi](PlanshipBaseApi.md).[getCustomer](PlanshipBaseApi.md#getcustomer)
