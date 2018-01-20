# △ Secrets

Secrets is a tiny 2kb library for generating secure passwords.

## Installation

`yarn add secrets`

## Usage

Simply instantiate a new Secret and pass the following parameters:

- (int) Length of string you'd like to return
- (bool) Use numeric characters
- (bool) Use special characters

Turning off numbers and special characters will default to a random string of upper and lower case English letters.

Defaults to: `new Secrets(32, true, true);`

### ES6

```
import Secrets from 'secrets';

const secret = new Secrets(32, true, true).generate();
```

### ES5

```
const Secrets = require('secrets');

const secret = new Secrets(32, true, true).generate();
```
