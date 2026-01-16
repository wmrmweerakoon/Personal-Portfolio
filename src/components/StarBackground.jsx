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
    const numberOfMeteors = 16; // Increase total number of meteors
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      // Distribute meteors among three regions: left middle, top left, and top middle
      let xRangeStart, xRangeEnd, yRangeStart, yRangeEnd;
      
      if (i % 3 === 0) {
        // Left middle: left side, middle vertical area
        xRangeStart = 0;
        xRangeEnd = 30;
        yRangeStart = 30;
        yRangeEnd = 70;
      } else if (i % 3 === 1) {
        // Top left: top left corner
        xRangeStart = 0;
        xRangeEnd = 30;
        yRangeStart = -30; // Above the screen
        yRangeEnd = 0;
      } else {
        // Top middle: top middle area
        xRangeStart = 35;
        xRangeEnd = 65;
        yRangeStart = -30; // Above the screen
        yRangeEnd = 0;
      }

      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        widthFactor: Math.random() * 30 + 30, // Random width factor between 30-60
        heightFactor: Math.random() * 2 + 1,  // Random height factor between 1-3
        x: xRangeStart + Math.random() * (xRangeEnd - xRangeStart),
        y: yRangeStart + Math.random() * (yRangeEnd - yRangeStart),
        delay: Math.random() * 15,
        animationDuration: Math.random() * 6 + 6, // Slower speed: 6-12 seconds instead of 3-6 seconds
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
            className="absolute rounded-full"
            style={{
              width: Math.max(meteor.size * 3, 6) + "px",
              height: Math.max(meteor.size * 3, 6) + "px",
              left: "0",
              top: "-3px",
              background: "radial-gradient(circle, #ffffff 0%, #66ffff 30%, #33ccff 70%, #0099ff 100%)",
              boxShadow: "0 0 15px 5px rgba(0, 200, 255, 0.8)",
              animation: `meteor ${meteor.animationDuration}s linear infinite`,
              animationDelay: `-${Math.random() * meteor.animationDuration}s`, // Random offset to make them always moving
            }}
          />
          {/* Meteor Tail */}
          <div
            className="absolute rounded-full"
            style={{
              width: meteor.size * meteor.widthFactor + "px",
              height: "2px",
              left: (meteor.size * 3) + "px", // Position after the head
              top: "0",
              background: "linear-gradient(to right, #0099ff, #0066cc, transparent)",
              opacity: 0.7,
              animation: `meteor ${meteor.animationDuration}s linear infinite`,
              animationDelay: `-${Math.random() * meteor.animationDuration}s`, // Random offset to make them always moving
            }}
          />
        </div>
      ))}
    </div>
  );
};
