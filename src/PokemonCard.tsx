import React, { Fragment, useState } from 'react';
import AppContext from "./Models/AppContext";

import { CardProperties1 } from './CardProperties1';

import { getCards } from './services/GetCards';

import './styles/PokemonCard.css';

export const PokemonCard = () => {
    const { cards, setCards } = React.useContext(AppContext);

    const myChangeHandler = async (event: any) => {
        const filterInput = event.target.value;

        if (filterInput !== "") {
            const result = await getCards({input: filterInput});
            setCards(result);
        } else {
            const result = await getCards({input: ""});
            setCards(result);
        }
    }

    return (
        <Fragment>
            <input
                className="search-field"
                type='text'
                name='filter'
                onChange={myChangeHandler}
            />
            <ul className="cards-list">
                {cards.map((pokemon: any, index: number) => (
                    <li className="card-container" key={index}>
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
