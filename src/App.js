import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div className="title">
        <h1>Simple counter</h1>
      </div>

      <div className="main">
        <h1>{counter}</h1>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <button className="btn" onClick={() => setCounter(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}
