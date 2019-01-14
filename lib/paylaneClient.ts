import got from 'got';
import { createBanktransfersEndpoint } from './endpoints/banktransfers/banktransfers';
import { createCardsEndpoint } from './endpoints/cards/cards';
import { createDirectdebitsEndpoint } from './endpoints/directdebits/directdebits';
import { createPaypalEndpoint } from './endpoints/paypal/paypal';

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
        banktransfers: createBanktransfersEndpoint(client),
        card: createCardsEndpoint(client),
        directdebits: createDirectdebitsEndpoint(client),
        paypal: createPaypalEndpoint(client),
    };
};
