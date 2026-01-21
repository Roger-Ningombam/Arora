'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Card = ({ children, className = '', title }: { children: React.ReactNode, className?: string, title?: string }) => (
    <div className={`bg-zinc-950/50 border border-white/10 rounded-2xl p-5 flex flex-col ${className}`}>
        {title && (
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-zinc-400 text-xs font-mono uppercase tracking-wider">{title}</h4>
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-zinc-700" />
                    <div className="w-1 h-1 rounded-full bg-zinc-700" />
                </div>
            </div>
        )}
        <div className="flex-1 min-h-0 relative">
            {children}
        </div>
    </div>
);

const CountUp = ({ end, duration = 2, delay = 0, suffix = "", prefix = "", decimals = 0 }: { end: number, duration?: number, delay?: number, suffix?: string, prefix?: string, decimals?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    const spring = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: duration * 1000
    });

    const displayValue = useTransform(spring, (current) => {
        if (decimals === 0) {
            return `${prefix}${Math.round(current).toLocaleString()}${suffix}`;
        }
        return `${prefix}${current.toFixed(decimals)}${suffix}`;
    });

    useEffect(() => {
        if (isInView) {
            setTimeout(() => {
                spring.set(end);
            }, delay * 1000);
        }
    }, [isInView, end, delay, spring]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export const DashboardPreview = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-6 pb-32 pt-40 relative z-10">
            <div className="rounded-[2.5rem] bg-zinc-900 border border-white/10 p-6 md:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 pointer-events-none" />

                {/* Header */}
                <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        <span className="ml-4 text-zinc-500 font-mono text-sm">Scalar.AI // Main_Dashboard</span>
                    </div>
                    <div className="flex gap-4 text-zinc-500">
                        <span className="text-xs font-mono">LIVE_CONNECTION</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>
                </div>

                <div className="grid grid-cols-[100px_1fr] md:grid-cols-[280px_1fr] gap-3 md:gap-6 relative z-10 font-sans">
                    {/* Sidebar */}
                    <Card className="h-full bg-zinc-950/80 !p-3 md:!p-5">
                        <div className="flex flex-col items-center justify-center py-4 md:py-8">
                            {/* Circular Progress */}
                            <div className="relative w-16 h-16 md:w-40 md:h-40 flex items-center justify-center mb-4 md:mb-8">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                                    <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-zinc-800" />
                                    <motion.circle
                                        cx="80" cy="80" r="70"
                                        stroke="currentColor" strokeWidth="12" fill="transparent"
                                        strokeDasharray="440"
                                        strokeDashoffset="440"
                                        whileInView={{ strokeDashoffset: 110 }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className="text-green-500" strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-xl md:text-5xl font-bold text-white tracking-tighter">
                                        <CountUp end={75} />
                                    </span>
                                    <span className="text-[6px] md:text-xs text-zinc-500 uppercase mt-0 md:mt-1">Eff</span>
                                </div>
                            </div>

                            <div className="w-full space-y-3 md:space-y-6">
                                <div className="flex flex-col md:flex-row justify-between text-[8px] md:text-sm">
                                    <span className="text-zinc-500 hidden md:block">Active Threads</span>
                                    <span className="text-zinc-500 md:hidden">Thr.</span>
                                    <span className="text-white font-mono"><CountUp end={1024} /></span>
                                </div>
                                <div className="w-full bg-zinc-800 h-0.5 md:h-1 rounded-full overflow-hidden">
                                    <motion.div
                                        className="bg-green-500 h-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "80%" }}
                                        transition={{ duration: 1.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row justify-between text-[8px] md:text-sm">
                                    <span className="text-zinc-500 hidden md:block">Memory Load</span>
                                    <span className="text-zinc-500 md:hidden">Mem.</span>
                                    <span className="text-white font-mono"><CountUp end={64} suffix="G" /></span>
                                </div>
                                <div className="w-full bg-zinc-800 h-0.5 md:h-1 rounded-full overflow-hidden">
                                    <motion.div
                                        className="bg-emerald-500 h-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "45%" }}
                                        transition={{ duration: 1.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>

                            <div className="mt-auto w-full pt-4 md:pt-10">
                                <div className="flex items-end justify-between h-10 md:h-24 gap-0.5 md:gap-1">
                                    {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                                        <div key={i} className="w-full bg-zinc-800 rounded-t-sm relative overflow-hidden group">
                                            <motion.div
                                                className={`absolute bottom-0 left-0 w-full bg-zinc-700 group-hover:bg-green-500`}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Main Grid */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 auto-rows-[80px] md:auto-rows-[160px]">

                        {/* Top Row */}
                        <Card title="Health" className="col-span-1 md:!p-5 !p-2">
                            <div className="flex items-center justify-between h-full">
                                <div className="flex flex-col gap-0.5 md:gap-2">
                                    <div className="px-1.5 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[6px] md:text-xs rounded-full w-fit">OPT</div>
                                    <span className="text-xs md:text-2xl text-white font-medium">
                                        <CountUp end={98.2} decimals={1} suffix="%" />
                                    </span>
                                </div>
                                <svg className="w-6 h-6 md:w-16 md:h-16 text-green-500/20 hidden sm:block" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                        </Card>

                        <Card title="TP" className="col-span-1 bg-gradient-to-br from-green-500/10 to-transparent md:!p-5 !p-2">
                            <div className="h-full flex items-end pb-1 md:pb-2">
                                <svg className="w-full h-8 md:h-16 overflow-hidden" viewBox="0 0 220 100" preserveAspectRatio="none">
                                    <motion.path
                                        d="M0 80 C 20 70, 40 40, 60 50 S 100 20, 140 30 S 180 60, 220 10"
                                        fill="none"
                                        stroke="#22c55e"
                                        strokeWidth="4"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                        viewport={{ once: true }}
                                    />
                                </svg>
                            </div>
                        </Card>

                        <Card title="Tokens" className="col-span-1 md:!p-5 !p-2">
                            <div className="flex flex-col justify-center h-full">
                                <span className="text-xs md:text-4xl text-white font-bold tracking-tight">
                                    <CountUp end={2.4} decimals={1} suffix="M" />
                                </span>
                                <div className="mt-2 flex gap-0.5 h-1 md:h-2">
                                    <div className="flex-1 bg-green-500 rounded-l-full opacity-100" />
                                    <div className="flex-1 bg-green-500 opacity-60" />
                                    <div className="flex-1 bg-green-500 opacity-30" />
                                </div>
                            </div>
                        </Card>

                        {/* Middle Row - Large Chart */}
                        <Card title="Latency" className="col-span-2 row-span-2 md:!p-5 !p-2">
                            <div className="h-full w-full flex flex-col justify-end">
                                <div className="flex justify-between mb-2 md:mb-4 border-b border-white/5 pb-1 md:pb-4">
                                    <div className="flex gap-2 md:gap-4">
                                        <div className="flex items-center gap-1 md:gap-2">
                                            <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-emerald-400" />
                                            <span className="text-[6px] md:text-xs text-zinc-400">p50</span>
                                        </div>
                                        <div className="flex items-center gap-1 md:gap-2">
                                            <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-green-500" />
                                            <span className="text-[6px] md:text-xs text-zinc-400">p99</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-20 md:h-48 w-full">
                                    <svg className="absolute inset-0 w-full h-full p-1" preserveAspectRatio="none" viewBox="0 0 500 200">
                                        <motion.path
                                            d="M0 160 Q 50 150, 100 110 T 200 90 T 300 130 T 400 70 T 500 100"
                                            fill="none" stroke="#34d399"
                                            strokeWidth="2" strokeDasharray="4 4"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2.5, ease: "easeInOut" }}
                                        />
                                        <motion.path
                                            d="M0 130 Q 50 120, 100 80 T 200 60 T 300 100 T 400 40 T 500 70"
                                            fill="none" stroke="#22c55e"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Card>

                        {/* Middle Row - Side Widget */}
                        <Card title="Nodes" className="col-span-1 md:!p-5 !p-2">
                            <div className="h-full flex items-end justify-between gap-0.5 md:gap-2 px-1">
                                {[30, 60, 75, 50, 80].map((h, i) => (
                                    <div key={i} className="w-full bg-zinc-800 rounded-sm relative group">
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-600 to-emerald-500 rounded-sm"
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Bottom Widget */}
                        <Card title="Status" className="col-span-1 md:!p-5 !p-2">
                            <div className="h-full flex flex-col justify-center gap-1 md:gap-3">
                                <div className="flex items-center gap-1 md:gap-3 p-1 rounded-md bg-red-500/10 border border-red-500/20">
                                    <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[6px] md:text-xs text-white">Alert</span>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </div >
        </section >
    );
};
