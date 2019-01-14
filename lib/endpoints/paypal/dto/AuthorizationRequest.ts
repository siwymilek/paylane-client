import { Sale } from '../../../common/dto/Sale';

export interface AuthorizationRequest {
    sale: Sale;
    back_url: string;
}
