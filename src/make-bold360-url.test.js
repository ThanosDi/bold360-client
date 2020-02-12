const { makeUrl } = require('./make-bold360-url');

const credentials = {
	accountId: process.env.BOLD360_ACCOUNT_ID || 11111111, 
	apiSettingId: process.env.BOLD360_API_SETTINGS_ID || 2222222, 
	apiKey: process.env.BOLD360_API_KEY ||'yqsTq6i9A9v+YLYdi7CEbAfH9ai8TKFx',
}

describe('makeUrl', () => {
	test('is valid with default europe region', () => {
		const url = makeUrl(credentials, `getChat?ChatID=107984128488260564`);
		expect(url).toStartWith(`https://api-eu.boldchat.com/aid/${credentials.accountId}/data/rest/json/v1/getChat?ChatID=107984128488260564&auth=`);
	});

	test('is valid with europe region', () => {
		credentials.region = 'eu';
		const url = makeUrl(credentials, `getChat?ChatID=107984128488260564`);
		expect(url).toStartWith(`https://api-eu.boldchat.com/aid/${credentials.accountId}/data/rest/json/v1/getChat?ChatID=107984128488260564&auth=`);
	});

	test('is valid us url', () => {
		credentials.region = 'us';
		const url = makeUrl(credentials, `getAllChatMessages`);
		expect(url).toStartWith(`https://api.boldchat.com/aid/${credentials.accountId}/data/rest/json/v1/getAllChatMessages?auth=`);
	});
});
