'use client';

import React, { useRef, useEffect } from 'react';

/**
 * Matrix-style code rain animation
 */
export function CodeRainAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const fontSize = 14;
        const columns = Math.floor(width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        // Code snippets that make sense for ARORA
        const chars = 'ARORA@(){}[]<>=+-*/&|^~!?:;,._ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        const draw = () => {
            // Fade effect
            ctx.fillStyle = 'rgba(9, 9, 11, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#10b981';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillText(text, x, y);

                // Reset drop randomly or when it goes off screen
                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33); // ~30fps

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 opacity-20 pointer-events-none" />;
}
