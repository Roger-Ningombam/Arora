import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | ARORA Systems",
    description: "Ready to transform your business? Schedule a discovery call with our engineering team or visit our SF research lab.",
    openGraph: {
        title: "Contact Us | ARORA Systems",
        description: "Ready to transform your business? Schedule a discovery call with our engineering team.",
        url: "https://arora.agency/contact",
        images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
