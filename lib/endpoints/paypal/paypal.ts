import { GotFn } from 'got';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { AuthorizationResponse } from './dto/AuthorizationResponse';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';

export const createPaypalEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async sale(paypalSale: SaleRequest) {
            const response = await httpClient.post('/paypal/sale', {
                body: JSON.stringify(paypalSale),
            });
            return (response.body as unknown) as SaleResponse;
        },

        async authorization(paypalAuthorization: AuthorizationRequest) {
            const response = await httpClient.post('/paypal/authorization', {
                body: JSON.stringify(paypalAuthorization),
            });
            return (response.body as unknown) as AuthorizationResponse;
        },
    };
};
