import { useEffect, useRef, useState } from "react";

export default function Timer() {
	const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  let timeRef = useRef();

  function addTime(amountOfTime) {
    setTime(10 * 60);
    setRunning(true);
  }

  useEffect(() => {
    if (running && time > 0) {
      timeRef.current = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } 
    if (running && time <= 0) {
      alert("Times up!");
    }
    return () =>{
      clearInterval(timeRef.current);
    } 
  }, [running, setTime, time, timeRef]);

  return (
    <div>
      <h3>Time Remaining: {time}</h3>
      <button onClick={() => addTime(10 * 60)}>10 min</button>
      <button>30 min</button>
      <button>60 min</button>
    </div>
  );
}