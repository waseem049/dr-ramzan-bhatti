import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppLayout from "./AppLayout";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Dr. Ramzan Bhatti - Dermatologist & Laser Skin Specialist",
    template: "%s | Dr. Ramzan Bhatti",
  },
  description:
    "Dr. Ramzan Bhatti, top Dermatologist & Laser Specialist, specializes in acne treatment, laser hair removal, anti-aging, pigmentation, and cosmetic dermatology.",
  keywords: [
    "Dermatology",
    "Skin Specialist",
    "Laser Hair Removal",
    "Acne Treatment",
    "Cosmetic Dermatologist",
    "Skin Care Clinic",
    "Anti-Aging Treatment",
    "Dr. Ramzan Bhatti",
    "Laser Skin Specialist",
    "Best Skin Doctor",
    "Pigmentation Treatment",
    "Tattoo Removal",
    "Scar Treatment",
    "HydraFacial",
    "Botox and Fillers",
    "PRP Therapy",
  ],
  authors: [
    { name: "Dr. Ramzan Bhatti", url: "https://www.drramzanbhatti.com" },
  ],
  creator: "Dr. Ramzan Bhatti",
  publisher: "Dr. Ramzan Bhatti",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.drramzanbhatti.com",
    title: "Dr. Ramzan Bhatti - Dermatologist & Laser Skin Specialist",
    description:
      "Dr. Ramzan Bhatti, top Dermatologist & Laser Specialist, specializes in acne treatment, laser hair removal, anti-aging, pigmentation, and cosmetic dermatology.",
    siteName: "Dr. Ramzan Bhatti",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Dr. Ramzan Bhatti - Dermatologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@drramzanbhatti",
    creator: "@drramzanbhatti",
    title: "Dr. Ramzan Bhatti - Dermatologist & Laser Skin Specialist",
    description:
      "Dr. Ramzan Bhatti, top Dermatologist & Laser Specialist, specializes in acne treatment, laser hair removal, anti-aging, pigmentation, and cosmetic dermatology.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.drramzanbhatti.com",
  },
  category: "Healthcare",
  other: {
    "geo.region": "IN-JK",
    "geo.placename": "Srinagar, Jammu & Kashmir, India",
    "geo.position": "34.0837;74.7973",
    ICBM: "34.0837,74.7973",
    "theme-color": "#D88D7F", // Rose/Blush
    "og:email": "info@drramzanbhatti.com",
    "og:phone_number": "+910000000000",
  },
  metadataBase: new URL("https://www.drramzanbhatti.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Analytics */}
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="8979548d-f116-430d-838f-acc18971fe9a"
        ></script>

        {/* JSON-LD Schema for Person + Medical Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Dr. Ramzan Bhatti",
                jobTitle: "Dermatologist & Laser Specialist",
                description:
                  "Dr. Ramzan Bhatti, top Dermatologist & Laser Specialist, specializes in acne treatment, laser hair removal, anti-aging, pigmentation, and cosmetic dermatology.",
                image: "/images/doctor.png",
                url: "https://www.drramzanbhatti.com",
                telephone: "+91-0000000000",
                sameAs: [
                  "https://www.facebook.com/drramzanbhatti",
                  "https://www.instagram.com/drramzanbhatti",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Clinic Address",
                  addressLocality: "City",
                  addressRegion: "State",
                  addressCountry: "India",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                name: "Dr. Ramzan Bhatti Skin Clinic",
                image: "/images/hero-bg.png",
                telephone: ["+91-0000000000"],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Clinic Address",
                  addressLocality: "City",
                  addressRegion: "State",
                  addressCountry: "India",
                },
                openingHours: "Mo-Sa 10:00-19:00",
                url: "https://www.drramzanbhatti.com",
              },
            ]),
          }}
        />
      </head>
      <body>
        <AppLayout>{children}</AppLayout>
        <GoogleAnalytics gaId="G-49WC28B23C" />
      </body>
    </html>
  );
}
