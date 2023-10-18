# Planship JS

Welcome to the JavaScipt client libraries for the Planship API. This repository contains contains [`@planship/js-axios`](./packages/axios) and [`@planship/js-fetch`](./packages/fetch) SDKs. Both of them implement the same, promised based [interface](./packages/models/docs/interfaces/PlanshipApi.md) for the Planship API, with the only difference being the underlying request/response mechanism (axios and fetch respectively).

## Installation

Install @planship/axios or @planship/fetch  with npm, yarn or pnpm:

```
npm install @planship/axios
# or
yarn add  @planship/fetch
```

## Basic usage

Regardless whether you choose `@planship/axios` or `@planship/fetch`, usage is the same - just import and instantiate the `Planship`  class, and start making calls to the Planship API:

```
import { Planship } from '@planship/axios'
# or
import { Planship } from '@planship/fetch'


const planship = new Planship(<YOUR_PRODUCT_SLUG>, <PLANSHIP_API_URL>, <YOUR_CLIENT_ID>, <YOUR_CLIENT_SECRET>)

# list product plans
const plans = await planship.listPlans()

# create a customer with a name and email, and subscribe them to a plan,
await planship.createCustomer(<CUSTOMER_NAME>, <CUSTOMER_EMAIL>).then((customer) => {
	planship.createSubscription(customer.id, <PLAN_SLUG>)
})

# retrieve customer entitlements
const customerEntitlements = await planship.getEntitlements(<CUSTOMER_ID>)


# report usage for a customer
await planship.reportUsage(<CUSTOMER_ID>, <METERING_ID>, <USAGE>)
```

## Client vs. server authentication and security

Planship libraries can be used in both client and server code of your application. Depending on where you use the Planship client, you must choose a right way to authenticate to keep your data secure.

On the server side, or any other environment where you can securly access your application secrets, the `Planship` class can be initialized with your Planship API client id and secret pair:

```
const planship = new Planship(<YOUR_PRODUCT_SLUG>, <PLANSHIP_API_URL>, <YOUR_CLIENT_ID>, <YOUR_CLIENT_SECRET>)
```

The `Planship` client instance will then obtain (and automatically refresh) an access token from Planship using OAuth2 client credentials flow.


In the client code, the use of application secrets like your Planship API client secret is not acceptable. Instead, you should retrieve a Planship access token from the server using your existing application API, and pass the token to the `Planship` client class constructor via an asynchronous getter function (`GET_PLANSHIP_TOKEN_FN` in the example below)

```
const planship = new Planship(<YOUR_PRODUCT_SLUG>, <PLANSHIP_API_URL>, <YOUR_CLIENT_ID>, <GET_PLANSHIP_TOKEN_FN>)
```

To obtain the token on the server side, just call the `getAccessToken` method on the server-side Planship client instance:

```
const accessToken = await planship.getAccessToken(clientId)
```
