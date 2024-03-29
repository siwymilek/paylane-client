import got from 'got';
import { createApplepayEndpoint } from './endpoints/applepay/applepay';
import { createAuthorizationsEndpoint } from './endpoints/authorizations/authorizations';
import { createBanktransfersEndpoint } from './endpoints/banktransfers/banktransfers';
import { createCardsEndpoint } from './endpoints/cards/cards';
import { createDirectdebitsEndpoint } from './endpoints/directdebits/directdebits';
import { createIdealEndpoint } from './endpoints/ideal/ideal';
import { createPaypalEndpoint } from './endpoints/paypal/paypal';
import { createRefundsEndpoint } from './endpoints/refunds/refunds';
import { createResalesEndpoint } from './endpoints/resales/resales';
import { createSalesEndpoint } from './endpoints/sales/sales';
import { create3dSecureEndpoint } from './endpoints/secure3d/3dsecure';
import { createSofortEndpoint } from './endpoints/sofort/sofort';

type gotWithExtend = typeof got & {
    extend(options: got.GotJSONOptions): typeof got;
};

interface PaylaneCredentials {
    login: string;
    password: string;
}

export const setup = (credentials: PaylaneCredentials) => {
    if (!credentials || !credentials.login || !credentials.password) {
        throw new Error(
            'Missing credentials, make sure to initialize Paylane Client properly',
        );
    }

    const auth = `${credentials.login}:${credentials.password}`;

    const client = (got as gotWithExtend).extend({
        auth,
        baseUrl: `https://direct.paylane.com/rest`,
        headers: {
            'Content-type': 'application/json',
        },
        json: true,
    });

    return {
        applepay: createApplepayEndpoint(client),
        authorizations: createAuthorizationsEndpoint(client),
        bankcodes: createIdealEndpoint(client),
        banktransfers: createBanktransfersEndpoint(client),
        card: createCardsEndpoint(client),
        directdebits: createDirectdebitsEndpoint(client),
        ideal: createIdealEndpoint(client),
        paypal: createPaypalEndpoint(client),
        refunds: createRefundsEndpoint(client),
        resales: createResalesEndpoint(client),
        sales: createSalesEndpoint(client),
        secure3d: create3dSecureEndpoint(client),
        sofort: createSofortEndpoint(client),
    };
};
