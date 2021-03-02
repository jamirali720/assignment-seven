import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import  './Players.css'

const Players = (props) => {
    const {name, img,team, salary} = props.player
    const handleAddPlayer =props.handleAddPlayer;

    return (
        <div className="container ">
            <div className="info col-sm-8">
            <h3>Player Name : {name}</h3>
            <h3> Salary Amount : {salary} Tk.</h3>
            <h4> Team Name : {team}</h4>
            <button onClick={() => handleAddPlayer(props.player)} className="btn button btn-success"> <FontAwesomeIcon icon={faPlusSquare} /> Add Player</button>
            </div>
            <div className="imgTag col-sm-3 align-items-center">
                <img src={img} alt=""/>
               
            </div>
        </div>
            
    );
};

export default Players;