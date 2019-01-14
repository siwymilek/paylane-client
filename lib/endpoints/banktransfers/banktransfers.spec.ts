import got from 'got';
import { createBanktransfersEndpoint } from './banktransfers';
jest.mock('got');

describe('banktransfers', () => {
    let banktransfersEndpoint: ReturnType<typeof createBanktransfersEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    const requestParams = {
        back_url: 'https://google.com',
        customer: {
            email: 'test@test.com',
            ip: '127.0.0.1',
            name: 'Test Test',
        },
        payment_type: 'OH',
        sale: {
            amount: 100,
            currency: 'EUR',
            description: 'test',
        },
    };

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        banktransfersEndpoint = createBanktransfersEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('sale()', () => {
        beforeEach(() => banktransfersEndpoint.sale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/banktransfers/sale');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });
});
