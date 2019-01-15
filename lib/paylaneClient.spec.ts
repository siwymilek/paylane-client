import got from 'got';
import * as paylaneClient from './paylaneClient';
jest.mock('got');

describe('paylaneClient', () => {
    describe('setup()', () => {
        let client: ReturnType<typeof paylaneClient.setup>;

        beforeAll(() => {
            client = paylaneClient.setup({
                login: 'sample',
                password: 'password\\',
            });
        });

        it('should call got.extend with baseUrl passed in, that contains login and password for paylane auth', () => {
            expect(
                (got as jest.Mocked<typeof got & { extend: () => void }>)
                    .extend,
            ).toHaveBeenCalledWith({
                baseUrl: `https://sample:password%5C@direct.paylane.com/rest`,
                headers: {
                    'Content-type': 'application/json',
                },
                json: true,
            });
        });

        it('should return and object with base uri components as keys', () => {
            expect(client.card).toBeDefined();
            expect(client.paypal).toBeDefined();
            expect(client.sofort).toBeDefined();
            expect(client.banktransfers).toBeDefined();
            expect(client.directdebits).toBeDefined();
            expect(client.applepay).toBeDefined();
            expect(client.refunds).toBeDefined();
            expect(client.authorizations).toBeDefined();
            expect(client.sales).toBeDefined();
        });
    });
});
