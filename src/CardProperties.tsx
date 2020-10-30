import React from 'react';
import calculateProperties from './CalculateProperties';
import { InputCompProps } from './Models/InputCompProps';

import Emoji from "./cute.png";

import './CardProperties.css';

function showEmojies(rating: number | string): any[] {
    let list = [];

    for (let i = 0; i < rating; i++) {
        const img = <img className="emoji" src={Emoji} key={i}/>;
        list.push(img);
    }

    return list;
}

export const CardProperties: React.FC<InputCompProps> = (props) => {
    const { pokemon } = props;
    const { health, strength, weakness, hapiness, damage } = calculateProperties(pokemon);

    return (
        <div className="card-properties" key={pokemon.id}>
            <div className="name">{pokemon.name}</div>
            <div>HP {health}</div>
            <div>STR {strength}</div>
            <div>WEAK {weakness}</div>
            <div>{showEmojies(hapiness)}</div>
        </div>  
    );
}

