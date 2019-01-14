import { Sale } from '../../cards/dto/Sale';
import { Recurring } from './Recurring';

export interface SaleRequest {
    sale: Sale;
    back_url: string;
    recurring?: Recurring;
}
