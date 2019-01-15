import { GotInstance } from '../../common/GotInstance';
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

export const createCardsEndpoint = (gotInstance: GotInstance) => {
    return {
        async sale(cardSale: SaleRequest) {
            const response = await gotInstance.post('/cards/sale', {
                body: cardSale,
            });
            return (response.body as unknown) as SaleResponse;
        },

        async saleByToken(cardTokenSale: TokenSaleRequest) {
            const response = await gotInstance.post('/cards/saleByToken', {
                body: cardTokenSale,
            });
            return (response.body as unknown) as SaleResponse;
        },

        async authorization(authorization: AuthorizationRequest) {
            const response = await gotInstance.post('/cards/authorization', {
                body: authorization,
            });
            return (response.body as unknown) as AuthorizationResponse;
        },

        async authorizationByToken(authorization: AuthorizationTokenRequest) {
            const response = await gotInstance.post(
                '/cards/authorizationByToken',
                {
                    body: authorization,
                },
            );
            return (response.body as unknown) as AuthorizationResponse;
        },

        async generateToken(tokenRequest: GenerateTokenRequest) {
            const response = await gotInstance.post('/cards/generateToken', {
                body: tokenRequest,
            });
            return (response.body as unknown) as GenerateTokenResponse;
        },

        async check(checkRequest: CheckRequest) {
            const response = await gotInstance.post('/cards/check', {
                body: checkRequest,
            });
            return (response.body as unknown) as CheckResponse;
        },

        async checkByToken(checkRequest: CheckTokenRequest) {
            const response = await gotInstance.post('/cards/checkByToken', {
                body: checkRequest,
            });
            return (response.body as unknown) as CheckResponse;
        },
    };
};
