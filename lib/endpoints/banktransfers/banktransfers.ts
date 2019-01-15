import { GotInstance } from '../../common/GotInstance';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';

export const createBanktransfersEndpoint = (gotInstance: GotInstance) => {
    return {
        async sale(banktransferSale: SaleRequest) {
            const response = await gotInstance.post('/banktransfers/sale', {
                body: banktransferSale,
            });
            return (response.body as unknown) as SaleResponse;
        },
    };
};
