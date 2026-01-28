import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { CheckCircle2, ShieldCheck, User } from 'lucide-react';
import { Link } from '@/navigation';

export const metadata = {
    title: 'Over Ons - Loodgieter Bakker',
    description: 'Leer meer over Loodgieter Bakker, uw specialist in Spijkenisse.',
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Navigation' });

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <main className="flex-grow container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-slate-900 mb-6">Over Loodgieter Bakker</h1>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Loodgieter Bakker is een vakkundig en betrouwbaar loodgietersbedrijf gevestigd in Spijkenisse.
                            Opgericht door <strong>Jwan Bakr</strong>, streven wij naar perfectie in elk project, groot of klein.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Met jarenlange ervaring in installatietechniek, lekkages, verstoppingen en sanitair renovaties,
                            weten wij precies wat nodig is om uw problemen duurzaam op te lossen. Wij geloven in heldere communicatie,
                            eerlijke prijzen en het nakomen van afspraken.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {[
                                "Snel ter plaatse in regio Voorne-Putten",
                                "Duidelijke prijsafspraken vooraf",
                                "Gebruik van professionele apparatuur",
                                "Garantie op uitgevoerd werk",
                                "Klantvriendelijk en netjes",
                                "24/7 bereikbaar voor spoed"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <User size={40} className="mb-4 text-blue-200" />
                                <h3 className="text-xl font-bold mb-2">De Ondernemer</h3>
                                <p className="text-blue-100">Jwan Bakr</p>
                                <p className="text-blue-100 opacity-80 text-sm mt-1">Eigenaar & Hoofdmonteur</p>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                                <User size={200} />
                            </div>
                        </div>

                        <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden flex flex-col justify-center">
                            <ShieldCheck size={40} className="mb-4 text-green-500" />
                            <h3 className="text-xl font-bold mb-2">Bedrijfsgegevens</h3>
                            <p className="text-gray-600 font-medium">Loodgieter Bakker</p>
                            <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                                <span className="font-bold">KVK:</span> 83081984
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-8">
                        <Link href="/contact" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg hover:shadow-xl">
                            Neem contact op
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
