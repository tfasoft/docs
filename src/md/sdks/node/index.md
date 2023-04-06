# NodeJs SDK

You can use this SDK in your ExpressJs applications. And your bots. Also, use it in ReactJs!

## Installation

You can install this SDK with NPM.

```shell
$ npm i tfa-node-sdk
```

## Writing code

- After installation you need to require TFA.

```javascript
// Require TFA class
const tfa = require("tfa-node-sdk");
```

- Now define your access token.

```javascript
// Require TFA class
const tfa = require("tfa-node-sdk");

// Define your access token and initial auth
const auth = new tfa("access_token");
```

- Last step, auth user with the user token. Now result have the json object and status code.

```javascript
// Require TFA class
const tfa = require("tfa-node-sdk");

// Define your access token and initial auth
const auth = new tfa("access_token");

// Authenticate user
const result = auth.authUser("user_token");
```
