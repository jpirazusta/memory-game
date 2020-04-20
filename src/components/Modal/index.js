import React from 'react';
import { string, number, func, bool } from 'prop-types';
import strings from '../../strings';
import victoryAudio from '../../assets/sounds/victory.mp3';
import './styles.css';

const victory = new Audio(victoryAudio);

const Modal = ({ name, step, onIncrementStep, buttonDisabled }) => {
  
  victory.play();

  const renderText = () => {
    if (step === 3) {
      return <p>{strings.winSenior}</p>
    }
    return <p>{step === 1 ? strings.winJunior : strings.winSemisenior}</p>;
  }

  return (
    <div className="opacity-layer">
      <div className="win-modal">
        ¡FELICITACIONES, {name}!
        {renderText()}
        <button
          className={'green-button' + (buttonDisabled ? ' disabled' : '')}
          onClick={() => onIncrementStep()}
          disabled={buttonDisabled}>
          ¡JUGAR!
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  name: string.isRequired,
  step: number.isRequired,
  onIncrementStep: func.isRequired,
  buttonDisabled: bool.isRequired,
};

export default Modal;