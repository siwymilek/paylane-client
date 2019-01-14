import { PaylaneError } from '../../../common/dto/PaylaneError';

export interface GenerateTokenResponse {
    success: boolean;
    token: string;
    error?: PaylaneError;
}
