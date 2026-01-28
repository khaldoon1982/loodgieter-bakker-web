import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Droplets, Settings, ShowerHead, Wrench, Hammer, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Link } from '@/navigation';
import Image from 'next/image';

export const metadata = {
    title: 'Onze Diensten - Loodgieter Bakker',
    description: 'Bekijk onze loodgietersdiensten: lekkage, verstopping, sanitair, en meer.',
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Services' });

    const services = [
        {
            id: 'lekkage',
            title: t('leak'),
            icon: <Droplets size={32} />,
            image: '/service-leakage.png',
            content: "Heeft u last van een lekkage? Waterlekkages kunnen grote schade aanrichten aan uw woning. Wij sporen de lekkage snel op en repareren deze vakkundig. Of het nu gaat om een lekkend dak, een gesprongen leiding of lekkage in de badkamer.",
            features: ["Snel opsporen", "Minimale schade", "Vakkundig herstel"]
        },
        {
            id: 'verstopping',
            title: t('clog'),
            icon: <ShowerHead size={32} />,
            image: '/service-clog.png',
            content: "Een verstopte afvoer of toilet is erg vervelend. Wij beschikken over de juiste apparatuur om uw riolering of afvoer snel en grondig te reinigen en verstoppingen te verhelpen.",
            features: ["Riolering reinigen", "Toilet ontstoppen", "Preventief advies"]
        },
        {
            id: 'sanitair',
            title: t('sanitary'),
            icon: <Settings size={32} />,
            image: '/service-bathroom.png',
            content: "Toe aan een nieuwe badkamer of toilet? Wij verzorgen de complete installatie van uw sanitair. Van het plaatsen van een nieuwe kraan tot een volledige badkamerrenovatie.",
            features: ["Badkamer installatie", "Toilet renovatie", "Oude leidingen vervangen"]
        },
        {
            id: 'leidingwerk',
            title: t('pipes'),
            icon: <Wrench size={32} />,
            image: '/service-pipes.png',
            content: "Voor het aanleggen, verleggen of repareren van water- en gasleidingen bent u bij ons aan het juiste adres. Wij werken volgens de laatste veiligheidsnormen.",
            features: ["Gasleidingen", "Waterleidingen", "Veiligheidskeuring"]
        },
        {
            id: 'onderhoud',
            title: t('maintenance'),
            icon: <Hammer size={32} />,
            image: '/service-maintenance.png',
            content: "Goed onderhoud voorkomt problemen. Wij voeren periodiek onderhoud uit aan uw cv-ketel, dakgoten en installaties om storingen en lekkages voor te zijn.",
            features: ["CV-Ketel", "Dakgoten", "Jaarlijkse check"]
        }
    ];

    return (
        <div className="bg-slate-950 min-h-screen flex flex-col font-sans">
            <main className="flex-grow">
                {/* Page Header */}
                <div className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <div className="inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            <span className="text-blue-400 text-sm font-bold tracking-wide uppercase">Onze Expertise</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                            Vakkundige <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Diensten</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Van lekkages tot complete badkamerrenovaties. Wij staan garant voor kwaliteit, snelheid en betrouwbaarheid in Spijkenisse en omgeving.
                        </p>
                    </div>
                </div>

                {/* Services List */}
                <div className="container mx-auto px-4 pb-24 space-y-32">
                    {services.map((service, index) => (
                        <section key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Text Content */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/40">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                                </div>

                                <p className="text-slate-400 text-lg leading-loose">
                                    {service.content}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300">
                                            <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 flex flex-wrap gap-4">
                                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-1">
                                        Offerte aanvragen <ArrowRight size={18} className="text-blue-600" />
                                    </Link>
                                    <a href="tel:0640755336" className="inline-flex items-center gap-2 bg-white/5 text-white border border-white/10 px-7 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all">
                                        <Phone size={18} className="text-blue-500" />
                                        Direct bellen
                                    </a>
                                </div>
                            </div>

                            {/* Image Card */}
                            <div className="w-full lg:w-1/2 relative group">
                                {/* Decorative Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>

                                    {/* Badge */}
                                    <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white font-medium text-sm">
                                        Loodgieter Bakker Kwaliteit
                                    </div>
                                </div>
                            </div>

                        </section>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="bg-blue-600 py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white">Heeft u direct hulp nodig?</h2>
                        <p className="text-blue-100 text-xl max-w-2xl mx-auto">
                            Wij zijn 24/7 bereikbaar voor spoedgevallen. Bel ons direct en wij komen zo snel mogelijk naar u toe.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="tel:0640755336" className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                                <Phone size={24} />
                                06-40755336
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
