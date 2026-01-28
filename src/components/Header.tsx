'use client';

import { Link, usePathname, useRouter } from '@/navigation';
import { useTranslations } from 'next-intl';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header({ locale }: { locale: string }) {
    const t = useTranslations('Navigation');
    const tHeader = useTranslations('Header');
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    };

    const navItems = [
        { key: 'home', href: '/' },
        { key: 'services', href: '/diensten' },
        { key: 'areas', href: '/werkgebieden' },
        { key: 'about', href: '/over-ons' },
        { key: 'contact', href: '/contact' }
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/5"
        >
            <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center transition-all duration-300">
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                        <Image
                            src="/Loodgieter.svg"
                            alt="Loodgieter Bakker"
                            fill
                            className="object-contain drop-shadow-lg"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight group-hover:text-blue-400 transition-colors">Loodgieter</span>
                        <span className="text-xl md:text-3xl font-black text-white tracking-tight leading-none group-hover:text-slate-200 transition-colors">
                            Bakker<span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-400 to-cyan-400">.</span>
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav - Dark Glass */}
                <nav className="hidden lg:flex items-center bg-white/5 px-2 py-1.5 rounded-full border border-white/5 shadow-inner backdrop-blur-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className={cn(
                                "relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300",
                                pathname === item.href
                                    ? "text-white bg-white/10 shadow-lg shadow-black/10"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    {/* Lang Switch - Dark Mode */}
                    <div className="flex bg-slate-800/50 border border-white/10 rounded-lg p-1 text-xs font-bold shadow-sm">
                        <button
                            onClick={() => switchLocale('nl')}
                            className={cn("px-2.5 py-1 rounded-md transition-all", locale === 'nl' ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300")}
                        >
                            NL
                        </button>
                        <button
                            onClick={() => switchLocale('en')}
                            className={cn("px-2.5 py-1 rounded-md transition-all", locale === 'en' ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300")}
                        >
                            EN
                        </button>
                    </div>

                    <a href="tel:0640755336" className="group relative overflow-hidden flex items-center gap-3 bg-blue-600 text-white pl-5 pr-6 py-3 rounded-full font-bold shadow-lg shadow-blue-900/40 hover:shadow-blue-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Phone size={18} className="relative z-10 group-hover:animate-shake" />
                        <span className="relative z-10">{tHeader('call')}</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-xl transition-colors active:scale-95" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Nav - Dark Mode */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5 overflow-hidden shadow-2xl"
                    >
                        <div className="p-4 space-y-2 pb-8">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block px-5 py-4 rounded-xl text-lg font-bold transition-all border border-transparent",
                                            pathname === item.href
                                                ? "bg-white/10 text-white border-white/5"
                                                : "text-slate-400 hover:bg-white/5 hover:text-white"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {t(item.key)}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="border-t border-white/10 my-4 pt-6 px-4 flex justify-between items-center">
                                <span className="text-sm font-semibold text-slate-500">Language</span>
                                <div className="flex gap-2">
                                    <button onClick={() => switchLocale('nl')} className={cn("w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-colors", locale === 'nl' ? "bg-white/10 text-white" : "bg-slate-800 text-slate-500")}>NL</button>
                                    <button onClick={() => switchLocale('en')} className={cn("w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-colors", locale === 'en' ? "bg-white/10 text-white" : "bg-slate-800 text-slate-500")}>EN</button>
                                </div>
                            </div>

                            <a href="tel:0640755336" className="w-full mt-6 flex justify-center items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-blue-900/50 active:scale-[0.98] transition-transform">
                                <Phone size={20} />
                                {tHeader('call')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
