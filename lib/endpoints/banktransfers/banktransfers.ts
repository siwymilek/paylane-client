import { GotFn } from 'got';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';

export const createBanktransfersEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async sale(banktransferSale: SaleRequest) {
            const response = await httpClient.post('/banktransfers/sale', {
                body: JSON.stringify(banktransferSale),
            });
            return (response.body as unknown) as SaleResponse;
        },
    };
};
