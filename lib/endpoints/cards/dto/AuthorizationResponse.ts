import { CardSaleResponse } from './CardSaleResponse';

export interface AuthorizationResponse extends CardSaleResponse {
    id_authorization: number;
}
