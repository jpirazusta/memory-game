import React, { useState, useEffect } from 'react';
import { string, func} from 'prop-types';

import Card from '../Card';
import './styles.css';
import { shuffle } from '../../helpers';
import { SMALL_BOARD_PAIRS, LARGE_BOARD_PAIRS, LEVELS, TIME_TO_TURN_CARDS } from '../../constants';

function Board ({ finalNumber, level, onIncrementStep }) {
  const initialPairs = [];
  const numberOfPairs = level === LEVELS.junior || level === LEVELS.senior ? SMALL_BOARD_PAIRS : LARGE_BOARD_PAIRS;
  for (let index = 0; index < numberOfPairs; index++) {
    initialPairs.push({
      chosen: false,
      discovered: false,
    });
  };
  const [pairs, setPairs] = useState(initialPairs);
  const [selected, setSelected] = useState([]);
  const [cards, setCards] = useState([]);
  const [interactionEnabled, setInteractionEnabled] = useState(true);

  useEffect(() => {
    let cards = [];
    const selected = [];
    switch (level) {
      case LEVELS.junior:
        cards = require('../../data/junior.json');
        break;
      case LEVELS.semisenior:
        cards = require('../../data/semisenior.json');
        break;
      case LEVELS.senior:
        cards = require('../../data/senior.json');
        break;
      default:
        break;
    }

    shuffle(cards);

    cards.forEach(() => {
      selected.push(false);
    });
    setCards(cards);
    setSelected(selected);
  }, [level]);

  const onChooseCard = (cardIndex, pair) => {
    function isFirstCard() {
      let isFirstCard = true;
      let index = 0;
      while (isFirstCard && index < selected.length) {
        let currentPair = cards[index].pair
        isFirstCard = (isFirstCard && !selected[index]) || pairs[currentPair].discovered;
        index++;
      }
      return isFirstCard;
    }

    if (selected[cardIndex]) { return; }
    const newSelected = selected.slice();
    newSelected[cardIndex] = true;
    const newPairs = pairs.slice();
    if (isFirstCard()) {
      newPairs[pair].chosen = true;
    } else {
      if (newPairs[pair].chosen) {
        newPairs[pair].discovered = true;
      } else {
        setInteractionEnabled(false);
        setTimeout(() => {
          cards.forEach((card, index) => {
            if (newSelected[index] && !pairs[card.pair].discovered) {
              newSelected[index] = false;
              newPairs[card.pair].chosen = false;
            }
          });
          setSelected(newSelected);
          setPairs(newPairs);
          setInteractionEnabled(true);
        }, TIME_TO_TURN_CARDS);
      }
    }
    setSelected(newSelected);
    setPairs(newPairs);
  };

  return (
    <div className="board-container" >
      {cards.map((item, index) => (
        <Card
          key={item.id}
          index={index}
          pair={item.pair}
          selected={selected[index]}
          image={item.image}
          onChoose={(index, pair) => onChooseCard(index, pair)}
          interactionEnabled={interactionEnabled}
        />
      ))}
      <button onClick={() => onIncrementStep()}>Volver</button>
    </div>
  );
}

Board.propTypes = {
  finalNumber: string.isRequired,
  level: string.isRequired,
  onIncrementStep: func.isRequired,
}

export default Board;
