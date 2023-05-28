import { useState, useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              setHours((prevHours) => prevHours + 1);
              return 0;
            } else {
              return prevMinutes + 1;
            }
          });
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2">
      Time:
      <div>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default Timer;
