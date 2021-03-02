import React from 'react';
import  './TeamMembers.css';




const TeamMembers = (props) => {
    const team = props.team;

    console.log(team)
  
    
    return (
        <div className ="col-sm-10 m-5 m-auto club bg-primary">
            <h4>Selected Club Team Members : { team.length}</h4>            
            <ul>
                {
                    team.map(player => <li><h3>{player.name}</h3></li> )
                }
            </ul>        
        </div>
    );
    
};

export default TeamMembers;