# @planship/fetch

## Classes

- [Planship](classes/Planship.md)
- [PlanshipCustomer](classes/PlanshipCustomer.md)

## Interfaces

- [CreateSubscriptionOptions](interfaces/CreateSubscriptionOptions.md)
- [Customer](interfaces/Customer.md)
- [CustomerSubscriptionWithPlan](interfaces/CustomerSubscriptionWithPlan.md)
- [IPlanshipOptions](interfaces/IPlanshipOptions.md)
- [LeverUsage](interfaces/LeverUsage.md)
- [MeteringRecord](interfaces/MeteringRecord.md)
- [ModifySubscriptionParameters](interfaces/ModifySubscriptionParameters.md)
- [Plan](interfaces/Plan.md)
- [PlanDetails](interfaces/PlanDetails.md)
- [PlanshipApi](interfaces/PlanshipApi.md)
- [PlanshipCustomerApi](interfaces/PlanshipCustomerApi.md)
- [Product](interfaces/Product.md)
- [SubscriptionCustomer](interfaces/SubscriptionCustomer.md)
- [SubscriptionWithPlan](interfaces/SubscriptionWithPlan.md)
- [TokenResponse](interfaces/TokenResponse.md)

## Type Aliases

### Entitlements

Ƭ **Entitlements**: `Object`

**`Export`**

#### Index signature

▪ [x: `string`]: `string` \| `number` \| `boolean` \| (`string` \| `number` \| `boolean`)[]

___

### TokenGetter

Ƭ **TokenGetter**: (`forceRefresh?`: `boolean`) => `Promise`\<`string`\>

#### Type declaration

▸ (`forceRefresh?`): `Promise`\<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `forceRefresh?` | `boolean` |

##### Returns

`Promise`\<`string`\>

**`Export`**
