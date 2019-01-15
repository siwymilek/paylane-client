import got from 'got';
import { createApplepayEndpoint } from './endpoints/applepay/applepay';
import { createAuthorizationsEndpoint } from './endpoints/authorizations/authorizations';
import { createBanktransfersEndpoint } from './endpoints/banktransfers/banktransfers';
import { createCardsEndpoint } from './endpoints/cards/cards';
import { createDirectdebitsEndpoint } from './endpoints/directdebits/directdebits';
import { createPaypalEndpoint } from './endpoints/paypal/paypal';
import { createRefundsEndpoint } from './endpoints/refunds/refunds';
import { createResalesEndpoint } from './endpoints/resales/resales';
import { createSalesEndpoint } from './endpoints/sales/sales';
import { createSofortEndpoint } from './endpoints/sofort/sofort';

type gotWithExtend = typeof got & {
    extend(options: got.GotJSONOptions): typeof got;
};

interface PaylaneCredentials {
    login: string;
    password: string;
}

export const setup = (credentials: PaylaneCredentials) => {
    const credentialsAsString = [credentials.login, credentials.password]
        .map(encodeURIComponent)
        .join(':');

    const client = (got as gotWithExtend).extend({
        baseUrl: `https://${credentialsAsString}@direct.paylane.com/rest`,
        headers: {
            'Content-type': 'application/json',
        },
        json: true,
    });

    return {
        applepay: createApplepayEndpoint(client),
        authorizations: createAuthorizationsEndpoint(client),
        banktransfers: createBanktransfersEndpoint(client),
        card: createCardsEndpoint(client),
        directdebits: createDirectdebitsEndpoint(client),
        paypal: createPaypalEndpoint(client),
        refunds: createRefundsEndpoint(client),
        resales: createResalesEndpoint(client),
        sales: createSalesEndpoint(client),
        sofort: createSofortEndpoint(client),
    };
};
