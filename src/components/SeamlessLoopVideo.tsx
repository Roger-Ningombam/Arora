"use client";

import React, { useEffect, useRef, useState } from "react";

interface SeamlessLoopVideoProps {
    src: string;
    className?: string;
    crossfadeDuration?: number; // Duration in seconds
}

export const SeamlessLoopVideo: React.FC<SeamlessLoopVideoProps> = ({
    src,
    className = "",
    crossfadeDuration = 3, // Default 3s overlapping crossfade
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const [activePlayer, setActivePlayer] = useState<1 | 2>(1);
    const [isReady, setIsReady] = useState(false);

    // Sync initialization
    useEffect(() => {
        const v1 = video1Ref.current;
        if (v1) {
            if (v1.readyState >= 1) {
                setIsReady(true);
                v1.play().catch((e) => console.error("Auto-play failed:", e));
            } else {
                v1.onloadedmetadata = () => {
                    setIsReady(true);
                    v1.play().catch((e) => console.error("Auto-play failed:", e));
                };
            }
        }
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const loop = () => {
            const v1 = video1Ref.current;
            const v2 = video2Ref.current;

            if (!v1 || !v2) {
                animationFrameId = requestAnimationFrame(loop);
                return;
            }

            // Safety play check if logic thinks we are ready
            if (isReady && v1.paused && activePlayer === 1 && v1.currentTime < v1.duration) {
                v1.play().catch(() => { });
            }

            // We assume both videos have the same duration since same src
            const duration = v1.duration;
            if (!duration || isNaN(duration) || duration === Infinity) {
                animationFrameId = requestAnimationFrame(loop);
                return;
            }

            // Trigger point for crossfade
            const triggerTime = Math.max(0, duration - crossfadeDuration);

            // Logic for Player 1 being active
            if (activePlayer === 1) {
                const time = v1.currentTime;

                // If we reached the trigger zone
                if (time >= triggerTime) {
                    // Calculate fade progress (0 to 1)
                    const progress = (time - triggerTime) / crossfadeDuration;

                    // Ensure Player 2 is playing from start if not already
                    if (v2.paused || v2.currentTime > crossfadeDuration) {
                        v2.currentTime = 0;
                        v2.play().catch(() => { });
                    }

                    // Crossfade Opacity
                    v1.style.opacity = (1 - progress).toString();
                    v2.style.opacity = progress.toString();

                    // Swap if complete (safety margin before actual end)
                    if (time >= duration - 0.2 || progress >= 1) {
                        setActivePlayer(2);
                        v1.pause();
                        v1.currentTime = 0;
                        v1.style.opacity = "0";
                        v2.style.opacity = "1";
                    }
                } else {
                    // Normal playback, ensure full connection
                    v1.style.opacity = "1";
                    v2.style.opacity = "0";
                }
            }
            // Logic for Player 2 being active
            else {
                const time = v2.currentTime;

                if (time >= triggerTime) {
                    const progress = (time - triggerTime) / crossfadeDuration;

                    if (v1.paused || v1.currentTime > crossfadeDuration) {
                        v1.currentTime = 0;
                        v1.play().catch(() => { });
                    }

                    v2.style.opacity = (1 - progress).toString();
                    v1.style.opacity = progress.toString();

                    if (time >= duration - 0.2 || progress >= 1) {
                        setActivePlayer(1);
                        v2.pause();
                        v2.currentTime = 0;
                        v2.style.opacity = "0";
                        v1.style.opacity = "1";
                    }
                } else {
                    v2.style.opacity = "1";
                    v1.style.opacity = "0";
                }
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(animationFrameId);
    }, [activePlayer, crossfadeDuration, isReady]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            {/* Video Player 1 */}
            <video
                ref={video1Ref}
                src={src}
                muted
                playsInline
                autoPlay
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 1, zIndex: 1 }}
            />
            {/* Video Player 2 */}
            <video
                ref={video2Ref}
                src={src}
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0, zIndex: 1 }}
            />
        </div>
    );
};
