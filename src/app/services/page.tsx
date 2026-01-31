"use client";

import dynamic from 'next/dynamic';
import { FadeIn } from '@/components/FadeIn';
import { SlideIn } from '@/components/SlideIn';
import { ImmersiveServiceSection } from '@/components/ImmersiveServiceSection';
import { ProcessJourney } from '@/components/ProcessJourney';
import { HeroAnimation } from '@/components/HeroAnimation';

const CTA = dynamic(() => import('@/components/CTA'), {
    ssr: false
});

export default function Services() {
    const services = [
        {
            title: "Custom Intelligence Engines",
            tagline: "Own your edge.",
            description: "We build bespoke AI models trained exclusively on your proprietary data. This isn't off-the-shelf software—it's a competitive moat that competitors can't replicate. Your data. Your model. Your advantage.",
            features: ["Proprietary Training", "Data Privacy", "Domain Expertise", "Full IP Ownership"],
            icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
            illustration: "/images/services/neural-network.png"
        },
        {
            title: "Enterprise Integration",
            tagline: "Zero disruption. Total transformation.",
            description: "Seamlessly inject AI capabilities into your existing tech stack without ripping and replacing. We architect integrations that respect your legacy systems while unlocking exponential new capabilities.",
            features: ["Legacy Compatible", "Event-Driven", "Secure APIs", "Zero Downtime"],
            icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
            illustration: "/images/services/architecture.png"
        },
        {
            title: "Data Foundations",
            tagline: "From chaos to clarity.",
            description: "Your data is trapped in silos, formats, and legacy databases. We build the modern infrastructure that transforms messy reality into clean, fast, queryable intelligence—the foundation for everything AI.",
            features: ["Vector Pipelines", "Real-Time Streams", "Automated ETL", "Scalable Lakes"],
            icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01",
            illustration: "/images/services/data-pipeline.png"
        },
        {
            title: "Decision Automation",
            tagline: "Algorithms that never blink.",
            description: "Stop burning human hours on repetitive operational decisions. We build transparent, auditable systems that make thousands of perfect decisions per hour—freeing your team for strategic work that actually moves the needle.",
            features: ["Explainable Logic", "Audit Trails", "Business Rules", "Human Override"],
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            illustration: "/images/services/decision-tree.png"
        },
    ];

    const processSteps = [
        {
            title: "Discovery",
            desc: "We dive deep into your business to uncover hidden bottlenecks and ambitious goals. No assumptions, just clarity.",
            duration: "We listen first",
            illustration: "/images/process/discovery.png"
        },
        {
            title: "Blueprint",
            desc: "We architect the exact technical solution needed. You get a clear roadmap, technical specs, and a fixed timeline.",
            duration: "Mapping the path",
            illustration: "/images/process/blueprint.png"
        },
        {
            title: "Build",
            desc: "Our engineers get to work. We build rapidly in sprints, giving you visible progress and working software every week.",
            duration: "Bringing it to life",
            illustration: "/images/process/build.png"
        },
        {
            title: "Launch",
            desc: "We deploy your new intelligence system with precision. Component testing and user validation ensure a flawless day one.",
            duration: "Systems go",
            illustration: "/images/process/launch.png"
        },
        {
            title: "Evolve",
            desc: "We don't walk away. We monitor performance and continuously optimize your system as your business grows.",
            duration: "Always improving",
            illustration: "/images/process/evolve.png"
        }
    ];

    return (
        <div className="flex flex-col snap-y snap-mandatory">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden snap-start">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <HeroAnimation />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/60 to-zinc-950" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <SlideIn direction="up">
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] font-mono tracking-[0.3em] text-green-500 uppercase">Intelligence, Applied.</span>
                        </div>
                        <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12 text-white">
                            Systems <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-emerald-600">That Scale.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-400 leading-relaxed font-light max-w-3xl border-l-4 border-green-500/50 pl-8">
                            We don't just write code. We re-architect your business logic around probabilistic compute, building engines that grow smarter with every interaction.
                        </p>
                    </SlideIn>
                </div>

                {/* Scroll Hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Explore Services</span>
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* IMMERSIVE SERVICE SECTIONS */}
            {services.map((service, index) => (
                <ImmersiveServiceSection
                    key={index}
                    service={service}
                    index={index}
                />
            ))}

            {/* PROCESS SECTION */}
            <section className="relative bg-zinc-950 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn>
                        <div className="flex flex-col items-center justify-center text-center mb-20 relative z-10">
                            <span className="text-green-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Methodology</span>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">How We Build</h2>
                            <p className="text-zinc-400 text-lg max-w-2xl">
                                No black boxes. No jargon. Just a clear, rigorous path from your first idea to a world-class system in production.
                            </p>
                        </div>
                    </FadeIn>

                    <ProcessJourney steps={processSteps} />
                </div>
            </section>

            <CTA />
        </div>
    );
}
