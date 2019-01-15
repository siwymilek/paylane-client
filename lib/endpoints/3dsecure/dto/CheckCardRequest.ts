import { Customer } from '../../../common/dto/Customer';
import { Card } from '../../cards/dto/Card';
import { Sale } from '../../cards/dto/Sale';

export interface CheckCardRequest {
    sale: Sale;
    customer: Customer;
    card: Card;
    back_url: string;
}
