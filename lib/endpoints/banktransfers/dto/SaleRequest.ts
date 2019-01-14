import { Customer } from '../../../common/dto/Customer';
import { Sale } from '../../../common/dto/Sale';

export interface SaleRequest {
    sale: Sale;
    customer: Customer;
    back_url: string;
    payment_type: string;
}
