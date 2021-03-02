import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import  './Players.css'

const Players = (props) => {
    const {name, img, salary} = props.player
    const handleAddPlayer =props.handleAddPlayer;

    return (
        <div className="container ">
            <div className="info col-sm-8">
            <h2>Player Name : {name}</h2>
            <h3> Salary Amount : {salary} Tk.</h3>
            <button onClick={() => handleAddPlayer(props.player)} className="btn button btn-success"> <FontAwesomeIcon icon={faPlusSquare} /> Add Player</button>
            </div>
            <div className="imgTag col-sm-3 align-items-center">
                <img src={img} alt=""/>
               
            </div>
        </div>
            
    );
};

export default Players;