import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://arora.agency'; // NOTE: Ideally this comes from process.env.NEXT_PUBLIC_BASE_URL

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        // Placeholder for future dynamic pages (e.g., case studies)
        // {
        //     url: `${baseUrl}/case-studies/nebula-saas`,
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.7,
        // },
    ];
}
