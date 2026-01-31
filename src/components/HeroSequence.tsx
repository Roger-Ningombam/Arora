'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { KineticText } from './KineticText';
import { MagneticButton } from './MagneticButton';
import Link from 'next/link';
import { MobileCopy } from './MobileCopy';

import { useLoading } from '@/context/LoadingContext';

interface HeroSequenceProps {
    children?: React.ReactNode;
}

export function HeroSequence({ children }: HeroSequenceProps) {
    const { isLoading } = useLoading();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Scene transitions based on scroll (3 SCENES)
    // Scene 1: 0 - 0.35
    // Scene 2: 0.35 - 0.65
    // Scene 3: 0.65 - 1.0
    const scene1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const scene2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
    const scene3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 1], [0, 1, 1]);

    // Parallax effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const [currentScene, setCurrentScene] = useState(1);

    useEffect(() => {
        return scrollYProgress.on('change', (latest) => {
            if (latest < 0.35) setCurrentScene(1);
            else if (latest < 0.65) setCurrentScene(2);
            else setCurrentScene(3);
        });
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="relative min-h-[400vh]"> {/* Increased height for more time */}
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* Background Layer */}
                {children}

                {/* Scene 1: Main Hero */}
                <motion.div
                    style={{ opacity: scene1Opacity, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={!isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                        <span className="text-xs font-mono tracking-widest text-white/90 uppercase">System v2.0 Live</span>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] font-bold font-outfit tracking-tighter text-white select-none mb-4">
                            INTELLIGENCE
                        </h1>
                        <h1 className="text-[12vw] sm:text-[10vw] leading-[0.85] font-bold font-outfit tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 select-none">
                            ARCHITECTED
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 max-w-2xl text-center"
                    >
                        <MobileCopy
                            desktop="We are an Enterprise AI Agency building custom software infrastructure. From Predictive Analytics to Autonomous Agents, we engineer intelligence that works."
                            mobile="Enterprise AI that works. From analytics to agents."
                            className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed tracking-wide"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-12"
                    >
                        <div className="text-xs text-zinc-500 font-mono mb-4 animate-pulse">↓ Scroll to explore systems</div>
                    </motion.div>
                </motion.div>

                {/* Scene 2: Metrics & Capabilities */}
                <motion.div
                    style={{ opacity: scene2Opacity, y: y2 }}
                    className="absolute inset-0 flex items-center justify-center z-30 px-6"
                >
                    <div className="max-w-6xl w-full">
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: currentScene === 2 ? 1 : 0, y: currentScene === 2 ? 0 : 30 }}
                            transition={{ duration: 0.6 }}
                        >
                            Real-Time Intelligence at Scale
                        </motion.h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { metric: '99.99%', label: 'Uptime' },
                                { metric: '<12ms', label: 'Latency' },
                                { metric: '8.4M+', label: 'Requests/Day' },
                                { metric: '100%', label: 'Deterministic' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: currentScene === 2 ? 1 : 0,
                                        scale: currentScene === 2 ? 1 : 0.8
                                    }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                                >
                                    <div className="text-3xl md:text-5xl font-bold text-green-400 mb-2 font-mono">
                                        {item.metric}
                                    </div>
                                    <div className="text-sm text-zinc-400 uppercase tracking-wider">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Scene 3: Final CTA (Formerly Scene 4) */}
                <motion.div
                    style={{ opacity: scene3Opacity }} // Using scene3Opacity now for CTA
                    className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: currentScene === 3 ? 1 : 0,
                            scale: currentScene === 3 ? 1 : 0.9
                        }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                            Ready to Build?
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto">
                            Let's architect your intelligent system.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/work">
                                <MagneticButton className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                    View Our Work
                                </MagneticButton>
                            </Link>
                            <Link href="/contact">
                                <MagneticButton className="px-10 py-5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                                    Start a Project
                                </MagneticButton>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
}
