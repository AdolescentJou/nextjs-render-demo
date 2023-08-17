import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const t = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);

  return <h1>当前时间：{time}</h1>;
}

export default Time;