import React, { useEffect } from 'react';
import './App.css';

import { useGetCards } from './services/GetCards';
import { PokemonCard } from './PokemonCard';

import { InputData} from './Models/InputData';

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

export default function App() {
  const {
    data,
    execute,
  } = useGetCards();

  useEffect(() => {
    try {
      execute();  
    } catch (error) {
      console.log('error', error)
    }
  }, [execute]);

  return (
    <div className="App">
       <ul>
        {data && data.map((pokemon: InputData) => (
          <li key={pokemon.id}>
            <PokemonCard pokemon={pokemon}/>
          </li>
        ))}
      </ul> 
    </div>
  )
}