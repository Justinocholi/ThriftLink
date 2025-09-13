// components/CountUp.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function CountUp({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
    countRef.current = 0;
    
    const step = () => {
      const now = Date.now();
      const progress = Math.min((now - startTimeRef.current) / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      countRef.current = easedProgress * end;
      setCount(countRef.current);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };
    
    frameRef.current = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration]);
  
  // Format the number with commas and decimals
  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  return (
    <span>{prefix}{formatNumber(count)}{suffix}</span>
  );
}