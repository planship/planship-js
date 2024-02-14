# Interface: PlanshipCustomerApi

PlanshipCustomer API client interface

## Hierarchy

- [`PlanshipProductApi`](PlanshipProductApi.md)

  ↳ **`PlanshipCustomerApi`**

## Authentication

### getAccessToken

▸ **getAccessToken**(): `Promise`<[`TokenResponse`](TokenResponse.md)\>

Obtain an access token using a client id/secret pair stored by this instance

#### Returns

`Promise`<[`TokenResponse`](TokenResponse.md)\>

A promise that resolves with a TokenResponse object

#### Inherited from

[PlanshipProductApi](PlanshipProductApi.md).[getAccessToken](PlanshipProductApi.md#getaccesstoken)

## Product

### getPlan

▸ **getPlan**(`planSlug`): `Promise`<[`Plan`](Plan.md)\>

Retrieve detailed information about the plan with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planSlug` | `string` | plan slug |

#### Returns

`Promise`<[`Plan`](Plan.md)\>

A promise that resolves with an instance of the PlanDetails class

#### Inherited from

[PlanshipProductApi](PlanshipProductApi.md).[getPlan](PlanshipProductApi.md#getplan)

___

### getProduct

▸ **getProduct**(): `Promise`<[`Product`](Product.md)\>

Retrieve information about the current product

#### Returns

`Promise`<[`Product`](Product.md)\>

A promise that resolves with an instance of the Product class

#### Inherited from

[PlanshipProductApi](PlanshipProductApi.md).[getProduct](PlanshipProductApi.md#getproduct)

___

### listPlans

▸ **listPlans**(): `Promise`<[`PlanInList`](PlanInList.md)[]\>

Retrieve a list of plans for the current product

#### Returns

`Promise`<[`PlanInList`](PlanInList.md)[]\>

A promise that resolves with a list of ProductItem instances

#### Inherited from

[PlanshipProductApi](PlanshipProductApi.md).[listPlans](PlanshipProductApi.md#listplans)

## Customer

### createCustomer

▸ **createCustomer**(`params?`): `Promise`<[`Customer`](Customer.md)\>

Register a new customer with Planship.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`CreateCustomerParameters`](CreateCustomerParameters.md) |

#### Returns

`Promise`<[`Customer`](Customer.md)\>

A promise that resolves with an instance of the Customer class

#### Inherited from

[PlanshipProductApi](PlanshipProductApi.md).[createCustomer](PlanshipProductApi.md#createcustomer)

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

#### Inherited from

[PlanshipProductApi](PlanshipProductApi.md).[deleteCustomer](PlanshipProductApi.md#deletecustomer)

___

### getCustomer

▸ **getCustomer**(`customerId`): `Promise`<[`CustomerInDbBase`](CustomerInDbBase.md)\>

Get the customer with a given customer id from Planship

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |

#### Returns

`Promise`<[`CustomerInDbBase`](CustomerInDbBase.md)\>

A promise that resolves with the customer object

#### Inherited from

[PlanshipProductApi](PlanshipProductApi.md).[getCustomer](PlanshipProductApi.md#getcustomer)

___

### getEntitlements

▸ **getEntitlements**(`callback?`): `Promise`<[`JSONValue`](../modules.md#jsonvalue)\>

Retrieve all product entitlements

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | [`EntitlementsCallback`](../modules.md#entitlementscallback) | Optional callback for entitlement updates via a WebSockets |

#### Returns

`Promise`<[`JSONValue`](../modules.md#jsonvalue)\>

A promise that resolves with an object containing entitlement values
keyed by lever slugs

___

### getLeverUsage

▸ **getLeverUsage**(`leverSlug`): `Promise`<[`LeverUsage`](LeverUsage.md)\>

Retrieve customer usage data for the metered lever with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `leverSlug` | `string` | lever slug |

#### Returns

`Promise`<[`LeverUsage`](LeverUsage.md)\>

A promise that resolves with CustomerLeverUsage object

___

### getMeteringIdUsage

▸ **getMeteringIdUsage**(`meteringId`): `Promise`<{ `[key: string]`: [`LeverUsage`](LeverUsage.md);  }\>

Retrieve customer usage data for all metered levers with a given metering id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `meteringId` | `string` | metering id |

#### Returns

`Promise`<{ `[key: string]`: [`LeverUsage`](LeverUsage.md);  }\>

A promise that resolves with LeverUsage object

___

### listSubscriptions

▸ **listSubscriptions**(): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)[]\>

List subscription

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)[]\>

A promise that resolves with a list of CustomerSubscriptionWithPlan objects

___

### reportUsage

▸ **reportUsage**(`meteringId`, `usage`, `bucket?`): `Promise`<[`MeteringRecord`](MeteringRecord.md)\>

Report customer usage for a given metering id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `meteringId` | `string` | Metering id string |
| `usage` | `number` | Usage to report |
| `bucket?` | `string` | Optional usage bucket name |

#### Returns

`Promise`<[`MeteringRecord`](MeteringRecord.md)\>

A promise that resolves with a new MeteringRecord

## Subscription

### addSubscriptionCustomer

▸ **addSubscriptionCustomer**(`subscriptionId`, `customerIdToAdd`, `isAdministrator?`, `isSubscriber?`, `metadata?`): `Promise`<[`SubscriptionCustomer`](SubscriptionCustomer.md)\>

Add the existing Planship customer to the existing subscription with a given ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
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

▸ **changeSubscriptionMaxSubscribers**(`subscriptionId`, `maxSubscribers`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Change the maximum allowed number of subscribers for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `maxSubscribers` | `number` | Maximum number of subscribers |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

___

### changeSubscriptionPlan

▸ **changeSubscriptionPlan**(`subscriptionId`, `planSlug`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Change the plan of the subscription with a given id.
The new plan is specified with a given plan slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `planSlug` | `string` | New plan slug |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

___

### changeSubscriptionRenewPlan

▸ **changeSubscriptionRenewPlan**(`subscriptionId`, `renewPlanSlug`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Change the renew plan of the subscription with a given id.
New renew plan is specified with a given plan slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `renewPlanSlug` | `string` | New renew plan slug |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

___

### createSubscription

▸ **createSubscription**(`planSlug`, `options?`): `Promise`<[`SubscriptionWithPlan`](SubscriptionWithPlan.md)\>

Create a new subscription to the plan with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planSlug` | `string` | Plan slug |
| `options?` | [`CreateSubscriptionOptions`](CreateSubscriptionOptions.md) | Additional options |

#### Returns

`Promise`<[`SubscriptionWithPlan`](SubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class

___

### getSubscription

▸ **getSubscription**(`subscriptionId`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Retrieve detailed information about the subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

___

### listSubscriptionCustomers

▸ **listSubscriptionCustomers**(`subscriptionId`): `Promise`<[`SubscriptionCustomer`](SubscriptionCustomer.md)[]\>

Retrieve a list of all customers that belong to the subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`SubscriptionCustomer`](SubscriptionCustomer.md)[]\>

A promise that resolves with a list of SubscriptionCustomer objects

___

### modifySubscription

▸ **modifySubscription**(`subscriptionId`, `params`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Modify the subscription with a given id
New plan, renew plan and maximum subscribers values are passed via params object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `params` | [`ModifySubscriptionParameters`](ModifySubscriptionParameters.md) | Object containing subscription parameters to modify |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

___

### removeSubscriptionCustomer

▸ **removeSubscriptionCustomer**(`subscriptionId`, `customerIdToRemove`): `Promise`<[`SubscriptionCustomerInDbBase`](SubscriptionCustomerInDbBase.md)\>

Remove the Planship customer with a given ID from the subscription with a given ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `customerIdToRemove` | `string` | Id of the planship customer to remove from the subscription |

#### Returns

`Promise`<[`SubscriptionCustomerInDbBase`](SubscriptionCustomerInDbBase.md)\>

A promise that resolves with the id of the customer removed from the subscription

___

### setSubscriptionAutoRenew

▸ **setSubscriptionAutoRenew**(`subscriptionId`, `autoRenew`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Set the autoRenew property for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `autoRenew` | `boolean` | New autoRenew value |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

___

### setSubscriptionIsActive

▸ **setSubscriptionIsActive**(`subscriptionId`, `isActive`): `Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

Set the isActive property for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `isActive` | `boolean` | New isActive value |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object