import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';

export const metadata = {
    title: 'Contact - Loodgieter Bakker',
    description: 'Neem contact op met Loodgieter Bakker in Spijkenisse voor al uw loodgieterswerk. 24/7 bereikbaar.',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'Contact' });

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header Section */}
            <div className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden rounded-b-[3rem] shadow-2xl z-10">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm tracking-wide uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        Contact & Service
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Start uw <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Aanvraag</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Heeft u een vraag of wilt u direct een afspraak maken?
                        Wij staan 24/7 voor u klaar met vakkundig advies en snelle service.
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16 md:py-24 -mt-20 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    {/* Left Column: Contact Info */}
                    <div className="w-full lg:w-5/12 space-y-8">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            {/* Phone */}
                            <a href="tel:0640755336" className="group bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-blue-200/50 flex items-center gap-6">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">Direct Bellen</h3>
                                    <p className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">06-40755336</p>
                                    <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-0.5 rounded-full mt-1 inline-block">● Nu bereikbaar</span>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:info@loodgieterbakker.nl" className="group bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-cyan-200/50 flex items-center gap-6">
                                <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">E-mail ons</h3>
                                    <p className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors break-all">info@loodgieterbakker.nl</p>
                                    <span className="text-slate-400 text-xs mt-1 inline-block">Reactie binnen 24u</span>
                                </div>
                            </a>

                            {/* Address */}
                            <div className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 flex items-start gap-6">
                                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">Bezoekadres</h3>
                                    <p className="text-lg font-bold text-slate-900">Loodgieter Bakker</p>
                                    <p className="text-slate-600">Fakkelgras 31</p>
                                    <p className="text-slate-600">3206 JE Spijkenisse</p>
                                    <a href="https://maps.google.com/?q=Loodgieter+Bakker+Spijkenisse" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 font-bold text-sm mt-3 hover:underline">
                                        Routebeschrijving <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                    <Clock size={100} className="-rotate-12" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-blue-600 rounded-lg"><Clock size={20} /></div>
                                        <h3 className="font-bold text-xl">Openingstijden</h3>
                                    </div>
                                    <ul className="space-y-4 text-sm md:text-base">
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span className="text-slate-400">Maandag - Vrijdag</span>
                                            <span className="font-bold">08:00 - 18:00</span>
                                        </li>
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span className="text-slate-400">Zaterdag</span>
                                            <span className="font-bold">09:00 - 17:00</span>
                                        </li>
                                        <li className="flex justify-between pt-2">
                                            <span className="text-slate-400">Zondag</span>
                                            <span className="font-bold text-blue-400">Enkel Spoed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full lg:w-7/12">
                        <ContactForm />
                    </div>
                </div>
            </main>
        </div>
    );
}
