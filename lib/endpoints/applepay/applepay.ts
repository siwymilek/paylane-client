import { SaleResponse } from '../../common/dto/SaleResponse';
import { GotInstance } from '../../common/GotInstance';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { AuthorizationResponse } from './dto/AuthorizationResponse';
import { SaleRequest } from './dto/SaleRequest';

export const createApplepayEndpoint = (gotInstance: GotInstance) => {
    return {
        async sale(applepaySale: SaleRequest) {
            const response = await gotInstance.post<SaleResponse>(
                '/applepay/sale',
                {
                    body: applepaySale,
                },
            );
            return response.body;
        },

        async authorization(authorization: AuthorizationRequest) {
            const response = await gotInstance.post('/applepay/authorization', {
                body: authorization,
            });
            return (response.body as unknown) as AuthorizationResponse;
        },
    };
};
