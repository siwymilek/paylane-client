import { GenericPaylaneError } from './GenericPaylaneError';

export interface SaleError extends GenericPaylaneError {
    id_error?: number;
    processor_error_number: string;
    processor_error_description: string;
}
