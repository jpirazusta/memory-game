import { useState, useEffect } from 'react';
import { shuffle } from '../helpers';
import { SMALL_BOARD_PAIRS, LARGE_BOARD_PAIRS } from '../constants';

const useBoard = (step, setMatches) => {
  const [pairs, setPairs] = useState([]);
  const [selected, setSelected] = useState([]);
  const [cards, setCards] = useState([]);
  const [interactionEnabled, setInteractionEnabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const numberOfPairs = step === 2 ? LARGE_BOARD_PAIRS : SMALL_BOARD_PAIRS;

  useEffect(() => {
    let cards = [];
    const selected = [];
    switch (step) {
      case 1:
        cards = require('../data/junior.json');
        break;
      case 2:
        cards = require('../data/semisenior.json');
        break;
      case 3:
        cards = require('../data/senior.json');
        break;
      default:
        break;
    }

    shuffle(cards);

    const initialPairs = [];
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
    setButtonDisabled(true);
    setMatches(0);
  }, [step, numberOfPairs, setMatches]);

  return {
    pairs,
    setPairs,
    selected,
    setSelected,
    cards,
    interactionEnabled,
    setInteractionEnabled,
    numberOfPairs,
    buttonDisabled,
    setButtonDisabled,
  };
};

export default useBoard;
