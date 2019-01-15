import { SaleError } from '../../../common/dto/SaleError';

export interface CheckCardByTokenResponse {
    success: boolean;
    id_3dsecure_auth: number;
    redirect_url: string;
    error?: SaleError;
}
