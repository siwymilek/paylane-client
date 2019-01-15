import { GotInstance } from '../../common/GotInstance';
import { CheckCardByTokenRequest } from './dto/CheckCardByTokenRequest';
import { CheckCardByTokenResponse } from './dto/CheckCardByTokenResponse';
import { CheckCardRequest } from './dto/CheckCardRequest';
import { CheckCardResponse } from './dto/CheckCardResponse';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';

export const create3dSecureEndpoint = (gotInstance: GotInstance) => {
    return {
        async authSale(saleRequest: SaleRequest) {
            const response = await gotInstance.post('/3DSecure/authSale', {
                body: saleRequest,
            });
            return (response.body as unknown) as SaleResponse;
        },

        async checkCard(checkCard: CheckCardRequest) {
            const response = await gotInstance.post('/3DSecure/checkCard', {
                body: checkCard,
            });
            return (response.body as unknown) as CheckCardResponse;
        },

        async checkCardByToken(checkCardByToken: CheckCardByTokenRequest) {
            const response = await gotInstance.post(
                '/3DSecure/checkCardByToken',
                {
                    body: checkCardByToken,
                },
            );
            return (response.body as unknown) as CheckCardByTokenResponse;
        },
    };
};
