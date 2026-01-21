import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { SlideIn } from '@/components/SlideIn';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20 min-h-[70vh] flex flex-col justify-center">
            <SlideIn direction="up">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-20 text-white">Let's Talk.</h1>
            </SlideIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 border-t border-white/10 pt-20">
                {/* Left Column: Form */}
                <FadeIn>
                    <div className="mb-12">
                        <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
                            Ready to transform your business with intelligent systems?
                            Tell us about your project infrastructure.
                        </p>
                    </div>
                    <ContactForm />
                </FadeIn>

                {/* Right Column: Contact Info & Calendar */}
                <FadeInStagger className="flex flex-col space-y-16 lg:pl-20">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Direct Line</h4>
                        <a href="mailto:hello@arora.agency" className="text-3xl font-bold hover:text-green-400 text-white transition-colors">
                            hello@arora.agency
                        </a>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Discovery Call</h4>
                        <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition-colors cursor-pointer group">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white font-medium group-hover:text-green-400 transition-colors">Book a 30-min Calibration</span>
                                <svg className="w-5 h-5 text-zinc-500 group-hover:text-green-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <p className="text-xs text-zinc-500">Available: Mon-Fri, 9am - 5pm PST</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Office</h4>
                            <p className="text-lg text-white font-light leading-relaxed">
                                123 Innovation Dr.<br />
                                San Francisco, CA 94103
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">Socials</h4>
                            <div className="flex flex-col space-y-4 text-lg text-white font-light">
                                <a href="#" className="hover:text-green-400 transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-green-400 transition-colors">Twitter / X</a>
                            </div>
                        </div>
                    </div>
                </FadeInStagger>
            </div>
        </div>
    );
}
