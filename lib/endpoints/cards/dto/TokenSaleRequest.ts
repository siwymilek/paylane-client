import { Customer } from '../../../common/dto/Customer';
import { CardToken } from './CardToken';
import { Sale } from './Sale';

export interface TokenSaleRequest {
    sale: Sale;
    customer: Customer;
    card: CardToken;
}
