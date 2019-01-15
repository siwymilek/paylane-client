import { GotInstance } from '../../common/GotInstance';
import { InfoRequest } from './dto/InfoRequest';
import { InfoResponse } from './dto/InfoResponse';
import { StatusRequest } from './dto/StatusRequest';
import { StatusResponse } from './dto/StatusResponse';

export const createSalesEndpoint = (gotInstance: GotInstance) => {
    return {
        async info(infoRequest: InfoRequest) {
            const response = await gotInstance.post('/sales/info', {
                body: infoRequest,
            });
            return (response.body as unknown) as InfoResponse;
        },

        async status(statusRequest: StatusRequest) {
            const response = await gotInstance.post('/sales/status', {
                body: statusRequest,
            });
            return (response.body as unknown) as StatusResponse;
        },
    };
};
