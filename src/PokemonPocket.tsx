import React, { Fragment } from 'react';
import { CardProperties } from './CardProperties';

import AppContext from "./Models/AppContext";

import './styles/PokemonPocket.css';

export const PokemonPocket = () => {
    const { pocket } = React.useContext(AppContext);

    return (
        <Fragment>
            <h1 className="pocket-title">My Pokedex</h1>
            <div className="cards-list">
                <div className="columns">
                    {pocket.map((pokemon: any, index: number) => (
                        <div className="card" key={index}>
                            <div className="image">
                                <img src={pokemon.imageUrl} />
                            </div>
                            <div className="card-properties">
                                <CardProperties pokemon={pokemon}/> 
                            </div>
                        </div> 
                    ))}
                </div> 
            </div>
            <div className="add-button"></div>
        </Fragment>
    )
}