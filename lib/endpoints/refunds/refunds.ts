import { GotFn } from 'got';
import { RefundRequest } from './dto/RefundRequest';
import { RefundResponse } from './dto/RefundResponse';

export const createRefundsEndpoint = (httpClient: { post: GotFn }) => {
    return {
        async refund(refund: RefundRequest) {
            const response = await httpClient.post('/refunds', {
                body: JSON.stringify(refund),
            });
            return (response.body as unknown) as RefundResponse;
        },
    };
};
