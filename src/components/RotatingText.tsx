"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export default function RotatingText({ words, className }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={cn("inline-block relative text-primary h-16 md:h-20 overflow-hidden", className)}>
      {words.map((word, index) => (
        <span
          key={word}
          className={cn(
            "absolute left-0 right-0 text-center transition-all duration-1000 ease-in-out",
            index === currentIndex
              ? "opacity-100 translate-y-0 filter-none"
              : "opacity-0 -translate-y-6 blur-md"
          )}
          style={{
             transitionDelay: index === currentIndex ? '300ms' : '0ms'
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
