export interface Recurring {
    amount: number;
    start_date: string;
    period: 'month' | 'week' | 'day';
}
