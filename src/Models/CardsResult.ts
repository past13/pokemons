import { InputData } from './InputData';

export interface CardsResult {
    isLoading: boolean;
    error: string | null;
    data: InputData[] | null | undefined;
    execute: () => Promise<InputData[]>;
}