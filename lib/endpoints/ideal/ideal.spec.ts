import got from 'got';
import { SaleRequest } from './dto/SaleRequest';
import { createIdealEndpoint } from './ideal';
jest.mock('got');

describe('ideal', () => {
    let idealEndpoint: ReturnType<typeof createIdealEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        mockedGot.get.mockResolvedValue({ body: {} });
        idealEndpoint = createIdealEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());
    afterEach(() => mockedGot.get.mockClear());

    describe('sale()', () => {
        const requestParams: SaleRequest = {
            back_url: 'http://merchants-website.com',
            bank_code: 'INGBNL2A',
            customer: {
                address: {
                    city: 'Berlin',
                    country_code: 'DE',
                    state: 'Berlin',
                    street_house: 'Platz der Republik 1',
                    zip: '11011',
                },
                email: 'hans@muller.de',
                ip: '123.456.78.90',
                name: 'Hans Muller',
            },
            sale: {
                amount: 100.0,
                currency: 'EUR',
                description: 'TR001',
            },
        };

        beforeEach(() => idealEndpoint.sale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/ideal/sale');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });

    describe('bankCodes()', () => {
        beforeEach(() => idealEndpoint.bankCodes());

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.get).toHaveBeenCalled();
            const [uri] = mockedGot.get.mock.calls[0];

            expect(uri).toEqual('/ideal/bankcodes');
        });
    });
});
