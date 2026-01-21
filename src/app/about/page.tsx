"use client";

import dynamic from 'next/dynamic';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { SlideIn } from '@/components/SlideIn';
import Image from 'next/image';

const CTA = dynamic(() => import('@/components/CTA'), {
    ssr: false
});

export default function About() {
    const usps = [
        {
            title: "Engineering Over Hype",
            desc: "We don't just 'wrap' APIs; we architect foundational systems from the ground up with a focus on data integrity and long-term stability."
        },
        {
            title: "Deterministic AI",
            desc: "We prioritize traceable decision paths and auditable logic, ensuring our models provide clear explanations rather than unpredictable guesses."
        },
        {
            title: "Enterprise-Grade Latency",
            desc: "Our architectures are built for speed, consistently delivering sub-millisecond inference times even under the highest enterprise loads."
        },
        {
            title: "Radical Transparency",
            desc: "We operate with an open-source mindset, providing our partners with full visibility into the code and the mechanics of their systems."
        }
    ];

    const values = [
        {
            title: "Precision First",
            desc: "We measure twice and cut once. Every line of code is written with the intent to be permanent and performant."
        },
        {
            title: "Radical Ownership",
            desc: "We don't just deliver software; we take responsibility for the outcomes and the impact of the systems we deploy."
        },
        {
            title: "Signal Over Noise",
            desc: "In a world of distraction, we focus exclusively on the technologies that drive real, tangible results for our clients."
        },
        {
            title: "Durable Architecture",
            desc: "We build for the next decade, not the next quarter. Our systems are modular, scalable, and designed to evolve."
        },
        {
            title: "Human Centricity",
            desc: "We believe technology should serve humans. Our systems are designed to augment intelligence and free teams from mundane tasks."
        }
    ];

    return (
        <div className="bg-zinc-950 min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">

                {/* Header */}
                <SlideIn direction="up">
                    <div className="inline-flex items-center gap-2 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-xs font-mono tracking-widest text-green-500 uppercase">Architecture Lab Profile</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-24">About ARORA.</h1>
                </SlideIn>

                {/* Section 1: Who We Are (Intro) */}
                <section className="mb-32">
                    <FadeIn>
                        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4 flex items-center gap-4">
                            <span className="w-8 h-px bg-green-500/50"></span>
                            Who We Are
                        </h2>
                        <div className="max-w-5xl">
                            <p className="text-3xl md:text-5xl font-medium leading-tight text-white tracking-tight">
                                We are ARORA, an elite architecture laboratory specializing in the design of <span className="text-green-400">distributed intelligence systems</span>. We partner with high-growth enterprises to transform raw data into autonomous nervous systems.
                            </p>
                        </div>
                    </FadeIn>
                </section>

                {/* Visual Anchor */}
                <FadeIn className="mb-32 relative w-full h-[50vh] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
                    <Image
                        src="/images/team-lab.png"
                        alt="ARORA Labs"
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-white font-mono text-xs uppercase tracking-widest">System_Active // Node_SF</span>
                    </div>
                </FadeIn>

                {/* Section 2 & 3: Mission & Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 mb-40">
                    <FadeIn>
                        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 flex items-center gap-4">
                            <span className="w-8 h-px bg-green-500/50"></span>
                            Our Mission
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-100 leading-relaxed font-normal">
                            We exist to bridge the gap between experimental AI research and <span className="text-white font-semibold">production-grade software</span>.
                            The problem most enterprises face isn't a lack of tools, but a lack of reliability;
                            we solve this by building robust, deterministic AI infrastructures.
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 flex items-center gap-4">
                            <span className="w-8 h-px bg-green-500/50"></span>
                            Our Story
                        </h2>
                        <div className="space-y-8 text-lg md:text-xl text-zinc-300 leading-relaxed">
                            <p>
                                ARORA began as a research collective in 2020, born out of frustration with the industry’s obsession with "magic" over mechanics.
                                Our founders realized that the most powerful AI is the kind that works so consistently it becomes <span className="text-green-400">invisible</span>.
                            </p>
                            <p>
                                We set out to build a firm where rigor is the default. Today, we operate at the intersection of deep learning and distributed systems, helping global leaders automate intelligence at scale.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Section 4: What Makes Us Different (USP) */}
                <section className="mb-40">
                    <FadeIn className="mb-16">
                        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 flex items-center gap-4">
                            <span className="w-8 h-px bg-green-500/50"></span>
                            What Makes Us Different
                        </h2>
                    </FadeIn>
                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {usps.map((usp, i) => (
                            <FadeIn key={i} className="bg-zinc-900/40 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-green-500/50 transition-all duration-500 group shadow-2xl hover:shadow-green-500/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="text-8xl font-bold text-white italic">0{i + 1}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-green-400 transition-colors flex items-center gap-3">
                                    {usp.title}
                                </h3>
                                <p className="text-zinc-200 text-lg leading-relaxed">{usp.desc}</p>
                            </FadeIn>
                        ))}
                    </FadeInStagger>
                </section>

                {/* Section 5: Our Values */}
                <section className="mb-32">
                    <FadeIn className="mb-16">
                        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4 flex items-center gap-4">
                            <span className="w-8 h-px bg-green-500/50"></span>
                            Our Core Values
                        </h2>
                    </FadeIn>
                    <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {values.map((v, i) => (
                            <FadeIn key={i} className="flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-green-500 font-mono text-sm px-3 py-1 border border-green-500/20 bg-green-500/5 rounded-full">0{i + 1}</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">{v.title}</h3>
                                </div>
                                <p className="text-zinc-300 text-base md:text-lg leading-relaxed pl-2 border-l-2 border-green-500/10">
                                    {v.desc}
                                </p>
                            </FadeIn>
                        ))}
                    </FadeInStagger>
                </section>

            </div>
            <CTA />
        </div>
    );
}
