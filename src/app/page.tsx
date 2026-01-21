"use client";

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { SlideIn } from '@/components/SlideIn';
import { MagneticButton } from '@/components/MagneticButton';
import { InteractiveGridPattern } from '@/components/InteractiveGridPattern';
import { TypewriterEffect } from '@/components/TypewriterEffect';
import { SeamlessLoopVideo } from '@/components/SeamlessLoopVideo';
import { StrategicPillars } from '@/components/StrategicPillars';
import { FAQ } from '@/components/FAQ';

// Lazy Load Heavy Components
const DashboardPreview = dynamic(() => import('@/components/DashboardPreview').then(mod => mod.DashboardPreview), {
  loading: () => <div className="h-[600px] w-full bg-zinc-900/50 animate-pulse rounded-3xl" />,
  ssr: false
});

const LogoCarousel = dynamic(() => import('@/components/LogoCarousel').then(mod => mod.LogoCarousel), {
  ssr: false
});

const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => mod.Testimonials), {
  ssr: false
});

const ThreeDTiltCard = dynamic(() => import('@/components/ThreeDTiltCard').then(mod => mod.ThreeDTiltCard), {
  ssr: false
});

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0 bg-zinc-950 text-white selection:bg-green-500/30">
      {/* IMMERSIVE HERO SECTION */}
      <div className="min-h-screen relative overflow-hidden bg-zinc-950">

        {/* Aurora Background Video */}
        <div className="absolute inset-0 z-0">
          <SeamlessLoopVideo
            src="/videos/aurora.mp4"
            className="w-full h-full opacity-75"
            crossfadeDuration={4}
          />

          {/* Gradient Overlay for Text Readability - Subtle */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/40 opacity-80 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-30 flex flex-col items-center justify-center min-h-screen w-full px-6 pt-20">

          <SlideIn direction="down" delay={0.2}>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
              <span className="text-xs font-mono tracking-widest text-white/90 uppercase">System v2.0 Live</span>
            </div>
          </SlideIn>

          <div className="text-center relative perspective-1000">
            <SlideIn direction="up" delay={0.3} duration={0.8}>
              <h1 className="text-[10vw] leading-[0.85] font-bold font-outfit tracking-tighter text-white select-none relative z-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                INTELLIGENCE
              </h1>
            </SlideIn>
            <SlideIn direction="up" delay={0.4} duration={0.8}>
              <h1 className="text-[10vw] leading-[0.85] font-bold font-outfit tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 select-none relative z-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                ARCHITECTED
              </h1>
            </SlideIn>
          </div>

          <SlideIn direction="up" delay={0.6} className="mt-12 max-w-2xl text-center">
            <p className="text-lg md:text-xl text-zinc-200 font-light leading-relaxed tracking-wide drop-shadow-md">
              We design the nervous systems of tomorrow&apos;s <br className="hidden md:block" />
              enterprises. <span className="text-white font-medium">Scalar AI</span> solutions for high-velocity teams.
            </p>
          </SlideIn>

          <SlideIn direction="up" delay={0.8} className="mt-12 flex flex-col md:flex-row gap-8 items-center">
            <Link href="/work">
              <MagneticButton className="group relative px-10 py-4 bg-white text-black rounded-full font-bold tracking-tight overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="relative z-10">Explore Systems</span>
                <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 -z-0"></div>
              </MagneticButton>
            </Link>
          </SlideIn>

        </div>

        {/* Cinematic Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-zinc-950 to-transparent z-20 pointer-events-none"></div>

      </div>

      {/* POST-HERO CONTENT WRAPPER */}
      <div className="relative w-full bg-zinc-950">

        {/* Background handled globally in layout.tsx */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950/80 pointer-events-none z-0"></div>

        {/* STRATEGIC PILLARS - High Density Content */}
        <StrategicPillars />


        {/* PHILOSOPHY - Dark & Clean */}
        <section className="px-6 max-w-7xl mx-auto w-full pt-8 pb-20 relative z-10">
          <SlideIn direction="up">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] max-w-5xl h-[3em]">
                <TypewriterEffect text="Real intelligence isn’t just about clever algorithms. It’s about building systems that can adapt, learn, and deliver real results." />
              </h2>
            </div>
          </SlideIn>
        </section>


        {/* DASHBOARD PREVIEW */}
        <DashboardPreview />

        {/* LOGO CAROUSEL */}
        <LogoCarousel />


        {/* VISUAL BREAK - Cinematic Image - Parallax Reveal */}
        <section className="w-full px-2 md:px-6 pb-20 pt-32 overflow-hidden relative z-10">
          <div className="max-w-7xl mx-auto mb-10 px-4">
            <SlideIn direction="left">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
                <div>
                  <span className="text-green-400 font-mono text-xs tracking-wider uppercase mb-2 block">System Visualization</span>
                  <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Neural Core Architecture</h2>
                </div>
                <p className="text-zinc-400 max-w-md text-sm leading-relaxed md:text-right">
                  A real-time representation of our distributed intelligence network, processing millions of data points to optimize autonomous decision-making.
                </p>
              </div>
            </SlideIn>
          </div>

          <div className="max-w-[95%] mx-auto h-[60vh] md:h-[80vh] relative rounded-[2rem] overflow-hidden group">
            <Image
              src="/images/home-hero.png"
              alt="System Core Architecture"
              fill
              className="object-cover opacity-60 transition-transform duration-[3s] group-hover:scale-105 ease-out"
            />
            <div className="absolute inset-0 bg-zinc-950/20 mix-blend-multiply"></div>

            {/* Tech Overlay Text */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <p className="text-white/80 font-mono text-xs md:text-sm tracking-widest uppercase">
                System Status: <span className="text-green-400 animate-pulse">Optimal</span><br />
                Nodes Active: 8,492<br />
                Latency: 12ms
              </p>
            </div>
          </div>
        </section>


        {/* ENTRY POINTS - Editorial Grid with 3D Interaction */}
        <section className="px-6 max-w-7xl mx-auto w-full py-20 relative z-10">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <ThreeDTiltCard className="group relative bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden cursor-pointer h-full min-h-[400px]">
              <Link href="/services" className="absolute inset-0 z-20 block"></Link>
              <div className="absolute inset-0 bg-[url('/images/system-hub.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90"></div>
              <div className="relative z-10 p-12 md:p-16 flex flex-col justify-between h-full pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="text-zinc-400 font-mono text-xs tracking-widest border border-zinc-700 px-3 py-1 rounded bg-black/50 backdrop-blur-md">SERVICE_MATRIX</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-light text-white mb-4 translate-y-0 transition-transform duration-500">Services</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    Explore our suite of advanced AI agents designed to automate complex workflows and enhance decision-making across enterprise environments.
                  </p>
                </div>
              </div>
            </ThreeDTiltCard>

            <ThreeDTiltCard className="group relative bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden cursor-pointer h-full min-h-[400px]">
              <Link href="/work" className="absolute inset-0 z-20 block"></Link>
              <div className="absolute inset-0 bg-[url('/images/work-fintech.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-90"></div>
              <div className="relative z-10 p-12 md:p-16 flex flex-col justify-between h-full pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="text-zinc-400 font-mono text-xs tracking-widest border border-zinc-700 px-3 py-1 rounded bg-black/50 backdrop-blur-md">CASE_LOGS</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-light text-white mb-4 translate-y-0 transition-transform duration-500">Selected Work</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    A curated collection of impactful projects demonstrating the power of autonomous systems in real-world scenarios, from fintech to supply chain.
                  </p>
                </div>
              </div>
            </ThreeDTiltCard>

          </FadeInStagger>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FAQ SECTION */}
        <FAQ />
      </div >

    </div >
  );
}
