import React from 'react';
import { CardProperties } from './CardProperties';
import { InputCompProps } from './Models/InputCompProps';

import './PokemonCard.css';

export const PokemonCard: React.FC<InputCompProps> = (props) => {
    const { pokemon } = props;
    return (
        <div className="card-container">
            <div className="image">
                <img src={pokemon.imageUrl} />
            </div>
            <CardProperties pokemon={pokemon}/>     
        </div>
    )
}

