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
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
            {/* Top Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-bl-[4rem] -mr-8 -mt-8 pointer-events-none"></div>

            <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-bold text-slate-900">Direct bericht sturen</h3>
                <p className="text-slate-500">Vul het formulier in en wij nemen zo snel mogelijk contact op.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700">{t('name')} *</label>
                        <input required name="name" id="name" type="text" placeholder="Uw naam" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 bg-slate-50/50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-slate-700">{t('phone')} *</label>
                        <input required name="phone" id="phone" type="tel" placeholder="06 12345678" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 bg-slate-50/50 focus:bg-white" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700">{t('email')} *</label>
                        <input required name="email" id="email" type="email" placeholder="uw@email.nl" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 bg-slate-50/50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-bold text-slate-700">{t('city')}</label>
                        <input name="city" id="city" type="text" placeholder="Bijv. Spijkenisse" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 bg-slate-50/50 focus:bg-white" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-700">{t('subject')}</label>
                    <div className="relative">
                        <select name="subject" id="subject" className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50/50 focus:bg-white appearance-none cursor-pointer">
                            <option value="Lekkage">Lekkage</option>
                            <option value="Verstopping">Verstopping</option>
                            <option value="Sanitair">Sanitair</option>
                            <option value="Installatie">Installatie</option>
                            <option value="Spoed">Spoed</option>
                            <option value="Overig">Overig</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">{t('message')} *</label>
                    <textarea required name="message" id="message" rows={4} placeholder="Beschrijf uw probleem of vraag..." className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400 bg-slate-50/50 focus:bg-white resize-none"></textarea>
                </div>

                <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

                <button
                    disabled={status === 'loading' || status === 'success'}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-3"
                >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : status === 'success' ? <CheckCircle /> : <Send size={20} />}
                    {status === 'success' ? t('success') : t('submit')}
                </button>

                <AnimatePresence>
                    {status === 'success' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl text-sm font-medium border border-green-100 flex items-center gap-3">
                            <div className="bg-green-100 p-1 rounded-full"><CheckCircle size={16} /></div>
                            <span>Bedankt! We hebben uw bericht ontvangen en nemen zo snel mogelijk contact op.</span>
                        </motion.div>
                    )}
                    {status === 'error' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-3">
                            <div className="bg-red-100 p-1 rounded-full"><AlertCircle size={16} /></div>
                            <span>Er ging iets mis bij het versturen. Probeer het later opnieuw of bel ons direct.</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}
