import React, { useState } from 'react';
import { string, number, func} from 'prop-types';
import useBoard from '../../hooks/useBoard';

import Card from '../Card';
import Modal from '../Modal';
import { TIME_TO_TURN_CARDS, LEVELS } from '../../constants';
import matchAudio from '../../assets/sounds/match.mp3';
import './styles.css';

const match = new Audio(matchAudio);

function Board ({ name, step, onIncrementStep, onReset }) {

  const [matches, setMatches] = useState(0);

  const {
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
  } = useBoard(step, setMatches);

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
        if (!levelPassed) { match.play(); }
        setMatches(matches + 1);
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

  const levelPassed = matches === numberOfPairs;

  return (
    <>
      <div className="board-container">
        <span className="level">Nivel: {LEVELS[step]}</span>
        <div className="cards-container">
          {cards.map((item, index) => (
            <Card
              key={item.id}
              index={index}
              pair={item.pair}
              selected={selected[index]}
              background={item.image}
              onChoose={(index, pair) => onChooseCard(index, pair)}
              interactionEnabled={interactionEnabled}
              match={pairs[item.pair].discovered}
              levelPassed={levelPassed}
              setButtonDisabled={setButtonDisabled}
            />
          ))}
        </div>
        <div className="button-container">
          <button className="green-button" onClick={() => onReset()}>VOLVER</button>
        </div>
      </div>
      {levelPassed && (
        <Modal
          name={name}
          step={step}
          onIncrementStep={onIncrementStep}
          buttonDisabled={buttonDisabled}
        />
      )}
    </>
  );
};

Board.propTypes = {
  name: string.isRequired,
  step: number.isRequired,
  onIncrementStep: func.isRequired,
  onReset: func.isRequired,
};

export default Board;
