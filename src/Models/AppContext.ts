import React from 'react';
import { PokenoContext } from "./PokenoContext";

const AppContext = React.createContext<PokenoContext>({
    pocket: [],
    setPocket: () => [],
    cards: [],
    setCards: () => []
});
 
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default AppContext;