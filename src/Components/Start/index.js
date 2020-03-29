import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import logo from '../../assets/white_logo.png';

function Start(props) {
  console.log("Start props:", props);
  return (
    <div className="start-container" >
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div>
        <label>
          Tamaño de tablero:
            <div className="radio">
            <label>
              <input type="radio" value="8" name="numberOfPairs"
                checked={props.numberOfPairs === '8'}
                onChange={event => props.onConfigChange(event)} />
                4x4
              </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="18" name="numberOfPairs"
                checked={props.numberOfPairs === '18'}
                onChange={event => props.onConfigChange(event)} />
                6x6
              </label>
          </div>
        </label>
      </div>
      <div>
        <label>
          Número final (opcional):
            <input type="number" value={props.finalNumber} name="finalNumber"
            onChange={event => props.onConfigChange(event)} />
        </label>
      </div>
      <button onClick={() => props.onIncrementStep()}>¡JUGAR!</button>
    </div>
  );
}

Start.propTypes = {
  finalNumber: PropTypes.string,
  numberOfPairs: PropTypes.string,
  onConfigChange: PropTypes.func,
  onIncrementStep: PropTypes.func
}

export default Start;
