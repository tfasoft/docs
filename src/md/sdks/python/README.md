# Python SDK

If you are creating your application with Flask or Django, or even a cli or gui, you can use Python SDK instead of doing things manually.

## Installation

You can install this SDK with Pip or Pipenv.

```shell
$ pip3 install tfa-python-sdk
```

```shell
$ pipenv install tfa-python-sdk
```

## Writing code

- After installation you need to import the class.

```python
# Import TFA class
from tfa_python_sdk import TFA
```

- Now define your access token.

```python
# Import TFA class
from tfa_python_sdk import TFA

# Define your access token and initial auth
auth = TFA("access_token")
```

- Last step, auth user with the user token. Now result have the json object and status code.

```python
# Import TFA class
from tfa_python_sdk import TFA

# Define your access token and initial auth
auth = TFA("access_token")

# Authenticate user
result = auth.authUser("user_token")
```
