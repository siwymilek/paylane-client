import { PaylaneError } from '../../../common/dto/PaylaneError';

export interface CheckResponse {
    success: boolean;
    card_type: string;
    error: PaylaneError;
}
