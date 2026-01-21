import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { getCaseStudies } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';

export default function Work() {
    const projects = getCaseStudies();

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
            <FadeIn>
                <div className="inline-flex items-center gap-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-mono tracking-widest text-green-500 uppercase">Case Logs</span>
                </div>
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-20 text-white">Selected Work.</h1>
                <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-24 leading-relaxed">
                    We don't build demos. We build mission-critical nervous systems for high-growth enterprises.
                    Here is a selection of deployed architectures.
                </p>
            </FadeIn>

            <FadeInStagger className="space-y-32">
                {projects.map((project) => (
                    <FadeIn key={project.slug} className="group cursor-pointer">
                        <Link href={`/case-studies/${project.slug}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Image Half */}
                                <div className="relative aspect-[4/3] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 group-hover:border-green-500/50 transition-all duration-500 shadow-lg hover:shadow-green-500/10">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Text Half */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest">
                                        <span className="text-green-500">{project.client}</span>
                                        <span className="text-zinc-600">/</span>
                                        <span className="text-zinc-400">{project.category}</span>
                                        <span className="text-zinc-600">/</span>
                                        <span className="text-zinc-600">{project.year}</span>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-lg text-zinc-400 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                                        {project.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                <div className="text-[10px] uppercase tracking-widest text-zinc-600">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tags.map((tag, i) => (
                                            <FadeIn key={i} className="px-3 py-1 rounded-full border border-white/10 text-xs text-zinc-500 hover:border-green-500/50 transition-colors duration-300">
                                                {tag}
                                            </FadeIn>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-sm font-medium text-white group-hover:translate-x-2 transition-transform duration-300">
                                        <span className="border-b border-white/30 pb-0.5 group-hover:border-white">View Full Case Study</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </FadeInStagger>
        </div>
    );
}
