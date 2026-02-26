import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Providers from "./providers";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-playfair",
    display: "swap",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-dm-sans",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://kannurgardens.com"),
    title: "Kannur Gardens – Best Luxury Wedding & Event Venue in Kannur, Kerala",
    description:
        "Kannur Gardens is the best luxury wedding venue in Kannur, Kerala. AC banquet hall, outdoor garden, 200+ car parking. Book for 250–1000 guests. Call +91 90747 71838.",
    keywords: [
        "wedding venue Kannur",
        "banquet hall Kannur",
        "garden wedding Kerala",
        "luxury wedding venue",
        "event venue Kannur",
        "marriage hall Kannur",
        "wedding reception hall Kannur",
    ],
    authors: [{ name: "Kannur Gardens" }],
    robots: { index: true, follow: true },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Kannur Gardens – Best Luxury Wedding & Event Venue in Kannur",
        description:
            "Grand & elegant celebrations at Kerala's finest wedding venue. AC banquet hall, outdoor garden & parking for 200+ cars. Up to 1000 guests.",
        type: "website",
        url: "/",
        locale: "en_IN",
        siteName: "Kannur Gardens",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kannur Gardens – Luxury Wedding Venue in Kannur",
        description:
            "AC banquet hall, outdoor garden, 200+ car parking. Book your dream wedding venue in Kannur today.",
    },
    other: {
        "theme-color": "#8B7338",
    },
};

// JSON-LD Structured Data for Local Business / EventVenue
const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Kannur Gardens",
    description:
        "Kannur Gardens is the premier luxury wedding and event venue in Kannur, Kerala. Featuring an AC banquet hall, outdoor garden lawn, and grand event pavilion for up to 1000 guests.",
    url: "https://kannurgardens.com",
    telephone: "+919074771838",
    email: "kannurgardens@gmail.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Thekilepeedika, Thazhe Chovva",
        addressLocality: "Kannur",
        addressRegion: "Kerala",
        postalCode: "670007",
        addressCountry: "IN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 11.8669,
        longitude: 75.4037,
    },
    image: "https://kannurgardens.com/images/hero-wedding.jpg",
    priceRange: "₹₹₹",
    openingHours: "Mo-Su 09:00-22:00",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "100",
        bestRating: "5",
        worstRating: "4",
    },
    amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
        { "@type": "LocationFeatureSpecification", name: "Catering", value: true },
        { "@type": "LocationFeatureSpecification", name: "Event Planning", value: true },
    ],
    maximumAttendeeCapacity: 1000,
};

// FAQ Schema
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the best wedding venue in Kannur?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kannur Gardens is widely regarded as one of the best wedding venues in Kannur. We offer a luxury AC banquet hall, a beautiful outdoor garden lawn, and a grand customisable event space — all within a single premium venue that can host 250 to 1000+ guests.",
            },
        },
        {
            "@type": "Question",
            name: "How do I book Kannur Gardens for my wedding?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Booking is simple! You can call us at +91 90747 71838 or send a WhatsApp message. We recommend scheduling a venue visit to explore our spaces. Our event planning team will help customise every detail — from decor to catering — for a seamless experience.",
            },
        },
        {
            "@type": "Question",
            name: "What is the guest capacity at Kannur Gardens?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We offer flexible capacity options: The Orchid Hall (AC banquet) seats up to 250 guests, the Jasmine Lawn (outdoor garden) seats 600–800 guests, and the Lotus Pavilion (grand event area) can accommodate up to 1000+ guests. We can tailor the setup to your specific requirements.",
            },
        },
        {
            "@type": "Question",
            name: "Is there parking available at the venue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Kannur Gardens provides spacious and secure parking facilities that can accommodate over 200 cars. This is one of the largest parking areas among wedding venues in Kannur, ensuring a hassle-free experience for your guests.",
            },
        },
        {
            "@type": "Question",
            name: "Do you have indoor and outdoor wedding options?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely! We offer both indoor and outdoor venues. The Orchid Hall is a fully air-conditioned indoor banquet hall, while the Jasmine Lawn is a scenic outdoor garden space perfect for day and night weddings. You can even combine both for different ceremony segments.",
            },
        },
        {
            "@type": "Question",
            name: "What is the approximate pricing for a wedding at Kannur Gardens?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our pricing varies based on the space, number of guests, catering preferences, and decor requirements. We offer customisable packages to fit different budgets. Please contact us at +91 90747 71838 for a personalised quote tailored to your event needs.",
            },
        },
        {
            "@type": "Question",
            name: "Do you offer in-house catering and decoration services?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Kannur Gardens provides premium in-house catering with multi-cuisine menu options crafted by experienced chefs. We also offer professional in-house decoration services with customisable themes. Our dedicated event planning team ensures every detail of your celebration is perfect.",
            },
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
            <head>
                <link rel="dns-prefetch" href="https://wa.me" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </head>
            <body className="antialiased">
                <Providers>
                    <TooltipProvider>
                        <Toaster />
                        <Sonner />
                        {children}
                    </TooltipProvider>
                </Providers>
            </body>
        </html>
    );
}
