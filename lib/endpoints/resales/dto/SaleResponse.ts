import { SaleError } from '../../../common/dto/SaleError';

export interface SaleResponse {
    error?: SaleError;
    success: boolean;
    id_account: number;
}
