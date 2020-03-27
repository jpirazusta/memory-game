import React from 'react';
import './Start.css';
import logo from './assets/white_logo.png';

class Start extends React.Component {

  render() {
    return (
      <div style={{ display: this.props.display }} className="start-container" >
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        Cantidad de pares de tarjetas (entre 4 y 32):
      </div>
    );
  }
}

export default Start;
