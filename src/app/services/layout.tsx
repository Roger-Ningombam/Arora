import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Services & Solutions | ARORA",
    description: "Explore our full-stack intelligence services: Custom LLM Development, SaaS Architecture, Data Pipelines, and Automated Decision Systems.",
    openGraph: {
        title: "AI Services & Solutions | ARORA",
        description: "Explore our full-stack intelligence services: Custom LLM Development, SaaS Architecture, Data Pipelines, and Automated Decision Systems.",
        url: "https://arora.agency/services",
        images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
