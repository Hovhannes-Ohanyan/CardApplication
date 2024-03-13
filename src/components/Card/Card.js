import React from 'react';
import './Card.css';

const Card = ({ number, onDelete }) => {
  return (
    <div className="card">
      <span>{number}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
}

export default Card;
