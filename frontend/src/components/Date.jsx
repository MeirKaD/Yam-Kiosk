import React, { useState, useEffect } from 'react';

const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the date every 24 hours
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format the date as DD:M:YY
  const formattedDate = currentDate.toLocaleDateString('heb-IL', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  return (
    <div className="text-center">
      <p className="text-6xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{formattedDate}</p>
    </div>
  );
};

export default DateComponent;
