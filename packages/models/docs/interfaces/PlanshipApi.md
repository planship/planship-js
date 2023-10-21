# Interface: PlanshipApi

Planship API client interface

## Hierarchy

- [`PlanshipBaseApi`](PlanshipBaseApi.md)

  ↳ **`PlanshipApi`**

## Authentication

### getAccessToken

▸ **getAccessToken**(): `Promise`<[`TokenResponse`](TokenResponse.md)\>

Obtain an access token using a client id/secret pair stored by this instance

#### Returns

`Promise`<[`TokenResponse`](TokenResponse.md)\>

A promise that resolves with a TokenResponse object

#### Inherited from

[PlanshipBaseApi](PlanshipBaseApi.md).[getAccessToken](PlanshipBaseApi.md#getaccesstoken)

## Product

### getPlan

▸ **getPlan**(`planSlug`): `Promise`<[`Plan`](Plan.md)\>

Retrieve detailed information about the plan with a given slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planSlug` | `string` | plan slug |

#### Returns

`Promise`<[`Plan`](Plan.md)\>

A promise that resolves with an instance of the PlanDetails class

___

### getProduct

▸ **getProduct**(): `Promise`<[`Product`](Product.md)\>

Retrieve information about the current product

#### Returns

`Promise`<[`Product`](Product.md)\>

A promise that resolves with an instance of the Product class

___

### listPlans

▸ **listPlans**(): `Promise`<[`PlanInList`](PlanInList.md)[]\>

Retrieve a list of plans for the current product

#### Returns

`Promise`<[`PlanInList`](PlanInList.md)[]\>

A promise that resolves with a list of ProductItem instances

## Customer

### createCustomer

▸ **createCustomer**(`name?`, `email?`, `metadata?`): `Promise`<[`Customer`](Customer.md)\>

Register a new customer with Planship.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Customer name |
| `email?` | `string` | Customer email address |
| `metadata?` | `object` | Customer metadata |

#### Returns

`Promise`<[`Customer`](Customer.md)\>

A promise that resolves with an instance of the Customer class

___

### createCustomerWithAlternativeId

▸ **createCustomerWithAlternativeId**(`alternativeId?`, `name?`, `email?`, `metadata?`): `Promise`<[`Customer`](Customer.md)\>

Register a new customer with Planship.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alternativeId?` | `string` | Customer alternative ID |
| `name?` | `string` | Customer name |
| `email?` | `string` | Customer email address |
| `metadata?` | `object` | Customer metadata |

#### Returns

`Promise`<[`Customer`](Customer.md)\>

A promise that resolves with an instance of the Customer class

___

### createSubscription

▸ **createSubscription**(`customerId`, `planSlug`, `isSubscriber?`, `metadata?`): `Promise`<[`SubscriptionWithPlan`](SubscriptionWithPlan.md)\>

Create a new subscription to the plan with a given slug for the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `planSlug` | `string` | Plan slug |
| `isSubscriber?` | `boolean` | Optional flag to specify if the customer is the subscriber of the subscription (default: true) |
| `metadata?` | `object` | Optional metadata to be stored in the subscription |

#### Returns

`Promise`<[`SubscriptionWithPlan`](SubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class

___

### deleteCustomer

▸ **deleteCustomer**(`customerId`): `Promise`<[`CustomerInDbBase`](CustomerInDbBase.md)\>

Delete the customer with a given customer id from Planship

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |

#### Returns

`Promise`<[`CustomerInDbBase`](CustomerInDbBase.md)\>

A promise that resolves with the deleted customer object

___

### getEntitlements

▸ **getEntitlements**(`customerId`): `Promise`<[`JSONValue`](../modules.md#jsonvalue)\>

Retrieve all product entitlements for the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |

#### Returns

`Promise`<[`JSONValue`](../modules.md#jsonvalue)\>

A promise that resolves with an object containing entitlement values
keyed by resource slugs

___

### getLeverUsage

▸ **getLeverUsage**(`customerId`, `leverSlug`): `Promise`<[`LeverUsage`](LeverUsage.md)\>

Retrieve customer usage data for the metered resource with a given if

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `leverSlug` | `string` | lever slug |

#### Returns

`Promise`<[`LeverUsage`](LeverUsage.md)\>

A promise that resolves with CustomerLeverUsage object

___

### getMeteringIdUsage

▸ **getMeteringIdUsage**(`customerId`, `meteringId`): `Promise`<{ `[key: string]`: [`LeverUsage`](LeverUsage.md);  }\>

Retrieve customer usage data for all metered resources with a given metering id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `meteringId` | `string` | metering id |

#### Returns

`Promise`<{ `[key: string]`: [`LeverUsage`](LeverUsage.md);  }\>

A promise that resolves with LeverUsage object

___

### listSubscriptions

▸ **listSubscriptions**(`customerId`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)[]\>

List subscription the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)[]\>

A promise that resolves with a list of CustomerSubscriptionWithPlan objects

___

### reportUsage

▸ **reportUsage**(`customerId`, `meteringId`, `usage`, `bucket?`): `Promise`<[`MeteringRecord`](MeteringRecord.md)\>

Report customer usage for the metered resource with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `meteringId` | `string` | Metering id string |
| `usage` | `number` | Usage to report |
| `bucket?` | `string` | Optional usage bucket name |

#### Returns

`Promise`<[`MeteringRecord`](MeteringRecord.md)\>

A promise that resolves with a new MeteringRecord

## Subscription

### addSubscriptionCustomer

▸ **addSubscriptionCustomer**(`customerId`, `subscriptionId`, `customerIdToAdd`, `isAdministrator?`, `isSubscriber?`, `metadata?`): `Promise`<[`SubscriptionCustomer`](SubscriptionCustomer.md)\>

Add the existing Planship customer to the existing subscription

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Id of the planship customer performing this operation |
| `subscriptionId` | `string` | Planship subscription id |
| `customerIdToAdd` | `string` | Id of the planship customer to add to the subscription |
| `isAdministrator?` | `boolean` | Optional flag to specify if the added customer is the administrator of the subscription (default: false) |
| `isSubscriber?` | `boolean` | Optional flag to specify if the added customer is the subscriber of the subscription (default: true) |
| `metadata?` | `object` | Optional metadata to store for the new customer on the subscription |

#### Returns

`Promise`<[`SubscriptionCustomer`](SubscriptionCustomer.md)\>

A promises that resolves with the SubscriptionCustomer object

___

### changeSubscriptionMaxSubscribers

▸ **changeSubscriptionMaxSubscribers**(`customerId`, `subscriptionId`, `maxSubscribers`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Change the maximum allowed number of subscribers for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Id of the planship customer performing this operation |
| `subscriptionId` | `string` | Planship subscription id |
| `maxSubscribers` | `number` | Maximum number of subscribers |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

___

### changeSubscriptionPlan

▸ **changeSubscriptionPlan**(`customerId`, `subscriptionId`, `planSlug`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Change the plan of the subscription with a given id for the customer with a given id.
The new plan is specified with a given plan slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |
| `planSlug` | `string` | New plan slug |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

___

### changeSubscriptionRenewPlan

▸ **changeSubscriptionRenewPlan**(`customerId`, `subscriptionId`, `renewPlanSlug`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Change the renew plan of the subscription with a given id for the customer with a given id.
New renew plan is specified with a given plan slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |
| `renewPlanSlug` | `string` | New renew plan slug |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

___

### deleteSubscription

▸ **deleteSubscription**(`customerId`, `subscriptionId`): `Promise`<[`SubscriptionInDbBase`](SubscriptionInDbBase.md)\>

Delete the subscription with a given id for the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`SubscriptionInDbBase`](SubscriptionInDbBase.md)\>

A promise that resolves with the deleted subscription obkect

___

### getSubscription

▸ **getSubscription**(`customerId`, `subscriptionId`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Retrieve detailed information about the subscription with a given id for the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

___

### listSubscriptionCustomers

▸ **listSubscriptionCustomers**(`customerId`, `subscriptionId`): `Promise`<[`SubscriptionCustomer`](SubscriptionCustomer.md)[]\>

Retrieve a list of all customers that belong to the subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`SubscriptionCustomer`](SubscriptionCustomer.md)[]\>

A promise that resolves with a list of SubscriptionCustomer objects

___

### modifySubscription

▸ **modifySubscription**(`customerId`, `subscriptionId`, `params`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Modify the subscription with a given id for the customer with a given id.
New plan, renew plan and maximum subscribers values are passed via params object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |
| `params` | [`ModifySubscriptionParameters`](ModifySubscriptionParameters.md) | Object containing new plan, renew plan and max subscribers values |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

___

### removeSubscriptionCustomer

▸ **removeSubscriptionCustomer**(`customerId`, `subscriptionId`, `customerIdToRemove`): `Promise`<[`SubscriptionCustomerInDbBase`](SubscriptionCustomerInDbBase.md)\>

Remove the Planship customer from the subscription

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Id of the planship customer performing this operation |
| `subscriptionId` | `string` | Planship subscription id |
| `customerIdToRemove` | `string` | Id of the planship customer to remove from the subscription |

#### Returns

`Promise`<[`SubscriptionCustomerInDbBase`](SubscriptionCustomerInDbBase.md)\>

A promise that resolves with the id of the customer removed from the subscription
