import got from 'got';
import { createAuthorizationsEndpoint } from './authorizations';
import { CaptureRequest } from './dto/CaptureRequest';
import { CloseRequest } from './dto/CloseRequest';
import { InfoRequest } from './dto/InfoRequest';
jest.mock('got');

describe('authorizations', () => {
    let authorizationsEndpoint: ReturnType<typeof createAuthorizationsEndpoint>;
    let mockedGot: jest.Mocked<typeof got>;

    beforeEach(() => {
        mockedGot = (got as unknown) as jest.Mocked<typeof got>;
        mockedGot.post.mockResolvedValue({ body: {} });
        authorizationsEndpoint = createAuthorizationsEndpoint(got);
    });

    afterEach(() => mockedGot.post.mockClear());

    describe('capture()', () => {
        const requestParams: CaptureRequest = {
            amount: 100,
            description: 'Test',
            id_authorization: 123,
        };

        beforeEach(() => authorizationsEndpoint.capture(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/authorizations/capture');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });

    describe('close()', () => {
        const requestParams: CloseRequest = {
            id_authorization: 123,
        };

        beforeEach(() => authorizationsEndpoint.close(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/authorizations/close');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });

    describe('info()', () => {
        const requestParams: InfoRequest = {
            id_authorization: 123,
        };

        beforeEach(() => authorizationsEndpoint.info(requestParams));

        it('should call http client with proper uri and params', () => {
            expect(mockedGot.post).toHaveBeenCalled();
            const [uri, params] = mockedGot.post.mock.calls[0];

            expect(uri).toEqual('/authorizations/info');
            expect(params).toMatchObject({
                body: requestParams,
            });
        });
    });
});
