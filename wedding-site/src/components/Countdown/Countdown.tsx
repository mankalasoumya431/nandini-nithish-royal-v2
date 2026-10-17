import { useMemo } from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import './Countdown.css';

interface CountdownProps {
  weddingDate: string; // ISO date
  weddingTime: string; // "10:35 AM"
}

function parseTargetDate(isoDate: string, displayTime: string): Date {
  const [y, m, d] = isoDate.split('-').map(Number);
  const match = displayTime.match(/(\d+):(\d+)\s*(AM|PM)/i);

  let hours = 10;
  let minutes = 45;

  if (match) {
    hours = Number(match[1]) % 12;
    minutes = Number(match[2]);

    if (match[3].toUpperCase() === 'PM') {
      hours += 12;
    }
  }

  return new Date(y, (m ?? 1) - 1, d, hours, minutes, 0);
}

const UNITS: Array<{
  key: 'days' | 'hours' | 'minutes' | 'seconds';
  label: string;
}> = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

export function Countdown({ weddingDate, weddingTime }: CountdownProps) {
  const target = useMemo(
    () => parseTargetDate(weddingDate, weddingTime),
    [weddingDate, weddingTime]
  );

  const countdown = useCountdown(target);

  if (countdown.isComplete) {
    return (
      <div className="countdown countdown--complete" role="status">
        <p className="countdown__title">Wedding Muhurtham</p>
        <p className="countdown__complete-text">
          The celebration has begun
        </p>
      </div>
    );
  }

  return (
    <div
      className="countdown"
      role="timer"
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="countdown__title">Countdown</p>

      {UNITS.map((unit, i) => (
        <div className="countdown__unit-wrap" key={unit.key}>
          <div className="countdown__unit">
            <span className="countdown__value">
              {String(countdown[unit.key]).padStart(2, '0')}
            </span>
            <span className="countdown__label">{unit.label}</span>
          </div>

          {i < UNITS.length - 1 && (
            <span className="countdown__sep" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}