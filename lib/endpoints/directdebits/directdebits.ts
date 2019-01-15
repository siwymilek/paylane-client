import { SaleResponse } from '../../common/dto/SaleResponse';
import { GotInstance } from '../../common/GotInstance';
import { SaleRequest } from './dto/SaleRequest';

export const createDirectdebitsEndpoint = (gotInstance: GotInstance) => {
    return {
        async sale(directdebitsSale: SaleRequest) {
            const response = await gotInstance.post('/directdebits/sale', {
                body: directdebitsSale,
            });
            return (response.body as unknown) as SaleResponse;
        },
    };
};
