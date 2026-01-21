import { Metadata } from 'next';
import Image from 'next/image';
import { LeadMagnetForm } from '@/components/LeadMagnetForm';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
    title: 'The Enterprise AI Implementation Guide 2026 | ARORA',
    description: 'Download the definitive guide to implementing LLMs in regulated industries. A 50-page handbook for CTOs.',
};

export default function BuyerGuide() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <FadeIn>
                        <div className="inline-flex items-center gap-2 mb-8 bg-white/5 rounded-full px-4 py-1.5 border border-white/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-mono tracking-widest text-green-300 uppercase">New Research</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-500">
                            The Enterprise AI Architect's Handbook.
                        </h1>

                        <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-xl">
                            Stop guessing. Get the proven blueprint for deploying LLMs in regulated environments.
                            Covering compliance, RAG architecture, and cost modeling.
                        </p>

                        <div className="mb-12">
                            <ul className="space-y-4">
                                {[
                                    'Proprietary "RAG vs Fine-tuning" decision matrix',
                                    'SOC2 compliant infrastructure templates',
                                    'Cost calculators for 1M+ token workloads',
                                    'Vendor evaluation scorecards'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <LeadMagnetForm />
                    </FadeIn>

                    <FadeIn className="relative lg:h-[800px] flex items-center justify-center">
                        {/* Book Mockup / Visual */}
                        <div className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-lg border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700">
                            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20 mix-blend-overlay"></div>
                            <div className="absolute inset-8 border border-white/20 p-8 flex flex-col justify-between">
                                <div>
                                    <div className="text-green-500 font-mono text-sm tracking-widest mb-4">CONFIDENTIAL</div>
                                    <h3 className="text-4xl font-bold text-white leading-none">
                                        ENTERPRISE<br />INTELLIGENCE<br />SYSTEMS
                                    </h3>
                                </div>
                                <div className="flex justify-between items-end border-t border-white/20 pt-8">
                                    <div className="font-mono text-xs text-zinc-500">VOL. 01</div>
                                    <div className="font-mono text-xs text-zinc-500">ARORA RESEARCH</div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                    </FadeIn>

                </div>
            </div>
        </div>
    );
}
