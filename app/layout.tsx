import { Providers } from "./providers"
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AuthWrapper from "@/components/wrapper/auth-wrapper";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import generateSchema from './schema'

export const metadata: Metadata = {
  metadataBase: new URL("https://firedrop.site/"),
  title: {
    default: "Firedrop | College Projects Made Easy",
    template: `%s | Firedrop`,
  },
  description: 'Professional academic project development service. We build custom college projects while you focus on learning. No backlog guarantee, plagiarism-free, on-time delivery, and 24/7 support.',
  openGraph: {
    title: "Firedrop | College Projects Made Easy",
    description:
      "Professional academic project development service. We build custom college projects while you focus on learning. No backlog guarantee, plagiarism-free, on-time delivery, and 24/7 support.",
    images: [
      {
        url: '/testimonials/ss_rohit.jpg',
        width: 1200,
        height: 630,
        alt: 'Firedrop - College Projects Made Easy'
      }
    ],
    url: "https://firedrop.site/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firedrop | College Projects Made Easy",
    description:
      "Professional academic project development service. We build custom college projects while you focus on learning. No backlog guarantee, plagiarism-free, on-time delivery, and 24/7 support.",
    siteId: "",
    creator: "@firedrop",
    creatorId: "",
    images: [
      {
        url: '/testimonials/ss_rohit.jpg',
        width: 1200,
        height: 630,
        alt: 'Firedrop - College Projects Made Easy'
      }
    ],
  },
  keywords: [
    "college projects",
    "academic projects",
    "project development",
    "student projects",
    "custom projects",
    "programming projects",
    "engineering projects",
    "no backlog guarantee",
    "plagiarism-free",
    "on-time delivery",
    "24/7 support",
    "Firedrop",
    "professional projects"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateSchema()
  
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <head>
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Firedrop Academic Project Service",
                "serviceType": "Academic Project Development",
                "description": "Professional academic project development service. We build custom college projects while you focus on learning.",
                "provider": {
                  "@type": "Organization",
                  "name": "Firedrop",
                  "url": "https://firedrop.site"
                },
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceCurrency": "INR"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "150"
                }
              })
            }}
          />
          <Script
            id="organization-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Firedrop",
                "url": "https://firedrop.site",
                "logo": "https://firedrop.site/logo.png",
                "sameAs": [
                  "https://twitter.com/firedrop"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "availableLanguage": ["English"]
                }
              })
            }}
          />
          <Script
            id="website-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Firedrop - College Projects Made Easy",
                "url": "https://firedrop.site",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://firedrop.site/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </head>
        <body className={GeistSans.className}>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <WhatsAppButton />
              <Toaster />
            </ThemeProvider>
          </Providers>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  );
}
