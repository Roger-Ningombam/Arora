import { FadeIn } from '@/components/FadeIn';
import { getCaseStudies } from '@/lib/mdx';
import { WorkList } from '@/components/WorkList';

export default function Work() {
    const projects = getCaseStudies();

    return (
        <div className="bg-zinc-950 min-h-screen">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-12">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-xs font-mono tracking-widest text-green-500 uppercase">Case Logs</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white">Selected Work.</h1>
                </FadeIn>
            </div>

            {/* Sticky List Container */}
            <WorkList projects={projects} />
        </div>
    );
}
