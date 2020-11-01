import React, { Fragment } from 'react';
import { CardProperties1 } from './CardProperties1';

import AppContext from "./Models/AppContext";

import './styles/PokemonCard.css';

export const PokemonCard = () => {
    const { pocket } = React.useContext(AppContext);

    return (
        <Fragment>
            <ul className="cards-list">
                {pocket.map((pokemon: any) => (
                    <li className="card-container" key={pokemon.id}>
                        <div className="card">
                            <div className="image">
                                <img src={pokemon.imageUrl} />
                            </div>
                            <CardProperties1 pokemon={pokemon}/>     
                        </div> 
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}
