'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type LoadingContextType = {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
    isLoading: true,
    setIsLoading: () => { },
});

export function useLoading() {
    return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Minimum loading time to prevent flash
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Small delay to allow fade-out animation to start before content becomes interactive
            setTimeout(() => setShowContent(true), 100);
        }, 1500); // 1.5s splash screen

        return () => clearTimeout(timer);
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}
