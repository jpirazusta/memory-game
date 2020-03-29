import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import logo from '../../assets/white_logo.png';

function Card(props) {
  console.log("Card props:", props);
  return (
    <div className="card" onClick={() => props.onChoose(props.key, props.pair)} >
      {!props.selected &&
        <img className="card-logo" src={logo} alt="logo" />
      }
    </div>
  );
}

Card.propTypes = {
  key: PropTypes.number,
  pair: PropTypes.number,
  pairChosen: PropTypes.bool,
  pairDiscovered: PropTypes.bool,
  selected: PropTypes.bool,
  content: PropTypes.string,
  onChoose: PropTypes.func,
}

export default Card;
