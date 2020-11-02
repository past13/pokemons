import React, { Fragment } from 'react';
import AppContext from "./Models/AppContext";
import { getCards } from './services/GetCards';
import { CardProperties1 } from './CardProperties1';

import './styles/PokemonCard.scss';

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
                placeholder={"Find pokemon"}
                className="search-field"
                type='text'
                name='filter'
                onChange={myChangeHandler}
            />
            <ul className="cards-list">
                {cards.map((pokemon: any, index: number) => (
                    <li className="card-container" key={index}>
                        <CardProperties1 pokemon={pokemon}/>     
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}
