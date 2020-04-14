import React from 'react';
import { string, func } from 'prop-types';

import './styles.css';
import { LEVELS } from '../../constants';

function Start({level, name, onConfigChange, onIncrementStep}) {
  return (
    <>
      <div className="start-container">
        {/* <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div> */}
        <h1 className="title">MEMORY TECNOLÓGICO</h1>
        <p>Desde Escuela Falco queremos desafiar tu memoria.<br />¿Aceptás el reto?</p>
        <p>Nivel</p>
        <div className="buttons-container">
          <button
            className={level === LEVELS.junior ? 'level-button-selected' : 'level-button'}
            onClick={() => onConfigChange({ name: 'level', value: LEVELS.junior })}>
            JUNIOR
          </button>
          <button
            className={level === LEVELS.semisenior ? 'level-button-selected' : 'level-button'}
            onClick={() => onConfigChange({ name: 'level', value: LEVELS.semisenior })}>
            SEMISENIOR
          </button>
          <button
            className={level === LEVELS.senior ? 'level-button-selected' : 'level-button'}
            onClick={() => onConfigChange({ name: 'level', value: LEVELS.senior })}>
            SENIOR
          </button>
        </div>
        <div>
          <label>
            <input
              className="name-input"
              value={name}
              name="name"
              placeholder="TU NOMBRE"
              onChange={event => onConfigChange(event.target)}
            />
          </label>
        </div>
        <button className="level-button play-button" onClick={() => onIncrementStep()}>¡JUGAR!</button>
      </div>
    </>
  );
}

Start.propTypes = {
  name: string,
  level: string,
  onConfigChange: func,
  onIncrementStep: func
}

export default Start;
