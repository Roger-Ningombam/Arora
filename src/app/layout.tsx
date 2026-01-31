import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CommandMenu } from "@/components/CommandMenu";
import { InteractiveGridPattern } from "@/components/InteractiveGridPattern";
import SmoothScroll from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LoadingProvider } from "@/context/LoadingContext";
import { LayoutWrapper } from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
});



export const metadata: Metadata = {
  title: {
    default: "ARORA | AI Systems & Development",
    template: "%s | ARORA"
  },
  description: "Premium agency specializing in AI systems, LLM architecture, and predictive analytics for enterprise. We build the nervous systems of tomorrow's SaaS.",
  keywords: ["AI Systems", "Enterprise AI", "LLM Development", "SaaS Architecture", "Machine Learning Agency", "Predictive Analytics"],
  authors: [{ name: "ARORA Systems" }],
  creator: "ARORA Systems",
  publisher: "ARORA Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arora.agency'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ARORA | AI Systems & Development',
    description: 'We build production-grade AI infrastructure for SaaS companies that refuse to compromise on reliability.',
    url: 'https://arora.agency',
    siteName: 'ARORA',
    images: [
      {
        url: '/images/og-default.png', // We need to create this later
        width: 1200,
        height: 630,
        alt: 'ARORA Systems Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARORA | AI Systems & Development',
    description: 'We build production-grade AI infrastructure for SaaS companies that refuse to compromise on reliability.',
    creator: '@arorasystems', // Placeholder
    images: ['/images/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ARORA',
  url: 'https://arora.agency',
  logo: 'https://arora.agency/images/logo.png',
  sameAs: [
    'https://linkedin.com/company/arora',
    'https://twitter.com/arora',
    'https://github.com/arora'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-0123',
    contactType: 'sales',
    areaServed: 'US',
    availableLanguage: 'en'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${cormorant.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-noise"></div>

        <LoadingProvider>
          <LayoutWrapper>
            <CustomCursor />
            <ScrollProgress />
            <SmoothScroll>
              <InteractiveGridPattern className="fixed z-0 opacity-80" />
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <GoogleAnalytics gaId="G-XXXXXXXXXX" />
              <CookieConsent />
              <CommandMenu />
            </SmoothScroll>
          </LayoutWrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
