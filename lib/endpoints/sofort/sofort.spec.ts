import got from 'got';
import { createSofortEndpoint } from './sofort';
jest.mock('got');

describe('sofort', () => {
    let sofortEndpoint: ReturnType<typeof createSofortEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    const requestParams = {
        back_url: 'https://google.com',
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
        sofortEndpoint = createSofortEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('sale()', () => {
        beforeEach(() => sofortEndpoint.sale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/sofort/sale');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });
});
