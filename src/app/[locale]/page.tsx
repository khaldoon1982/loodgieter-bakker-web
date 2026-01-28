import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import ServiceCard from '@/components/ServiceCard';
import { Droplets, Settings, ShowerHead, ArrowRight, Phone, CheckCircle2, Clock, Shield, ShieldCheck, MapPin, Star, Quote, Zap, Sparkles, MessageCircle } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import ReviewCard from '@/components/ReviewCard';
import FAQAccordion from '@/components/FAQAccordion';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Review, FAQ } from '@prisma/client';
import Image from 'next/image';

async function getReviews(): Promise<Review[]> {
    try {
        return await prisma.review.findMany({
            where: { isPublished: true },
            orderBy: { createdAt: 'desc' },
            take: 3
        });
    } catch (e) {
        console.error("DB Error (reviews):", e);
        return [];
    }
}

async function getFAQs(locale: string) {
    try {
        const faqs = await prisma.fAQ.findMany({
            where: { isPublished: true },
            orderBy: { order: 'asc' },
            take: 5
        });
        return faqs.map((f: FAQ) => ({
            id: f.id,
            question: locale === 'nl' ? f.question_nl : f.question_en,
            answer: locale === 'nl' ? f.answer_nl : f.answer_en
        }));
    } catch (e) {
        console.error("DB Error (faqs):", e);
        return [];
    }
}

