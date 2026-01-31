'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkListProps {
    projects: any[]; // Using any for flexibility based on the unknown full type definition
}

export function WorkList({ projects }: WorkListProps) {
    const [activeProject, setActiveProject] = useState(projects[0]);
    const listRef = useRef<HTMLDivElement>(null);

    // Handle scroll to update active project
    useEffect(() => {
        const handleScroll = () => {
            if (!listRef.current) return;
            const items = listRef.current.querySelectorAll('.work-item');

            items.forEach((item: any) => {
                const rect = item.getBoundingClientRect();
                // If item is near the middle of the screen
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    const id = item.getAttribute('data-id');
                    const project = projects.find(p => p.slug === id);
                    if (project) setActiveProject(project);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [projects]);

    return (
        <div className="relative min-h-screen">
            {/* Desktop: Split Layout */}
            <div className="hidden lg:flex" ref={listRef}>

                {/* Left: Scrollable List */}
                <div className="w-1/2 pt-[20vh] pb-[20vh] px-12 z-20 relative">
                    {projects.map((project) => (
                        <div
                            key={project.slug}
                            data-id={project.slug}
                            className="work-item min-h-[60vh] flex flex-col justify-center group cursor-pointer"
                            onMouseEnter={() => setActiveProject(project)}
                        >
                            <Link href={`/case-studies/${project.slug}`} className="block">
                                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-4 block">
                                    {project.client} // {project.category}
                                </span>
                                <h2 className="text-6xl font-bold text-white mb-6 group-hover:text-green-400 transition-colors duration-300">
                                    {project.title}
                                </h2>
                                <p className="text-zinc-400 text-lg max-w-md leading-relaxed mb-8">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                                    <span className="border-b border-green-500 pb-1 text-green-500">View Selected Work</span>
                                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Right: Sticky Preview */}
                <div className="w-1/2 h-screen sticky top-0 right-0 flex items-center justify-center p-12 z-10">
                    <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl">
                        <AnimatePresence mode="popLayout">
                            {activeProject && (
                                <motion.div
                                    key={activeProject.slug}
                                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={activeProject.image}
                                        alt={activeProject.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Overlay Info */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-12 left-12">
                                        <div className="flex gap-4 mb-4">
                                            {activeProject.tags.map((tag: string, i: number) => (
                                                <span key={i} className="px-3 py-1 rounded-full border border-white/20 text-xs text-white bg-black/20 backdrop-blur-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Noise Overlay */}
                        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
                    </div>
                </div>
            </div>

            {/* Mobile: Standard List (Fallback) */}
            <div className="lg:hidden px-6 pt-20 pb-20 space-y-20">
                {projects.map((project) => (
                    <div key={project.slug} className="group">
                        <Link href={`/case-studies/${project.slug}`}>
                            <div className="relative aspect-[4/3] mb-8 rounded-3xl overflow-hidden">
                                <Image src={project.image} alt={project.title} fill className="object-cover" />
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                            <p className="text-zinc-400">{project.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
