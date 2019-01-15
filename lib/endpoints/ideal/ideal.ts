import { GotInstance } from '../../common/GotInstance';
import { BankCodesResponse } from './dto/BankCodesResponse';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';

export const createIdealEndpoint = (gotInstance: GotInstance) => {
    return {
        async sale(idealSale: SaleRequest) {
            const response = await gotInstance.post('/ideal/sale', {
                body: idealSale,
            });
            return (response.body as unknown) as SaleResponse;
        },

        async bankCodes() {
            const response = await gotInstance.get('/ideal/bankcodes');
            return (response.body as unknown) as BankCodesResponse;
        },
    };
};
