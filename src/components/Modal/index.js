import React from 'react';
import { string, number, func } from 'prop-types';
import strings from '../../strings';
import './styles.css';

const Modal = ({ name, step, onIncrementStep }) => {
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
        <button className="green-button" onClick={() => onIncrementStep()}>¡JUGAR!</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  name: string.isRequired,
  step: number.isRequired,
  onIncrementStep: func.isRequired,
};

export default Modal;