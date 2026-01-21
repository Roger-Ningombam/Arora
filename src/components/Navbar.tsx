"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SlideIn } from "@/components/SlideIn";
import { sendEvent, Events } from '@/lib/analytics';

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar border/background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/work" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ease-in-out pt-6`}>
                <nav
                    className={`w-full flex items-center justify-between px-6 rounded-full transition-all duration-500 ${scrolled
                        ? "max-w-5xl h-14 bg-zinc-950/80 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/50"
                        : "max-w-7xl h-16 bg-zinc-950/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/5 md:border-transparent "
                        }`}
                >
                    {/* Logo */}
                    <div className="flex-1 flex justify-start">
                        <SlideIn direction="down" delay={0.1}>
                            <Link href="/" className="text-xl font-bold tracking-tight text-white relative z-50">
                                ARORA
                            </Link>
                        </SlideIn>
                    </div>

                    {/* Desktop Links - Hidden on Mobile */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <SlideIn direction="down" delay={0.2} className="flex items-center space-x-8">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 relative group ${isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.span
                                                layoutId="activeNavIndicator"
                                                className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </SlideIn>
                    </div>

                    {/* Mobile Menu & Persistent CTA */}
                    <div className="flex-1 flex justify-end items-center gap-4">
                        <Link
                            href="/contact"
                            onClick={() => sendEvent({ action: Events.DEMO_CLICK, category: 'Navigation', label: 'Navbar CTA' })}
                            className="whitespace-nowrap px-4 py-2 md:px-5 md:py-2 rounded-full bg-white text-black text-[10px] md:text-xs font-bold tracking-widest hover:bg-zinc-200 transition-colors relative z-50"
                        >
                            GET DEMO
                        </Link>

                        <SlideIn direction="down" delay={0.3}>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end group"
                            >
                                <span
                                    className={`h-0.5 bg-white transition-all duration-300 ease-in-out mb-1.5 ${isMobileMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
                                        }`}
                                />
                                <span
                                    className={`h-0.5 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "w-6 rotate-45" : "w-4 group-hover:w-6"
                                        }`}
                                />
                            </button>
                        </SlideIn>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-zinc-950 flex flex-col justify-center items-center px-6"
                    >
                        <div className="flex flex-col space-y-8 text-center">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-4xl font-light tracking-tight transition-colors ${pathname === link.href ? "text-white" : "text-zinc-500"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-12 text-zinc-600 text-xs tracking-widest uppercase"
                        >
                            Intelligence, Architected.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
