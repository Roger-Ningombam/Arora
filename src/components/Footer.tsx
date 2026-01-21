export default function Footer() {
    return (
        <footer className="bg-zinc-950/80 backdrop-blur-md border-t border-white/10 py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-bold text-white mb-4">ARORA</h3>
                    <p className="text-zinc-500 text-sm max-w-xs">
                        Designing intelligent systems for the next generation of SaaS and enterprise.
                    </p>
                </div>
                <div className="flex flex-col md:items-end justify-between">
                    <div className="flex space-x-6 text-sm text-zinc-400">
                        <a href="/security" className="hover:text-white transition-colors">Security</a>
                        <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="/terms-of-service" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-8 md:mt-0">
                        <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-zinc-900/50">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                SOC2 Type II
                            </div>
                            <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded bg-zinc-900/50">
                                <svg className="w-3 h-3 text-zinc-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z" /></svg>
                                ISO 27001
                            </div>
                        </div>
                        <p className="text-zinc-600 text-xs">
                            © {new Date().getFullYear()} ARORA Agency. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
