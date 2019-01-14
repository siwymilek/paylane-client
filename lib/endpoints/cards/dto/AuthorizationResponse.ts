import { SaleResponse } from './SaleResponse';

export interface AuthorizationResponse extends SaleResponse {
    id_authorization: number;
}
