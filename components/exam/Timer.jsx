import { useState, useEffect } from 'react';
import { TimekeeperIcon } from '../Icons';

export function Timer({ setIsTimeout, stop }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (!stop) {
      const interval = setInterval(() => {
        if (!minutes && !seconds) {
          setIsTimeout(true);
        } else if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    return () => {};
  }, [minutes, seconds, stop]);

  return (
    <div className="flex justify-center my-4">
      <div className="flex items-center">
        <TimekeeperIcon color="#000" />
        <p className="text-3xl">

          {minutes}
          :
          {(seconds < 10) && '0'}
          {seconds}
        </p>
      </div>
    </div>
  );
}
