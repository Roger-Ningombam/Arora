"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface Step {
    title: string;
    desc: string;
    duration?: string;
    phase?: string;
}

interface CircularProtocolProps {
    steps: Step[];
}

export const CircularProcess: React.FC<CircularProtocolProps> = ({ steps }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [activeIndex, setActiveIndex] = useState(0);

    // Smooth the scroll progress for smoother animations
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate rotation based on index
    // We want the indicator to move along the circle
    const stepCount = steps.length;
    // Offset to start from top
    const baseRotation = -90;

    // Map scroll progress to active index
    useEffect(() => {
        return scrollYProgress.onChange((v) => {
            const index = Math.min(
                Math.floor(v * stepCount),
                stepCount - 1
            );
            if (index !== activeIndex) {
                setActiveIndex(index);
            }
        });
    }, [scrollYProgress, stepCount, activeIndex]);

    // Indicator rotation: 0 to 360
    const indicatorRotation = useTransform(smoothProgress, [0, 1], [0, 360]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Ambience */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />

                <div className="relative w-full max-w-5xl px-6 flex flex-col items-center justify-center">

                    {/* Circular Visualization Area */}
                    <div className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] flex-shrink-0">

                        {/* Outer Circle Track */}
                        <div className="absolute inset-0 rounded-full border border-white/5 scale-[0.8]" />

                        {/* Animated Progress Path */}
                        <svg className="absolute inset-0 w-full h-full scale-[0.8] -rotate-90" viewBox="0 0 100 100">
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="49"
                                fill="none"
                                stroke="rgba(74, 222, 128, 0.1)"
                                strokeWidth="0.5"
                                strokeDasharray="1 3"
                            />
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="49"
                                fill="none"
                                stroke="rgba(74, 222, 128, 0.5)"
                                strokeWidth="0.5"
                                pathLength="1"
                                style={{ pathLength: smoothProgress }}
                            />
                        </svg>

                        {/* Middle Glassy Disc for Content - Added to distinguish text */}
                        <div className="absolute inset-0 m-auto w-[65%] h-[65%] rounded-full bg-zinc-900/30 backdrop-blur-md border border-white/5 z-0" />

                        {/* Steps Nodes around the circle */}
                        {steps.map((_, i) => {
                            const angle = (i / stepCount) * 360 + baseRotation;
                            // Scale 0.8 => 49 * 0.8 = 39.2
                            const x = 50 + 39.2 * Math.cos((angle * Math.PI) / 180);
                            const y = 50 + 39.2 * Math.sin((angle * Math.PI) / 180);
                            return (
                                <div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                        backgroundColor: i <= activeIndex ? 'rgb(74, 222, 128)' : 'rgba(255, 255, 255, 0.2)',
                                        boxShadow: i === activeIndex ? '0 0 15px rgb(74, 222, 128)' : 'none',
                                        transition: 'all 0.5s ease'
                                    }}
                                />
                            );
                        })}

                        {/* Traveling Indicator Path */}
                        <motion.div
                            className="absolute w-4 h-4 z-20 pointer-events-none"
                            style={{
                                left: "50%",
                                top: "50%",
                                x: "-50%",
                                y: "-50%",
                                rotate: indicatorRotation,
                                originX: "50%",
                                originY: "50%",
                            }}
                        >
                            {/* Adjusted top offset to match 0.8 scaled circle: -(600/2 * 0.8) = -240 */}
                            <div className="absolute top-[-128px] md:top-[-238px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white]" />
                        </motion.div>

                        {/* Step Labels on Circle */}
                        {steps.map((step, i) => {
                            const angle = (i / stepCount) * 360 + baseRotation;
                            // Push labels slightly outside the nodes (radius 48%)
                            const x = 50 + 48 * Math.cos((angle * Math.PI) / 180);
                            const y = 50 + 48 * Math.sin((angle * Math.PI) / 180);
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute whitespace-nowrap text-[8px] md:text-xs font-mono uppercase tracking-widest text-zinc-500 transform -translate-x-1/2 -translate-y-1/2"
                                    style={{ left: `${x}%`, top: `${y}%` }}
                                    animate={{
                                        color: i === activeIndex ? "white" : "rgba(113, 113, 122, 0.4)",
                                        scale: i === activeIndex ? 1.1 : 1
                                    }}
                                >
                                    {step.title}
                                </motion.div>
                            );
                        })}

                        {/* NEW: Text Description Content (CENTERED INSIDE) */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 p-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col items-center text-center max-w-[200px] md:max-w-xs"
                                >
                                    <span className="text-2xl md:text-4xl font-mono text-green-500/40 mb-2 md:mb-4">
                                        0{activeIndex + 1}
                                    </span>

                                    <h3 className="text-lg md:text-3xl font-bold text-white tracking-tight mb-2 md:mb-4 leading-tight">
                                        {steps[activeIndex].title}
                                    </h3>

                                    <p className="text-zinc-500 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-6">
                                        {steps[activeIndex].desc}
                                    </p>

                                    <div className="px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 text-[8px] md:text-[10px] text-green-400 font-mono tracking-widest flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-green-400" />
                                        {steps[activeIndex].duration || "Ongoing"}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};
