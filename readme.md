# Bold360 client

Fetch data from Bold360 [API](https://developer.bold360.com/help/EN/Bold360API/Bold360API/c_reference_rest.html) easily

## Install
```bash
$ yarn install bold360-client
```

## Usage

* You can authenticate by providing a `credentials` object
* You can set the region to either `eu` or `us`, default to `eu`
* Path must be a string pointing to a valid [endpoint](https://developer.bold360.com/help/EN/Bold360API/Bold360API/c_data_extraction_paged_data_v1_getAllChatMessages.html)
* Params should be defined as an object where [applicable](https://developer.bold360.com/help/EN/Bold360API/Bold360API/c_data_extraction_single_item_getChat.html)

```javascript
const { bold360Client } = require('bold360-client');

const credentials = {
	accountId: 11111111, //required
	apiSettingId: 2222222, //required
	apiKey: 'xxxxxx+zzzzzzzz', //required
	region: 'eu' //optional, default `eu`
};

const path = 'getChat';
const params = {
	ChatID: '107984128488260560'
};

const result = await bold360Client(credentials, path, params).then(res => res.json());
```

## Headers
4th argument is the options object for node-fetch. [Defaults](https://www.npmjs.com/package/node-fetch#options)

```javascript
const { bold360Client } = require('bold360-client');
const fetch = require('your-module-to-fetch-things');

await bold360Client(credentials, path, params, { method: 'POST' })
```
## Http Client
You can also specify the http client as the 5th argument. That's optional however (if none is passed the default is `node-fetch`).
```javascript
const { bold360Client } = require('bold360-client');
const fetch = require('your-module-to-fetch-things');

await bold360Client(credentials, path, params, { method: 'POST' }, fetch)
```