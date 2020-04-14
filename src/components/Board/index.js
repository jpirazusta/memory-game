import React from 'react';
import { string, func} from 'prop-types';
import useBoard from '../../hooks/useBoard';

import Card from '../Card';
import './styles.css';
import { TIME_TO_TURN_CARDS } from '../../constants';

function Board ({ name, level, onIncrementStep }) {

  const {
    pairs,
    setPairs,
    selected,
    setSelected,
    cards,
    interactionEnabled,
    setInteractionEnabled
  } = useBoard(level);

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
    <div className="board-container">
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
  name: string.isRequired,
  level: string.isRequired,
  onIncrementStep: func.isRequired,
}

export default Board;
