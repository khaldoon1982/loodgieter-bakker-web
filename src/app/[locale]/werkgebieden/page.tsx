import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import { MapPin } from 'lucide-react';

export const metadata = {
    title: 'Werkgebieden - Loodgieter Bakker',
    description: 'Wij zijn actief in Spijkenisse, Hoogvliet, Hellevoetsluis, Rockanje en Brielle.',
};

export default async function AreasPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const areas = [
        {
            id: 'spijkenisse',
            name: 'Spijkenisse',
            description: 'Als loodgieter in Spijkenisse zijn wij snel ter plaatse in alle wijken, van de Akkers tot de Maaswijk. Voor lekkages, verstoppingen en installatiewerk bent u bij ons aan het juiste adres.'
        },
        {
            id: 'hoogvliet',
            name: 'Hoogvliet',
            description: 'Woont u in Hoogvliet en zoekt u een betrouwbare loodgieter? Wij helpen u graag met al uw sanitair problemen en onderhoud aan uw CV-ketel.'
        },
        {
            id: 'hellevoetsluis',
            name: 'Hellevoetsluis',
            description: 'Ook in Hellevoetsluis staan wij voor u klaar. Van de vesting tot de nieuwe wijken, wij leveren vakwerk en service.'
        },
        {
            id: 'rockanje',
            name: 'Rockanje',
            description: 'Loodgieter nodig in Rockanje? Wij komen graag bij u langs voor inspectie en reparatie van uw leidingwerk of dakgoten.'
        },
        {
            id: 'brielle',
            name: 'Brielle',
            description: 'In de historische vestingstad Brielle zorgen wij voor modern loodgieterswerk met respect voor uw woning.'
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <main className="flex-grow">
                <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Werkgebieden</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Wij zijn actief in de regio Voorne-Putten en Rijnmond.</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {areas.map((area) => (
                            <section key={area.id} id={area.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition duration-300 group">
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">Loodgieter {area.name}</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">
                                    {area.description}
                                </p>
                                <Link href="/contact" className="inline-block w-full text-center bg-gray-50 hover:bg-blue-600 hover:text-white text-slate-700 font-bold py-3 rounded-xl transition-colors">
                                    Afspraak maken
                                </Link>
                            </section>
                        ))}
                    </div>

                    <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 text-center border border-gray-100 shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Staat uw woonplaats er niet tussen?</h3>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Neem gerust contact met ons op. In veel gevallen kunnen wij u ook in omliggende plaatsen van dienst zijn.
                            </p>
                            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:-translate-y-0.5">
                                Neem contact op
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}
