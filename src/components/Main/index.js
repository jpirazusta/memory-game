import React, { useReducer } from 'react';

import Start from '../Start';
import Board from '../Board';
import reducer from '../../reducer';
import './styles.css';
import {
  STEP_ACTION_TYPE,
  NAME_ACTION_TYPE,
  LEVEL_ACTION_TYPE,
  LEVELS,
} from '../../constants';

const initialState = {
  step: 0,
  name: '',
  level: LEVELS.junior,
};

function Main() {

  const [state, dispatch] = useReducer(reducer, initialState);

  function onConfigChange(input) {
    switch (input.name) {
      case 'level':
        dispatch({ type: LEVEL_ACTION_TYPE, payload: input.value });
        break;
      case 'name':
        dispatch({ type: NAME_ACTION_TYPE, payload: input.value });
        break;
      default:
        break;
    }
  }

  const onIncrementStep = () => dispatch({ type: STEP_ACTION_TYPE });

  function renderStep() {
    const { name, level, step } = state;
    switch (step) {
      case 0:
        return <Start
          name={name}
          level={level}
          onConfigChange={onConfigChange}
          onIncrementStep={onIncrementStep}
        />;
      case 1:
        return <Board
          name={name}
          level={level}
          onIncrementStep={onIncrementStep}
        />;
      default:
        return null;
    }
  }

  return (
    <div className="main-container">
      {renderStep()}
    </div>
  );
}

export default Main;
