"use client";

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export default function RotatingText({ words, className }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 4 seconds, matches animation duration

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
                    )}
                    style={{
                        animationDelay: `${i === index ? '0s' : '-4s'}`,
                        opacity: i === index ? 1 : 0
                    }}
                >
                    {word}
                </span>
            ))}
      </span>
    </span>
  );
}
