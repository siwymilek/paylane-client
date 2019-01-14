import got from 'got';
import { createCardsEndpoint } from './cards';
jest.mock('got');

describe('Cards', () => {
    let cardsEndpoint: ReturnType<typeof createCardsEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    const cardParams = {
        card: {
            card_code: '123',
            card_number: '41111111111111',
            expiration_month: '11',
            expiration_year: '2020',
            name_on_card: 'Test Test',
        },
        customer: {
            email: 'john@doe.com',
            ip: '127.0.0.1',
            name: 'Test Test',
        },
        sale: {
            amount: 123,
            currency: 'EUR',
            description: 'test',
        },
    };

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        cardsEndpoint = createCardsEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('sale()', () => {
        beforeEach(() => cardsEndpoint.sale(cardParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/sale');
            expect(params).toMatchObject({
                body: JSON.stringify(cardParams),
            });
        });
    });

    describe('saleByToken()', () => {
        beforeEach(() =>
            cardsEndpoint.saleByToken({
                ...cardParams,
                card: {
                    token: 'abc',
                },
            }),
        );

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/saleByToken');
            expect(params).toMatchObject({
                body: JSON.stringify({
                    ...cardParams,
                    card: {
                        token: 'abc',
                    },
                }),
            });
        });
    });

    describe('authorization()', () => {
        beforeEach(() => cardsEndpoint.authorization(cardParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/authorization');
            expect(params).toMatchObject({
                body: JSON.stringify(cardParams),
            });
        });
    });

    describe('authorizationByToken()', () => {
        beforeEach(() =>
            cardsEndpoint.authorizationByToken({
                ...cardParams,
                card: {
                    token: 'abc',
                },
            }),
        );

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/authorizationByToken');
            expect(params).toMatchObject({
                body: JSON.stringify({
                    ...cardParams,
                    card: {
                        token: 'abc',
                    },
                }),
            });
        });
    });
});
