'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { Phone, CheckCircle2, Clock, Shield, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    const t = useTranslations('Hero');

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 50 }
        }
    };

    return (
        <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center overflow-hidden pt-28 pb-20 md:py-0">
            {/* Background Image with Parallax Scale & Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 12, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/hero-bg-v2.png"
                        alt="Loodgieter Bakker"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={100}
                    />
                </motion.div>
                {/* Refined Gradient: Lighter overlay to show off the clean image, but darker on the left for text */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-8 p-6 md:p-10 rounded-3xl border border-white/10 bg-slate-900/20 backdrop-blur-md shadow-2xl"
                    >
                        {/* Trust Badge */}
                        <motion.div variants={item} className="inline-flex items-center gap-3 pl-2 pr-4 py-1.5 bg-blue-600/90 text-white text-xs md:text-sm rounded-full font-bold shadow-lg shadow-blue-900/20 cursor-default">
                            <CheckCircle2 size={16} className="text-white" />
                            <span className="tracking-wide uppercase">Erkend & Betrouwbaar</span>
                        </motion.div>

                        {/* Headline - Punchy & Clear */}
                        <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
                            Loodgieter <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Bakker</span>.
                            <br />
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-90 font-bold block mt-2">
                                Uw specialist in <span className="underline decoration-blue-500 underline-offset-4 decoration-4">Spijkenisse</span>
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p variants={item} className="text-lg text-slate-100 max-w-xl leading-relaxed font-medium">
                            Direct hulp bij <strong>lekkage</strong>, <strong>verstopping</strong> of <strong>installatie</strong>.
                            Wij staan 24/7 voor u klaar met vakkundige service.
                        </motion.p>

                        <motion.div variants={item} className="flex items-center gap-2 text-yellow-400 font-bold text-sm md:text-base">
                            <span className="bg-yellow-500/20 px-2 py-0.5 rounded border border-yellow-500/30">9.8</span>
                            <span>Uitstekende klantbeoordelingen</span>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a href="tel:0640755336" className="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1 active:scale-[0.98]">
                                <Phone size={22} className="group-hover:animate-pulse" />
                                <span>Bel Direct: 06-40755336</span>
                            </a>
                            <Link href="/contact" className="flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 text-lg font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 active:scale-[0.98]">
                                <span>Offerte Aanvragen</span>
                                <ArrowRight size={20} className="text-blue-600" />
                            </Link>
                        </motion.div>

                        {/* Compact USPs */}
                        <motion.div variants={item} className="flex flex-wrap gap-4 md:gap-8 pt-4 border-t border-white/10 text-slate-200 text-sm font-semibold">
                            <div className="flex items-center gap-2"><Clock size={16} className="text-blue-400" /> 24/7 Service</div>
                            <div className="flex items-center gap-2"><Shield size={16} className="text-blue-400" /> Garantie op werk</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" /> Geen voorrijkosten</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating 'Live' Review Card - Animation Element */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="absolute bottom-10 right-10 hidden xl:block z-20"
            >
                <div className="bg-white/90 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-2xl max-w-xs transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">J</div>
                        <div>
                            <p className="text-slate-900 font-bold text-sm">Jan de Vries</p>
                            <div className="flex text-yellow-500 text-xs">★★★★★</div>
                        </div>
                    </div>
                    <p className="text-slate-700 text-sm italic">"Snel ter plaatse en de lekkage was binnen een uur verholpen. Top service!"</p>
                </div>
            </motion.div>
        </section>
    );
}
