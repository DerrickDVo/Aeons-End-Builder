// PlayerCard.js

import React from 'react';

function PlayerCard(props) {
    return (
        <div className="my-component">
          <img src={props.imageUrl} alt="Image" />
          <div className="overlay">
            <h2>{props.text}</h2>
          </div>
        </div>
      );
  }

export default PlayerCard;