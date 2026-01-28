import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://loodgieterbakker.nl';

    // Static routes for NL and EN
    const routes = ['', '/diensten', '/werkgebieden', '/over-ons', '/contact', '/privacy'];
    const locales = ['nl', 'en'];

    const entries: MetadataRoute.Sitemap = [];

    locales.forEach(locale => {
        routes.forEach(route => {
            entries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });

    return entries;
}
