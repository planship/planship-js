# planship-axios

Welcome to the Planship Axios SDK - an [Axios](https://github.com/axios/axios)-powered, promise-based client for the [Planship](https://planship.io) API. Planship enables developers to build subscription logic for product pricing based on any combination of features, seats, and usage.

## Installation and basic usage

Install `@planship/axios` with npm, yarn or pnpm:

```sh
npm install @planship/axios
# or
yarn add  @planship/axios
# or
pnpm add  @planship/fetch
```

Import and instantiate the `Planship` class, and begin making calls to the Planship API:

```js
import { Planship } from '@planship/axios'

// Instantiate Planship API client using client ID and secret auth
const planship = new Planship(
  'clicker-demo',                                     // Your Planship product slug
  {
    clientId: '273N1SQ3GQFZ8JSFKIOK',                 // Planship API client ID
    clientSecret: 'GDSfzPD2NEM5PEzIl1JoXFRJNZm3uAhX'  // Planship API client secret
  }
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

// Report usage for the customer
await planship.reportUsage(
  customer.id,    // Customer ID
  'force-choke',  // Metering ID
  1               // Reported usage
)
```

A complete reference for the `Planship` class and all related response models can be found [here](classes/Planship.md).

## Client vs. server

This SDK can be used both on the client and the server side, but certain security considerations have to be made.

On the server side, or any other environment where you can securely access your application secrets, the `Planship` class can be initialized with your Planship API client ID and secret pair:

```js
const planship = new Planship(
  'clicker-demo',                                     // Your Planship product slug
  {
    clientId: '273N1SQ3GQFZ8JSFKIOK',                 // Planship API client ID
    clientSecret: 'GDSfzPD2NEM5PEzIl1JoXFRJNZm3uAhX'  // Planship API client secret
  }
)
```

The `Planship` client instance will then obtain (and automatically refresh) an access token from Planship using an OAuth2 client credentials flow.

In client code, the use of application secrets like your Planship API client secret should be avoided at all times. Instead, you should retrieve a Planship access token from the server using your existing application API, and pass the token to the `Planship` client class constructor via an asynchronous getter function (`getAccessTokenFn` in the example below)

```js
const planship = new Planship(
  'clicker-demo',     // Your Planship product slug
  getAccessTokenFn    // Function that returns a Planship token retrieved on the server
)
```

To obtain the token on the server side, call the `getAccessToken` method on the server-side Planship client instance:

```js
const accessToken = await planship.getAccessToken()
```

## Planship Customer API client class

In addition to the `Planship` API client class, this library also implements the `PlanshipCustomer` client class, which provides indentical functionality, but it's initialized with a specific customer `ID` so it doesn't need to be passed to every customer-specific call.

```js
import { PlanshipCustomer } from '@planship/axios'

const planshipCustomer = new Planship(
  'clicker-demo',                                       // Your Planship product slug
  'vader@empire.gov',                                   // Customer ID
  {
    clientId: '273N1SQ3GQFZ8JSFKIOK',                   // Planship API client ID
    clientSecret: 'GDSfzPD2NEM5PEzIl1JoXFRJNZm3uAhX'    // Planship API client secret
  }
)

// Fetch a list of subscriptions
const subscriptions = await planshipCustomer.listSubscriptions()

// Change the plan of the first subscription (if one exists) to a plan with the slug 'imperial'
await planshipCustomer.changePlan(
  subscriptions?.[0].id,    // ID of the first subscription
  'imperial'                // New plan slug
)

// Retrieve customer entitlements
const customerEntitlements = await planshipCustomer.getEntitlement()

// Report usage for the customer
await planshipCustomer.reportUsage(
  'force-choke',          // Metering ID
  1,                      // Reported usage
)
```

A complete reference for the `PlanshipCustomer` class and all related response models can be found [here](classes/PlanshipCustomer.md).
