"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('arora_cookie_consent');
        if (!consent) {
            // Small delay to not annoy immediately
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('arora_cookie_consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 right-6 z-50 max-w-md w-full"
                >
                    <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl shadow-black">
                        <h3 className="text-white font-bold mb-2">Privacy & Cookies</h3>
                        <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                            We use cookies to analyze traffic and improve your experience.
                            By protecting your data, we protect our system integrity.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={handleAccept}
                                className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors"
                            >
                                Accept
                            </button>
                            <Link
                                href="/privacy-policy"
                                className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                            >
                                Read Policy
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
