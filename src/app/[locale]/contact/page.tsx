import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

export const metadata = {
    title: 'Contact - Loodgieter Bakker',
    description: 'Neem contact op met Loodgieter Bakker in Spijkenisse voor al uw loodgieterswerk.',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'Contact' });

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{t('title')}</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info */}
                        <div className="space-y-10">
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Heeft u een vraag of wilt u direct een afspraak maken?
                                Neem contact op via onderstaande gegevens of vul het formulier in.
                                Wij reageren doorgaans binnen één werkdag.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 border border-gray-100 group-hover:border-blue-200 transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Telefoon</h3>
                                        <p className="text-gray-500 mb-1">Direct bereikbaar voor afspraken</p>
                                        <a href="tel:0640755336" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">06-40755336</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 border border-gray-100 group-hover:border-blue-200 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">E-mail</h3>
                                        <p className="text-gray-500 mb-1">Voor offertes en vragen</p>
                                        <a href="mailto:info@loodgieterbakker.nl" className="text-xl font-medium text-blue-600 hover:text-blue-700 transition">info@loodgieterbakker.nl</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 border border-gray-100 group-hover:border-blue-200 transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Bezoekadres</h3>
                                        <div className="text-gray-600 leading-relaxed">
                                            <span className="font-semibold text-slate-800">Loodgieter Bakker</span><br />
                                            Fakkelgras 31<br />
                                            3206JE Spijkenisse
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600 border border-gray-100 group-hover:border-blue-200 transition-colors">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Openingstijden</h3>
                                        <p className="text-gray-600">Maandag - Vrijdag: 08:00 - 18:00</p>
                                        <p className="text-blue-600 font-medium mt-1">Weekend & Avond: Enkel spoed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <div className="sticky top-24">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
