# Status codes

Status codes, things that are simple and you need to know.

## Codes

| Code | Details                                                             |
| :--- | :------------------------------------------------------------------ |
| 200  | You are authenticated. Both Access Token and User Token is corract. |
| 401  | User Token or Access Token us wrong.                                |

## Details about status codes

200 Code.. It means that admin acess token and user token both are true.

401 Code.. Now, one of the tokens are wrong. But, how to understant it?

## Check which token is wrong

What returns to you, is a json object and there is a message key. That message tell you that which of them is wrong.

- When admin access token is wrong:

```json
{
  "message": "Admin access token is not valid"
}
```

- When user is not authenticated:

```json
{
  "message": "User authentication but token is not valid"
}
```
