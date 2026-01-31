'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
    title: string;
    description: string;
    features: string[];
    icon: string;
    illustration: string;
    tagline: string;
}

interface ImmersiveServiceSectionProps {
    service: Service;
    index: number;
}

export function ImmersiveServiceSection({ service, index }: ImmersiveServiceSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.section
            ref={sectionRef}
            style={{ opacity }}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 snap-start"
        >
            {/* Animated Illustration Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0">
                    <Image
                        src={service.illustration}
                        alt={service.title}
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/95 via-zinc-950/90 to-zinc-900/95" />

                {/* Animated Glow */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10"
                />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                    {/* Content Side */}
                    <motion.div
                        style={{ scale }}
                        className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                        {/* Service Number */}
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="inline-block mb-6"
                        >
                            <span className="text-8xl font-mono font-bold text-green-500/10">
                                0{index + 1}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
                        >
                            {service.title}
                        </motion.h2>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-2xl text-green-400 font-light mb-8 italic"
                        >
                            {service.tagline}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-xl"
                        >
                            {service.description}
                        </motion.p>

                        {/* Features Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4 mb-12"
                        >
                            {service.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm hover:border-green-500/30 hover:bg-zinc-900/70 transition-all duration-300 group"
                                >
                                    <div className="w-2 h-2 rounded-full bg-green-500 group-hover:shadow-[0_0_10px_rgba(74,222,128,0.8)] transition-all" />
                                    <span className="text-sm font-mono text-zinc-400 group-hover:text-green-400 transition-colors">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:shadow-[0_0_50px_rgba(74,222,128,0.5)]"
                            >
                                <span>Get Started</span>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Illustration Side */}
                    <motion.div
                        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
                        className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative aspect-square max-w-2xl mx-auto"
                        >
                            {/* Main Illustration Card */}
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-xl shadow-2xl group">
                                {/* Illustration */}
                                <div className="relative w-full h-full p-12">
                                    <Image
                                        src={service.illustration}
                                        alt={service.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl" />
                                </div>

                                {/* Animated Border Glow */}
                                <motion.div
                                    animate={{
                                        opacity: [0.3, 0.8, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 rounded-3xl border-2 border-green-500/20"
                                />
                            </div>

                            {/* Floating Icon */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl"
                            >
                                <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-zinc-600 font-mono uppercase tracking-wider">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-0.5 h-12 bg-gradient-to-b from-green-500/50 to-transparent"
                />
            </motion.div>
        </motion.section>
    );
}
