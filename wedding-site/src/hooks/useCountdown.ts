import { useEffect, useState } from 'react';

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function diffToCountdown(diffMs: number): CountdownValue {
  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, isComplete: false };
}

/**
 * Ticks every second toward `targetDate`. Once the target passes, returns
 * isComplete = true and holds at zero instead of going negative.
 */
export function useCountdown(targetDate: Date): CountdownValue {
  const [value, setValue] = useState<CountdownValue>(() =>
    diffToCountdown(targetDate.getTime() - Date.now())
  );

  useEffect(() => {
    const tick = () => setValue(diffToCountdown(targetDate.getTime() - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  return value;
}
