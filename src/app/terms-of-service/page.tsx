import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | ARORA Systems',
    description: 'Terms of Service for ARORA Systems. Please read these terms carefully before using our website.',
};

export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="prose prose-invert prose-lg max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Terms of Service</h1>
                <p className="text-zinc-500 mb-12">Last Updated: January 20, 2026</p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                    <p className="text-zinc-400">
                        By accessing or using the website at arora.agency, you are agreeing to be bound by these terms of service, all applicable laws and regulations,
                        and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms,
                        you are prohibited from using or accessing this site.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                    <p className="text-zinc-400 mb-4">
                        Permission is granted to temporarily download one copy of the materials (information or software) on ARORA Systems' website for personal,
                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                        <li>Modify or copy the materials;</li>
                        <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>Attempt to decompile or reverse engineer any software contained on ARORA Systems' website;</li>
                        <li>Remove any copyright or other proprietary notations from the materials; or</li>
                        <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                    <p className="text-zinc-400">
                        The materials on ARORA Systems' website are provided on an 'as is' basis. ARORA Systems makes no warranties, expressed or implied,
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">4. Governing Law</h2>
                    <p className="text-zinc-400">
                        These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the
                        exclusive jurisdiction of the courts in that State or location.
                    </p>
                </section>
            </div>
        </div>
    );
}
