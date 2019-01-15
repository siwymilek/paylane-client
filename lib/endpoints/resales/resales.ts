import { SaleResponse } from '../../common/dto/SaleResponse';
import { GotInstance } from '../../common/GotInstance';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { AuthorizationResponse } from './dto/AuthorizationResponse';
import { SaleRequest } from './dto/SaleRequest';

export const createResalesEndpoint = (gotInstance: GotInstance) => {
    return {
        async sale(resalesSale: SaleRequest) {
            const response = await gotInstance.post('/resales/sale', {
                body: resalesSale,
            });
            return (response.body as unknown) as SaleResponse;
        },

        async authorization(authorization: AuthorizationRequest) {
            const response = await gotInstance.post('/resales/authorization', {
                body: authorization,
            });
            return (response.body as unknown) as AuthorizationResponse;
        },
    };
};
