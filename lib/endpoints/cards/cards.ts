import { GotFn } from 'got';
import { AuthorizationRequest } from './dto/AuthorizationRequest';
import { AuthorizationResponse } from './dto/AuthorizationResponse';
import { AuthorizationTokenRequest } from './dto/AuthorizationTokenRequest';
import { CheckRequest } from './dto/CheckRequest';
import { CheckResponse } from './dto/CheckResponse';
import { CheckTokenRequest } from './dto/CheckTokenRequest';
import { GenerateTokenRequest } from './dto/GenerateTokenRequest';
import { GenerateTokenResponse } from './dto/GenerateTokenResponse';
import { SaleRequest } from './dto/SaleRequest';
import { SaleResponse } from './dto/SaleResponse';
import { TokenSaleRequest } from './dto/TokenSaleRequest';

export const createCardsEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async sale(cardSale: SaleRequest) {
            const response = await httpClient.post('/cards/sale', {
                body: JSON.stringify(cardSale),
            });
            return (response.body as unknown) as SaleResponse;
        },

        async saleByToken(cardTokenSale: TokenSaleRequest) {
            const response = await httpClient.post('/cards/saleByToken', {
                body: JSON.stringify(cardTokenSale),
            });
            return (response.body as unknown) as SaleResponse;
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

        async generateToken(tokenRequest: GenerateTokenRequest) {
            const response = await httpClient.post('/cards/generateToken', {
                body: JSON.stringify(tokenRequest),
            });
            return (response.body as unknown) as GenerateTokenResponse;
        },

        async check(checkRequest: CheckRequest) {
            const response = await httpClient.post('/cards/check', {
                body: JSON.stringify(checkRequest),
            });
            return (response.body as unknown) as CheckResponse;
        },

        async checkByToken(checkRequest: CheckTokenRequest) {
            const response = await httpClient.post('/cards/checkByToken', {
                body: JSON.stringify(checkRequest),
            });
            return (response.body as unknown) as CheckResponse;
        },
    };
};
