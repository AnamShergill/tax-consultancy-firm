import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import '../globals.scss';
import BootstrapClient from '@/components/BootstrapClient';
import ThemeProvider from '@/components/ThemeProvider';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ur' }];
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  if (!['en', 'ur'].includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Primary Meta Tags */}
        <title>Tax Consultant Karachi | Expert Tax & Financial Services | TaxConsultant</title>
        <meta name="title" content="Tax Consultant Karachi | Expert Tax & Financial Services" />
        <meta name="description" content="Professional tax consulting and financial advisory services in Karachi, Pakistan. Expert help with Income Tax, GST, Audit, TDS, Company Registration, ITR Filing, Accounting & Tax Planning. Call +92 300 1234567" />
        <meta name="keywords" content="tax consultant karachi, chartered accountant karachi, income tax services, GST registration, audit services, company registration pakistan, ITR filing, tax planning, accounting services, TDS services, financial consultant karachi" />
        <meta name="author" content="TaxConsultant" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.taxconsultant.com/" />
        <meta property="og:title" content="Tax Consultant Karachi | Expert Tax & Financial Services" />
        <meta property="og:description" content="Professional tax consulting and financial advisory services in Karachi. Expert help with Income Tax, GST, Audit, Company Registration & more." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="TaxConsultant" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.taxconsultant.com/" />
        <meta property="twitter:title" content="Tax Consultant Karachi | Expert Tax & Financial Services" />
        <meta property="twitter:description" content="Professional tax consulting and financial advisory services in Karachi, Pakistan." />
        <meta property="twitter:image" content="/images/og-image.jpg" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content="Karachi" />
        <meta name="geo.position" content="24.8607;67.0011" />
        <meta name="ICBM" content="24.8607, 67.0011" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "TaxConsultant",
              "image": "https://www.taxconsultant.com/images/logo.png",
              "description": "Professional tax consulting and financial advisory services for individuals and businesses in Karachi, Pakistan.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Business District",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "postalCode": "75000",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.8607,
                "longitude": 67.0011
              },
              "url": "https://www.taxconsultant.com",
              "telephone": "+92-300-1234567",
              "email": "info@taxconsultant.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/taxconsultant",
                "https://www.twitter.com/taxconsultant",
                "https://www.linkedin.com/company/taxconsultant"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Karachi"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tax & Financial Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Income Tax Services",
                      "description": "Expert income tax planning and filing services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "GST Services",
                      "description": "Complete GST registration, filing, and compliance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Audit Services",
                      "description": "Thorough audit and assurance services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Company Registration",
                      "description": "Complete company incorporation services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <BootstrapClient />          {/* ← Moved UP */}
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}