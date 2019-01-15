import { Customer } from '../../../common/dto/Customer';
import { CardToken } from '../../cards/dto/CardToken';
import { Sale } from '../../cards/dto/Sale';

export interface CheckCardByTokenRequest {
    sale: Sale;
    customer: Customer;
    card: CardToken;
    back_url: string;
}
