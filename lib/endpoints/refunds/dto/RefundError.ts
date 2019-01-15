import { PaylaneError } from '../../../common/dto/PaylaneError';

export interface RefundError extends PaylaneError {
    id_error: number;
    processor_error_number: string;
    processor_error_description: string;
}
