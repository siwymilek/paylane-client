import { RefundError } from './RefundError';

export interface RefundResponse {
    success: boolean;
    id_refund: number;
    error: RefundError;
}
