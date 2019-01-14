import { PaylaneError } from '../../../common/dto/PaylaneError';

export interface StopRecurringResponse {
    id_paypal_recurring: number;
    success: boolean;
    error?: PaylaneError;
}
