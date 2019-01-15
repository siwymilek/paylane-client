import { SaleResponse } from '../../common/dto/SaleResponse';
import { GotInstance } from '../../common/GotInstance';
import { SaleRequest } from './dto/SaleRequest';

export const createSofortEndpoint = (gotInstance: GotInstance) => {
    return {
        async sale(sofortSale: SaleRequest) {
            const response = await gotInstance.post('/sofort/sale', {
                body: sofortSale,
            });
            return (response.body as unknown) as SaleResponse;
        },
    };
};
