  import React, {
    useState,
    useEffect,
  } from 'react';
  
  import { InputData } from '../Models/InputData';
  import { AppContextProvider} from './../Models/AppContext';

  export const getCards = async (options: any): Promise<InputData[]> => {
    const response = await fetch('http://localhost:3030/api/cards', options);
    const { cards } = await response.json();
    return cards as InputData[];
  };

  export const CardsProvider = ({ children }: any): JSX.Element => {
    const [cards, setCards] = useState<InputData[]>([]);
    const [pocket, setPocket] = useState<InputData[]>([]);

    useEffect(()=> {
      execute()
    },[])

    const execute = async (options = {}) => {
      try {
        const result = await getCards(options);
        setCards(result);
      } catch (e) {
        throw e;
      }
    };
    
    return (
      <AppContextProvider value={{cards, setCards, pocket, setPocket}}>
        {children}
      </AppContextProvider>
    )
  };