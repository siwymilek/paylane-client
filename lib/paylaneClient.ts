import got from 'got';
import { createCardsEndpoint } from './endpoints/cards/cards';

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
        card: createCardsEndpoint(client),
    };
};
