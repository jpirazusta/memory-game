import { useState, useEffect } from 'react';
import { TIME_TO_TURN_CARDS } from '../constants';

const useMatch = (match, levelPassed, setButtonDisabled) => {
  const [discovered, setDiscovered] = useState(false);
  
  useEffect(() => {
    let timer = null;
    if (match) {
      timer = setTimeout(() => {
        setDiscovered(true);
        if (levelPassed) {
          setButtonDisabled(false);
        }
      }, TIME_TO_TURN_CARDS);
    } else {
      setDiscovered(false);
    }
    return () => clearTimeout(timer);
  }, [match, levelPassed, setButtonDisabled]);
  
  return discovered;
};

export default useMatch;
