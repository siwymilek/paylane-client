import { Customer } from '../../../common/dto/Customer';
import { Card } from './Card';
import { Sale } from './Sale';

export interface SaleRequest {
    sale: Sale;
    customer: Customer;
    card: Card;
}
