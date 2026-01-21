import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | ARORA Systems',
    description: 'Privacy Policy for ARORA Systems. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
            <div className="prose prose-invert prose-lg max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
                <p className="text-zinc-500 mb-12">Last Updated: January 20, 2026</p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                    <p className="text-zinc-400">
                        ARORA Systems ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
                        This policy describes the types of information we may collect from you or that you may provide when you visit the website arora.agency (our "Website")
                        and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                    <p className="text-zinc-400 mb-4">We collect several types of information from and about users of our Website, including information:</p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                        <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or company name ("personal information");</li>
                        <li>That is about you but individually does not identify you, such as industry or project budget range; and/or</li>
                        <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                    <p className="text-zinc-400 mb-4">We use information that we collect about you or that you provide to us, including any personal information:</p>
                    <ul className="list-disc pl-6 text-zinc-400 space-y-2">
                        <li>To present our Website and its contents to you.</li>
                        <li>To provide you with information, products, or services that you request from us.</li>
                        <li>To fulfill any other purpose for which you provide it (e.g., project discovery calls).</li>
                        <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
                        <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                    <p className="text-zinc-400">
                        We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                        Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information,
                        we cannot guarantee the security of your personal information transmitted to our Website.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
                    <p className="text-zinc-400">
                        To ask questions or comment about this privacy policy and our privacy practices, contact us at:<br />
                        <strong className="text-white block mt-2">hello@arora.agency</strong>
                    </p>
                </section>
            </div>
        </div>
    );
}
