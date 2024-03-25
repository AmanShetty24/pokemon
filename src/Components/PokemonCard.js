// PokemonCard.js

import React, { useState } from 'react';
import './Style.css';

const PokemonCard = ({ name, image, type, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`pokemon-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="pokemon-card-inner">
        <div className="pokemon-card-front">
          <img
            className="pokemon-image"
            src={image}
            alt={`${name} Pokemon`}
          />
          <div className="pokemon-info">
            <h2>{name}</h2>
            <p>Type: {type}</p>
          </div>
        </div>
        <div className="pokemon-card-back">
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;