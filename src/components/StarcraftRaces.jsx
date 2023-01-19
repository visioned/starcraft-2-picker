import React, { useState } from 'react';
import '../styles/StarcraftRaces.css';

const StarcraftRaces = () => {
  // Create an array of the three races
  const races = ['Zerg', 'Terran', 'Protoss'];

  // Create a state variable to store the count for each race
  const [counts, setCounts] = useState({
    Zerg: 0,
    Terran: 0,
    Protoss: 0,
  });

  // Create a state variable to store the index of the currently selected race
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle clicks on the "Randomize" button
  const handleClick = () => {
    // Generate a random number between 0 and 2
    const randomIndex = Math.floor(Math.random() * 3);

    // Update the selected index in the state
    setSelectedIndex(randomIndex);

    // Get the race at the randomly generated index
    const randomRace = races[randomIndex];

    // Update the count for the randomly selected race in the state
    setCounts({
      ...counts,
      [randomRace]: counts[randomRace] + 1,
    });
  };

  return (
    <>
      <div className='logo'>
        <img src='starcraft2.png' alt='' />
      </div>
      <div className='starcraft-races'>
        {/* Display the currently selected race */}
        <p className='selected-race'>Selected race: {races[selectedIndex]}</p>
        {/* Button to trigger the randomization */}
        <button className='randomize-button' onClick={handleClick}>
          Randomize
        </button>
        {/* Display the count for each race */}
        <p>Zerg count: {counts.Zerg}</p>
        <p>Terran count: {counts.Terran}</p>
        <p>Protoss count: {counts.Protoss}</p>
      </div>
    </>
  );
};

export default StarcraftRaces;
