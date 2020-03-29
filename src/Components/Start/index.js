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
          Nivel:
          <div className="radio">
            <label>
              <input type="radio" value="junior" name="level"
                checked={props.level === 'junior'}
                onChange={event => props.onConfigChange(event)} />
              Junior - Imágenes. Tablero de 3x4.
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="semisenior" name="level"
                checked={props.level === 'semisenior'}
                onChange={event => props.onConfigChange(event)} />
              Semisenior - Palabras y su definición. Tablero de 3x4.
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="senior" name="level"
                checked={props.level === 'senior'}
                onChange={event => props.onConfigChange(event)} />
              Senior - Palabras y su definición. Tablero de 4x4.
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
  level: PropTypes.string,
  onConfigChange: PropTypes.func,
  onIncrementStep: PropTypes.func
}

export default Start;
