import { SaleError } from '../../../common/dto/SaleError';

export interface AuthorizationRequest {
    success: boolean;
    id_sale: number;
    id_account: number;
    error?: SaleError;
}
