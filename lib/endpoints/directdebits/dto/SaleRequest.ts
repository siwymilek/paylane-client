import { Customer } from '../../../common/dto/Customer';
import { Sale } from '../../../common/dto/Sale';
import { DirectDebitAccount } from './DirectDebitAccount';

export interface SaleRequest {
    sale: Sale;
    customer: Customer;
    account: DirectDebitAccount;
}
