import React, { useReducer } from 'react';

import Start from '../Start';
import Board from '../Board';
import reducer from '../../reducer';
import './styles.css';
import {
  STEP_ACTION_TYPE,
  NAME_ACTION_TYPE,
  RESET_ACTION_TYPE,
} from '../../constants';

const initialState = {
  step: 0,
  name: '',
};

function Main() {

  const [state, dispatch] = useReducer(reducer, initialState);

  function onChangeName(value) {
    dispatch({ type: NAME_ACTION_TYPE, payload: value });
  }

  const onIncrementStep = () => dispatch({ type: STEP_ACTION_TYPE });

  const onReset = () => dispatch({ type: RESET_ACTION_TYPE });

  function renderStep() {
    const { name, step } = state;
    switch (step) {
      case 0:
        return (
          <Start
            name={name}
            onChangeName={onChangeName}
            onIncrementStep={onIncrementStep}
          />
        );
      default:
        return (
          <div className="main-container board">
            <Board
              name={name}
              step={step}
              onIncrementStep={onIncrementStep}
              onReset={onReset}
            />
          </div>
        );
    }
  }

  return (
    <div className="main-container">
      {renderStep()}
    </div>
  );
}

export default Main;
