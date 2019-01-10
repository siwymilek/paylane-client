import { Customer } from '../../../common/dto/Customer';
import { CardToken } from './CardToken';
import { Sale } from '../../../common/dto/Sale';

export interface CardTokenSale {
    sale: Sale;
    customer: Customer;
    card: CardToken;
}
