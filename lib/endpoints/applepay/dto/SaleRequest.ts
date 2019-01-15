import { Customer } from '../../../common/dto/Customer';
import { Sale } from '../../../common/dto/Sale';
import { ApplepayCardToken } from './CardToken';

export interface SaleRequest {
    sale: Sale;
    customer: Customer;
    card: ApplepayCardToken;
}
