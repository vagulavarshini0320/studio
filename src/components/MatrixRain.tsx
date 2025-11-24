"use client";

import React, { useRef, useEffect } from 'react';

const MatrixRain: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-initialize columns on resize
            columns = Array.from({ length: Math.floor(width / fontSize) }, () => Math.floor(Math.random() * height));
        };
        window.addEventListener('resize', handleResize);

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const characters = katakana + latin + nums;

        const fontSize = 16;
        let columns = Array.from({ length: Math.floor(width / fontSize) }, () => Math.floor(Math.random() * height));
        
        let animationFrameId: number;

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, width, height);
            
            ctx.fillStyle = '#0F0'; // Green text
            ctx.font = `${fontSize}px monospace`;
            
            columns.forEach((y, i) => {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                const x = i * fontSize;
                ctx.fillText(text, x, y);
                
                if (y > height && Math.random() > 0.975) {
                    columns[i] = 0;
                } else {
                    columns[i] = y + fontSize;
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };
        
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-[-2] opacity-20"></canvas>;
};

export default MatrixRain;
