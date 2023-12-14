# Planship JS

Welcome to the JavaScipt client libraries for the Planship API. This repository contains contains [`planship-js-axios`](./packages/axios) and [`planship-js-etch`](./packages/fetch) SDKs. Both of them implement the same, promise-based [interface](./packages/models/docs/interfaces/PlanshipApi.md) for the Planship API, with the only difference being the underlying request/response mechanism (axios and fetch respectively).

## Installation

Install @planship/axios or @planship/fetch  with npm, yarn or pnpm:

```
npm install @planship/axios
# or
yarn add  @planship/fetch
# or
pnpm add  @planship/fetch
```

## Basic usage

Regardless whether you choose `@planship/axios` or `@planship/fetch`, usage is the same - just import and instantiate the `Planship` class, and start making calls to the Planship API:

```
import { Planship } from '@planship/axios'
# or
import { Planship } from '@planship/fetch'

const planship = new Planship(
    'clicker-demo', // your Planship product slug
    'https://api.planship.io', // Planship API endpoint URL
    '273N1SQ3GQFZ8JSFKIOK', // Planship API client ID
    'GDSfzPD2NEM5PEzIl1JoXFRJNZm3uAhX' // Planship API client secret
)

# list product plans
const plans = await planship.listPlans()

# create a customer with a given email, and subscribe them to a plan,
customer = await planship.createCustomer(
    {
        'email': 'vader@empire.gov'
    }
).then((customer) => {
    planship.createSubscription(
        customer.id, // customer ID
        'imperial' // plan slug
    )
    return customer
})

# retrieve customer entitlements
const customerEntitlements = await planship.getEntitlement(
    customer.id, // customer ID
)

# report usage for a customer
await planship.reportUsage(
    customer.id, // customer ID
    1,
    'force-choke'
)
```

## Client vs. server authentication and security

Planship libraries can be used in both client and server code of your application. Depending on where you use the Planship client, you must choose a right way to authenticate to keep your data secure.

On the server side, or any other environment where you can securly access your application secrets, the `Planship` class can be initialized with your Planship API client id and secret pair:

```
const planship = new Planship(
    'clicker-demo', // your Planship product slug
    'https://api.planship.io', // Planship API endpoint URL
    '273N1SQ3GQFZ8JSFKIOK', // Planship API client ID
    'GDSfzPD2NEM5PEzIl1JoXFRJNZm3uAhX' // Planship API client secret
)
```

The `Planship` client instance will then obtain (and automatically refresh) an access token from Planship using OAuth2 client credentials flow.


In the client code, the use of application secrets like your Planship API client secret is not acceptable. Instead, you should retrieve a Planship access token from the server using your existing application API, and pass the token to the `Planship` client class constructor via an asynchronous getter function (`getAccessTokenFn` in the example below)

```
const planship = new Planship(
    'clicker-demo', // your Planship product slug
    'https://api.planship.io', // Planship API endpoint URL
    getAccessTokenFn // Function that returns a Planship token retrieved on the server
)
```

To obtain the token on the server side, just call the `getAccessToken` method on the server-side Planship client instance:

```
const accessToken = await planship.getAccessToken()
```
