# Class: PlanshipCustomer

Planship Customer API client class

## Hierarchy

- `PlanshipProduct`

  ↳ **`PlanshipCustomer`**

## Implements

- [`PlanshipCustomerApi`](../interfaces/PlanshipCustomerApi.md)

## Constructors

### constructor

• **new PlanshipCustomer**(`productSlug`, `customerId`, `url`, `getAccessToken`, `webSocketUrl?`)

Create a Planship Customer API client that uses an authentication token from an external authentication flow.
This client instance is client-side (browser) safe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productSlug` | `string` | product slug |
| `customerId` | `string` | Customer ID |
| `url` | `string` | Planship API server URL |
| `getAccessToken` | `TokenGetter` | function that returns a Promise that resolves with a Planship access token for a given clientId |
| `webSocketUrl?` | `string` | (optional) override the websocket URL |

#### Overrides

PlanshipProduct.constructor

• **new PlanshipCustomer**(`productSlug`, `customerId`, `url`, `clientId`, `clientSecret`, `webSocketUrl?`)

Create a Planship Customer API client that uses client id and secret to obtain an access token
via the client credentials OAuth2 exchange with the Planship auth endpoint.
This client instance should be used only where the Planship client secret can be securely stored.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productSlug` | `string` | product slug |
| `customerId` | `string` | Customer ID |
| `url` | `string` | Planship API server URL |
| `clientId` | `string` | Planship API client ID |
| `clientSecret` | `string` | Planship API client secret |
| `webSocketUrl?` | `string` | (optional) override the websocket URL |

#### Overrides

PlanshipProduct.constructor

## Methods

### addSubscriptionCustomer

▸ **addSubscriptionCustomer**(`subscriptionId`, `customerIdToAdd`, `isAdministrator?`, `isSubscriber?`, `metadata?`): `Promise`<[`SubscriptionCustomer`](../interfaces/SubscriptionCustomer.md)\>

Add the existing Planship customer to the existing subscription with a given ID

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `subscriptionId` | `string` | `undefined` | Planship subscription id |
| `customerIdToAdd` | `string` | `undefined` | Id of the planship customer to add to the subscription |
| `isAdministrator` | `boolean` | `false` | Optional flag to specify if the added customer is the administrator of the subscription (default: false) |
| `isSubscriber` | `boolean` | `true` | Optional flag to specify if the added customer is the subscriber of the subscription (default: true) |
| `metadata?` | `object` | `undefined` | Optional metadata to store for the new customer on the subscription |

#### Returns

`Promise`<[`SubscriptionCustomer`](../interfaces/SubscriptionCustomer.md)\>

