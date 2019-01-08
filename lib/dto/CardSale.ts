// See https://paylane.pl/devzone/opis-funkcji-api/ for reference

export interface CardSale {
    sale: Sale;
    customer: Customer;
    card: Card;
}

export interface Card {
    card_number: string;
    expiration_month: string;
    expiration_year: string;
    name_on_card: string;
    card_code: string;
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
