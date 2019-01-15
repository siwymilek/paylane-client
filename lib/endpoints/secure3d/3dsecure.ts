import { GotFn } from 'got';
import { CheckCardByTokenRequest } from './dto/CheckCardByTokenRequest';
import { CheckCardByTokenResponse } from './dto/CheckCardByTokenResponse';
import { CheckCardRequest } from './dto/CheckCardRequest';
import { CheckCardResponse } from './dto/CheckCardResponse';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';

export const create3dSecureEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async authSale(saleRequest: SaleRequest) {
            const response = await httpClient.post('/3DSecure/authSale', {
                body: JSON.stringify(saleRequest),
            });
            return (response.body as unknown) as SaleResponse;
        },

        async checkCard(checkCard: CheckCardRequest) {
            const response = await httpClient.post('/3DSecure/checkCard', {
                body: JSON.stringify(checkCard),
            });
            return (response.body as unknown) as CheckCardResponse;
        },

        async checkCardByToken(checkCardByToken: CheckCardByTokenRequest) {
            const response = await httpClient.post(
                '/3DSecure/checkCardByToken',
                {
                    body: JSON.stringify(checkCardByToken),
                },
            );
            return (response.body as unknown) as CheckCardByTokenResponse;
        },
    };
};
