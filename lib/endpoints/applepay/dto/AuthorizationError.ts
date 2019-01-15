import { PaylaneError } from '../../../common/dto/PaylaneError';

export interface AuthorizationError extends PaylaneError {
    id_error: number;
}
