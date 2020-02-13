const fetch = require('jest-fetch-mock');
const {bold360Client} = require('.');

const credentials = {
	accountId: 11111111,
	apiSettingId: 2222222,
	apiKey: 'yqsTq6i9A9v+YLYdi7CEbAfH9ai8TKFx',
};

describe('bold360Client', () => {
	beforeEach(() => jest.resetAllMocks());

	test('fetch getChat', async () => {
		await bold360Client(
			credentials,
			'getChat',
			{ChatID: '107984128488260564'},
			{},
			fetch,
		);
		expect(fetch).toHaveBeenCalled();
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(
			expect.toStartWith(
				'https://api-eu.boldchat.com/aid/11111111/data/rest/json/v1/getChat?ChatID=107984128488260564&auth=11111111',
			),
			{},
		);
	});

	test('fetch allChats', async () => {
		await bold360Client(credentials, 'allChats', {}, {}, fetch);
		expect(fetch).toHaveBeenCalled();
		expect(fetch).toHaveBeenCalledTimes(1);
		expect(fetch).toHaveBeenCalledWith(
			expect.toStartWith(
				'https://api-eu.boldchat.com/aid/11111111/data/rest/json/v1/allChats?auth=11111111',
			),
			{},
		);
	});
});
