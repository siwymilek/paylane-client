import { Customer } from '../../../common/dto/Customer';
import { Card } from './Card';
import { Sale } from '../../../common/dto/Sale';

export interface CardSale {
    sale: Sale;
    customer: Customer;
    card: Card;
}
