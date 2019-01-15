import { GotFn } from 'got';
import { SaleResponse } from '../../common/dto/SaleResponse';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { AuthorizationResponse } from './dto/AuthorizationResponse';
import { SaleRequest } from './dto/SaleRequest';

export const createResalesEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async sale(resalesSale: SaleRequest) {
            const response = await httpClient.post('/resales/sale', {
                body: JSON.stringify(resalesSale),
            });
            return (response.body as unknown) as SaleResponse;
        },

        async authorization(authorization: AuthorizationRequest) {
            const response = await httpClient.post('/resales/authorization', {
                body: JSON.stringify(authorization),
            });
            return (response.body as unknown) as AuthorizationResponse;
        },
    };
};
