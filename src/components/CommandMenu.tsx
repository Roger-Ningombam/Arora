"use client";

import * as React from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    // Toggle with Cmd+K
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, []);

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="w-full max-w-2xl relative z-10"
                    >
                        <Command className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black font-mono">
                            <div className="flex items-center border-b border-white/10 px-4">
                                <svg className="w-4 h-4 text-zinc-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <Command.Input
                                    placeholder="Search for pages..."
                                    className="w-full h-14 bg-transparent text-white placeholder:text-zinc-600 focus:outline-none text-sm"
                                />
                                <div className="text-[10px] text-zinc-600 border border-zinc-800 rounded px-1.5 py-0.5">ESC</div>
                            </div>

                            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                                <Command.Empty className="py-6 text-center text-sm text-zinc-500">No results found.</Command.Empty>

                                <Command.Group heading="Navigation" className="text-xs text-zinc-500 font-bold uppercase tracking-widest px-2 py-2 mb-1">
                                    <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                                        <span>Home</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push("/work"))}>
                                        <span>Work / Case Studies</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push("/services"))}>
                                        <span>Services</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
                                        <span>About</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
                                        <span>Contact</span>
                                    </CommandItem>
                                </Command.Group>

                                <Command.Group heading="Resources" className="text-xs text-zinc-500 font-bold uppercase tracking-widest px-2 py-2 mb-1 mt-2">
                                    <CommandItem onSelect={() => runCommand(() => router.push("/resources/ai-buyers-guide"))}>
                                        <span className="text-green-400">AI Buyer's Guide</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push("/security"))}>
                                        <span>Security & Compliance</span>
                                    </CommandItem>
                                </Command.Group>

                                <Command.Group heading="Socials" className="text-xs text-zinc-500 font-bold uppercase tracking-widest px-2 py-2 mb-1 mt-2">
                                    <CommandItem onSelect={() => runCommand(() => window.open('https://twitter.com', '_blank'))}>
                                        <span>Twitter</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => window.open('https://linkedin.com', '_blank'))}>
                                        <span>LinkedIn</span>
                                    </CommandItem>
                                </Command.Group>
                            </Command.List>
                        </Command>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function CommandItem({ children, onSelect }: { children: React.ReactNode, onSelect: () => void }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-4 py-3 rounded-lg text-sm text-zinc-400 hover:bg-white/5 hover:text-white cursor-pointer aria-selected:bg-white/10 aria-selected:text-white transition-colors"
        >
            {children}
        </Command.Item>
    );
}
