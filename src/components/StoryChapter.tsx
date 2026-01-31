'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface StoryChapterProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    index: number;
    className?: string;
}

export function StoryChapter({ title, subtitle, children, index, className }: StoryChapterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y, scale }}
            className={`min-h-screen flex flex-col justify-center px-6 py-32 ${className || ''}`}
        >
            <div className="max-w-6xl mx-auto w-full">
                {/* Chapter Number */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                >
                    <span className="text-green-500 font-mono text-sm px-4 py-2 border border-green-500/30 bg-green-500/5 rounded-full">
                        Chapter 0{index}
                    </span>
                    {subtitle && (
                        <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">
                            {subtitle}
                        </span>
                    )}
                </motion.div>

                {/* Chapter Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tight"
                >
                    {title}
                </motion.h2>

                {/* Chapter Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {children}
                </motion.div>
            </div>
        </motion.div>
    );
}
