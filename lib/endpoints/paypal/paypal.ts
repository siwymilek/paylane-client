import { GotInstance } from '../../common/GotInstance';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { AuthorizationResponse } from './dto/AuthorizationResponse';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';
import { StopRecurringRequest } from './dto/StopRecurringRequest';

export const createPaypalEndpoint = (gotInstance: GotInstance) => {
    return {
        async sale(paypalSale: SaleRequest) {
            const response = await gotInstance.post('/paypal/sale', {
                body: paypalSale,
            });
            return (response.body as unknown) as SaleResponse;
        },

        async authorization(paypalAuthorization: AuthorizationRequest) {
            const response = await gotInstance.post('/paypal/authorization', {
                body: paypalAuthorization,
            });
            return (response.body as unknown) as AuthorizationResponse;
        },

        async stopRecurring(stopRecurring: StopRecurringRequest) {
            const response = await gotInstance.post('/paypal/stopRecurring', {
                body: stopRecurring,
            });
            return (response.body as unknown) as AuthorizationResponse;
        },
    };
};
