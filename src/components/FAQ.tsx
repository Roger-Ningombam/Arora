"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';

const faqData = [
    {
        question: "What exactly is Scalar AI?",
        answer: "Scalar AI is our proprietary architecture designed to bridge the gap between flexible large language models and rigid enterprise business rules. It provides the cognitive reasoning of AI with the reliability and speed required for mission-critical operations."
    },
    {
        question: "How do you achieve <12ms response times?",
        answer: "Our systems utilize edge-optimized deployment and custom inference pipelines. By processing data closer to the source and using high-efficiency model quantization, we strip away the latency typical of standard AI implementations."
    },
    {
        question: "Is this a plug-and-play solution or custom-built?",
        answer: "We believe real impact comes from specificity. While we have a robust core framework (the ARORA system), every implementation is architected to your specific data landscape and operational requirements."
    },
    {
        question: "How do you maintain 99.9% accuracy targets?",
        answer: "Accuracy is achieved through our multi-layered validation system. This includes automated 'hallucination checks', structured output constraints, and a feedback loop that constantly fine-tunes the system against your ground-truth data."
    },
    {
        question: "What security standards do your systems follow?",
        answer: "Security is built into our nervous system, not bolted on. We support on-premise deployment, SOC2 compliance standards, and end-to-end encryption. Your data never leaves your controlled environment unless explicitly architected to do so."
    }
];

const FAQItem = ({ question, answer, isOpen, toggle }: { question: string, answer: string, isOpen: boolean, toggle: () => void }) => {
    return (
        <div className="border-b border-white/5 last:border-b-0">
            <button
                onClick={toggle}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-green-400' : 'text-zinc-300 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    <div className={`absolute w-4 h-[2px] bg-current transition-colors duration-300 ${isOpen ? 'text-green-400' : 'text-zinc-500'}`} />
                    <div className={`absolute w-[2px] h-4 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 text-green-400' : 'text-zinc-500'}`} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-zinc-400 leading-relaxed max-w-3xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="px-6 max-w-5xl mx-auto w-full py-32 relative z-10">
            <FadeIn>
                <div className="mb-16">
                    <span className="text-green-400 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Knowledge Base</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white tracking-tight">
                        Frequently Asked <span className="text-zinc-500 font-light italic">Questions</span>
                    </h2>
                </div>

                <div className="bg-zinc-900/20 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-12">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center p-8 rounded-3xl border border-green-500/10 bg-green-500/5 backdrop-blur-sm">
                    <p className="text-zinc-400 text-sm">
                        Have a more specific technical question? <a href="/contact" className="text-green-400 hover:text-green-300 underline underline-offset-4 transition-colors">Start a technical briefing</a>
                    </p>
                </div>
            </FadeIn>
        </section>
    );
};
