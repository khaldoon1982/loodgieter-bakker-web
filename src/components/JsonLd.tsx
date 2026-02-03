export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Plumber",
        "name": "Loodgieter Bakr",
        "image": "https://loodgieterbakr.nl/opengraph-image.png",
        "@id": "https://loodgieterbakr.nl",
        "url": "https://loodgieterbakr.nl",
        "telephone": "0640755336",
        "email": "info@loodgieterbakr.nl",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Fakkelgras 31",
            "addressLocality": "Spijkenisse",
            "postalCode": "3206JE",
            "addressCountry": "NL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.845,
            "longitude": 4.329
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Saturday",
                    "Sunday"
                ],
                "description": "Emergency only"
            }
        ],
        "priceRange": "$$",
        "areaServed": [
            "Spijkenisse",
            "Hoogvliet",
            "Hellevoetsluis",
            "Rockanje",
            "Brielle"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
