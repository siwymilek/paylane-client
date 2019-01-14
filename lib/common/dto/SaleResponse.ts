import { SaleError } from './SaleError';

export interface SaleResponse {
    success: boolean;
    id_sale: number;
    error?: SaleError;
}
