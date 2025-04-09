import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface NumberParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  value: string;
  duration: number;
  delay: number;
}

export default function NumberStorm() {
  const [particles, setParticles] = useState<NumberParticle[]>([]);
  
  useEffect(() => {
    // Generate random financial numbers and symbols
    const generateValue = () => {
      const types = [
        // Dollar amounts
        () => `$${(Math.random() * 10000).toFixed(2)}`,
        // Percentages
        () => `${(Math.random() * 100).toFixed(2)}%`,
        // Plain numbers
        () => `${Math.floor(Math.random() * 1000)}`,
        // Financial symbols
        () => ['₿', '€', '£', '¥', '₹', '₽', '₴', '₩'][Math.floor(Math.random() * 8)]
      ];
      
      return types[Math.floor(Math.random() * types.length)]();
    };
    
    // Create initial particles
    const createParticles = () => {
      const newParticles: NumberParticle[] = [];
      const count = 75; // Increased number of particles for better visibility
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // Random starting position (%)
          y: Math.random() * 100,
          size: Math.random() * 1.5 + 0.8, // Random size between 0.8 and 2.3rem
          opacity: Math.random() * 0.4 + 0.3, // Random opacity between 0.3 and 0.7
          value: generateValue(),
          duration: Math.random() * 20 + 15, // Random duration between 15 and 35 seconds
          delay: Math.random() * 10 // Random delay for staggered animation
        });
      }
      
      setParticles(newParticles);
    };
    
    createParticles();
    
    // Regenerate particles periodically
    const intervalId = setInterval(() => {
      createParticles();
    }, 20000); // Regenerate every 20 seconds
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute font-mono text-blue-300/70 font-semibold"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: [
              `${particle.x}vw`,
              `${(particle.x + 30) % 100}vw`,
              `${(particle.x + 50) % 100}vw`,
              `${(particle.x + 70) % 100}vw`,
              `${(particle.x + 100) % 100}vw`
            ],
            y: [
              `${particle.y}vh`,
              `${(particle.y + 20) % 100}vh`,
              `${(particle.y + 40) % 100}vh`,
              `${(particle.y + 60) % 100}vh`,
              `${(particle.y + 80) % 100}vh`
            ],
            opacity: [0, particle.opacity, particle.opacity * 1.2, particle.opacity, 0],
            scale: [0, particle.size, particle.size, particle.size, 0],
            rotate: [0, 45, 90, 180, 360]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
          style={{
            fontSize: `${particle.size}rem`,
            textShadow: '0 0 12px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)'
          }}
        >
          {particle.value}
        </motion.div>
      ))}
    </div>
  );
}
