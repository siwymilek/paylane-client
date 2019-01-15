import got from 'got';
import { createCardsEndpoint } from './cards';
jest.mock('got');

describe('cards', () => {
    let cardsEndpoint: ReturnType<typeof createCardsEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    const requestParams = {
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
        beforeEach(() => cardsEndpoint.sale(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/sale');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });

    describe('saleByToken()', () => {
        beforeEach(() =>
            cardsEndpoint.saleByToken({
                ...requestParams,
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
                body: {
                    ...requestParams,
                    card: {
                        token: 'abc',
                    },
                },
            });
        });
    });

    describe('authorization()', () => {
        beforeEach(() => cardsEndpoint.authorization(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/authorization');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });

    describe('authorizationByToken()', () => {
        beforeEach(() =>
            cardsEndpoint.authorizationByToken({
                ...requestParams,
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
                body: {
                    ...requestParams,
                    card: {
                        token: 'abc',
                    },
                },
            });
        });
    });

    describe('generateToken()', () => {
        beforeEach(() =>
            cardsEndpoint.generateToken({
                ...requestParams.card,
                public_api_key: 'abc',
            }),
        );

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/generateToken');
            expect(params).toMatchObject({
                body: {
                    ...requestParams.card,
                    public_api_key: 'abc',
                },
            });
        });
    });

    describe('check()', () => {
        beforeEach(() =>
            cardsEndpoint.check({
                card_number: '123',
            }),
        );

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/check');
            expect(params).toMatchObject({
                body: {
                    card_number: '123',
                },
            });
        });
    });

    describe('checkByToken()', () => {
        beforeEach(() =>
            cardsEndpoint.checkByToken({
                token: '123',
            }),
        );

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/cards/checkByToken');
            expect(params).toMatchObject({
                body: {
                    token: '123',
                },
            });
        });
    });
});
