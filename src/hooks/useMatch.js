import { useState, useEffect } from 'react';
import { TIME_TO_TURN_CARDS } from '../constants';

const useMatch = match => {
  const [discovered, setDiscovered] = useState(false);
  useEffect(() => {
    let timer = null;
    if (match) {
      timer = setTimeout(() => {
        setDiscovered(true);
      }, TIME_TO_TURN_CARDS);
    }
    return () => clearTimeout(timer);
  }, [match]);
  
  return discovered;
};

export default useMatch;
