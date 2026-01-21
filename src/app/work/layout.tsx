import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies & Selected Work | ARORA",
    description: "See how ARORA delivers real business value through AI. Featured projects in Fintech, Healthcare, and Supply Chain logistics.",
    openGraph: {
        title: "Case Studies & Selected Work | ARORA",
        description: "See how ARORA delivers real business value through AI. Featured projects in Fintech, Healthcare, and Supply Chain logistics.",
        url: "https://arora.agency/work",
        images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
    },
};

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
