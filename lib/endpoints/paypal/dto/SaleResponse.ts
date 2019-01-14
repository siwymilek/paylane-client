import { SaleError } from '../../../common/dto/SaleError';

export interface SaleResponse {
    redirect_url: string;
    id_sale: number;
    success: boolean;
    error?: SaleError;
}
