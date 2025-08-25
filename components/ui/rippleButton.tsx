import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RippleButton({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setCoords({ x, y });
    setRipples((prev) => [...prev, newRipple]);

    // Auto remove after animation ends
    setTimeout(() => {
      setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/50 pointer-events-none"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 40,
            height: 40,
            marginLeft: -10,
            marginTop: -10,
          }}
        />
      ))}
      {children}
    </button>
  );
}