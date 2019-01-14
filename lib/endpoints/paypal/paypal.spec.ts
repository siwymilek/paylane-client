import got from 'got';
import { SaleRequest } from './dto/SaleRequest';
import { createPaypalEndpoint } from './paypal';
jest.mock('got');

describe('paypal', () => {
    let paypalEndpoint: ReturnType<typeof createPaypalEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    const requestParams: SaleRequest = {
        back_url: 'https://google.com',
        sale: {
            amount: 100,
            currency: 'USD',
            description: 'Some description',
        },
    };

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        paypalEndpoint = createPaypalEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('sale()', () => {
        beforeEach(() => paypalEndpoint.sale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/paypal/sale');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });

    describe('authorization()', () => {
        beforeEach(() => paypalEndpoint.authorization(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/paypal/authorization');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });
});
