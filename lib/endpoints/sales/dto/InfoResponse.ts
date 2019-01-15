import { InfoError } from './InfoError';

export interface InfoResponse {
    success: boolean;
    id_sale: number;
    status: string;
    date: string;
    clearing_date: string;
    refunds?: Refund[];
    is_chargeback: boolean;
    is_reversal: boolean;
    amount: number;
    currency: string;
    description: string;
    customer: Customer;
    card: Card;
    id_account: number;
    is_disposed: boolean;
    error?: InfoError;
}

export interface Card {
    name: string;
    number: string;
}

export interface Customer {
    name: string;
    email: string;
}

export interface Refund {
    id_refund: number;
    date: string;
    amount: number;
    description: string;
}
