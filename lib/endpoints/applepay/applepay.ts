import { GotFn } from 'got';
import { SaleResponse } from '../../common/dto/SaleResponse';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { AuthorizationResponse } from './dto/AuthorizationResponse';
import { SaleRequest } from './dto/SaleRequest';

export const createApplepayEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async sale(applepaySale: SaleRequest) {
            const response = await httpClient.post('/applepay/sale', {
                body: JSON.stringify(applepaySale),
            });
            return (response.body as unknown) as SaleResponse;
        },

        async authorization(authorization: AuthorizationRequest) {
            const response = await httpClient.post('/applepay/authorization', {
                body: JSON.stringify(authorization),
            });
            return (response.body as unknown) as AuthorizationResponse;
        },
    };
};
