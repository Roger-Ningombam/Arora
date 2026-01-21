import { getCaseStudies, getCaseStudyBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { generateArticleSchema } from '@/lib/schema';

type Props = {
    params: {
        slug: string;
    };
};

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const caseStudy = getCaseStudyBySlug((await params).slug);

    if (!caseStudy) {
        return { title: 'Case Study Not Found' };
    }

    return {
        title: `${caseStudy.meta.title} | ARORA Case Study`,
        description: caseStudy.meta.description,
        openGraph: {
            title: `${caseStudy.meta.title} | ARORA`,
            description: caseStudy.meta.description,
            images: [caseStudy.meta.image],
        },
    };
}

// Generate static params for SSG
export async function generateStaticParams() {
    const caseStudies = getCaseStudies();
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        notFound();
    }

    const { meta, content } = caseStudy;

    return (
        <article className="min-h-screen bg-black text-white selection:bg-green-500/30">

            {/* Hero Header */}
            <section className="relative py-32 md:py-48 px-6 border-b border-white/10 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <FadeIn>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-zinc-500 text-sm font-mono uppercase tracking-widest">{meta.client}</span>
                            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                            <span className="text-green-500 text-sm font-mono uppercase tracking-widest">{meta.category}</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12 max-w-5xl leading-[1.1]">
                            {meta.title}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                            {meta.stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
                <FadeIn>
                    <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-green-400 prose-img:rounded-3xl prose-img:border prose-img:border-white/10">
                        <MDXRemote source={content} />
                    </div>
                </FadeIn>
            </section>

            {/* Footer Navigation or Related */}
            <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32 text-center">
                <div className="inline-block">
                    <a href="/work" className="text-zinc-500 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest">
                        ← Back to Work
                    </a>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateArticleSchema(meta, slug)) }}
            />

        </article>
    );
}
