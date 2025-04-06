import React, { useState, useEffect } from "react";

const CountUp = ({ end = 1000, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default CountUp;
