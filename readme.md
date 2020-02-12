# LC client
[![CircleCI](https://circleci.com/gh/thechatshop/livechat-client/tree/master.svg?style=svg&circle-token=b41472e2d6d86e3066324bef990c06e902a734e3)](https://circleci.com/gh/thechatshop/livechat-client/tree/master)

Fetch data from LC easily

## Pre install Peer Dependencies

```bash
npm install isomorphic-fetch ramda basic-auth-token is-url
```
## Install
```bash
$ npm install @thechatshop/livechat-client
```

## Usage

* You can authenticate by providing a `token` object:
```javascript
const { livechatClient } = require('@thechatshop/livechat-client')

// Livechat's tokens begin with 'fra' or 'dal'
const myLivechatClient = livechatClient({token: 'fra:token'})
```

* Basic auth is also supported by setting `{username, password}`. Please, note that you can specify the `location` or the `url` of the api as well:
```javascript
const { livechatClient } = require('@thechatshop/livechat-client')

// Basic Auth with location
const myLivechatClient = livechatClient({username: 'super-username', password: 'super-secret', location: 'dal'})

// Basic Auth with url
const myLivechatClient = livechatClient({username: 'super-username', password: 'super-secret', url: 'https://api.url.com'})
```

* You can also specify the http client as a second argument. That's optional however (if none is passed the default is `isomorphic-fetch`).
```javascript
const { livechatClient } = require('@thechatshop/livechat-client')
const fetch = require('your-module-to-fetch-things');

const myLivechatClient = livechatClient({token: 'fra:token'}, fetch)
```

* How to actually fetch content
```js
const things = await myLivechatClient('/path', { method: 'GET' })
```

**Headers** will be defined already for you from within the module. You can override them by setting them inside the options parameter (check the example below).

* Default headers
```
Content-Type: 'application/json'
Authorization: 'Auth-token-whatever-here'
X-API-Version: 2
```

* Override headers
```js
const { livechatClient } = require('@thechatshop/livechat-client')

const myLivechatClient = livechatClient({token: 'fra:token'})
// Use custom headers
await myLivechatClient('/path', { method: 'GET', headers: { a: 1 } })
```

## Linting
```bash
$ npm run prettier # formats your code - add -- --write to save changes
$ npm run xo       # the famous linter - add -- --fix to auto fix
```

## Testing
```bash
$ npm run test     # add -- --watch to monitor for changes
```

## Deploy
This app will automatically get published under `@thechatshop/livechat-client` on npm (when new code is on master and a new tag exists with `vX.X.X` format)
Here is an example:

```bash
git checkout master
# Will generate a tag as well
npm version patch #or major, minor, patch

git push && git push --tags
```

## License
The Chat Shop proprietary license
