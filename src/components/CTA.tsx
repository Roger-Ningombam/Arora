import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';

export default function CTA() {
    return (
        <section className="py-32 md:py-48 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="max-w-3xl">
                    <FadeIn>
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8">
                            Constructing the future?
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-xl">
                            Partner with ARORA to build the systems that will define your next chapter.
                        </p>
                    </FadeIn>
                </div>
                <FadeIn>
                    <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center w-full md:w-auto bg-white text-black text-lg font-medium px-10 py-5 rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105"
                    >
                        Start the Project
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
