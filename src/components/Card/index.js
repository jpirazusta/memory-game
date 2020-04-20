import React from 'react';
import { number, bool, string, func } from 'prop-types';

import cardBackgroundReverse from '../../assets/images/cardBackground.png';
import { image } from '../../helpers';
import useMatch from '../../hooks/useMatch';
import './styles.css';

function Card({
  index,
  pair,
  onChoose,
  selected,
  background,
  interactionEnabled,
  match,
  levelPassed,
  setButtonDisabled,
}) {
  const discovered = useMatch(match, levelPassed, setButtonDisabled);
  const cardBackground = image[background];
  const handleClick = () => {
    if (interactionEnabled)  onChoose(index, pair);
  };
  if (discovered) return <div className="card-container" />; else {
    return (
      <div className="card-container" onClick={handleClick}>
        <div className={'card' + (!selected ? ' flip' : '')}>
          <img className="front" src={cardBackground} alt="Card" />
          <img className="back" src={cardBackgroundReverse} alt="Card" />
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  index: number.isRequired,
  pair: number.isRequired,
  selected: bool.isRequired,
  background: string.isRequired,
  onChoose: func.isRequired,
  interactionEnabled: bool.isRequired,
  match: bool.isRequired,
  levelPassed: bool.isRequired,
  setButtonDisabled: func.isRequired,
};

export default Card;
