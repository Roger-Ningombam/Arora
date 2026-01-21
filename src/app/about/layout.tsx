import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | ARORA Systems",
    description: "Learn about ARORA's mission to architect the nervous systems of tomorrow's enterprises. We are a collective of engineers and researchers dedicated to robust AI.",
    openGraph: {
        title: "About Us | ARORA Systems",
        description: "Learn about ARORA's mission to architect the nervous systems of tomorrow's enterprises.",
        url: "https://arora.agency/about",
        images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
