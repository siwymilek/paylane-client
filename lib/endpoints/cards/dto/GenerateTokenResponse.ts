import { GenericPaylaneError } from '../../../common/dto/GenericPaylaneError';

export interface GenerateTokenResponse {
    success: boolean;
    token: string;
    error?: GenericPaylaneError;
}
