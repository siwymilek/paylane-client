import { Customer } from '../../../common/dto/Customer';
import { Sale } from '../../../common/dto/Sale';
import { Card } from './Card';

export interface SaleRequest {
    sale: Sale;
    customer: Customer;
    card: Card;
}
