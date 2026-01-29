import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import { MapPin, ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export const metadata = {
    title: 'Werkgebieden - Loodgieter Bakker',
    description: 'Bekijk onze werkgebieden. Loodgieter Bakker is actief in Spijkenisse, Hoogvliet, Hellevoetsluis, Rockanje en Brielle.',
};

export default async function AreasPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Areas' });

    // Assuming we might want to translate these descriptions later or fetch them, but for now strict layout.
    const areas = [
        {
            id: 'spijkenisse',
            name: 'Spijkenisse',
            active: true,
            description: 'Onze thuisbasis. Hier zijn wij het snelst ter plaatse (vaak < 30 min) voor alle loodgieterswerkzaamheden.'
        },
        {
            id: 'hoogvliet',
            name: 'Hoogvliet',
            active: true,
            description: 'Dagelijks actief in Hoogvliet voor CV-ketel onderhoud, verstoppingen en badkamer renovaties.'
        },
        {
            id: 'hellevoetsluis',
            name: 'Hellevoetsluis',
            active: true,
            description: 'Van de vesting tot de nieuwbouw, wij kennen de woningen en leidingnetwerken in Hellevoetsluis.'
        },
        {
            id: 'rockanje',
            name: 'Rockanje',
            active: true,
            description: 'Ook voor recreatiewoningen en vaste bewoners in Rockanje staan wij klaar met vakkundige service.'
        },
        {
            id: 'brielle',
            name: 'Brielle',
            active: true,
            description: 'Specialist in het renoveren van sanitair en leidingwerk in de historische panden van Brielle.'
        },
        {
            id: 'rozenburg',
            name: 'Rozenburg',
            active: true,
            description: 'Snelle service via de Calandbrug of tunnel. Wij helpen u bij lekkage en verstopping.'
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden rounded-b-[3rem] shadow-2xl z-10">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm tracking-wide uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        Actief in uw regio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                        Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Werkgebieden</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Vanuit Spijkenisse bedienen wij de gehele regio Voorne-Putten en Rijnmond.
                        Altijd een vakkundige loodgieter in de buurt.
                    </p>
                </div>
            </div>

            <main className="container mx-auto px-4 py-16 md:py-24 -mt-20 relative z-20">
                {/* Interactive Area Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {areas.map((area, index) => (
                        <div key={area.id} className="group bg-white rounded-[2rem] p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100 group-hover:border-blue-500 group-hover:shadow-blue-500/30">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Actief
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {area.name}
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-sm mb-8 min-h-[60px]">
                                    {area.description}
                                </p>

                                <div className="pt-6 border-t border-slate-100 flex items-center justify-between group/link">
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors">Direct hulp nodig?</span>
                                    <Link href="/contact" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                                        <ArrowRight size={18} className="transform group-hover/link:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Info Section */}
                <div className="mt-16 md:mt-24 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-2/3">
                            <h3 className="text-3xl font-black text-slate-900 mb-6">Staat uw woonplaats er niet tussen?</h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Woont u in de omgeving van Voorne-Putten maar staat uw specifieke dorp of stad er niet bij?
                                Geen zorgen. Neem contact met ons op om de mogelijkheden te bespreken.
                                Wij rijden regelmatig naar omliggende gemeenten.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-blue-500" /> Flexibele planning</li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-blue-500" /> Duidelijke voorrijkosten</li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-blue-500" /> Snelle reactietijd</li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={18} className="text-blue-500" /> Eerlijk advies</li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/3 text-center lg:text-right">
                            <Link href="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 group">
                                Neem contact op
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
