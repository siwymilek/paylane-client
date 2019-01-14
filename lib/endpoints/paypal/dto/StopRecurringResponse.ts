import { GenericPaylaneError } from '../../../common/dto/GenericPaylaneError';

export interface StopRecurringResponse {
    id_paypal_recurring: number;
    success: boolean;
    error?: GenericPaylaneError;
}
