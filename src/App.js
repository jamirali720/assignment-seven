import './App.css';
import fakeData from './fakeData/fakeData.json'
import React, {useEffect, useState} from 'react'
import Players from './components/Players/Players';
import Salary from './components/Players/Salary/Salary';
// import TeamMembers from './components/Players/Team-members/TeamMembers';


function App() {
  const [players, setPlayers] = useState([])
  const [salary, setSalary] = useState([])



    useEffect(() => {
      setPlayers(fakeData)
      
    })
const handleAddPlayer = (player)=> {
  const newSalary = [...salary, player];
  setSalary (newSalary)

  
}

  return (
    <div className="main  m-5">
      <div className="col-sm-12 Left m-3 "> 
       <div className="textDiv text-center">
          <h1>Numbers of players : {players.length}</h1>
          <h2>Selected / Team Player : {salary.length}</h2>
          <Salary salary ={salary}></Salary>
  
       </div>
        
       
       
        {
          
          players.map(player => <Players player ={player} handleAddPlayer={handleAddPlayer}></Players>)
        }  
      </div> 
      
    </div>
  );
}

export default App;
