const fetch = require('node-fetch');
const {makeUrl} = require('./make-bold360-url');

/**
 * Executes an http request to the api of LC. The http client and method can be specified from the user.
 * @param {{ accountId: string, apiSettingId: string, apiKey: string, region: string (eu, us) }} credentials
 * @param {String} path
 * @param {Object} params
 * @param {Object} httpClient
 * @returns {Promise}
 */
const bold360Client = (
	credentials,
	path,
	params = {},
	options = {},
	httpClient = fetch,
) => {
	const url = makeUrl(credentials, path, params);
	return httpClient(url, {
		...options,
	});
};

module.exports = {
	bold360Client,
};
