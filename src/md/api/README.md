# API docs

Main system of our service is the API part. Where the authentication happens!

## Endpoints

TFA service API provides these endpoints.

| Method | Endpoint                             | Details  |
| :----- | :----------------------------------- | :------- |
| GET    | `/api/access/:AdminToken/:UserToken` | Endpoint |

## Details about endpoints

Main endpoint is GET method endpoint that you need to pass 2 params.

First Param is you **Access Token** and second is **User Token**.

## What will be get?

What returns to you, is a json object. Most important part, is the status code.

You can read status code page in next page.
