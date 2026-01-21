"use client";

import dynamic from 'next/dynamic';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { SlideIn } from '@/components/SlideIn';
import Image from 'next/image';
import { CircularProcess } from '@/components/CircularProcess';

const CTA = dynamic(() => import('@/components/CTA'), {
    ssr: false
});

export default function Services() {
    const services = [
        {
            title: "Custom AI Model Development",
            description: "We train and fine-tune models specifically for your domain, ensuring high accuracy and data privacy.",
            features: ["Fine-Tuning LLaMA/Mistral", "RLHF Pipelines", "Domain Adaptation", "Model Distillation"],
            icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        },
        {
            title: "SaaS Architecture & Integration",
            description: "Seamlessly integrate AI capabilities into existing SaaS platforms without disrupting core workflows.",
            features: ["Microservices", "Event-Driven Arch", "API Gateway", "Latency Optimization"],
            icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        },
        {
            title: "Data Engineering & Pipelines",
            description: "Robust data infrastructure to support high-throughput training and inference workloads.",
            features: ["Vector Databases", "ETL/ELT", "Data Lakes", "Real-time Streaming"],
            icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01"
        },
        {
            title: "Automated Decision Systems",
            description: "Algorithmic systems that automate complex decision-making processes with transparency and control.",
            features: ["Explainable AI (XAI)", "Rule Engines", "Decision Trees", "Audit Logs"],
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
    ];

    const processSteps = [
        {
            title: "Introductory Call",
            desc: "We start with a conversation to understand your goals, challenges, and vision for growth. Based on your specific needs, we outline how our team can help drive the business growth you're looking for.",
            duration: "Diagnostic Phase",
        },
        {
            title: "Onboarding",
            desc: "Formal kick-off and technical alignment. We integrate our communication channels and set up the secure environment for development.",
            duration: "1-2 Weeks",
        },
        {
            title: "Project Sessions",
            desc: "The core engineering phase. Rapid prototyping and production development with weekly sprints and transparent progress tracking.",
            duration: "8-12 Weeks",
        },
        {
            title: "Ongoing Support",
            desc: "Deployment and proactive monitoring. We ensure the system remains stable and performant under production loads.",
            duration: "Continuous",
        },
        {
            title: "CE Iteration",
            desc: "Data-driven improvements. We analyze real-world performance to fine-tune algorithms and scale infrastructure efficiently.",
            duration: "Ongoing",
        }
    ];

    return (
        <div className="flex flex-col">
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-zinc-950">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/40 to-zinc-950" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
                    <SlideIn direction="up">
                        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] font-mono tracking-[0.3em] text-green-500 uppercase">Capabilities & Systems</span>
                        </div>
                        <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12 text-white">
                            Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-emerald-600">Services.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-400 leading-relaxed font-light max-w-3xl border-l border-green-500/30 pl-8">
                            We don't just "add AI". We re-architect business logic around probabilistic compute.
                            From silicon to surface, we control the entire stack.
                        </p>
                    </SlideIn>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-20">


                {/* Dense Service Grid */}
                <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                    {services.map((service, index) => (
                        <FadeIn key={index} className="bg-zinc-950/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl hover:bg-zinc-900/60 hover:border-green-500/50 transition-all duration-300 group shadow-2xl hover:shadow-green-500/10">
                            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed mb-8 min-h-[5rem]">{service.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {service.features.map((feature, i) => (
                                    <span key={i} className="text-xs font-mono text-zinc-500 bg-zinc-950 border border-white/5 px-3 py-1.5 rounded-md">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </FadeIn>
                    ))}
                </FadeInStagger>

                {/* Process Section (Circular) */}
                <div className="mt-20 relative">
                    <FadeIn>
                        <div className="flex flex-col items-center justify-center text-center mb-8 relative z-10">
                            <span className="text-green-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Our Methodology</span>
                            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">The Process</h2>
                            <p className="text-zinc-400 text-lg max-w-2xl">
                                Our methodology is rigorous, transparent, and iterative. We move from chaos to order through five distinct phases.
                            </p>
                        </div>
                    </FadeIn>

                    <CircularProcess steps={processSteps} />
                </div>
            </div>
            <CTA />
        </div>
    );
}
