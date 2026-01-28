import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { setRequestLocale } from 'next-intl/server';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Header locale={locale} />

            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-slate prose-blue max-w-none">
                    <h1>Privacyverklaring</h1>
                    <p className="lead">
                        Loodgieter Bakker hecht veel waarde aan de bescherming van uw persoonsgegevens.
                        In deze privacyverklaring leggen wij uit hoe wij omgaan met uw gegevens.
                    </p>

                    <h3>Contactgegevens</h3>
                    <p>
                        Loodgieter Bakker<br />
                        Fakkelgras 31, 3206JE Spijkenisse<br />
                        KVK: 83081984<br />
                        <a href="mailto:info@loodgieterbakker.nl">info@loodgieterbakker.nl</a>
                    </p>

                    <h3>Persoonsgegevens die wij verwerken</h3>
                    <p>Wij verwerken uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt.</p>
                    <ul>
                        <li>Voor- en achternaam</li>
                        <li>Adresgegevens</li>
                        <li>Telefoonnummer</li>
                        <li>E-mailadres</li>
                        <li>Overige persoonsgegevens die u actief verstrekt via contactformulieren</li>
                    </ul>

                    <h3>Doel van de verwerking</h3>
                    <p>Wij verwerken uw gegevens voor de volgende doelen:</p>
                    <ul>
                        <li>Het afhandelen van uw betaling</li>
                        <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
                        <li>Om goederen en diensten bij u af te leveren</li>
                    </ul>

                    <h3>Delen van gegevens</h3>
                    <p>
                        Loodgieter Bakker verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is
                        voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
                    </p>

                    <h3>Gegevens inzien, aanpassen of verwijderen</h3>
                    <p>
                        U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen.
                        Neem hiervoor contact op via info@loodgieterbakker.nl.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
