import { GotInstance } from '../../common/GotInstance';
import { CaptureRequest } from './dto/CaptureRequest';
import { CaptureResponse } from './dto/CaptureResponse';
import { CloseRequest } from './dto/CloseRequest';
import { CloseResponse } from './dto/CloseResponse';
import { InfoRequest } from './dto/InfoRequest';
import { InfoResponse } from './dto/InfoResponse';

export const createAuthorizationsEndpoint = (gotInstance: GotInstance) => {
    return {
        async capture(capture: CaptureRequest) {
            const response = await gotInstance.post('/authorizations/capture', {
                body: capture,
            });
            return (response.body as unknown) as CaptureResponse;
        },

        async close(close: CloseRequest) {
            const response = await gotInstance.post('/authorizations/close', {
                body: close,
            });
            return (response.body as unknown) as CloseResponse;
        },

        async info(info: InfoRequest) {
            const response = await gotInstance.post('/authorizations/info', {
                body: info,
            });
            return (response.body as unknown) as InfoResponse;
        },
    };
};
