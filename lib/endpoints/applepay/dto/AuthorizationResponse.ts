import { AuthorizationError } from './AuthorizationError';

export interface AuthorizationResponse {
    success: boolean;
    id_authorization: number;
    error?: AuthorizationError;
}
