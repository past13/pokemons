import React, { useState, Fragment } from 'react';
import AppContext from "./Models/AppContext";
import { PokemonCard } from './PokemonCard';
import { CardProperties } from './CardProperties';
import { InputData } from './Models/InputData';
import { Modal } from './utils/Modal';

import './styles/PokemonPocket.scss';

export const PokemonPocket = () => {
    const { pocket } = React.useContext(AppContext);
    const [show, setShow] = useState(false);

    const openCardsList = () => {
        setShow(!show);
    }

    return (
        <Fragment>
            <h1 className="pocket-title">My Pokedex</h1>
            <Modal show={show} handleClose={openCardsList}>
                <PokemonCard />
            </Modal>

            <div className="cards-list">
                <div className="columns">
                {pocket.map((pokemon: InputData, index: number) => (
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
                <div className="add-button" onClick={() => openCardsList()}>
                    <div className="circle"></div>
                </div>
            </div>
        </Fragment>
    )
}