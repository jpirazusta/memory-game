import { useState, useEffect } from 'react';
import { shuffle } from '../helpers';
import { SMALL_BOARD_PAIRS, LARGE_BOARD_PAIRS, LEVELS } from '../constants';

const useBoard = level => {
  const [pairs, setPairs] = useState([]);
  const [selected, setSelected] = useState([]);
  const [cards, setCards] = useState([]);
  const [interactionEnabled, setInteractionEnabled] = useState(true);

  useEffect(() => {
    let cards = [];
    const selected = [];
    switch (level) {
      case LEVELS.junior:
        cards = require('../data/junior.json');
        break;
      case LEVELS.semisenior:
        cards = require('../data/semisenior.json');
        break;
      case LEVELS.senior:
        cards = require('../data/senior.json');
        break;
      default:
        break;
    }

    shuffle(cards);

    const initialPairs = [];
    const numberOfPairs = level === LEVELS.junior || level === LEVELS.senior ? SMALL_BOARD_PAIRS : LARGE_BOARD_PAIRS;
    for (let index = 0; index < numberOfPairs; index++) {
      initialPairs.push({
        chosen: false,
        discovered: false,
      });
    };

    cards.forEach(() => {
      selected.push(false);
    });
    setPairs(initialPairs);
    setCards(cards);
    setSelected(selected);
  }, [level]);

  return {
    pairs,
    setPairs,
    selected,
    setSelected,
    cards,
    interactionEnabled,
    setInteractionEnabled
  };
};

export default useBoard;