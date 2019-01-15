export interface BankCodesResponse {
    success: boolean;
    data: BankCode[];
}

export interface BankCode {
    bank_code: string;
    bank_name: string;
    country: string;
}
