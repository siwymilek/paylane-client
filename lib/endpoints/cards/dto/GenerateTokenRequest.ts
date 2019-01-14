import { Card } from './Card';

export interface GenerateTokenRequest extends Card {
    public_api_key: string;
}
