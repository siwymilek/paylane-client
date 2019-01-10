import got from 'got';

type gotWithExtend = typeof got & {
    extend<E extends string | null>(options: got.GotOptions<E>): typeof got;
};

interface PaylaneCredentials {
    login: string;
    password: string;
}

export const setup = (credentials: PaylaneCredentials) => {
    const credentialsAsString = [credentials.login, credentials.password]
        .map(encodeURIComponent)
        .join(':');

    (got as gotWithExtend).extend({
        baseUrl: `https://${credentialsAsString}@direct.paylane.com/rest`,
    });

    return {
        card: {},
    };
};
