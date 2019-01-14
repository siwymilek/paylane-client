import { Customer } from '../../../common/dto/Customer';
import { Sale } from '../../../common/dto/Sale';
import { CardToken } from './CardToken';

export interface TokenSaleRequest {
    sale: Sale;
    customer: Customer;
    card: CardToken;
}