A promises that resolves with the SubscriptionCustomer object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[addSubscriptionCustomer](../interfaces/PlanshipCustomerApi.md#addsubscriptioncustomer)

___

### changeSubscriptionMaxSubscribers

▸ **changeSubscriptionMaxSubscribers**(`subscriptionId`, `maxSubscribers`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Change the maximum allowed number of subscribers for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `maxSubscribers` | `number` | Maximum number of subscribers |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[changeSubscriptionMaxSubscribers](../interfaces/PlanshipCustomerApi.md#changesubscriptionmaxsubscribers)

___

### changeSubscriptionPlan

▸ **changeSubscriptionPlan**(`subscriptionId`, `planSlug`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Change the plan of the subscription with a given id.
The new plan is specified with a given plan slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `planSlug` | `string` | New plan slug |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[changeSubscriptionPlan](../interfaces/PlanshipCustomerApi.md#changesubscriptionplan)

___

### changeSubscriptionRenewPlan

▸ **changeSubscriptionRenewPlan**(`subscriptionId`, `renewPlanSlug`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Change the renew plan of the subscription with a given id.
New renew plan is specified with a given plan slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `renewPlanSlug` | `string` | New renew plan slug |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[changeSubscriptionRenewPlan](../interfaces/PlanshipCustomerApi.md#changesubscriptionrenewplan)

___

### createCustomer

▸ **createCustomer**(`params?`): `Promise`<[`Customer`](../interfaces/Customer.md)\>

Register a new customer with Planship.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `CreateCustomerParameters` |

#### Returns

`Promise`<[`Customer`](../interfaces/Customer.md)\>

A promise that resolves with an instance of the Customer class

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[createCustomer](../interfaces/PlanshipCustomerApi.md#createcustomer)

#### Inherited from

PlanshipProduct.createCustomer

___

### createSubscription

▸ **createSubscription**(`planSlug`, `options?`): `Promise`<[`SubscriptionWithPlan`](../interfaces/SubscriptionWithPlan.md)\>

Create a new subscription to the plan with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planSlug` | `string` | Plan slug |
| `options?` | [`CreateSubscriptionOptions`](../interfaces/CreateSubscriptionOptions.md) | Additional options |

#### Returns

`Promise`<[`SubscriptionWithPlan`](../interfaces/SubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[createSubscription](../interfaces/PlanshipCustomerApi.md#createsubscription)

___

### deleteCustomer

▸ **deleteCustomer**(`customerId`): `Promise`<`CustomerInDbBase`\>

Delete the customer with a given customer id from Planship

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |

#### Returns

`Promise`<`CustomerInDbBase`\>

A promise that resolves with the deleted customer object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[deleteCustomer](../interfaces/PlanshipCustomerApi.md#deletecustomer)

#### Inherited from

PlanshipProduct.deleteCustomer

___

### getAccessToken

▸ **getAccessToken**(): `Promise`<[`TokenResponse`](../interfaces/TokenResponse.md)\>

Obtain an access token using a client id/secret pair stored by this instance

#### Returns

`Promise`<[`TokenResponse`](../interfaces/TokenResponse.md)\>

A promise that resolves with a TokenResponse object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[getAccessToken](../interfaces/PlanshipCustomerApi.md#getaccesstoken)

#### Inherited from

PlanshipProduct.getAccessToken

___

### getCustomer

▸ **getCustomer**(`customerId`): `Promise`<`CustomerInDbBase`\>

Get the customer with a given customer id from Planship

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |

#### Returns

`Promise`<`CustomerInDbBase`\>

A promise that resolves with the customer object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[getCustomer](../interfaces/PlanshipCustomerApi.md#getcustomer)

#### Inherited from

PlanshipProduct.getCustomer

___

### getEntitlements

▸ **getEntitlements**(`callback?`): `Promise`<[`JSONValue`](../modules.md#jsonvalue)\>

Retrieve all product entitlements

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | `EntitlementsCallback` | Optional callback for entitlement updates via a WebSockets |

#### Returns

`Promise`<[`JSONValue`](../modules.md#jsonvalue)\>

A promise that resolves with an object containing entitlement values
keyed by lever slugs

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[getEntitlements](../interfaces/PlanshipCustomerApi.md#getentitlements)

___

### getLeverUsage

▸ **getLeverUsage**(`leverSlug`): `Promise`<[`LeverUsage`](../interfaces/LeverUsage.md)\>

Retrieve customer usage data for the metered lever with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `leverSlug` | `string` | lever slug |

#### Returns

`Promise`<[`LeverUsage`](../interfaces/LeverUsage.md)\>

A promise that resolves with CustomerLeverUsage object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[getLeverUsage](../interfaces/PlanshipCustomerApi.md#getleverusage)

___

### getMeteringIdUsage

▸ **getMeteringIdUsage**(`meteringId`): `Promise`<{ `[key: string]`: [`LeverUsage`](../interfaces/LeverUsage.md);  }\>

Retrieve customer usage data for all metered levers with a given metering id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `meteringId` | `string` | metering id |

#### Returns

`Promise`<{ `[key: string]`: [`LeverUsage`](../interfaces/LeverUsage.md);  }\>

A promise that resolves with LeverUsage object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[getMeteringIdUsage](../interfaces/PlanshipCustomerApi.md#getmeteringidusage)

___

### getPlan

▸ **getPlan**(`planSlug`): `Promise`<[`PlanDetails`](../interfaces/PlanDetails.md)\>

Retrieve detailed information about the plan with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planSlug` | `string` | plan slug |

#### Returns

`Promise`<[`PlanDetails`](../interfaces/PlanDetails.md)\>

A promise that resolves with an instance of the PlanDetails class

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[getPlan](../interfaces/PlanshipCustomerApi.md#getplan)

#### Inherited from

PlanshipProduct.getPlan

___

### getProduct

▸ **getProduct**(): `Promise`<[`Product`](../interfaces/Product.md)\>

Retrieve information about the current product

#### Returns

`Promise`<[`Product`](../interfaces/Product.md)\>

A promise that resolves with an instance of the Product class

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[getProduct](../interfaces/PlanshipCustomerApi.md#getproduct)

#### Inherited from

PlanshipProduct.getProduct

___

### getSubscription

▸ **getSubscription**(`subscriptionId`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Retrieve detailed information about the subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[getSubscription](../interfaces/PlanshipCustomerApi.md#getsubscription)

___

### listPlans

▸ **listPlans**(): `Promise`<[[`Plan`](../interfaces/Plan.md)]\>

Retrieve a list of plans for the current product

#### Returns

`Promise`<[[`Plan`](../interfaces/Plan.md)]\>

A promise that resolves with a list of ProductItem instances

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[listPlans](../interfaces/PlanshipCustomerApi.md#listplans)

#### Inherited from

PlanshipProduct.listPlans

___

### listSubscriptionCustomers

▸ **listSubscriptionCustomers**(`subscriptionId`): `Promise`<[`SubscriptionCustomer`](../interfaces/SubscriptionCustomer.md)[]\>

Retrieve a list of all customers that belong to the subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`SubscriptionCustomer`](../interfaces/SubscriptionCustomer.md)[]\>

A promise that resolves with a list of SubscriptionCustomer objects

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[listSubscriptionCustomers](../interfaces/PlanshipCustomerApi.md#listsubscriptioncustomers)

___

### listSubscriptions

▸ **listSubscriptions**(): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)[]\>

List subscription

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)[]\>

A promise that resolves with a list of CustomerSubscriptionWithPlan objects

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[listSubscriptions](../interfaces/PlanshipCustomerApi.md#listsubscriptions)

___

### modifySubscription

▸ **modifySubscription**(`subscriptionId`, `params`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Modify the subscription with a given id
New plan, renew plan and maximum subscribers values are passed via params object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `params` | [`ModifySubscriptionParameters`](../interfaces/ModifySubscriptionParameters.md) | Object containing subscription parameters to modify |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[modifySubscription](../interfaces/PlanshipCustomerApi.md#modifysubscription)

___

### removeSubscriptionCustomer

▸ **removeSubscriptionCustomer**(`subscriptionId`, `customerIdToRemove`): `Promise`<`SubscriptionCustomerInDbBase`\>

Remove the Planship customer with a given ID from the subscription with a given ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `customerIdToRemove` | `string` | Id of the planship customer to remove from the subscription |

#### Returns

`Promise`<`SubscriptionCustomerInDbBase`\>

A promise that resolves with the id of the customer removed from the subscription

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[removeSubscriptionCustomer](../interfaces/PlanshipCustomerApi.md#removesubscriptioncustomer)

___

### reportUsage

▸ **reportUsage**(`meteringId`, `usage`, `bucket?`): `Promise`<[`MeteringRecord`](../interfaces/MeteringRecord.md)\>

Report customer usage for a given metering id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `meteringId` | `string` | Metering id string |
| `usage` | `number` | Usage to report |
| `bucket?` | `string` | Optional usage bucket name |

#### Returns

`Promise`<[`MeteringRecord`](../interfaces/MeteringRecord.md)\>

A promise that resolves with a new MeteringRecord

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[reportUsage](../interfaces/PlanshipCustomerApi.md#reportusage)

___

### setSubscriptionAutoRenew

▸ **setSubscriptionAutoRenew**(`subscriptionId`, `autoRenew`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Set the autoRenew property for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `autoRenew` | `boolean` | New autoRenew value |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[setSubscriptionAutoRenew](../interfaces/PlanshipCustomerApi.md#setsubscriptionautorenew)

___

### setSubscriptionIsActive

▸ **setSubscriptionIsActive**(`subscriptionId`, `isActive`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Set the isActive property for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionId` | `string` | Planship subscription id |
| `isActive` | `boolean` | New isActive value |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

#### Implementation of

[PlanshipCustomerApi](../interfaces/PlanshipCustomerApi.md).[setSubscriptionIsActive](../interfaces/PlanshipCustomerApi.md#setsubscriptionisactive)
