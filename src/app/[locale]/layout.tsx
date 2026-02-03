import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/config';
import { Inter } from 'next/font/google';
import "../globals.css";
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Loodgieter Bakr - Loodgieter & Installatie',
    description: 'Specialist in lekkage, verstopping, sanitair en onderhoud in Spijkenisse en omgeving.',
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ... imports

export default async function LocaleLayout({
    children,
    params
}: Props) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={inter.className + " bg-slate-50 text-slate-900"}>
                <NextIntlClientProvider messages={messages}>
                    <div className="flex flex-col min-h-screen">
                        <TopBar />
                        <Header locale={locale} />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <JsonLd />
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
