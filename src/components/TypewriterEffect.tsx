"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const TypewriterEffect = ({
    text,
    className = "",
    cursorClassName = ""
}: {
    text: string;
    className?: string;
    cursorClassName?: string;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const characters = Array.from(text);
    const [isComplete, setIsComplete] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.015,
                delayChildren: 0.2,
            },
        },
    };

    const charVariants = {
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "inline" },
    };

    return (
        <span ref={ref} className={className}>
            <motion.span
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onAnimationComplete={() => setIsComplete(true)}
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        variants={charVariants}
                        className="relative"
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
                transition={isComplete ? { duration: 0.5 } : { duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className={`inline-block w-[2px] h-[1em] bg-green-500 align-middle ml-1 ${cursorClassName}`}
            />
        </span>
    );
};
