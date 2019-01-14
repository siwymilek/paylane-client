import { CardSaleError } from './CardSaleError';

export interface CardSaleResponse {
    error?: CardSaleError;
    success: true;
    id_sale: number;
    avs_result: string;
    fraud_score: number;
    id_account: number;
}
