import { CaseStudyMetadata } from './mdx';

export function generateArticleSchema(customMeta: CaseStudyMetadata, slug: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: customMeta.title,
        image: [
            `https://arora.agency${customMeta.image}`,
        ],
        datePublished: `${customMeta.year}-01-01T08:00:00+08:00`, // Approximation since we only have year
        dateModified: new Date().toISOString(),
        author: [{
            '@type': 'Organization',
            name: 'ARORA Systems',
            url: 'https://arora.agency',
        }],
        publisher: {
            '@type': 'Organization',
            name: 'ARORA',
            logo: {
                '@type': 'ImageObject',
                url: 'https://arora.agency/logo.png'
            }
        },
        description: customMeta.description,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://arora.agency/case-studies/${slug}`
        }
    };
}
