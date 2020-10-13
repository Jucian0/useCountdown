import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

function useCountdown(timeout) {
  const { current: date } = useRef(new Date().setMilliseconds(timeout));
  const currentDate = new Date();
  const [time, setTime] = useState(new Date(date - currentDate));

  useEffect(() => {
    if (date > currentDate) {
      setTimeout(() => {
        setTime(new Date(date - currentDate));
      }, 1000);
    }
  });

  return time;
}

export default function App() {
  const time = useCountdown(900000);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{time.toISOString().substr(12, 8)}</h2>
    </div>
  );
}
