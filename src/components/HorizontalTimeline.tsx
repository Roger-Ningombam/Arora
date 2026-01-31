'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    icon?: string;
}

interface HorizontalTimelineProps {
    events: TimelineEvent[];
}

export function HorizontalTimeline({ events }: HorizontalTimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: containerRef,
    });

    return (
        <div className="relative w-full">
            {/* Scroll Hint */}
            <div className="flex items-center gap-3 mb-8 text-zinc-500 font-mono text-sm">
                <span>← Drag to explore timeline →</span>
                <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-green-500"
                >
                    →
                </motion.div>
            </div>

            {/* Timeline Container */}
            <div
                ref={containerRef}
                className="overflow-hidden cursor-grab active:cursor-grabbing pb-8"
            >
                <motion.div
                    className="flex gap-8 w-max pr-[20vw]"
                    drag="x"
                    dragConstraints={containerRef}
                >
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            className="w-[400px] md:w-[500px] p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-md hover:border-green-500/30 transition-all duration-500 group flex-shrink-0"
                        >
                            {/* Year Badge */}
                            <div className="flex items-center gap-4 mb-6">
                                {event.icon && (
                                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                        {event.icon}
                                    </div>
                                )}
                                <div className="text-6xl font-bold text-green-400 font-mono">
                                    {event.year}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                                {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-zinc-300 text-lg leading-relaxed">
                                {event.description}
                            </p>

                            {/* Progress Dot */}
                            <div className="mt-6 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                                <div className="text-xs text-zinc-600 font-mono">Milestone #{i + 1}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-6 h-1 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div
                    style={{ scaleX: scrollXProgress }}
                    className="h-full bg-green-500 origin-left"
                />
            </div>
        </div >
    );
}
