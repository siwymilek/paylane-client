import { GotFn } from 'got';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { AuthorizationResponse } from './dto/AuthorizationResponse';
import { AuthorizationTokenRequest } from './dto/AuthorizationTokenRequest';
import { CardSaleRequest } from './dto/CardSaleRequest';
import { CardSaleResponse } from './dto/CardSaleResponse';
import { CardTokenSaleRequest } from './dto/CardTokenSaleRequest';

export const createCardsEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async sale(cardSale: CardSaleRequest) {
            const response = await httpClient.post('/cards/sale', {
                body: JSON.stringify(cardSale),
            });
            return (response.body as unknown) as CardSaleResponse;
        },

        async saleByToken(cardTokenSale: CardTokenSaleRequest) {
            const response = await httpClient.post('/cards/saleByToken', {
                body: JSON.stringify(cardTokenSale),
            });
            return (response.body as unknown) as CardSaleResponse;
        },

        async authorization(authorization: AuthorizationRequest) {
            const response = await httpClient.post('/cards/authorization', {
                body: JSON.stringify(authorization),
            });
            return (response.body as unknown) as AuthorizationResponse;
        },

        async authorizationByToken(authorization: AuthorizationTokenRequest) {
            const response = await httpClient.post(
                '/cards/authorizationByToken',
                {
                    body: JSON.stringify(authorization),
                },
            );
            return (response.body as unknown) as AuthorizationResponse;
        },
    };
};
