import { SaleError } from '../../../common/dto/SaleError';
import { SaleResponse as GenericSaleResponse } from '../../../common/dto/SaleResponse';

export interface SaleResponse extends GenericSaleResponse {
    error?: SaleError;
    avs_result: string;
    fraud_score: number;
    id_account: number;
}
