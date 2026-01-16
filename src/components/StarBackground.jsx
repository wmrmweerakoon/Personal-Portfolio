import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 12;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        widthFactor: Math.random() * 30 + 30, // Random width factor between 30-60
        heightFactor: Math.random() * 2 + 1,  // Random height factor between 1-3
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="relative"
          style={{
            left: meteor.x + "%",
            top: meteor.y + "%",
            width: meteor.size * meteor.widthFactor + "px",
            height: "4px",
          }}
        >
          {/* Meteor Head */}
          <div
            className="absolute rounded-full animate-meteor"
            style={{
              width: (meteor.size * 3) + "px",
              height: (meteor.size * 3) + "px",
              left: "0",
              top: "-3px",
              background: "radial-gradient(circle, #ffffff 0%, #66ffff 30%, #33ccff 70%, #0099ff 100%)",
              boxShadow: "0 0 15px 5px rgba(0, 200, 255, 0.8)",
              animationDelay: meteor.delay + "s",
              animationDuration: meteor.animationDuration + "s",
            }}
          />
          {/* Meteor Tail */}
          <div
            className="absolute rounded-full animate-meteor"
            style={{
              width: meteor.size * meteor.widthFactor + "px",
              height: "2px",
              left: (meteor.size * 3) + "px", // Position after the head
              top: "0",
              background: "linear-gradient(to right, #0099ff, #0066cc, transparent)",
              opacity: 0.7,
              animationDelay: meteor.delay + "s",
              animationDuration: meteor.animationDuration + "s",
            }}
          />
        </div>
      ))}
    </div>
  );
};
