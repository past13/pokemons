  import React, {
    useState,
    useEffect
  } from 'react';
  
  import { InputData } from '../Models/InputData';
  import { AppContextProvider} from './../Models/AppContext';

  export const getCards = async (options: { input: string; }): Promise<InputData[]> => {
    let response: Response;

    if (options.input) {
      response = await fetch(`http://localhost:3030/api/cards?name=${options.input}`);  
      const { cards } = await response.json();

      if (cards.length > 0) {
        return cards as InputData[];
      } else {
        response = await fetch(`http://localhost:3030/api/cards?type=${options.input}`);
        const { cards } = await response.json();
        return cards as InputData[];
      }
    } else {
      response = await fetch(`http://localhost:3030/api/cards?limit=20`);  
      const { cards } = await response.json();
      return cards as InputData[];
    }
  };

  export const CardsProvider = ({ children }: any): JSX.Element => {
    const [cards, setCards] = useState<InputData[]>([]);
    const [pocket, setPocket] = useState<InputData[]>([]);

    useEffect(()=> {
      execute()
    },[])

    const execute = async (options = {input: ""}) => {
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