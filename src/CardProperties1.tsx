import React, { useContext, Fragment } from 'react';
import calculateProperties from './CalculateProperties';
import { InputCompProps } from './Models/InputCompProps';

import AppContext from "./Models/AppContext";
import Emoji from "./cute.png";
import './styles/CardProperties.css';

function showEmojies(rating: number | string): JSX.Element[] {
    let list = [];

    for (let i = 0; i < rating; i++) {
        const img = <img src={Emoji} key={i}/>;
        list.push(img);
    }

    return list;
}

export const progressiveBar = (value: number) => {
    const max = 100;
    return <progress value={value} max={max} />
}

export const CardProperties1: React.FC<InputCompProps> = (props): JSX.Element => {
    const { pokemon } = props;
    const { cards, setCards, pocket, setPocket } = useContext(AppContext);

    function addCardFromList(id: any) {

        const found = pocket.filter(x => x.id === id);
        const list = pocket.filter(x => x.id === id);
        
        console.log(2424, found);
    }

    const { health, strength, weakness, hapiness, damage } = calculateProperties(pokemon);
    
    return (
        <Fragment>
            <div className="name">{pokemon.name}</div>
            <div className="remove-card" onClick={() => addCardFromList(pokemon.id)}>X</div>
            <div className="settings">
                <span>HP</span>
                <span className="progress">{progressiveBar(health)}</span>
            </div>
            <div className="settings">
                <span>STR</span>
                <span className="progress">{progressiveBar(strength)}</span>
            </div>                 
            <div className="settings">
                <span>WEAK</span>
                <span className="progress">{progressiveBar(weakness)}</span>    
            </div>
            {/* <div className="emojies">{showEmojies(hapiness)}</div> */}
        </Fragment>  
    );
}

