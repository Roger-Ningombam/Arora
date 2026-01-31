'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FadeIn, FadeInStagger } from './FadeIn';
import { ThreeDTiltCard } from './ThreeDTiltCard';

interface Service {
    title: string;
    description: string;
    features: string[];
    icon: string;
    illustration: string;
    size?: 'large' | 'normal';
}

interface ServiceShowcaseProps {
    services: Service[];
}

export function ServiceShowcase({ services }: ServiceShowcaseProps) {
    return (
        <div className="w-full">
            {/* Bento Grid Layout */}
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {services.map((service, index) => {
                    // Determine grid sizing for bento layout
                    const isLarge = index === 0 || index === 3;
                    const gridClass = isLarge
                        ? 'md:col-span-7'
                        : 'md:col-span-5';

                    return (
                        <FadeIn
                            key={index}
                            className={gridClass}
                        >
                            <ThreeDTiltCard className="h-full">
                                <div className="relative h-full min-h-[500px] bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group hover:border-green-500/50 transition-all duration-500">
                                    {/* Illustration Background */}
                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                                        <Image
                                            src={service.illustration}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-black/95" />

                                    {/* Content */}
                                    <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                                        {/* Top Section */}
                                        <div>
                                            {/* Icon */}
                                            <div className="w-16 h-16 bg-zinc-800/50 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-green-500/10 transition-all duration-300 border border-white/5">
                                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                                                </svg>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-zinc-400 leading-relaxed text-lg mb-8">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Bottom Section - Features */}
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="text-xs font-mono text-zinc-500 bg-zinc-950/80 border border-white/5 px-3 py-2 rounded-lg backdrop-blur-sm hover:border-green-500/30 hover:text-green-400 transition-all duration-300"
                                                >
                                                    {feature}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-3xl rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </ThreeDTiltCard>
                        </FadeIn>
                    );
                })}
            </FadeInStagger>
        </div>
    );
}
