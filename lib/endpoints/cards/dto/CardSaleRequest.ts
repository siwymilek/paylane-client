import { Customer } from '../../../common/dto/Customer';
import { Sale } from '../../../common/dto/Sale';
import { Card } from './Card';

export interface CardSaleRequest {
    sale: Sale;
    customer: Customer;
    card: Card;
}
