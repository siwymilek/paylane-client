import got from 'got';
import { create3dSecureEndpoint } from './3dsecure';
import { CheckCardByTokenRequest } from './dto/CheckCardByTokenRequest';
import { CheckCardRequest } from './dto/CheckCardRequest';
import { SaleRequest } from './dto/SaleRequest';
jest.mock('got');

describe('3dsecure', () => {
    let secureEndpoint: ReturnType<typeof create3dSecureEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        secureEndpoint = create3dSecureEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('checkCard()', () => {
        const requestParams: CheckCardRequest = {
            back_url: 'http://example-url.com',
            card: {
                card_code: '123',
                card_number: '4111111111111111',
                expiration_month: '03',
                expiration_year: '2017',
                name_on_card: 'John Doe',
            },
            customer: {
                email: 'test@test.com',
                ip: '127.0.0.1',
                name: 'Test Test',
            },
            sale: {
                amount: 100.0,
                avs_check_level: 2,
                currency: 'EUR',
                description: 'TR001',
                fraud_check_on: true,
            },
        };

        beforeEach(() => secureEndpoint.checkCard(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/3DSecure/checkCard');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });

    describe('checkCardByToken()', () => {
        const requestParams: CheckCardByTokenRequest = {
            back_url: 'http://example-url.com',
            card: {
                token:
                    '12a34b45c67d89e00f1aa2bb3cc4dd5ee6ff12a34b45c67d89e00f1aa2bb3cc4',
            },
            customer: {
                email: 'john@doe.com',
                ip: '123.456.78.90',
                name: 'John Doe',
            },
            sale: {
                amount: 100.0,
                avs_check_level: 2,
                currency: 'EUR',
                description: 'TR001',
                fraud_check_on: true,
            },
        };

        beforeEach(() => secureEndpoint.checkCardByToken(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/3DSecure/checkCardByToken');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });

    describe('authSale()', () => {
        const requestParams: SaleRequest = {
            id_3dsecure_auth: 237473,
        };

        beforeEach(() => secureEndpoint.authSale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/3DSecure/authSale');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });
});
