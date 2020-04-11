import React from 'react';
import { number, bool, string, func } from 'prop-types';

import './styles.css';
import cardBackgroundReverse from '../../assets/images/cardBackground.png';
import { getImageByName } from '../../helpers';

function Card({ index, pair, onChoose, selected, image, interactionEnabled }) {
  const cardBackground = getImageByName(image);
  const handleClick = () => {
    if (interactionEnabled) {
      onChoose(index, pair);
    };
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <img className="card" src={selected ? cardBackground: cardBackgroundReverse} alt="Card" />
    </div>
  );
};

Card.propTypes = {
  index: number.isRequired,
  pair: number.isRequired,
  selected: bool.isRequired,
  image: string.isRequired,
  onChoose: func.isRequired,
  interactionEnabled: bool.isRequired,
};

export default Card;
