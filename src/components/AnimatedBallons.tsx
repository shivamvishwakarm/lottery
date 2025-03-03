import React, { useEffect, useState } from "react";

const Balloons = () => {
  interface Balloon {
    id: number;
    color: string;
    duration: number;
    left: number;
  }

  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const generatedBalloons = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: getRandomColor(),
      duration: Math.random() * 4 + 4, // Random float duration (4-8s)
      left: Math.random() * 100, // Random horizontal position (0-100vw)
    }));
    setBalloons(generatedBalloons);
  }, []);

  const getRandomColor = () => {
    const colors = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="container">
      {balloons.map(({ id, color, duration, left }) => (
        <div
          key={id}
          className="balloon"
          style={{
            backgroundColor: color,
            animationDuration: `${duration}s`,
            left: `${left}vw`,
          }}>
          <div className="string" />
        </div>
      ))}
    </div>
  );
};

export default Balloons;
