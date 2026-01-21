import React from 'react';
import { FadeIn } from './FadeIn';

const TESTIMONIALS = [
    {
        quote: "The autonomous agents developed by VORTEX have fundamentally rewired our operational architecture. We've seen a 400% increase in data processing throughput within weeks.",
        author: "Dr. Elena K.",
        role: "CTO, FinScale Global",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "Impossible to distinguish from human-level reasoning. The latency is negligible, and the decision-making accuracy is terrifyingly good. It's the future, deployed today.",
        author: "Marcus Chen",
        role: "VP of Engineering, Helix Systems",
        image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "Integration was seamless. The neural core adapted to our legacy stack without friction. We are now running fully autonomous simulations for our supply chain logistics.",
        author: "Sarah Vance",
        role: "Director of Ops, Orbital Dynamics",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "VORTEX's predictive modeling saved us millions in potential downtime. The anomaly detection is faster than anything we've tested on the market.",
        author: "James T.",
        role: "Lead Architect, Nexus Grid",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
        quote: "We replaced our entire tier-1 support with VORTEX agents. Customer satisfaction scores went up by 15% while response times dropped to near zero.",
        author: "Emily R.",
        role: "VP of CX, Solaris Bank",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-32 relative z-10 border-t border-white/5 bg-zinc-950/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <FadeIn>
                    <div className="flex flex-col items-center text-center mb-16">
                        <span className="text-green-400 font-mono text-xs tracking-wider uppercase mb-2 block">Protocol Validations</span>
                        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Hear From our Clients</h2>
                    </div>
                </FadeIn>
            </div>

            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

                <div className="flex w-fit animate-marquee hover:pause gap-6 px-4">
                    {/* First set */}
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={`t1-${index}`} className="w-[400px] shrink-0 h-full p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 transition-colors duration-500 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                <div className="space-y-4">
                                    <svg className="w-8 h-8 text-green-500/50" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                    </svg>
                                    <p className="text-zinc-300 leading-relaxed text-sm">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <img src={testimonial.image} alt={testimonial.author} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium">{testimonial.author}</h4>
                                        <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for infinite scroll */}
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={`t2-${index}`} className="w-[400px] shrink-0 h-full p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 transition-colors duration-500 relative group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                                <div className="space-y-4">
                                    <svg className="w-8 h-8 text-green-500/50" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                    </svg>
                                    <p className="text-zinc-300 leading-relaxed text-sm">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <img src={testimonial.image} alt={testimonial.author} className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium">{testimonial.author}</h4>
                                        <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