import Hero from '@/components/Hero';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const tServices = await getTranslations({ locale, namespace: 'Services' });
    const tAreas = await getTranslations({ locale, namespace: 'Areas' });
    const tReviews = await getTranslations({ locale, namespace: 'Reviews' });
    const tFAQ = await getTranslations({ locale, namespace: 'FAQ' });

    const reviews = await getReviews();
    const faqs = await getFAQs(locale);

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* Hero Section */}
            <Hero />

            {/* Services Teaser - Premium & Visual */}
            <section className="py-32 bg-slate-950 relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            Onze Expertise
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            Vakkundige <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Oplossingen</span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                            Van lekkage tot renovatie. Wij combineren jarenlange ervaring met modern gereedschap voor een perfect resultaat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
                        {/* Service Card 1: Lekkage */}
                        <Link href="/diensten#lekkage" className="group relative h-[420px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/20">
                            <Image
                                src="/service-leakage.png"
                                alt="Lekkage detectie"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                <div className="w-14 h-14 bg-blue-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                                    <Droplets size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{tServices('leak')}</h3>
                                <p className="text-slate-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto">
                                    Snel en vakkundig opsporen en verhelpen van diverse lekkages met minimale schade.
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                                    Meer informatie <ArrowRight size={16} className="text-blue-400" />
                                </div>
                            </div>
                        </Link>

                        {/* Service Card 2: Verstopping */}
                        <Link href="/diensten#verstopping" className="group relative h-[420px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-900/20">
                            <Image
                                src="/service-clog.png"
                                alt="Verstopping verhelpen"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                <div className="w-14 h-14 bg-cyan-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-cyan-600/20 group-hover:scale-110 transition-transform duration-300">
                                    <ShowerHead size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{tServices('clog')}</h3>
                                <p className="text-slate-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto">
                                    Professioneel ontstoppen van riolering, afvoer en toilet met garantie op doorstroming.
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                                    Meer informatie <ArrowRight size={16} className="text-cyan-400" />
                                </div>
                            </div>
                        </Link>

                        {/* Service Card 3: Sanitair */}
                        <Link href="/diensten#sanitair" className="group relative h-[420px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/20">
                            <Image
                                src="/service-bathroom.png"
                                alt="Sanitair installatie"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                <div className="w-14 h-14 bg-indigo-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-300">
                                    <Settings size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{tServices('sanitary')}</h3>
                                <p className="text-slate-300 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto">
                                    Installatie en renovatie van badkamers, toiletten en kranen met oog voor detail.
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                                    Meer informatie <ArrowRight size={16} className="text-indigo-400" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/diensten" className="group inline-flex items-center gap-3 bg-white hover:bg-slate-200 text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                            <span>Alle diensten bekijken</span>
                            <div className="bg-slate-950 text-white p-1 rounded-full group-hover:bg-blue-600 transition-colors">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust / Areas - Active & Vibrant */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Text & Cities */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 font-bold text-sm tracking-wide mb-4">
                                    <MapPin size={14} className="fill-blue-500/20" />
                                    <span>Lokaal & Snel Ter Plaatse</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                                    Wij werken in <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{tAreas('title')}</span>
                                </h2>
                                <p className="text-slate-600 text-xl leading-relaxed">
                                    Vanuit onze thuisbasis in Spijkenisse bedienen wij de gehele regio Voorne-Putten.
                                    Altijd een monteur in de buurt voor snelle service.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {['Spijkenisse', 'Hoogvliet', 'Hellevoetsluis', 'Rockanje', 'Brielle', 'Rozenburg', 'Oostvoorne'].map((city, i) => (
                                    <Link
                                        key={city}
                                        href={`/werkgebieden`}
                                        className="group flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm hover:shadow-md border-b-2 border-slate-100 hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-500 animate-pulse' : 'bg-blue-400'}`}></div>
                                        <span className="font-semibold text-slate-700 group-hover:text-blue-700">{city}</span>
                                    </Link>
                                ))}
                                <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-400 italic">
                                    + omringende dorpen
                                </span>
                            </div>
                        </div>

                        {/* Emergency Card - High Impact */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-blue-600 blur-[60px] opacity-20 rounded-full animate-pulse-slow"></div>
                            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-blue-900/30 overflow-hidden transform transition hover:scale-[1.02] duration-300">
                                {/* Decor Icons */}
                                <div className="absolute top-0 right-0 p-10 opacity-10">
                                    <Zap size={200} className="rotate-12" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 opacity-10">
                                    <Clock size={120} className="-rotate-12" />
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                                        <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                                        24/7 Spoedservice
                                    </div>

                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm">Direct hulp nodig?</h3>
                                        <p className="text-blue-100 text-lg leading-relaxed max-w-sm">
                                            Lekkage of verstopping? Blijf er niet mee zitten. Wij zijn nu beschikbaar voor noodgevallen.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="tel:0640755336" className="flex-1 bg-white text-blue-700 px-8 py-5 rounded-2xl font-bold md:text-xl shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 active:scale-95">
                                            <Phone size={24} className="animate-shake" />
                                            Bel 06-40755336
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm font-medium text-blue-100/80 pt-2">
                                        <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> Erkend vakman</span>
                                        <span className="flex items-center gap-1.5"><Clock size={16} /> Binnen 30 min</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews - Trust Wall */}
            <section className="py-32 bg-white relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center justify-center gap-2 text-yellow-600 mb-6 bg-yellow-100/80 px-6 py-2 rounded-full border border-yellow-200 shadow-sm backdrop-blur-sm">
                            <div className="flex gap-0.5">
                                <Star size={16} fill="currentColor" className="text-yellow-500" />
                                <Star size={16} fill="currentColor" className="text-yellow-500" />
                                <Star size={16} fill="currentColor" className="text-yellow-500" />
                                <Star size={16} fill="currentColor" className="text-yellow-500" />
                                <Star size={16} fill="currentColor" className="text-yellow-500" />
                            </div>
                            <span className="font-bold text-sm tracking-wide">EXCELLENT OP GOOGLE</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">{tReviews('title')}</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                            Wij gaan voor niets minder dan 100% tevredenheid. Onze klanten waarderen onze snelheid, vakmanschap en eerlijke communicatie.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviews.map((review: Review) => (
                            <div key={review.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] transition-all duration-300 group hover:-translate-y-1">
                                <div className="flex gap-1 text-yellow-400 mb-6 group-hover:scale-105 transition-transform origin-left">
                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <h4 className="font-bold text-lg text-slate-900 mb-3 line-clamp-1">{review.name}</h4>
                                <div className="relative">
                                    <Quote size={40} className="absolute -top-3 -left-3 text-blue-50 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100" />
                                    <p className="text-slate-600 leading-relaxed relative z-10 italic">
                                        "{review.text}"
                                    </p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    <span className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-1 rounded-md"><CheckCircle2 size={12} /> Geverifieerd</span>
                                    <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))}
                        {reviews.length === 0 && (
                            <div className="col-span-3">
                                <div className="max-w-md mx-auto bg-white p-10 rounded-[2.5rem] border-2 border-dashed border-slate-200 text-center relative overflow-hidden group hover:border-blue-300 transition-colors">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <MessageCircle size={120} className="rotate-12" />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                            <Sparkles size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Wees de eerste!</h3>
                                        <p className="text-slate-500 mb-8">
                                            Heeft u gebruik gemaakt van onze diensten? Laat een review achter en deel uw ervaring.
                                        </p>
                                        <a href="#" className="inline-flex items-center gap-2 text-white bg-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                                            Schrijf een review
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ - Refined Split Layout */}
            <section className="py-24 bg-slate-50/50 border-t border-slate-200 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        {/* Left Column: Title & Sticky CTA */}
                        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit">
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Vragen & Antwoorden</span>
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">{tFAQ('title')}</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Veelvoorkomende vragen over onze diensten, tarieven en werkwijze.
                            </p>

                            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-900/5 border border-blue-50">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                    <MessageCircle size={24} />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-2">Andere vraag?</h3>
                                <p className="text-slate-500 mb-6">Staat uw vraag er niet tussen? Neem gerust contact met ons op.</p>
                                <Link href="/contact" className="block w-full text-center bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors">
                                    Stel uw vraag
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Accordions */}
                        <div className="w-full lg:w-2/3 space-y-4">
                            {faqs.map((faq: { id: string, question: string, answer: string }) => (
                                <div key={faq.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                                    <FAQAccordion question={faq.question} answer={faq.answer} />
                                </div>
                            ))}
                            {faqs.length === 0 && (
                                <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-200">
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                        <Sparkles size={32} className="text-slate-300" />
                                    </div>
                                    <p className="text-slate-400 font-medium">Veelgestelde vragen worden geladen...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
