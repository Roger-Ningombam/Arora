"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEvent, Events } from '@/lib/analytics';

const formSchema = z.object({
    email: z.string().email("Please enter a valid work email"),
});

type FormData = z.infer<typeof formSchema>;

export const LeadMagnetForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In real app: POST /api/leads with type='lead-magnet'
        setIsSubmitting(false);

        sendEvent({
            action: Events.LEAD_MAGNET_DOWNLOAD,
            category: 'Lead Magnet',
            label: 'AI Buyers Guide',
        });

        setIsSuccess(true);

        // Simulate auto-download
        const link = document.createElement('a');
        link.href = '/docs/ARORA_AI_Buyers_Guide_2026.pdf'; // We need to create this dummy file
        link.download = 'ARORA_Enterprise_AI_Simulated.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center"
                    >
                        <div className="text-green-400 font-bold text-lg mb-2">Download Started!</div>
                        <p className="text-zinc-400 text-sm">Check your downloads folder. We've also sent a copy to your inbox.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <div>
                            <div className="flex gap-2 relative">
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-green-500 transition-colors placeholder:text-zinc-600"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="absolute right-1.5 top-1.5 bottom-1.5 bg-green-500 hover:bg-green-400 text-black font-bold px-6 rounded-full transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? '...' : 'Get Guide'}
                                </button>
                            </div>
                            {errors.email && <span className="text-red-400 text-xs ml-4 mt-2 block">{errors.email.message}</span>}
                        </div>
                        <p className="text-zinc-600 text-xs text-center">
                            Trusted by 500+ CTOs. Unsubscribe at any time.
                        </p>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};
