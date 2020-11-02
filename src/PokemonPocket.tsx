import React, { useState, Fragment } from 'react';
import AppContext from "./Models/AppContext";
import { PokemonCard } from './PokemonCard';
import { CardProperties } from './CardProperties';
import { InputData } from './Models/InputData';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';

import './styles/PokemonPocket.scss';
import { relative } from 'path';
import { Modal } from './utils/Modal';

export const PokemonPocket = () => {
    const { pocket, cards } = React.useContext(AppContext);
    const [show, setShow] = useState(false);

    const openCardsList = () => {
        setShow(!show);
    }

    const useStyles = makeStyles((theme) => ({
        gridList: {
          width: 1005,
          height: 680,
          padding: 10,
          
        },
        modalList: {
            width: 1005,
            height: 760,
            padding: 10,
            // transition: '1s',
            // top: 200,
            // position: 'relative',
        },
        listTitle: {
            textAlign: "center",
            fontSize: '40px',
        },
        icon: {
          color: 'rgba(255, 255, 255, 0.54)',
        },
      }));

    const classes = useStyles();

    return (
        <Fragment>

            <GridList cellHeight={280} className={classes.gridList}>
                <Modal show={show} handleClose={openCardsList}>
                    <PokemonCard />
                </Modal>

                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader className={classes.listTitle} component="h1">My Pokedex</ListSubheader>
                </GridListTile>

                {pocket.map((pocket: InputData, index: number) => (
                    <GridListTile key={index}>
                        <CardProperties pokemon={pocket}/> 
                    </GridListTile>
                ))}
            </GridList>
            <div className="add-button" onClick={() => openCardsList()}>
                <div className="circle"></div>
            </div>
        </Fragment>
    )
}


{/* <Fragment>
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
</Fragment> */}