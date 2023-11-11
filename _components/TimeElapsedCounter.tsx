'use client'
import React, { useEffect, useState } from 'react';

interface TimeElapsedCounterProps {
  targetDate: string; // ISO 8601 format date string
}

const TimeElapsedCounter: React.FC<TimeElapsedCounterProps> = ({ targetDate }) => {
  const [timeElapsed, setTimeElapsed] = useState<string>('');

  useEffect(() => {
    const updateElapsedTime = () => {
      const now = new Date();
      const targetDateTime = new Date(targetDate);
      const elapsed = now.getTime() - targetDateTime.getTime(); // Use getTime() for TypeScript

      const seconds = Math.floor((elapsed / 1000) % 60);
      const minutes = Math.floor((elapsed / 1000 / 60) % 60);
      const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
      const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

      setTimeElapsed(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateElapsedTime(); // Run immediately to show the initial elapsed time
    const interval = setInterval(updateElapsedTime, 1000); // Update every second

    return () => clearInterval(interval); // Clean up on component unmount
  }, [targetDate]); // Only re-run effect if targetDate changes

  return (
    <div>
      Time Elapsed : {timeElapsed}
    </div>
  );
};

export default TimeElapsedCounter;

