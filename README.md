# Planship JS

Welcome to the JavaScipt client libraries for the [Planship](https://planship.io) API. This repository contains [`@planship/axios`](./packages/axios) and [`@planship/fetch`](./packages/fetch) SDKs. Both libraries implement the [Planship promise-base interface](./packages/models/docs/interfaces/PlanshipApi.md) while using different underlying request/response mechanisms ([Axios](https://github.com/axios/axios) and [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) respectively).

## Installation

Install `@planship/axios` or `@planship/fetch` with npm, yarn or pnpm:

```sh
npm install @planship/axios
# or
yarn add  @planship/fetch
# or
pnpm add  @planship/fetch
```

## Basic usage

For both `@planship/axios` and `@planship/fetch`, import and instantiate the `Planship` class and begin making calls to the Planship API:

```js
import { Planship } from '@planship/axios'
// or
import { Planship } from '@planship/fetch'

const planship = new Planship(
    'clicker-demo',                     // Your Planship product slug
    'https://api.planship.io',          // Planship API endpoint URL
    '273N1SQ3GQFZ8JSFKIOK',             // Planship API client ID
    'GDSfzPD2NEM5PEzIl1JoXFRJNZm3uAhX'  // Planship API client secret
)

// List product plans
const plans = await planship.listPlans()

// Create a customer with a given email, and subscribe them to a plan
customer = await planship.createCustomer(
    {
        'email': 'vader@empire.gov'
    }
).then((customer) => {
    planship.createSubscription(
        customer.id,    // Customer ID
        'imperial'      // Plan slug
    )
    return customer
})

// Retrieve customer entitlements
const customerEntitlements = await planship.getEntitlement(
    customer.id     // Customer ID
)

// Report usage for a customer
await planship.reportUsage(
    customer.id,    // Customer ID
    1,
    'force-choke'
)
```

## Client vs. server authentication and security

Planship libraries can be used in both client and server code of your application. Depending on where you use the Planship client, you must choose a right way to authenticate to keep your data secure.

On the server side, or any other environment where you can securely access your application secrets, the `Planship` class can be initialized with your Planship API client ID and secret pair:

```js
const planship = new Planship(
    'clicker-demo',                     // Your Planship product slug
    'https://api.planship.io',          // Planship API endpoint URL
    '273N1SQ3GQFZ8JSFKIOK',             // Planship API client ID
    'GDSfzPD2NEM5PEzIl1JoXFRJNZm3uAhX'  // Planship API client secret
)
```

The `Planship` client instance will then obtain (and automatically refresh) an access token from Planship using an OAuth2 client credentials flow.


In client code, the use of application secrets like your Planship API client secret should be avoided at all times. Instead, you should retrieve a Planship access token from the server using your existing application API, and pass the token to the `Planship` client class constructor via an asynchronous getter function (`getAccessTokenFn` in the example below)

```js
const planship = new Planship(
    'clicker-demo',             // Your Planship product slug
    'https://api.planship.io',  // Planship API endpoint URL
    getAccessTokenFn            // Function that returns a Planship token retrieved on the server
)
```

To obtain the token on the server side, call the `getAccessToken` method on the server-side Planship client instance:

```js
const accessToken = await planship.getAccessToken()
```
