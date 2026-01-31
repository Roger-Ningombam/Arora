'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface KineticTextProps {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
}

export function KineticText({ text, className, duration = 0.5, delay = 0 }: KineticTextProps) {
    const words = text.split(" ");

    // container variants
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    // child variants
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}

export function KineticTypewriter({ text, className, cursor = true }: { text: string, className?: string, cursor?: boolean }) {
    // A more aggressive "hacker" style typewriter
    const [displayText, setDisplayText] = React.useState('');

    React.useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 30 + Math.random() * 50); // Random typing speed

        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className={className}>
            {displayText}
            {cursor && <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[1em] bg-green-500 ml-1 align-middle"
            />}
        </span>
    );
}
