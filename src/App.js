import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment(prevCount) {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Plus 1</button>
    </>
  );
}
