const {
	equals,
	ifElse,
} = require('ramda');
const queryString = require('query-string');
const {sha512} = require('js-sha512');

const europeUrl = 'https://api-eu.boldchat.com';
const usaUrl = 'https://api.boldchat.com';

const pickServer =
	ifElse(
		equals('eu'),
		() => europeUrl,
		() => usaUrl,
	);

const createAuth = ({accountId,apiSettingId, apiKey}) => {
	const time = Date.now();
	const auth = `${accountId}:${apiSettingId}:${time}`;
	const hashAuth = sha512(`${auth}${apiKey}`);

	return `${auth}:${hashAuth}`;
}

/**
 * Returns the api url for Bold360 to use. Given the credentials or the region the url will vary.
 * @param {{ accountId: string, apiSettingId: string, apiKey: string, string (eu, us) }} credentials
 * @param {String} path
 * @param {String} params
 * @returns {String}
 */
const makeUrl = ({accountId, apiSettingId, apiKey, region = 'eu'}, path, params) => {
	const auth = createAuth({accountId, apiSettingId, apiKey});
	const url = `${pickServer(region)}/aid/${accountId}/data/rest/json/v1/${path}`;
	return queryString.stringifyUrl({url, query: {...params, auth}});
}

module.exports = {makeUrl};
