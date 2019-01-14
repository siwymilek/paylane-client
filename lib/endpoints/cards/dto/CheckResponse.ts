import { GenericPaylaneError } from '../../../common/dto/GenericPaylaneError';

export interface CheckResponse {
    success: boolean;
    card_type: string;
    error: GenericPaylaneError;
}
