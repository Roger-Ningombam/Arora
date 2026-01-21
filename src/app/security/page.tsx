import { Metadata } from 'next';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';

export const metadata: Metadata = {
    title: 'Security & Compliance | ARORA Systems',
    description: 'Enterprise-grade security is built into our nervous system. SOC2, GDPR, and HIPAA compliance standards for AI infrastructure.',
};

export default function Security() {
    const measures = [
        {
            title: "Data Encryption",
            desc: "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We utilize industry-standard key management systems to ensure your intellectual property remains yours.",
            icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        },
        {
            title: "SOC 2 Type II",
            desc: "Our systems adhere to SOC 2 Type II controls for security, availability, and confidentiality. Regular third-party audits ensure our infrastructure meets the most rigorous enterprise standards.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        },
        {
            title: "Access Control",
            desc: "Zero-trust architecture implements strict role-based access control (RBAC). Multi-factor authentication (MFA) is enforced across all internal and client-facing endpoints.",
            icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.536 19.464a3 3 0 01-.899.899l-2.121 2.121a3 3 0 01-4.242 0l-1.414-1.414a3 3 0 010-4.242l2.121-2.121a3 3 0 01.899-.899l4.722-4.723A6 6 0 0120 11z"
        },
        {
            title: "Infrastructure Isolation",
            desc: "For enterprise clients, we deploy single-tenant environments. Your model weights, embeddings, and inference logs are logically and physically isolated from other tenants.",
            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
            <FadeIn>
                <div className="inline-flex items-center gap-2 mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-mono tracking-widest text-green-500 uppercase">Trust & Compliance</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Security First. Always.</h1>
                <p className="text-xl text-zinc-400 max-w-2xl mb-24">
                    We understand that in the age of AI, data is your most valuable asset.
                    Our architecture is built to protect it with military-grade precision.
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
                <FadeInStagger>
                    {measures.map((item, i) => (
                        <FadeIn key={i} className="bg-zinc-900/30 border border-white/5 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-white">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </div>

            <div className="border-t border-white/10 pt-20">
                <FadeIn className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-6">Compliance Hotline</h2>
                        <p className="text-zinc-400 max-w-lg mx-auto mb-8">
                            Have specific security questionnaires or Vanta reports you need filled out?
                            Our security team is on standby for enterprise procurement.
                        </p>
                        <a href="mailto:security@arora.agency" className="inline-flex px-8 py-3 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-zinc-200 transition-colors">
                            Contact Security Team
                        </a>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-10"></div>
                </FadeIn>
            </div>
        </div>
    );
}
