import { PaylaneError } from './PaylaneError';

export interface SaleError extends PaylaneError {
    id_error?: number;
    processor_error_number: string;
    processor_error_description: string;
}
