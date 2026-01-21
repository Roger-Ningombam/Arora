import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - System Malfunction | ARORA',
    description: 'Page not found.',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>

            <div className="relative z-10 text-center px-6">
                <h1 className="text-[12rem] font-bold text-zinc-900 leading-none select-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                    404
                </h1>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Signal Lost</h2>
                    <p className="text-zinc-500 mb-8 max-w-md mx-auto">
                        The requested node could not be located within the network.
                        It may have been purged or re-architected.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Re-initialize Sequence
                    </Link>
                </div>
            </div>
        </div>
    );
}
