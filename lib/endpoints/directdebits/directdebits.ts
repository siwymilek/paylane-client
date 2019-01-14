import { GotFn } from 'got';
import { SaleResponse } from '../../common/dto/SaleResponse';
import { SaleRequest } from './dto/SaleRequest';

export const createDirectdebitsEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async sale(directdebitsSale: SaleRequest) {
            const response = await httpClient.post('/directdebits/sale', {
                body: JSON.stringify(directdebitsSale),
            });
            return (response.body as unknown) as SaleResponse;
        },
    };
};
