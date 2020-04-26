import React, { useState } from 'react';
import { string, func } from 'prop-types';

import logo from '../../assets/images/white_logo.png';
import strings from '../../strings';
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
        <a href="https://www.escuelafalco.com/" target="_blank" rel="noopener noreferrer">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <h1 className="title">{strings.title}</h1>
        <p>{strings.descriptionLine1}<br />{strings.descriptionLine2}</p>
        <input
          className="name-input"
          value={name}
          name="name"
          maxLength="15"
          placeholder={strings.namePlaceholder}
          onChange={event => onChangeName(event.target.value)}
          autoComplete="off"
        />
        <div className="error">
          {error && strings.nameError}
        </div>
        <button className="play-button" onClick={() => onClickPlay()}>{strings.playButton}</button>
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
