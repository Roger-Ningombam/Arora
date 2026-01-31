'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface ProcessStep {
    title: string;
    desc: string;
    duration: string;
    illustration: string;
}

interface ProcessJourneyProps {
    steps: ProcessStep[];
}

export function ProcessJourney({ steps }: ProcessJourneyProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <div ref={containerRef} className="relative py-20">
            {/* Connecting Path Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-green-500/20 to-transparent hidden md:block" />

            {/* Steps */}
            <div className="space-y-32">
                {steps.map((step, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-12`}
                        >
                            {/* Content Side */}
                            <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} text-left`}>
                                {/* Step Number */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="inline-block mb-4"
                                >
                                    <span className="text-6xl font-mono text-green-500/20 font-bold">
                                        0{index + 1}
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-zinc-400 text-lg leading-relaxed mb-6 max-w-md">
                                    {step.desc}
                                </p>

                                {/* Duration Badge */}
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm ${isLeft ? '' : ''}`}>
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-mono text-green-400 uppercase tracking-wider">
                                        {step.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Center Node (only visible on desktop) */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                                viewport={{ once: true }}
                                className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 border-4 border-zinc-950 shadow-[0_0_20px_rgba(74,222,128,0.5)] z-10 hidden md:block"
                            />

                            {/* Illustration Side */}
                            <div className="flex-1">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/40 backdrop-blur-xl group hover:border-green-500/50 transition-all duration-500"
                                >
                                    {/* Illustration */}
                                    <div className="relative w-full h-full p-8">
                                        <Image
                                            src={step.illustration}
                                            alt={step.title}
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/5 blur-2xl rounded-full" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Progress Indicator */}
            <motion.div
                className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
            >
                {steps.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full bg-zinc-800"
                        style={{
                            backgroundColor: useTransform(
                                scrollYProgress,
                                [index / steps.length, (index + 1) / steps.length],
                                ['rgba(113, 113, 122, 1)', 'rgba(74, 222, 128, 1)']
                            )
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}
