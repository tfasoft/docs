# Php SDK

You can use this SDK in your Laravel or Pure php applications!

## Installation

You can install this SDK with Composer.

```shell
$ composer install tfasoft/sdk;
```

## Writing code

- After installation you need to use TFA.

```php
// Use TFA class
use TFASoft\TFA;
```

- Now define your access token.

```php
// Use TFA class
use TFASoft\TFA;

// Define your access token and initial auth
$tfa = new TFA("access-token");
```

- Last step, auth user with the user token. Now result have the json object and status code.

```php
// Use TFA class
use TFASoft\TFA;

// Define your access token and initial auth
$tfa = new TFA("access-token");

// Authenticate user
$result = $tfa->authUser("user_token");
```
