import { GotFn } from 'got';
import { BankCodesResponse } from './dto/BankCodesResponse';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';

export const createIdealEndpoint = (httpClient: {
    post: GotFn;
    get: GotFn;
}) => {
    return {
        async sale(idealSale: SaleRequest) {
            const response = await httpClient.post('/ideal/sale', {
                body: JSON.stringify(idealSale),
            });
            return (response.body as unknown) as SaleResponse;
        },

        async bankCodes() {
            const response = await httpClient.get('/ideal/bankcodes');
            return (response.body as unknown) as BankCodesResponse;
        },
    };
};
