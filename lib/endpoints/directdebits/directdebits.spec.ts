import got from 'got';
import { createDirectdebitsEndpoint } from './directdebits';
jest.mock('got');

describe('directdebits', () => {
    let directdebitsEndpoint: ReturnType<typeof createDirectdebitsEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    const requestParams = {
        account: {
            account_country: 'DE',
            account_holder: 'Hans Muller',
            bic: 'BICBICDE',
            iban: 'DE12345678901234567890',
            mandate_id: '54321',
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
        directdebitsEndpoint = createDirectdebitsEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('sale()', () => {
        beforeEach(() => directdebitsEndpoint.sale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/directdebits/sale');
            expect(params).toMatchObject({
                body: JSON.stringify(requestParams),
            });
        });
    });
});
