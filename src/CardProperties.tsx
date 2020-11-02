import React, { useContext, Fragment } from 'react';
import _ from 'lodash';
import AppContext from "./Models/AppContext";
import calculateProperties from './CalculateProperties';
import { InputCompProps } from './Models/InputCompProps';

import { InputData } from './Models/InputData';
import { updateCardsList } from './utils/helperArray';

import Emoji from "./cute.png";
import './styles/CardProperties.scss';

function showEmojies(rating: number | string): JSX.Element[] {
    let list = [];

    for (let i = 0; i < rating; i++) {
        const img = <img src={Emoji} key={i}/>;
        list.push(img);
    }

    return list;
}

export const CardProperties: React.FC<InputCompProps> = (props): JSX.Element => {
    const { pokemon } = props;
    const { cards, setCards, pocket, setPocket } = useContext(AppContext);

    function addCardFromList(id: string, pocketArray: InputData[], cardsArray: InputData[]): void {
        const found = updateCardsList(id, pocketArray, cardsArray);

        if (found) {
            setCards([...cardsArray]);
            setPocket([...pocketArray]);
        }
    }

    const { health, strength, weakness, hapiness, damage } = calculateProperties(pokemon);
    
    return (
        <Fragment>
            <div className="card">
                <div className="image">
                    <img src={pokemon.imageUrl} />
                </div>
                <div className="card-properties">
                    <div className="name">{pokemon.name}</div>
                    <div className="remove-card" onClick={() => addCardFromList(pokemon.id, pocket, cards)}>X</div>
                    <div className="settings">
                        <div className="properties">
                            <div className="prop-name">HP</div>
                            <div className="prop-bar"><progress value={health} max={100} /></div>
                        </div>
                        <div className="properties">
                            <div className="prop-name">STR</div>
                            <div className="prop-bar"><progress value={strength} max={100} /></div>
                        </div>
                        <div className="properties">
                            <div className="prop-name">WEAK</div>
                            <div className="prop-bar"><progress value={weakness} max={100} /></div>
                        </div>
                    </div>

                    <div className="emojies">{showEmojies(hapiness)}</div>
                </div>
            </div>
        </Fragment>  
    );
}

