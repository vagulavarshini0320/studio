"use client";

import { cn } from '@/lib/utils';

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export default function RotatingText({ words, className }: RotatingTextProps) {
  return (
    <span className={cn("relative inline-block text-primary h-16 md:h-20 overflow-hidden text-center", className)}>
        <span className="rotating-text-word-container">
            {words.map((word) => (
                <span key={word} className="rotating-text-word leading-tight tracking-tighter">
                    {word}
                </span>
            ))}
      </span>
    </span>
  );
}
