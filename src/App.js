/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from "react";
import "./styles.css";

function useCountdown(timeout) {
  const [date, setDate] = useState(Date.now() + timeout);
  const currentDate = new Date().getTime();
  const [{ isOut, time }, setState] = useState({
    isOut: false,
    time: new Date(date - currentDate)
  });

  useEffect(() => {
    if (date > currentDate) {
      setTimeout(() => {
        setState({ isOut: false, time: new Date(date - currentDate) });
      }, 1000);
    } else if (!isOut) {
      setState((state) => ({ ...state, isOut: true }));
    }
  });

  useEffect(() => {
    setDate(new Date().setMilliseconds(timeout));
  }, [timeout]);

  return { time, isOut };
}

export default function App() {
  const { time, isOut } = useCountdown(900000);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{time.toISOString().substr(12, 8)}</h2>
      <h2>{isOut.toString()}</h2>
    </div>
  );
}
