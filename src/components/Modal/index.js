import React from 'react';
import { string, number, func, bool } from 'prop-types';
import strings from '../../strings';
import { LEVELS } from '../../constants';
import victoryAudio from '../../assets/sounds/victory.mp3';
import isotipo from '../../assets/images/isotipo.png';
import './styles.css';

const victory = new Audio(victoryAudio);

const Modal = ({ name, step, onIncrementStep, buttonDisabled }) => {

  victory.play();

  return (
    <div className="background-layer">
      <div className="win-modal">
        <div className="images-container">
          <div className="level-image-container">
            <img className="level-image" src={isotipo} alt="Nivel 1" />
            <span className="level-number">1</span>
          </div>
          <div className="level-image-container bigger">
            <img className="level-image" src={isotipo} alt="Nivel 2" />
            <span className="level-number">2</span>
            <div className={step < 2 && 'level-image opacity-layer'} />
          </div>
          <div className="level-image-container">
            <img className="level-image" src={isotipo} alt="Nivel 3" />
            <span className="level-number">3</span>
            <div className={step < 3 && 'level-image opacity-layer'} />
          </div>
        </div>
        <span className="modal-title">¡{strings.modalTitle}{name}!</span>
        <p className="modal-description">{strings.modalMessage}{LEVELS[step]}</p>
        {step === 3 ? (
          <div className="buttons-container">
            <button
              className="green-button"
              onClick={() => onIncrementStep()}>
              {strings.backButton}
            </button>
            <button
              className="green-button"
              onClick={() => window.open('http://escuelafalco.com/recursos', '_blank')}>
              {strings.resourcesButton}
            </button>
          </div>
        ) : (
            <button
              className={'green-button' + (buttonDisabled ? ' disabled' : '')}
              onClick={() => onIncrementStep()}
              disabled={buttonDisabled}>
              {strings.nextLevelButton}
            </button>
          )}
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
