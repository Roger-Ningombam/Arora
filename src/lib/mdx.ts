import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface CaseStudyMetadata {
    title: string;
    client: string;
    description: string;
    category: string;
    year: string;
    image: string;
    stats: { label: string; value: string }[];
    tags: string[];
    featured?: boolean;
}

export const getCaseStudies = () => {
    const caseStudiesDir = path.join(contentDirectory, 'case-studies');

    // Create dir if it doesn't exist (prevent build error if empty)
    if (!fs.existsSync(caseStudiesDir)) {
        return [];
    }

    const fileNames = fs.readdirSync(caseStudiesDir);

    const allCaseStudies = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(caseStudiesDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            ...(data as CaseStudyMetadata),
        };
    });

    return allCaseStudies.sort((a, b) => (a.year > b.year ? -1 : 1));
};

export const getCaseStudyBySlug = (slug: string) => {
    const fullPath = path.join(contentDirectory, 'case-studies', `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        meta: data as CaseStudyMetadata,
        content,
    };
};
