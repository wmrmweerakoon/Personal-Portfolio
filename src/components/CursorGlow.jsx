import { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const glowRef = useRef(null);
  const particlesRef = useRef([]);
  const maxParticles = 20;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }

      // Create mist particles
      createParticle(e.clientX, e.clientY);
    };

    const createParticle = (x, y) => {
      // Remove oldest particle if we exceed the limit
      if (particlesRef.current.length >= maxParticles) {
        const oldParticle = particlesRef.current.shift();
        if (oldParticle && oldParticle.parentNode) {
          oldParticle.parentNode.removeChild(oldParticle);
        }
      }

      // Create new particle
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${Math.random() * 10 + 5}px`; // Random size between 5-15px
      particle.style.height = `${Math.random() * 10 + 5}px`;
      particle.style.borderRadius = '50%';
      particle.style.background = `rgba(0, 150, 255, ${Math.random() * 0.5 + 0.3})`; // More intense blue color variation
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9';
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.transition = 'all 1s ease-out';
      particle.style.willChange = 'transform, opacity';

      document.body.appendChild(particle);
      particlesRef.current.push(particle);

      // Animate particle
      setTimeout(() => {
        if (particle.parentNode) {
          particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
          particle.style.opacity = '0';
        }
      }, 10);

      // Remove particle after animation completes
      setTimeout(() => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
          const index = particlesRef.current.indexOf(particle);
          if (index > -1) {
            particlesRef.current.splice(index, 1);
          }
        }
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up any remaining particles
      particlesRef.current.forEach(particle => {
        if (particle && particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed z-10 pointer-events-none mix-blend-screen"
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 150, 199, 0.8) 0%, rgba(0, 120, 180, 0.7) 30%, rgba(0, 90, 150, 0.5) 60%, transparent 80%)',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(5px)',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
        willChange: 'left, top',
      }}
    />
  );
};
