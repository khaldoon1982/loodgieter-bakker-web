import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { CheckCircle2, ShieldCheck, User, Wrench, Clock, Award, Hammer, HardHat, Phone } from 'lucide-react';
import { Link } from '@/navigation';
import Image from 'next/image';

export const metadata = {
    title: 'Over Ons - Loodgieter Bakr',
    description: 'Leer meer over Loodgieter Bakr, uw vakkundige specialist in Spijkenisse voor loodgieterswerk, installatie en onderhoud.',
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Navigation' });

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden rounded-b-[3rem] shadow-2xl z-10">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm tracking-wide uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        Over ons bedrijf
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                        Vakmanschap in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Detail</span>
                    </h1>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16 md:py-24 -mt-20 relative z-20">
                <div className="max-w-4xl mx-auto">
                    {/* Main Content Card */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 mb-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-blue-50 w-64 h-64 rounded-bl-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-slate-900">Uw specialist in Spijkenisse</h2>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Loodgieter Bakr is een vakkundig en betrouwbaar loodgietersbedrijf gevestigd in Spijkenisse.
                                    Opgericht door <strong className="text-slate-900">Jwan Bakr</strong>, streven wij naar perfectie in elk project, groot of klein.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    Met jarenlange ervaring in installatietechniek, lekkages, verstoppingen en sanitair renovaties,
                                    weten wij precies wat nodig is om uw problemen duurzaam op te lossen. Wij geloven in heldere communicatie,
                                    eerlijke prijzen en het nakomen van afspraken.
                                </p>
                                <div className="pt-2">
                                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg text-slate-700 font-semibold text-sm">
                                        <ShieldCheck size={18} className="text-blue-600" />
                                        Gecertificeerd & Verzekerd
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 relative">
                                <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                                    {/* Placeholder for About Image if available, otherwise stylish gradient graphic */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-800 flex items-center justify-center p-8 text-center text-white">
                                        <div>
                                            <Wrench size={64} className="mx-auto mb-4 opacity-80" />
                                            <h3 className="text-2xl font-bold">Loodgieter Bakr</h3>
                                            <p className="opacity-75 mt-2">Kwaliteit sinds 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { icon: Clock, title: "Snel ter plaatse", desc: "In regio Voorne-Putten zijn wij vaak binnen 30 minuten aanwezig." },
                            { icon: Award, title: "Garantie op werk", desc: "Wij staan achter ons vakwerk en bieden standaard garantie." },
                            { icon: Hammer, title: "Modern gereedschap", desc: "Gebruik van de nieuwste technieken voor efficiënt werk." },
                            { icon: HardHat, title: "Vakkundig", desc: "Gediplomeerde monteurs met passie voor het vak." },
                            { icon: Phone, title: "24/7 Service", desc: "Dag en nacht bereikbaar voor spoedgevallen." },
                            { icon: ShieldCheck, title: "Eerlijke prijzen", desc: "Geen verrassingen achteraf, duidelijke afspraken vooraf." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Owner & Company Details Split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Owner Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                <User size={150} />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                                        <User size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">De Ondernemer</h3>
                                    <p className="text-blue-100 mb-6">
                                        "Mijn doel is niet alleen om het probleem op te lossen, maar om een oplossing te bieden waar u jarenlang plezier van heeft."
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl">Jwan Bakr</p>
                                    <p className="text-blue-100 text-sm opacity-80">Eigenaar & Hoofdmonteur</p>
                                </div>
                            </div>
                        </div>

                        {/* Company Data Card */}
                        <div className="bg-slate-900 text-slate-300 p-8 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-center border border-white/5">
                            <div className="absolute bottom-0 left-0 p-8 opacity-5">
                                <ShieldCheck size={150} />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-4">Bedrijfsgegevens</h3>
                                <div className="space-y-4">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                                        <span>Handelsnaam</span>
                                        <span className="font-bold text-white">Loodgieter Bakr</span>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                                        <span>KVK Nummer</span>
                                        <span className="font-mono text-white tracking-wider">83081984</span>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                                        <span>Vestiging</span>
                                        <span className="font-medium text-white">Spijkenisse</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95">
                            Neem contact op <Phone size={18} />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
