# Class: Planship

Planship API client

## Hierarchy

- `PlanshipBase`

  ↳ **`Planship`**

## Implements

- [`PlanshipApi`](../interfaces/PlanshipApi.md)

## Constructors

### constructor

• **new Planship**(`productSlug`, `url`, `getAccessToken`, `webSocketUrl?`)

Create a Planship API client that uses an authentication token from an external authentication flow.
This client instance is client-side (browser) safe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productSlug` | `string` | product slug |
| `url` | `string` | Planship API server URL |
| `getAccessToken` | `TokenGetter` | function that returns a Promise that resolves with a Planship access token for a given clientId |
| `webSocketUrl?` | `string` | (optional) override the websocket URL |

#### Overrides

PlanshipBase.constructor

• **new Planship**(`productSlug`, `url`, `getAccessToken`, `fetchApi?`, `webSocketUrl?`)

Create a Planship API client that uses an authentication token from an external authentication flow.
This client instance is client-side (browser) safe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productSlug` | `string` | product slug |
| `url` | `string` | Planship API server URL |
| `getAccessToken` | `TokenGetter` | function that returns a Promise that resolves with a Planship access token for a given clientId |
| `fetchApi?` | (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\> | (optional) override the default fetch implementation |
| `webSocketUrl?` | `string` | (optional) override the websocket URL |

#### Overrides

PlanshipBase.constructor

• **new Planship**(`productSlug`, `url`, `clientId`, `clientSecret`, `webSocketUrl?`)

Create a Planship API client that uses client id and secret to obtain an access token
via the client credentials OAuth2 exchange with the Planship auth endpoint.
This client instance should be used only where the Planship client secret can be securely stored.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productSlug` | `string` | product slug |
| `url` | `string` | Planship API server URL |
| `clientId` | `string` | Planship API client ID |
| `clientSecret` | `string` | Planship API client secret |
| `webSocketUrl?` | `string` | (optional) override the websocket URL |

#### Overrides

PlanshipBase.constructor

• **new Planship**(`productSlug`, `url`, `clientId`, `clientSecret`, `fetchApi?`, `webSocketUrl?`)

Create a Planship API client that uses client id and secret to obtain an access token
via the client credentials OAuth2 exchange with the Planship auth endpoint.
This client instance should be used only where the Planship client secret can be securely stored.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `productSlug` | `string` | product slug |
| `url` | `string` | Planship API server URL |
| `clientId` | `string` | Planship API client ID |
| `clientSecret` | `string` | Planship API client secret |
| `fetchApi?` | (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\> | (optional) override the default fetch implementation |
| `webSocketUrl?` | `string` | (optional) override the websocket URL |

#### Overrides

PlanshipBase.constructor

## Methods

### addSubscriptionCustomer

▸ **addSubscriptionCustomer**(`customerId`, `subscriptionId`, `customerIdToAdd`, `isAdministrator?`, `isSubscriber?`, `metadata?`): `Promise`<[`SubscriptionCustomer`](../interfaces/SubscriptionCustomer.md)\>

Add the existing Planship customer to the existing subscription

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `customerId` | `string` | `undefined` | Id of the planship customer performing this operation |
| `subscriptionId` | `string` | `undefined` | Planship subscription id |
| `customerIdToAdd` | `string` | `undefined` | Id of the planship customer to add to the subscription |
| `isAdministrator` | `boolean` | `false` | Optional flag to specify if the added customer is the administrator of the subscription (default: false) |
| `isSubscriber` | `boolean` | `true` | Optional flag to specify if the added customer is the subscriber of the subscription (default: true) |
| `metadata?` | `object` | `undefined` | Optional metadata to store for the new customer on the subscription |

#### Returns

`Promise`<[`SubscriptionCustomer`](../interfaces/SubscriptionCustomer.md)\>

A promises that resolves with the SubscriptionCustomer object

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[addSubscriptionCustomer](../interfaces/PlanshipApi.md#addsubscriptioncustomer)

___

### changeSubscriptionMaxSubscribers

▸ **changeSubscriptionMaxSubscribers**(`customerId`, `subscriptionId`, `maxSubscribers`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Change the maximum allowed number of subscribers for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Id of the planship customer performing this operation |
| `subscriptionId` | `string` | Planship subscription id |
| `maxSubscribers` | `number` | Maximum number of subscribers |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[changeSubscriptionMaxSubscribers](../interfaces/PlanshipApi.md#changesubscriptionmaxsubscribers)

___

### changeSubscriptionPlan

▸ **changeSubscriptionPlan**(`customerId`, `subscriptionId`, `planSlug`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Change the plan of the subscription with a given id for the customer with a given id.
The new plan is specified with a given plan slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |
| `planSlug` | `string` | New plan slug |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[changeSubscriptionPlan](../interfaces/PlanshipApi.md#changesubscriptionplan)

___

### changeSubscriptionRenewPlan

▸ **changeSubscriptionRenewPlan**(`customerId`, `subscriptionId`, `renewPlanSlug`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Change the renew plan of the subscription with a given id for the customer with a given id.
New renew plan is specified with a given plan slug.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |
| `renewPlanSlug` | `string` | New renew plan slug |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[changeSubscriptionRenewPlan](../interfaces/PlanshipApi.md#changesubscriptionrenewplan)

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

[PlanshipApi](../interfaces/PlanshipApi.md).[createCustomer](../interfaces/PlanshipApi.md#createcustomer)

___

### createSubscription

▸ **createSubscription**(`customerId`, `planSlug`, `options?`): `Promise`<[`SubscriptionWithPlan`](../interfaces/SubscriptionWithPlan.md)\>

Create a new subscription to the plan with a given slug for the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `planSlug` | `string` | Plan slug |
| `options?` | [`CreateSubscriptionOptions`](../interfaces/CreateSubscriptionOptions.md) | Additional options |

#### Returns

`Promise`<[`SubscriptionWithPlan`](../interfaces/SubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[createSubscription](../interfaces/PlanshipApi.md#createsubscription)

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

[PlanshipApi](../interfaces/PlanshipApi.md).[deleteCustomer](../interfaces/PlanshipApi.md#deletecustomer)

___

### getAccessToken

▸ **getAccessToken**(): `Promise`<`TokenResponse`\>

Obtain an access token using a client id/secret pair stored by this instance

#### Returns

`Promise`<`TokenResponse`\>

A promise that resolves with a TokenResponse object

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[getAccessToken](../interfaces/PlanshipApi.md#getaccesstoken)

#### Inherited from

PlanshipBase.getAccessToken

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

[PlanshipApi](../interfaces/PlanshipApi.md).[getCustomer](../interfaces/PlanshipApi.md#getcustomer)

___

### getEntitlements

▸ **getEntitlements**(`customerId`, `callback?`): `Promise`<[`JSONValue`](../modules.md#jsonvalue)\>

Retrieve all product entitlements for the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `callback?` | `EntitlementsCallback` | Optional callback for entitlement updates via a WebSockets |

#### Returns

`Promise`<[`JSONValue`](../modules.md#jsonvalue)\>

A promise that resolves with an object containing entitlement values
keyed by lever slugs

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[getEntitlements](../interfaces/PlanshipApi.md#getentitlements)

___

### getLeverUsage

▸ **getLeverUsage**(`customerId`, `leverSlug`): `Promise`<[`LeverUsage`](../interfaces/LeverUsage.md)\>

Retrieve customer usage data for the metered lever with a given slug

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `leverSlug` | `string` | lever slug |

#### Returns

`Promise`<[`LeverUsage`](../interfaces/LeverUsage.md)\>

A promise that resolves with CustomerLeverUsage object

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[getLeverUsage](../interfaces/PlanshipApi.md#getleverusage)

___

### getMeteringIdUsage

▸ **getMeteringIdUsage**(`customerId`, `meteringId`): `Promise`<{ `[key: string]`: [`LeverUsage`](../interfaces/LeverUsage.md);  }\>

Retrieve customer usage data for all metered levers with a given metering id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `meteringId` | `string` | metering id |

#### Returns

`Promise`<{ `[key: string]`: [`LeverUsage`](../interfaces/LeverUsage.md);  }\>

A promise that resolves with LeverUsage object

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[getMeteringIdUsage](../interfaces/PlanshipApi.md#getmeteringidusage)

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

[PlanshipApi](../interfaces/PlanshipApi.md).[getPlan](../interfaces/PlanshipApi.md#getplan)

___

### getProduct

▸ **getProduct**(): `Promise`<[`Product`](../interfaces/Product.md)\>

Retrieve information about the current product

#### Returns

`Promise`<[`Product`](../interfaces/Product.md)\>

A promise that resolves with an instance of the Product class

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[getProduct](../interfaces/PlanshipApi.md#getproduct)

___

### getSubscription

▸ **getSubscription**(`customerId`, `subscriptionId`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Retrieve detailed information about the subscription with a given id for the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[getSubscription](../interfaces/PlanshipApi.md#getsubscription)

___

### listPlans

▸ **listPlans**(): `Promise`<[`Plan`](../interfaces/Plan.md)[]\>

Retrieve a list of plans for the current product

#### Returns

`Promise`<[`Plan`](../interfaces/Plan.md)[]\>

A promise that resolves with a list of ProductItem instances

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[listPlans](../interfaces/PlanshipApi.md#listplans)

___

### listSubscriptionCustomers

▸ **listSubscriptionCustomers**(`customerId`, `subscriptionId`): `Promise`<[`SubscriptionCustomer`](../interfaces/SubscriptionCustomer.md)[]\>

Retrieve a list of all customers that belong to the subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |

#### Returns

`Promise`<[`SubscriptionCustomer`](../interfaces/SubscriptionCustomer.md)[]\>

A promise that resolves with a list of SubscriptionCustomer objects

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[listSubscriptionCustomers](../interfaces/PlanshipApi.md#listsubscriptioncustomers)

___

### listSubscriptions

▸ **listSubscriptions**(`customerId`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)[]\>

List subscription the customer with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)[]\>

A promise that resolves with a list of CustomerSubscriptionWithPlan objects

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[listSubscriptions](../interfaces/PlanshipApi.md#listsubscriptions)

___

### modifySubscription

▸ **modifySubscription**(`customerId`, `subscriptionId`, `params`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Modify the subscription with a given id for the customer with a given id.
New plan, renew plan and maximum subscribers values are passed via params object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `subscriptionId` | `string` | Planship subscription id |
| `params` | [`ModifySubscriptionParameters`](../interfaces/ModifySubscriptionParameters.md) | Object containing subscription parameters to modify |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A Promise that resolves with an instance of the SubscriptionWithPlan class.

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[modifySubscription](../interfaces/PlanshipApi.md#modifysubscription)

___

### removeSubscriptionCustomer

▸ **removeSubscriptionCustomer**(`customerId`, `subscriptionId`, `customerIdToRemove`): `Promise`<`SubscriptionCustomerInDbBase`\>

Remove the Planship customer from the subscription

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Id of the planship customer performing this operation |
| `subscriptionId` | `string` | Planship subscription id |
| `customerIdToRemove` | `string` | Id of the planship customer to remove from the subscription |

#### Returns

`Promise`<`SubscriptionCustomerInDbBase`\>

A promise that resolves with the id of the customer removed from the subscription

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[removeSubscriptionCustomer](../interfaces/PlanshipApi.md#removesubscriptioncustomer)

___

### reportUsage

▸ **reportUsage**(`customerId`, `meteringId`, `usage`, `bucket?`): `Promise`<[`MeteringRecord`](../interfaces/MeteringRecord.md)\>

Report customer usage for a given metering id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Planship customer id |
| `meteringId` | `string` | Metering id string |
| `usage` | `number` | Usage to report |
| `bucket?` | `string` | Optional usage bucket name |

#### Returns

`Promise`<[`MeteringRecord`](../interfaces/MeteringRecord.md)\>

A promise that resolves with a new MeteringRecord

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[reportUsage](../interfaces/PlanshipApi.md#reportusage)

___

### setSubscriptionAutoRenew

▸ **setSubscriptionAutoRenew**(`customerId`, `subscriptionId`, `autoRenew`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Set the autoRenew property for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Id of the planship customer performing this operation |
| `subscriptionId` | `string` | Planship subscription id |
| `autoRenew` | `boolean` | New autoRenew value |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[setSubscriptionAutoRenew](../interfaces/PlanshipApi.md#setsubscriptionautorenew)

___

### setSubscriptionIsActive

▸ **setSubscriptionIsActive**(`customerId`, `subscriptionId`, `isActive`): `Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

Set the isActive property for a subscription with a given id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | Id of the planship customer performing this operation |
| `subscriptionId` | `string` | Planship subscription id |
| `isActive` | `boolean` | New isActive value |

#### Returns

`Promise`<[`CustomerSubscriptionWithPlan`](../interfaces/CustomerSubscriptionWithPlan.md)\>

A promise that resolves with the CustomerSubscriptionWithPlan object

#### Implementation of

[PlanshipApi](../interfaces/PlanshipApi.md).[setSubscriptionIsActive](../interfaces/PlanshipApi.md#setsubscriptionisactive)
