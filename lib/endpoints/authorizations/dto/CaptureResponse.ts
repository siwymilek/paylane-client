import { CaptureError } from './CaptureError';

export interface CaptureResponse {
    success: boolean;
    error?: CaptureError;
    fraud_score: number;
    id_account: number;
}
