import { useState } from 'react';

const useCounter = (initial = 0) => {
  const [count, setCount] = useState(initial);
  const handleCount = () => {
    setCount(count + 1);
  };

  return [count, handleCount];
};

export default useCounter;
