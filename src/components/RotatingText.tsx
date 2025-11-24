"use client";

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export default function RotatingText({ words, className }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // This duration must match the animation duration in globals.css

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={cn("relative inline-block text-primary h-12 sm:h-14 md:h-20 overflow-hidden align-bottom", className)}>
      <span className="rotating-text-word-container">
        {words.map((word, i) => (
          <span
            key={word}
            className={cn(
              "rotating-text-word",
              i === currentIndex ? "animate" : ""
            )}
            style={{
              animationPlayState: i === currentIndex ? 'running' : 'paused'
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
