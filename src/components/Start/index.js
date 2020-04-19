import React, { useState } from 'react';
import { string, func } from 'prop-types';

import logo from '../../assets/images/white_logo.png';
import './styles.css';

function Start({name, onChangeName, onIncrementStep}) {
  const [error, setError] = useState(false);

  function onClickPlay() {
    if (name === '') {
      setError(true);
      return;
    }
    onIncrementStep();
  };

  return (
    <>
      <div className="start-container">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">MEMORY TECNOLÓGICO</h1>
        <p>Desde Escuela Falco queremos desafiar tu memoria.<br />¿Aceptás el reto?</p>
        <div>
          <label>
            <input
              className="name-input"
              value={name}
              name="name"
              placeholder="Ingresá tu nombre aquí"
              onChange={event => onChangeName(event.target.value)}
            />
          </label>
        </div>
        <div className="error">
          {error && '¡No olvides ingresar tu nombre!'}
        </div>
        <button className="play-button" onClick={() => onClickPlay()}>¡JUGAR!</button>
      </div>
    </>
  );
}

Start.propTypes = {
  name: string,
  onChangeName: func,
  onIncrementStep: func
}

export default Start;
