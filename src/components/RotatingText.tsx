"use client";

import { cn } from '@/lib/utils';

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export default function RotatingText({ words, className }: RotatingTextProps) {
  return (
    <span className={cn("inline-flex flex-col items-center text-primary h-16 md:h-20 overflow-hidden", className)}>
        <ul className="text-center animate-text-rotation">
            {words.map((word) => (
                <li key={word} className="leading-tight tracking-tighter">
                    {word}
                </li>
            ))}
      </ul>
    </span>
  );
}
