'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
    const t = useTranslations('Contact.form');
    // Using simple approach first
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">{t('name')} *</label>
                        <input required name="name" id="name" type="text" placeholder="Uw naam" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50 focus:bg-white" />
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700">{t('phone')} *</label>
                        <input required name="phone" id="phone" type="tel" placeholder="06 12345678" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50 focus:bg-white" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">{t('email')} *</label>
                        <input required name="email" id="email" type="email" placeholder="uw@email.nl" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50 focus:bg-white" />
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="city" className="text-sm font-semibold text-gray-700">{t('city')}</label>
                        <input name="city" id="city" type="text" placeholder="Bijv. Spijkenisse" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50 focus:bg-white" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-semibold text-gray-700">{t('subject')}</label>
                    <select name="subject" id="subject" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50 focus:bg-white">
                        <option value="Lekkage">Lekkage</option>
                        <option value="Verstopping">Verstopping</option>
                        <option value="Sanitair">Sanitair</option>
                        <option value="Installatie">Installatie</option>
                        <option value="Spoed">Spoed</option>
                        <option value="Overig">Overig</option>
                    </select>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">{t('message')} *</label>
                    <textarea required name="message" id="message" rows={4} placeholder="Beschrijf uw probleem of vraag..." className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50/50 focus:bg-white"></textarea>
                </div>

                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

                <button
                    disabled={status === 'loading' || status === 'success'}
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 transform active:scale-[0.98] duration-100"
                >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : status === 'success' ? <CheckCircle /> : <Send size={18} />}
                    {status === 'success' ? t('success') : t('submit')}
                </button>

                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="p-4 bg-green-50 text-green-700 rounded-lg text-sm border border-green-100 flex items-center gap-2">
                            <CheckCircle size={16} className="flex-shrink-0" />
                            <span>Bedankt! We hebben uw bericht ontvangen en nemen zo snel mogelijk contact op.</span>
                        </motion.div>
                    )}
                    {status === 'error' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100 flex items-center gap-2">
                            <AlertCircle size={16} className="flex-shrink-0" />
                            <span>Er ging iets mis bij het versturen. Probeer het later opnieuw of bel ons direct.</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}
