import { CloseError } from './CloseError';

export interface CloseResponse {
    success: boolean;
    error?: CloseError;
}
