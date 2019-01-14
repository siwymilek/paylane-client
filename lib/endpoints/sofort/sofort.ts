import { GotFn } from 'got';
import { SaleResponse } from '../../common/dto/SaleResponse';
import { SaleRequest } from './dto/SaleRequest';

export const createSofortEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async sale(sofortSale: SaleRequest) {
            const response = await httpClient.post('/sofort/sale', {
                body: JSON.stringify(sofortSale),
            });
            return (response.body as unknown) as SaleResponse;
        },
    };
};
