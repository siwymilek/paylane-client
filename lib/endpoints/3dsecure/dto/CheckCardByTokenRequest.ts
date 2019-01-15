export interface CheckCardByTokenRequest {
    sale: Sale;
    customer: Customer;
    card: Card;
    back_url: string;
}

export interface Card {
    token: string;
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
    fraud_check_on: boolean;
    avs_check_level: number;
}
