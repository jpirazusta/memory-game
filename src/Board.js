import React from 'react';
import PropTypes from 'prop-types';

import shuffle from './helpers';

function Board(props) {
  console.log("Board props:", props);
  let cards = [];
  for (let index = 1; index <= parseInt(props.numberOfPairs); index++) {
    cards.push(
    <div key={index * index} style={{ backgroundColor: 'red', width: 160, height: index * 10, margin: 5 }} />
    );
    cards.push(
    <div key={index * index + 1} style={{ backgroundColor: 'red', width: 160, height: index * 10 }} />
    );
  }
  shuffle(cards);
  return (
    <div className="board-container" >
        { cards }
      <button onClick={() => props.onIncrementStep()}>Volver</button>
    </div>
  );
}

Board.propTypes = {
  finalNumber: PropTypes.string,
  numberOfPairs: PropTypes.string,
  onIncrementStep: PropTypes.func
}

export default Board;
