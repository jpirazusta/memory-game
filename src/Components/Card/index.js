import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import logo from '../../assets/white_logo.png';

function Card(props) {
  console.log("Card props:", props);
  const style = props.isTitle ? {
    fontSize: 20,
    fontWeight: 'bold'
  } : {
    fontSize: 16,
    fontWeight: 400
  };
  return (
    <div className="card" onClick={() => props.onChoose(props.key, props.pair)} >
      {props.selected ?
        <p style={style}>
          {props.content}
        </p>
      :
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
  isTitle: PropTypes.bool
}

export default Card;
