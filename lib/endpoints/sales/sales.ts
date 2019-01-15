import { GotFn } from 'got';
import { InfoRequest } from './dto/InfoRequest';
import { InfoResponse } from './dto/InfoResponse';
import { StatusRequest } from './dto/StatusRequest';
import { StatusResponse } from './dto/StatusResponse';

export const createSalesEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async info(infoRequest: InfoRequest) {
            const response = await httpClient.post('/sales/info', {
                body: JSON.stringify(infoRequest),
            });
            return (response.body as unknown) as InfoResponse;
        },

        async status(statusRequest: StatusRequest) {
            const response = await httpClient.post('/sales/status', {
                body: JSON.stringify(statusRequest),
            });
            return (response.body as unknown) as StatusResponse;
        },
    };
};
