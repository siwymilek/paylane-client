import { Sale } from './Sale';

export interface AuthorizationRequest {
    sale: Sale;
    back_url: string;
}
