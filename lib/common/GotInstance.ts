import { GotJSONOptions, GotPromise, GotUrl } from 'got';

type GotFunction = <ResponseType extends object>(
    url: GotUrl,
    options?: Partial<GotJSONOptions>,
) => GotPromise<ResponseType>;

export interface GotInstance {
    get: GotFunction;
    post: GotFunction;
}
