import React, { useEffect, useState } from "react";

const Useeff = () => {
  const [count, setCount] = useState(0);
  const [calculation,setCalculation] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setCalculation(() => count * 2);
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
      </div>
    </>
  );
};

export default Useeff;
