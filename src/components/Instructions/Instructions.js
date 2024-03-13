import React from 'react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>Instructions</h2>
      <p>Click "Add Card" to add a new card with a randomly generated number.</p>
      <p>Click "Sort Cards" to sort all cards by their numbers.</p>
    </div>
  );
}

export default Instructions;
