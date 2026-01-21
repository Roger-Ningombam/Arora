"use client";

import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

interface SlideInProps {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    offset?: number;
}

export const SlideIn = ({
    children,
    direction = "up",
    delay = 0,
    duration = 1.0,
    className = "",
    once = true,
    offset = 20
}: SlideInProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: offset };
            case "down": return { y: -offset };
            case "left": return { x: offset };
            case "right": return { x: -offset };
            default: return { y: offset };
        }
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getDirectionOffset()
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1] // Custom ease-out curve
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className={className}
        >
            {children}
        </motion.div>
    );
};
