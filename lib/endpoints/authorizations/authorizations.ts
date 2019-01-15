import { GotFn } from 'got';
import { CaptureRequest } from './dto/CaptureRequest';
import { CaptureResponse } from './dto/CaptureResponse';
import { CloseRequest } from './dto/CloseRequest';
import { CloseResponse } from './dto/CloseResponse';
import { InfoRequest } from './dto/InfoRequest';
import { InfoResponse } from './dto/InfoResponse';

export const createAuthorizationsEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async capture(capture: CaptureRequest) {
            const response = await httpClient.post('/authorizations/capture', {
                body: JSON.stringify(capture),
            });
            return (response.body as unknown) as CaptureResponse;
        },

        async close(close: CloseRequest) {
            const response = await httpClient.post('/authorizations/close', {
                body: JSON.stringify(close),
            });
            return (response.body as unknown) as CloseResponse;
        },

        async info(info: InfoRequest) {
            const response = await httpClient.post('/authorizations/info', {
                body: JSON.stringify(info),
            });
            return (response.body as unknown) as InfoResponse;
        },
    };
};
