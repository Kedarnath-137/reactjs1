import { useEffect, useState } from 'react';

const UseEffect5 = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  useEffect(() => {
    window.addEventListener('mousemove', callbackFuction);

    return () => {
      // clean the component memory leaks
      window.removeEventListener(('mousemove', callbackFuction));
    };
  },[]);

  const callbackFuction = (event) => {
    console.log(event.clientX);
    setX(event.clientX);
    console.log(event.clientY);
    setY(event.clientY);
  };

  return (
    <>
      <h2>hello</h2>
      <h1> X position{x}</h1>
      <h1> Y position{y}</h1>
    </>
  );
};

export default UseEffect5;
