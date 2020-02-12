const fetch = require('jest-fetch-mock');
const { bold360Client } = require('.');

const credentials = {
	accountId: process.env.BOLD360_ACCOUNT_ID || 11111111, 
	apiSettingId: process.env.BOLD360_API_SETTINGS_ID || 2222222, 
	apiKey: process.env.BOLD360_API_KEY ||'yqsTq6i9A9v+YLYdi7CEbAfH9ai8TKFx',
}

describe('bold360Client', () => {

	beforeEach(() => jest.resetAllMocks());

	test('fetch getChat', async () => {
		await bold360Client(credentials, 'getChat', {ChatID:'107984128488260564'}, {}, fetch);
		expect(fetch).toHaveBeenCalled();
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(expect.toStartWith('https://api-eu.boldchat.com/aid/106562681705387893/data/rest/json/v1/getChat?ChatID=107984128488260564&auth='), {});
	});

	test('fetch allChats', async () => {
		await bold360Client(credentials, 'allChats', {}, {}, fetch);
		expect(fetch).toHaveBeenCalled();
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(expect.toStartWith('https://api-eu.boldchat.com/aid/106562681705387893/data/rest/json/v1/allChats?auth='), {});
	});
});
