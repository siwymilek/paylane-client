import { GotInstance } from '../../common/GotInstance';
import { RefundRequest } from './dto/RefundRequest';
import { RefundResponse } from './dto/RefundResponse';

export const createRefundsEndpoint = (gotInstance: GotInstance) => {
    return {
        async refund(refund: RefundRequest) {
            const response = await gotInstance.post('/refunds', {
                body: refund,
            });
            return (response.body as unknown) as RefundResponse;
        },
    };
};
