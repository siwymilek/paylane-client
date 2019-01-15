import got from 'got';
import * as paylaneClient from './paylaneClient';
jest.mock('got');

describe('paylaneClient', () => {
    describe('setup()', () => {
        describe('when credentials are passed in correctly', () => {
            let client: ReturnType<typeof paylaneClient.setup>;

            beforeAll(() => {
                client = paylaneClient.setup({
                    login: 'sample',
                    password: 'password',
                });
            });

            it('should call got.extend with baseUrl passed in, that contains login and password for paylane auth', () => {
                expect(
                    (got as jest.Mocked<typeof got & { extend: () => void }>)
                        .extend,
                ).toHaveBeenCalledWith({
                    auth: 'sample:password',
                    baseUrl: `https://direct.paylane.com/rest`,
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
                expect(client.ideal).toBeDefined();
                expect(client.refunds).toBeDefined();
                expect(client.resales).toBeDefined();
                expect(client.authorizations).toBeDefined();
                expect(client.sales).toBeDefined();
                expect(client.secure3d).toBeDefined();
                expect(client.bankcodes).toBeDefined();
            });
        });

        describe('when no credentials object present', () => {
            it('should throw a meaningful error', () => {
                expect(() =>
                    paylaneClient.setup(undefined as any),
                ).toThrowError(/missing credentials/i);
            });
        });

        describe('when no credential properties are present', () => {
            it('should throw a meaningful error', () => {
                expect(() => paylaneClient.setup({} as any)).toThrowError(
                    /missing credentials/i,
                );
            });
        });
    });
});
