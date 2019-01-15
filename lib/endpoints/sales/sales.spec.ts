import got from 'got';
import { InfoRequest } from './dto/InfoRequest';
import { StatusRequest } from './dto/StatusRequest';
import { createSalesEndpoint } from './sales';
jest.mock('got');

describe('sales', () => {
    let salesEndpoint: ReturnType<typeof createSalesEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        salesEndpoint = createSalesEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('info()', () => {
        const requestParams: InfoRequest = {
            id_sale: 123,
        };

        beforeEach(() => salesEndpoint.info(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/sales/info');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });

    describe('status()', () => {
        const requestParams: StatusRequest = {
            amount: 100,
            currency: 'EUR',
            description: 'Status request',
        };

        beforeEach(() => salesEndpoint.status(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/sales/status');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });
});
