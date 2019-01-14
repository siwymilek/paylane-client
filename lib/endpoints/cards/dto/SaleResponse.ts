import { SaleError } from './SaleError';

export interface SaleResponse {
    error?: SaleError;
    success: true;
    id_sale: number;
    avs_result: string;
    fraud_score: number;
    id_account: number;
}
