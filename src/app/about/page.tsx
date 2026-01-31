"use client";

import dynamic from 'next/dynamic';
import { FadeIn } from '@/components/FadeIn';
import { SlideIn } from '@/components/SlideIn';
import Image from 'next/image';
import { StoryChapter } from '@/components/StoryChapter';
import { HorizontalTimeline } from '@/components/HorizontalTimeline';
import { SystemModules } from '@/components/SystemModules';
import { MobileCopy } from '@/components/MobileCopy';

const CTA = dynamic(() => import('@/components/CTA'), {
    ssr: false
});

export default function About() {
    const timeline = [
        {
            year: '2020',
            title: 'The Frustration',
            description: 'Founded by engineers tired of the AI hype cycle. We saw too many "magic" solutions that broke in production.',
            icon: '⚡'
        },
        {
            year: '2021',
            title: 'First Principles',
            description: 'Built our first deterministic AI system for a fintech client. 99.99% uptime from day one. The foundation was set.',
            icon: '🎯'
        },
        {
            year: '2022',
            title: 'Scale \u0026 Rigor',
            description: 'Expanded to serve enterprise clients processing 8M+ requests daily. Our systems became invisible—the highest compliment.',
            icon: '📈'
        },
        {
            year: '2023',
            title: 'Open Intelligence',
            description: 'Adopted radical transparency. Open-sourced our core frameworks, believing the best systems are built in the light.',
            icon: '🔓'
        },
        {
            year: '2024',
            title: 'The Future',
            description: "Today we architect autonomous nervous systems for the world's most demanding environments. The work continues.",
            icon: '🚀'
        }
    ];

    return (
        <div className="bg-zinc-950 min-h-screen text-white overflow-hidden">

            {/* Intro Hero */}
            <div className="max-w-7xl mx-auto px-6 py-32">
                <SlideIn direction="up">
                    <div className="inline-flex items-center gap-2 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-xs font-mono tracking-widest text-green-500 uppercase">Architecture Lab Profile</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12">
                        <MobileCopy
                            desktop="About ARORA."
                            mobile="About Us."
                            as="span"
                        />
                    </h1>
                </SlideIn>
            </div>

            {/* Chapter 1: The Problem */}
            <StoryChapter
                title="The Problem with AI"
                subtitle="Why We Exist"
                index={1}
                className="bg-gradient-to-b from-zinc-950 to-zinc-900"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-2xl md:text-3xl text-zinc-100 leading-relaxed mb-8">
                            Most enterprises face the same challenge: <span className="text-green-400 font-semibold">AI that works in demos but fails in production</span>.
                        </p>
                        <p className="text-xl text-zinc-300 leading-relaxed">
                            The industry is obsessed with "magic" over mechanics. We exist to bridge the gap between experimental research and production-grade software.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
                            <h4 className="text-lg font-mono text-red-400 mb-4">Common Failures:</h4>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500">×</span>
                                    <span>Unpredictable outputs destroying user trust</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500">×</span>
                                    <span>Models that can't explain their decisions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500">×</span>
                                    <span>Systems that break under enterprise load</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </StoryChapter>

            {/* Chapter 2: The Journey - Timeline */}
            <StoryChapter
                title="Our Journey"
                subtitle="2020 - Present"
                index={2}
                className="bg-zinc-900"
            >
                <HorizontalTimeline events={timeline} />
            </StoryChapter>

            {/* Divider - Visual Statement */}
            <div className="relative w-full h-[70vh] flex items-center justify-center bg-zinc-950">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero_aurora_bg.png"
                        alt="System Core"
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950/80 to-zinc-950"></div>
                </div>
                <div className="relative z-10 text-center px-6">
                    <h2 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter mb-6">
                        "The best AI is invisible"
                    </h2>
                    <p className="text-zinc-400 text-lg font-mono">— ARORA Founding Principle</p>
                </div>
            </div>

            {/* Chapter 3: The Method - System Modules */}
            <StoryChapter
                title="How We Work"
                subtitle="Operating System"
                index={3}
                className="bg-gradient-to-b from-zinc-950 to-zinc-900"
            >
                <div className="mb-16">
                    <p className="text-2xl text-zinc-200 leading-relaxed max-w-3xl">
                        Our values aren't just principles—they're compiled modules in our operating system.
                        Each one is rigorously tested and battle-hardened in production.
                    </p>
                </div>

                <SystemModules />
            </StoryChapter>

            {/* Chapter 4: The Impact */}
            <StoryChapter
                title="Real Results"
                subtitle="By The Numbers"
                index={4}
                className="bg-zinc-900"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { value: '99.99%', label: 'Uptime Guarantee' },
                        { value: '<12ms', label: 'Average Latency' },
                        { value: '8.4M+', label: 'Daily Requests' },
                        { value: '100%', label: 'Deterministic' }
                    ].map((stat, i) => (
                        <FadeIn key={i} className="text-center p-6 rounded-2xl border border-white/10 bg-zinc-950/50">
                            <div className="text-4xl md:text-6xl font-bold text-green-400 mb-3 font-mono">
                                {stat.value}
                            </div>
                            <div className="text-sm text-zinc-400 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-6">Enterprise Trust</h3>
                        <p className="text-xl text-zinc-300 leading-relaxed">
                            We serve clients who can't afford downtime. Financial institutions, healthcare systems, supply chain networks—environments where <span className="text-green-400">reliability isn't optional</span>.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-6">Built to Last</h3>
                        <p className="text-xl text-zinc-300 leading-relaxed">
                            Our systems are architected for the next decade, not the next quarter. Modular, scalable, and designed to evolve with your business.
                        </p>
                    </div>
                </div>
            </StoryChapter>

            {/* Final CTA */}
            <div className="py-32">
                <CTA />
            </div>
        </div>
    );
}
