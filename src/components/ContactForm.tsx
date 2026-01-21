"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { sendEvent, Events } from '@/lib/analytics';

// Validation Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    company: z.string().min(2, "Company name is required"),
    projectType: z.string().min(1, "Please select a project type"),
    budget: z.string().min(1, "Please select a budget range"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const STEPS = [
    { id: 1, title: 'Basics' },
    { id: 2, title: 'Project' },
    { id: 3, title: 'Details' },
];

export const ContactForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors, isValid }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
    });

    if (!isMounted) return null;

    const nextStep = async () => {
        let fieldsToValidate: (keyof FormData)[] = [];
        if (currentStep === 1) fieldsToValidate = ['name', 'email', 'company'];
        if (currentStep === 2) fieldsToValidate = ['projectType', 'budget'];

        const isStepValid = await trigger(fieldsToValidate);
        if (isStepValid) setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Submission failed');

            sendEvent({
                action: Events.LEAD_SUBMITTED,
                category: 'Form',
                label: 'Contact Page',
            });

            setIsSuccess(true);
        } catch (err) {
            setError("Something went wrong. Please try again or email us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <FadeIn className="bg-zinc-900/30 border border-green-500/20 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Received</h3>
                <p className="text-zinc-400 mb-8">
                    Thank you for reaching out. Our engineering team will review your project details and get back to you within 24 hours.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                    Send another message
                </button>
            </FadeIn>
        );
    }

    return (
        <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative z-10">
                {STEPS.map((step, i) => (
                    <div key={step.id} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono transition-colors duration-300 ${currentStep >= step.id
                            ? 'bg-green-500 text-black font-bold'
                            : 'bg-zinc-800 text-zinc-500'
                            }`}>
                            {step.id}
                        </div>
                        <span className={`text-xs uppercase tracking-widest hidden md:block transition-colors duration-300 ${currentStep >= step.id ? 'text-white' : 'text-zinc-600'
                            }`}>
                            {step.title}
                        </span>
                    </div>
                ))}
                {/* Progress Line */}
                <div className="absolute top-4 left-0 w-full h-px bg-zinc-800 -z-10">
                    <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 min-h-[300px]">
                <AnimatePresence mode="wait">

                    {/* STEP 1: BASICS */}
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Full Name</label>
                                <input
                                    {...register('name')}
                                    placeholder="Jane Doe"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors placeholder:text-zinc-700"
                                />
                                {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Work Email</label>
                                <input
                                    {...register('email')}
                                    placeholder="jane@company.com"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors placeholder:text-zinc-700"
                                />
                                {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Company</label>
                                <input
                                    {...register('company')}
                                    placeholder="Acme Corp"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors placeholder:text-zinc-700"
                                />
                                {errors.company && <span className="text-red-400 text-xs mt-1 block">{errors.company.message}</span>}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: PROJECT */}
                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-4">Project Type</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['AI Implementation', 'SaaS Architecture', 'Data Pipeline', 'Consulting'].map((type) => (
                                        <label
                                            key={type}
                                            className="relative cursor-pointer group"
                                        >
                                            <input
                                                type="radio"
                                                value={type}
                                                {...register('projectType')}
                                                className="peer sr-only"
                                            />
                                            <div className="p-4 rounded-xl border border-white/10 bg-black/20 peer-checked:bg-green-500/10 peer-checked:border-green-500 transition-all text-center">
                                                <span className="text-sm text-zinc-400 peer-checked:text-white transition-colors">{type}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                {errors.projectType && <span className="text-red-400 text-xs mt-1 block">{errors.projectType.message}</span>}
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-4">Budget Range</label>
                                <select
                                    {...register('budget')}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors appearance-none"
                                >
                                    <option value="" disabled selected>Select a range</option>
                                    <option value="50k-100k">$50k - $100k</option>
                                    <option value="100k-250k">$100k - $250k</option>
                                    <option value="250k+">$250k+</option>
                                </select>
                                {errors.budget && <span className="text-red-400 text-xs mt-1 block">{errors.budget.message}</span>}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: DETAILS */}
                    {currentStep === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Additional Details</label>
                                <textarea
                                    {...register('message')}
                                    rows={6}
                                    placeholder="Tell us about your technical challenges..."
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors placeholder:text-zinc-700 resize-none"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {error && (
                    <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <div className="flex justify-between mt-12 pt-8 border-t border-white/5">
                    {currentStep > 1 ? (
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={isSubmitting}
                            className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
                        >
                            ← Back
                        </button>
                    ) : <div></div>}

                    {currentStep < 3 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-zinc-200 transition-colors"
                        >
                            Next Step
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-green-500 text-black px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></span>
                                    Sending...
                                </>
                            ) : (
                                'Submit Request'
                            )}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};
