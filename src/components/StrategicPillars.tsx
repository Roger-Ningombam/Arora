"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, FadeInStagger } from './FadeIn';

const CircuitBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dark Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            {/* Green Grid Pattern - Sparse */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:100px_100px]"></div>

            {/* Animated Circuit Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Circuit Paths with 45 degree bends */}
                <g stroke="#10b981" strokeWidth="1" fill="none" filter="url(#glow)">
                    <path d="M 0 200 H 100 L 150 250 H 300 L 350 300 V 500" className="animate-pulse" />
                    <path d="M 1400 100 H 1200 L 1150 150 H 1000 L 950 200 V 400" />
                    <path d="M 400 0 V 100 L 450 150 H 600" />
                    <path d="M 800 800 V 700 L 750 650 H 500 L 450 600" className="animate-pulse" />
                    <path d="M 1200 800 V 600 L 1150 550 H 900" />
                    <path d="M 200 0 V 200 L 250 250 H 400" />
                </g>
            </svg>

            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_70%)]"></div>
        </div>
    );
};

interface PillarCardProps {
    title: string;
    description: string;
    stat: string;
    label: string;
    floatingIcon: React.ReactNode;
    index: number;
}

const PillarCard = ({ title, description, stat, label, floatingIcon }: PillarCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="relative group h-full"
        >
            {/* Card Body */}
            <div className="h-full p-4 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/20 bg-zinc-900/40 backdrop-blur-xl flex flex-col transition-all duration-500 group-hover:border-green-400 group-hover:bg-zinc-900/60 shadow-[0_0_30px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] relative overflow-hidden">

                {/* Reflective Top Edge Highlight - Brightened */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>

                {/* Bottom Neon Glow Effect - Intensified */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-green-400 blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-20 bg-green-500/30 blur-[30px] rounded-full group-hover:bg-green-400/40 transition-all"></div>

                {/* Inner Glow Effect */}
                <div className="absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Icon Piece - Centered and Integrated Inside */}
                <div className="relative w-12 h-12 md:w-24 md:h-24 mx-auto mb-4 md:mb-8 pointer-events-none transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Glow behind icon */}
                        <div className="absolute inset-0 bg-green-500/25 blur-xl md:blur-2xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500"></div>
                        <div className="scale-50 md:scale-100 flex items-center justify-center w-full h-full">
                            {floatingIcon}
                        </div>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col h-full text-center">
                    <h3 className="text-xs md:text-3xl font-bold font-outfit text-white mb-2 md:mb-4 tracking-tight">
                        {title}
                    </h3>

                    <p className="text-[10px] md:text-base text-zinc-400 leading-tight md:leading-relaxed mb-auto font-light">
                        {description}
                    </p>

                    <div className="mt-4 md:mt-12 flex flex-col items-center">
                        <div className="relative inline-block">
                            <div className="text-xl md:text-5xl font-bold text-white mb-1 md:mb-2 tracking-tight">
                                {stat}
                            </div>
                            {/* Wavy Line SVG */}
                            <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-8 overflow-visible pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <svg width="100%" height="100%" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path d="M0 20C20 20 30 15 50 15C70 15 80 25 100 25C120 25 130 15 150 15C170 15 180 20 200 20" stroke="#10b981" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                                    <path d="M0 25C20 25 30 20 50 20C70 20 80 30 100 30C120 30 130 20 150 20C170 20 180 25 200 25" stroke="#10b981" strokeWidth="1" strokeLinecap="round" className="opacity-30" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 md:mt-6 text-[8px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.1em] md:tracking-[0.3em]">
                            {label}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const StrategicPillars = () => {
    const pillars = [
        {
            title: "Clear Thinking",
            description: "AI and business rules—creative and controllable.",
            stat: "99.9%",
            label: "Accuracy",
            floatingIcon: (
                <svg className="w-24 h-24 text-green-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.7)] rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12L16 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
                </svg>
            )
        },
        {
            title: "Faster Response",
            description: "Smoother AI—small savings, real results.",
            stat: "<12ms",
            label: "Response",
            floatingIcon: (
                <svg className="w-24 h-24 text-green-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.7)] -rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
                </svg>
            )
        },
        {
            title: "Adaptive Scale",
            description: "Scale smoothly as demand grows—without limits.",
            stat: "∞",
            label: "Scale",
            floatingIcon: (
                <svg className="w-24 h-24 text-green-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.7)] rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-zinc-950">
            <CircuitBackground />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <FadeInStagger className="grid grid-cols-3 gap-2 md:gap-8 lg:gap-12">
                    {pillars.map((pillar, index) => (
                        <FadeIn key={index}>
                            <PillarCard {...pillar} index={index} />
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </div>
        </section>
    );
};
