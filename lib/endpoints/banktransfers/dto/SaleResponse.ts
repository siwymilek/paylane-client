import { SaleResponse as GenericSaleResponse } from '../../../common/dto/SaleResponse';

export interface SaleResponse extends GenericSaleResponse {
    redirect_url: string;
}
