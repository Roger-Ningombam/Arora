
import React from 'react';

const LOGOS = [
    { name: 'Vercel', url: 'https://assets.vercel.com/image/upload/v1538361091/repositories/vercel/logo.png', withText: true },
    { name: 'Next.js', url: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png', withText: true },
    { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', withText: true },
    { name: 'Tailwind CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', withText: true },
    { name: 'Framer Motion', url: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png', withText: true },
    { name: 'Stripe', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png', withText: false },
    { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png', withText: false },
    { name: 'Google Cloud', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png', withText: false },
];

export const LogoCarousel = () => {
    return (
        <div className="w-full bg-black/20 border-y border-white/5 py-12 overflow-hidden relative z-10 backdrop-blur-sm">

            <div className="text-center mb-8">
                <p className="text-xs font-mono text-zinc-500 tracking-[0.2em] uppercase">Trusted Integration Partners</p>
            </div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

            <div className="flex w-fit animate-marquee hover:pause">
                {/* First set of logos */}
                <div className="flex gap-16 px-8 items-center justify-center min-w-max">
                    {LOGOS.map((logo, index) => (
                        <div key={`logo - 1 - ${index} `} className="group relative flex items-center justify-center gap-3">
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-8 w-auto object-contain opacity-40 grayscale transition-all duration-300 transform group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                            />
                            {logo.withText && (
                                <span className="text-lg font-semibold text-white opacity-40 group-hover:opacity-100 transition-opacity duration-300 font-display">
                                    {logo.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Duplicate set for infinite scroll */}
                <div className="flex gap-16 px-8 items-center justify-center min-w-max">
                    {LOGOS.map((logo, index) => (
                        <div key={`logo - 2 - ${index} `} className="group relative flex items-center justify-center gap-3">
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-8 w-auto object-contain opacity-40 grayscale transition-all duration-300 transform group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                            />
                            {logo.withText && (
                                <span className="text-lg font-semibold text-white opacity-40 group-hover:opacity-100 transition-opacity duration-300 font-display">
                                    {logo.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
