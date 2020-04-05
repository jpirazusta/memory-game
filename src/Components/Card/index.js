import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import cardBackgroundReverse from '../../assets/cardBackground.png';

function getImageByName(name) {
  switch (name) {
  case 'Memory_Nivel1_1.png':
    return require('../../assets/Memory_Nivel1_1.png');
  case 'Memory_Nivel1_2.png':
    return require('../../assets/Memory_Nivel1_2.png');
  case 'Memory_Nivel1_3.png':
    return require('../../assets/Memory_Nivel1_3.png');
  case 'Memory_Nivel1_4.png':
    return require('../../assets/Memory_Nivel1_4.png');
  case 'Memory_Nivel1_5.png':
    return require('../../assets/Memory_Nivel1_5.png');
  case 'Memory_Nivel1_6.png':
    return require('../../assets/Memory_Nivel1_6.png');
  case 'Memory_Nivel2_1.png':
    return require('../../assets/Memory_Nivel2_1.png');
  case 'Memory_Nivel2_2.png':
    return require('../../assets/Memory_Nivel2_2.png');
  case 'Memory_Nivel2_3.png':
    return require('../../assets/Memory_Nivel2_3.png');
  case 'Memory_Nivel2_4.png':
    return require('../../assets/Memory_Nivel2_4.png');
  case 'Memory_Nivel2_5.png':
    return require('../../assets/Memory_Nivel2_5.png');
  case 'Memory_Nivel2_6.png':
    return require('../../assets/Memory_Nivel2_6.png');
  case 'Memory_Nivel3_5.png':
    return require('../../assets/Memory_Nivel3_5.png');
  case 'Memory_Nivel3_7.png':
    return require('../../assets/Memory_Nivel3_7.png');
  case 'Memory_Nivel3_1.png':
    return require('../../assets/Memory_Nivel3_1.png');
  case 'Memory_Nivel3_2.png':
    return require('../../assets/Memory_Nivel3_2.png');
  case 'Memory_Nivel3_3.png':
    return require('../../assets/Memory_Nivel3_3.png');
  case 'Memory_Nivel3_4.png':
    return require('../../assets/Memory_Nivel3_4.png');
  case 'Memory_Nivel3_6.png':
    return require('../../assets/Memory_Nivel3_6.png');
  case 'Memory_Nivel3_8.png':
    return require('../../assets/Memory_Nivel3_8.png');
  default:
    break;
  }
}

function Card(props) {
  const cardBackground = getImageByName(props.image);
  return (
    <div className="card-container" onClick={() => props.onChoose(props.id, props.pair)}>
      <img className="card" src={props.selected ? cardBackground: cardBackgroundReverse} alt="Card" />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  pair: PropTypes.number,
  pairChosen: PropTypes.bool,
  pairDiscovered: PropTypes.bool,
  selected: PropTypes.bool,
  image: PropTypes.string,
  onChoose: PropTypes.func,
}

export default Card;
