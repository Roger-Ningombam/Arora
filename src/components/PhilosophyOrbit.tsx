'use client';

import React, { useEffect, useRef } from 'react';

interface ValueNode {
    text: string;
    description: string;
    x: number;
    y: number;
    angle: number;
    radius: number;
    speed: number;
    active: boolean;
}

const VALUES = [
    { title: "Precision", desc: "Measure twice, cut once." },
    { title: "Transparency", desc: "Open source mindset." },
    { title: "Latency", desc: "Sub-millisecond inference." },
    { title: "Ownership", desc: "Radical responsibility." },
    { title: "Evolution", desc: "Built for the next decade." },
];

export function PhilosophyOrbit() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let nodes: ValueNode[] = [];
        let width = container.clientWidth;
        let height = container.clientHeight;
        let animationId: number;
        let centerX = width / 2;
        let centerY = height / 2;
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
            centerX = width / 2;
            centerY = height / 2;
            initNodes();
        };

        const initNodes = () => {
            nodes = VALUES.map((val, i) => {
                const radius = 120 + (i * 35); // Concentric rings
                const angle = (i / VALUES.length) * Math.PI * 2;
                return {
                    text: val.title,
                    description: val.desc,
                    x: centerX + Math.cos(angle) * radius,
                    y: centerY + Math.sin(angle) * radius,
                    angle: angle,
                    radius: radius,
                    speed: 0.002 + (i * 0.0005), // Different speeds
                    active: false
                };
            });
        };

        const draw = () => {
            // Fade out trail
            ctx.fillStyle = 'rgba(9, 9, 11, 0.2)'; // Zinc-950 with opacity
            ctx.fillRect(0, 0, width, height);

            // Draw Core
            ctx.beginPath();
            ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#10b981'; // Green-500
            ctx.fill();

            // Draw Core Glow
            const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 50);
            gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();

            nodes.forEach(node => {
                // Update position
                node.angle += node.active ? 0 : node.speed;
                node.x = centerX + Math.cos(node.angle) * node.radius;
                node.y = centerY + Math.sin(node.angle) * node.radius;

                // Check mouse hover
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                node.active = dist < 40;

                // Draw Orbit Path
                ctx.beginPath();
                ctx.arc(centerX, centerY, node.radius, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
                ctx.stroke();

                // Draw Node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.active ? 8 : 4, 0, Math.PI * 2);
                ctx.fillStyle = node.active ? '#10b981' : '#fff';
                ctx.fill();

                // Draw Text
                if (node.active) {
                    ctx.font = 'bold 16px monospace';
                    ctx.fillStyle = '#fff';
                    ctx.fillText(node.text, node.x + 15, node.y + 5);

                    ctx.font = '12px sans-serif';
                    ctx.fillStyle = '#a1a1aa'; // Zinc-400
                    ctx.fillText(node.description, node.x + 15, node.y + 20);
                } else {
                    ctx.font = '12px monospace';
                    ctx.fillStyle = 'rgba(255,255,255,0.5)';
                    ctx.fillText(node.text, node.x + 10, node.y + 4);
                }
            });

            animationId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', resize);
        canvas.addEventListener('mousemove', handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-[600px] relative bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden cursor-crosshair">
            <div className="absolute top-6 left-6 z-10">
                <span className="text-xs font-mono text-green-500 uppercase tracking-widest border border-green-500/20 px-2 py-1 rounded bg-green-500/5">
                    Interactive Logic Model
                </span>
            </div>
            <canvas ref={canvasRef} className="block" />
        </div>
    );
}
