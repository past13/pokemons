import { Dispatch, SetStateAction } from 'react';
import { InputData } from './InputData';

export interface PokenoContext {
    pocket: InputData[],
    setPocket: Dispatch<SetStateAction<InputData[]>>
    cards: InputData[],
    setCards: Dispatch<SetStateAction<InputData[]>>
}