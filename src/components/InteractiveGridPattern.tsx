'use client';

import React, { useRef, useEffect } from 'react';

export function InteractiveGridPattern({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`inset-0 pointer-events-none overflow-hidden ${className || 'absolute'}`}
            style={
                {
                    '--mouse-x': '-1000px',
                    '--mouse-y': '-1000px',
                } as React.CSSProperties
            }
        >
            {/* Base Grid - Green Tint - Brightened from 08 to 15 */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:60px_60px]"></div>

            {/* Highlighted Grid - Brighter Green - Increased opacity from 20 to 50 */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"
                style={{
                    maskImage: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
                    WebkitMaskImage: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
                }}
            ></div>
        </div>
    );
}
