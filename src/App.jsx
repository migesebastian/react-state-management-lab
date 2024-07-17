import React, { useState } from 'react';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const zombieFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];

  // Function to add a fighter to the team
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price && !team.includes(fighter)) {
      setMoney(money - fighter.price);
      setTeam([...team, fighter]);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log('Not enough money or fighter already in the team');
    }
  };

  // Function to remove a fighter from the team
  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    setMoney(money + removedFighter.price);
    setTeam(team.filter((_, i) => i !== index));
    setTotalStrength(totalStrength - removedFighter.strength);
    setTotalAgility(totalAgility - removedFighter.agility);
  };

  return (
    <div className="App">
    <h1>Zombie Fighters</h1>
    <strong>
    <div className="team-stats">
    <div className="money">Money: ${money}</div>
      <div>Team Strength: {totalStrength}</div>
      <div>Team Agility: {totalAgility}</div>
    </div></strong>
    <h2>Team</h2>
    {team.length === 0 ? (
      <div>Pick some team members!</div>
    ) : (
      <ul className="team-list">
        {team.map((fighter, index) => (
          <li key={index} className="team-item">
            <img src={fighter.img} alt={fighter.name} />
            <div>Name: {fighter.name}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick={() => handleRemoveFighter(index)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
    <h2>Fighters</h2>
    <ul className="fighters-list">
      {zombieFighters.map((fighter, index) => (
        <li key={index} className="fighter-item">
          <img src={fighter.img} alt={fighter.name} />
          <div>{fighter.name}</div>
          <div>Price: ${fighter.price}</div>
          <div>Strength: {fighter.strength}</div>
          <div>Agility: {fighter.agility}</div>
          <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default App;
