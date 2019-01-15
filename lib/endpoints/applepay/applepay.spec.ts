import got from 'got';
import { createApplepayEndpoint } from './applepay';
jest.mock('got');

describe('applepay', () => {
    let applepayEndpoint: ReturnType<typeof createApplepayEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    const requestParams = {
        card: {
            token: 'abc',
        },
        customer: {
            email: 'test@test.com',
            ip: '127.0.0.1',
            name: 'Test Test',
        },
        sale: {
            amount: 100,
            currency: 'EUR',
            description: 'test',
        },
    };

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        applepayEndpoint = createApplepayEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('sale()', () => {
        beforeEach(() => applepayEndpoint.sale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/applepay/sale');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });

    describe('authorization()', () => {
        beforeEach(() => applepayEndpoint.authorization(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/applepay/authorization');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });
});
