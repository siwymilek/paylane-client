import { SaleError } from '../../../common/dto/SaleError';

export interface SaleResponse {
    success: boolean;
    id_sale: number;
    avs_result: string;
    fraud_score: number;
    id_account: number;
    error?: SaleError;
}
