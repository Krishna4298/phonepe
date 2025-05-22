"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const CountdownTimer = ({ initialMinutes = 10, initialSeconds = 57 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="flex items-center justify-center py-1 px-4 mt-2 bg-white text-[13px]">
      <div className="text-slate-700 mr-2">Special Offer Ends In:</div>
      <div id="countdown" className="text-slate-700 flex items-center">
        <Clock className="w-4 h-4 mr-1 text-primary" />
        <span id="time" className="font-medium">
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
