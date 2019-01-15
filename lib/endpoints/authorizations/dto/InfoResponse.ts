import { InfoError } from './InfoError';

export interface InfoResponse {
    success: boolean;
    id_authorization: number;
    status: 'CAPTURED' | 'ACTIVE' | 'CLOSED' | 'EXPIRED' | 'NOT_FOUND';
    amount: number;
    description: string;
    date?: string;
    currency_code?: string;
    is_disposed?: boolean;
    customer?: {
        name: string;
        email: string;
    };
    card?: {
        name: string;
        number: string;
    };
    error?: InfoError;
}
