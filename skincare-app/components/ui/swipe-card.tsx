'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

interface SwipeCardProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeComplete?: () => void;
}

export function SwipeCard({ children, onSwipeLeft, onSwipeRight, onSwipeComplete }: SwipeCardProps) {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_: any, info: any) => {
    if (Math.abs(info.offset.x) > 100) {
      setExitX(info.offset.x > 0 ? 200 : -200);

      if (info.offset.x > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }

      setTimeout(() => {
        onSwipeComplete?.();
      }, 300);
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={exitX !== 0 ? { x: exitX } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="absolute w-full cursor-grab active:cursor-grabbing"
    >
      {children}
    </motion.div>
  );
}
