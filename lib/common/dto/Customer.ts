import { Address } from './Address';

export interface Customer {
    name: string;
    email: string;
    ip: string;
    address: Address;
}
