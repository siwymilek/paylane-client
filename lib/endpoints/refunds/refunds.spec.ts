import got from 'got';
import { createRefundsEndpoint } from './refunds';
jest.mock('got');

describe('refunds', () => {
    let refundsEndpoint: ReturnType<typeof createRefundsEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    const requestParams = {
        amount: 15.0,
        id_sale: 1234567,
        reason: 'Special discount.',
    };

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        refundsEndpoint = createRefundsEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('refund()', () => {
        beforeEach(() => refundsEndpoint.refund(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/refunds');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });
});
