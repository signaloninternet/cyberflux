"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MeteorShower: React.FC = () => {
  const meteorsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    meteorsRef.current.forEach((meteor, index) => {
      if (meteor) {
        gsap.fromTo(
          meteor,
          { 
            opacity: 0, 
            x: Math.random() * window.innerWidth, // Start randomly across width
            y: -50, // Start slightly above viewport
            rotate: -45 
          },
          { 
            opacity: 1, 
            x: "-=500", // Move leftward
            y: "+=500", // Move downward
            duration: 3, 
            delay: Math.random() * 3, // Random delay for staggered effect
            repeat: -1, 
            ease: "power1.out" 
          }
        );
      }
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (meteorsRef.current[index] = el)}
          className="absolute w-[150px] h-[2px] bg-gradient-to-r from-[#00E0FF] to-transparent"
          style={{ 
            top: `${Math.random() * -10}vh`, // Start slightly above viewport
            left: `${Math.random() * 100}vw` // Randomly spread across width
          }}
        />
      ))}
    </div>
  );
};

export default MeteorShower;
