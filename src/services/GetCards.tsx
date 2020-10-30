  import {
    useState,
    useCallback,
  } from 'react';
  
  import { InputData } from '../Models/InputData';
  import { CardsResult } from '../Models/CardsResult';

  export const getCards = async (options: any): Promise<any> => {
    const response = await fetch('http://localhost:3030/api/cards', options);
    return await response.json();
  };

  export const useGetCards = (): CardsResult => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState<InputData[] | null>();
    
    const execute = async (options = {}): Promise<InputData[]> => {
      try {
        setIsLoading(true);
        const { cards } = await getCards(options);
        setData(cards);
        return cards;
      } catch (e) {
        setError(e);
        setIsLoading(false);
        throw e;
      }
    };
    
    return {
      isLoading,
      error,
      data,
      execute: useCallback(execute, []), // to avoid infinite calls when inside a `useEffect`
    };
  };