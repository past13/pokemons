import React from 'react';
import './styles/App.scss';

import { CardsProvider } from './services/GetCards';
import { PokemonCard } from './PokemonCard';
import { PokemonPocket } from './PokemonPocket';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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

  return (
    <CardsProvider>
      <div className="App">
        <PokemonPocket  />
        <br />
        <br />
        <PokemonCard  />
      </div>
    </CardsProvider>
  )
}

