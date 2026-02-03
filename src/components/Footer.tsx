'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { Mail, MapPin, Phone, ShieldCheck, ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('Footer');
    const tAreas = useTranslations('Areas');
    const tServices = useTranslations('Services');
    const tNav = useTranslations('Navigation');

    const areas = ['spijkenisse', 'hoogvliet', 'hellevoetsluis', 'rockanje', 'brielle'];
    const services = ['leak', 'clog', 'sanitary', 'pipes', 'maintenance'];

    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5 font-sans relative overflow-hidden">
            {/* Subtle Glow Effect */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand & Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/Loodgieter.svg"
                                    alt="Loodgieter Bakr"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] leading-tight group-hover:text-blue-500 transition-colors">Loodgieter</span>
                                <span className="text-xl font-black text-white tracking-tight leading-none group-hover:text-slate-200 transition-colors">
                                    Bakr<span className="text-blue-500">.</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-xs text-sm">
                            Uw betrouwbare partner voor loodgieterswerk en installatie in Spijkenisse en omgeving.
                            Vakwerk, snel ter plaatse en eerlijke prijzen.
                        </p>

                        <div className="flex gap-4 pt-2">
                            <a href="#" className="p-2.5 bg-slate-900 rounded-xl border border-white/5 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-lg shadow-black/20" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" className="p-2.5 bg-slate-900 rounded-xl border border-white/5 text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all duration-300 shadow-lg shadow-black/20" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" className="p-2.5 bg-slate-900 rounded-xl border border-white/5 text-slate-400 hover:text-white hover:bg-blue-700 hover:border-blue-600 transition-all duration-300 shadow-lg shadow-black/20" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg tracking-wide border-l-2 border-blue-600 pl-3">{tServices('title')}</h4>
                        <ul className="space-y-3">
                            {services.map(s => (
                                <li key={s}>
                                    <Link href="/diensten" className="group flex items-center gap-2 text-sm hover:text-white transition-colors duration-300">
                                        <ArrowRight size={12} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span className="group-hover:translate-x-1 transition-transform">{tServices(s)}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Areas */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg tracking-wide border-l-2 border-blue-600 pl-3">{tAreas('title')}</h4>
                        <ul className="space-y-3">
                            {areas.map(area => (
                                <li key={area}>
                                    <Link href="/werkgebieden" className="group flex items-center gap-2 text-sm hover:text-white transition-colors duration-300">
                                        <ArrowRight size={12} className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        <span className="group-hover:translate-x-1 transition-transform">{tAreas(area)}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Trust */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg tracking-wide border-l-2 border-blue-600 pl-3">Contact & Info</h4>

                        <div className="space-y-3">
                            <a href="tel:0640755336" className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group">
                                <div className="bg-blue-600/20 p-2 rounded-lg text-blue-500 group-hover:text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                    <Phone size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider font-bold text-slate-500 group-hover:text-blue-400 transition-colors">Bel Direct</span>
                                    <span className="text-white font-bold">06-40755336</span>
                                </div>
                            </a>

                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                                <div className="bg-slate-800 p-2 rounded-lg text-slate-400">
                                    <ShieldCheck size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider font-bold text-slate-500">{t('kvk')}</span>
                                    <span className="text-white font-mono text-sm">83081984</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98]">
                                {tNav('contact')}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Loodgieter Bakr. <span className="hidden md:inline">Dutch quality & craftsmanship.</span></p>
                    <div className="flex justify-center gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Algemene voorwaarden</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
