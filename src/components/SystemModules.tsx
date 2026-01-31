'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SystemModule {
    title: string;
    shortDesc: string;
    fullDesc: string;
    icon: string;
    color: string;
}

const MODULES: SystemModule[] = [
    {
        title: "PRECISION",
        shortDesc: "Measure twice, cut once",
        fullDesc: "Every line of code is written with the intent to be permanent and performant. We don't patch—we architect.",
        icon: "⚡",
        color: "#10b981"
    },
    {
        title: "OWNERSHIP",
        shortDesc: "Radical responsibility",
        fullDesc: "We don't just deliver software; we take responsibility for the outcomes and the impact of the systems we deploy.",
        icon: "🎯",
        color: "#06b6d4"
    },
    {
        title: "TRANSPARENCY",
        shortDesc: "Open-source mindset",
        fullDesc: "We operate with full visibility, providing our partners with complete access to the code and mechanics of their systems.",
        icon: "🔍",
        color: "#8b5cf6"
    },
    {
        title: "EVOLUTION",
        shortDesc: "Built for the next decade",
        fullDesc: "Our systems are modular, scalable, and designed to evolve. We build for longevity, not the next quarter.",
        icon: "🚀",
        color: "#f59e0b"
    },
    {
        title: "SIGNAL",
        shortDesc: "Signal over noise",
        fullDesc: "In a world of distraction, we focus exclusively on the technologies that drive real, tangible results.",
        icon: "📡",
        color: "#ec4899"
    }
];

export function SystemModules() {
    const [activeModule, setActiveModule] = useState<number | null>(null);
    const [assembled, setAssembled] = useState(false);

    return (
        <div className="w-full">
            {/* Assembly Control */}
            <div className="flex justify-center mb-12">
                <button
                    onClick={() => setAssembled(!assembled)}
                    className="px-6 py-3 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 font-mono text-sm uppercase tracking-wider hover:bg-green-500/10 transition-all duration-300"
                >
                    {assembled ? '↓ Disassemble System' : '↑ Compile System'}
                </button>
            </div>

            {/* Module Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                {MODULES.map((module, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: assembled ? 1 : 0.6,
                            y: assembled ? 0 : 20,
                            scale: activeModule === i ? 1.05 : 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: assembled ? i * 0.1 : 0,
                        }}
                        onMouseEnter={() => setActiveModule(i)}
                        onMouseLeave={() => setActiveModule(null)}
                        onClick={() => setActiveModule(activeModule === i ? null : i)}
                        className="p-8 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm cursor-pointer hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group"
                        style={{
                            borderColor: activeModule === i ? module.color : undefined,
                        }}
                    >
                        {/* Module Icon */}
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {module.icon}
                        </div>

                        {/* Module Title */}
                        <h3 className="text-2xl font-bold text-white mb-2 font-mono tracking-tight group-hover:text-green-400 transition-colors">
                            {module.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-zinc-400 text-sm mb-4">{module.shortDesc}</p>

                        {/* Status Indicator */}
                        <div className="flex items-center gap-2 text-xs font-mono">
                            <div
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${assembled ? 'bg-green-500 animate-pulse' : 'bg-zinc-700'
                                    }`}
                            ></div>
                            <span className={assembled ? 'text-green-400' : 'text-zinc-600'}>
                                {assembled ? 'ACTIVE' : 'STANDBY'}
                            </span>
                        </div>

                        {/* Hover Glow Effect */}
                        <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                            style={{
                                background: `radial-gradient(circle at center, ${module.color}, transparent)`,
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Expanded Module Detail */}
            <AnimatePresence>
                {activeModule !== null && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 p-8 rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent backdrop-blur-md overflow-hidden"
                    >
                        <div className="flex items-start gap-6">
                            <div className="text-6xl">{MODULES[activeModule].icon}</div>
                            <div className="flex-1">
                                <h4 className="text-3xl font-bold text-white mb-4 font-mono">
                                    {MODULES[activeModule].title}
                                </h4>
                                <p className="text-zinc-300 text-lg leading-relaxed">
                                    {MODULES[activeModule].fullDesc}
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-green-400 font-mono text-sm">System Module // Operational</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
