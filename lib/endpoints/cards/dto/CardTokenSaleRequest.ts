import { Customer } from '../../../common/dto/Customer';
import { Sale } from '../../../common/dto/Sale';
import { CardToken } from './CardToken';

export interface CardTokenSaleRequest {
    sale: Sale;
    customer: Customer;
    card: CardToken;
}
