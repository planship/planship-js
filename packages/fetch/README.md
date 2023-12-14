# planship-js-fetch

Welcome to the Planship Fetch SDK - a promise based client the Planship API that uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).


## Installation and basic usage

Install `@planship/fetch` with npm, yarn or pnpm:

```
npm install @planship/fetch
# or
yarn add  @planship/fetch
# or
pnpm add  @planship/fetch
```

Import and instantiate the `Planship` class, and start making calls to the Planship API:

```
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

## Client vs. server

This SDK can be used both on the client and the server side, but certain security considerations have to be made.

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


In the client code, the use of application secrets like your Planship API client secret is not acceptable. Instead, you should retrieve a Planship access token from the server using your existing application API, and pass the token to the `Planship` client class constructor via an asynchronous getter function (`GET_PLANSHIP_TOKEN_FN` in the example below)

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

## Using a custom fetch API implementation

By default, the library uses the [native fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) implementation. To use a non-default implementation of fetch, e.g. [node fetch](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch) or [SvelteKit fetch](https://kit.svelte.dev/docs/load#making-fetch-requests), simply pass it to the `Planship` constructor (last parameter).

```
# Client id/secret initialization
const planship = new Planship(
    'clicker-demo', // your Planship product slug
    'https://api.planship.io', // Planship API endpoint URL
    '273N1SQ3GQFZ8JSFKIOK', // Planship API client ID
    'GDSfzPD2NEM5PEzIl1JoXFRJNZm3uAhX', // Planship API client secret
    myFetchApi, // Customer Fetch AP
)

# Access token initialization
const planship = new Planship(
    'clicker-demo', // your Planship product slug
    'https://api.planship.io', // Planship API endpoint URL
    getAccessTokenFn, // Function that returns a Planship token retrieved on the server
    myFetchApi, // Customer Fetch AP
)
```

## Complete SDK reference

The complete reference for the `Planship` class and all related response models can be found [here](./docs/classes/Planship.md).
