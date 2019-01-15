export interface SaleRequest {
    sale: Sale;
    customer: Customer;
    back_url: string;
    bank_code: string;
}

export interface Customer {
    name: string;
    email: string;
    ip: string;
    address: Address;
}

export interface Address {
    street_house: string;
    city: string;
    state: string;
    zip: string;
    country_code: string;
}

export interface Sale {
    amount: number;
    currency: string;
    description: string;
}
