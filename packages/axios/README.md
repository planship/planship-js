# planship-js-axios

Welcome to the Planship Axios SDK - a promise based client the Planship API that uses [Axios]().


## Installation and basic usage 

Install `@planship/js-axios`  with npm, yarn or pnpm:

```
npm install @planship/js-axios
# or
yarn add  @planship/js-axios
```

Import and instantiate the `Planship` class, and start making calls to the Planship API:

```
import { Planship } from '@planship/js-axios'

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

## Client vs. server


This SDK can be used both on the client and the server side, but certain security considerations have to be made.

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

## Complete SDK reference

The complete reference for the `Planship` class and all related response models can be found [here](./docs/classes/Planship.md).