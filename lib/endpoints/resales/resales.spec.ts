import got from 'got';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { SaleRequest } from './dto/SaleRequest';
import { createResalesEndpoint } from './resales';
jest.mock('got');

describe('resales', () => {
    let resalesEndpoint: ReturnType<typeof createResalesEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        resalesEndpoint = createResalesEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('sale()', () => {
        const requestParams: SaleRequest = {
            amount: 4.99,
            currency: 'EUR',
            description: 'TR001',
            id_sale: 436635,
        };

        beforeEach(() => resalesEndpoint.sale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/resales/sale');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });

    describe('authorization()', () => {
        const requestParams: AuthorizationRequest = {
            amount: 4.99,
            currency: 'EUR',
            description: 'Great Magazine subscription',
            id_authorization: 436635,
        };

        beforeEach(() => resalesEndpoint.authorization(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/resales/authorization');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });
});
