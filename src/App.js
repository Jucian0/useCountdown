import React, { useState, useEffect } from "react";
import "./styles.css";

function useCountdown(timeout) {
  const [date, setDate] = useState(new Date().setMilliseconds(timeout));
  const currentDate = new Date().getTime();
  const [time, setTime] = useState(new Date(date - currentDate));

  useEffect(() => {
    if (date > currentDate) {
      setTimeout(() => {
        setTime(new Date(date - currentDate));
      }, 1000);
    }
  });

  useEffect(() => {
    setDate(new Date().setMilliseconds(timeout));
  }, [timeout]);

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
