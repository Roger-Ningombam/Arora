'use client';

import React from 'react';
import { useLoading } from '@/context/LoadingContext';
import { Preloader } from '@/components/Preloader';
import { AnimatePresence } from 'framer-motion';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const { isLoading } = useLoading();

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>

            {/* 
               Only visually hide content, don't unmount it. 
               This ensures hydration happens correctly in the background 
               and we avoid the "twice loading" glitch.
               Opacity transition handles the smooth reveal.
            */}
            <div
                className={`transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                // Optional: disable pointer events while loading to prevent accidental clicks
                style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
            >
                {children}
            </div>
        </>
    );
}
