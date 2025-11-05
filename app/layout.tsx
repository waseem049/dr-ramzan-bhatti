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
    default:
      "Dr. Jibran Bashir - Orthopedic Surgeon & Sports Injury Specialist",
    template: "%s | Dr. Jibran Bashir",
  },
  description:
    "Dr. Jibran Bashir, top orthopedic surgeon in Srinagar J&K, specializes in joint replacement, arthroscopy, sports injuries, knee, hip surgeries and more.",
  keywords: [
    "Dr Jibran Bashir",
    "orthopedic surgeon Srinagar",
    "best orthopedic doctor in Srinagar",
    "sports injury specialist Kashmir",
    "knee replacement doctor Srinagar",
    "hip replacement surgeon Kashmir",
    "arthroscopic surgery Srinagar",
    "joint replacement Kashmir",
    "fracture treatment Srinagar",
    "bone fracture specialist J&K",
    "orthopedic trauma care Kashmir",
    "sports medicine doctor India",
    "ACL reconstruction Srinagar",
    "arthritis treatment J&K",
    "orthopedic care India",
    "3D navigated knee replacement",
    "Ilizarov fixation Srinagar",
    "minimally invasive orthopedic surgery",
    "orthopedic rehabilitation Kashmir",
    "joint pain specialist Srinagar",
    "shoulder surgery J&K",
    "bone and joint doctor near me",
    "orthopedic clinic in Srinagar",
    "best orthopedic in Jammu and Kashmir",
    "sports injury treatment in Kashmir",
    "orthopedic doctor in India",
    "bone specialist in Kashmir",
    "orthopedic hospital in Srinagar",
    "joint care clinic in Kashmir",
    "BoneSense Joint Care Clinic",
    "Kawoosa Hospital Umerabad",
    "orthopedic services in Srinagar",
    "orthopedic consultation online India",
  ],
  authors: [
    { name: "Dr. Jibran Bashir", url: "https://www.drjibranbashir.com" },
  ],
  creator: "Dr. Jibran Bashir",
  publisher: "Dr. Jibran Bashir",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.drjibranbashir.com",
    title: "Dr. Jibran Bashir - Orthopedic Surgeon & Sports Injury Specialist",
    description:
      "Dr. Jibran Bashir, top orthopedic surgeon in Srinagar J&K, specializes in joint replacement, arthroscopy, sports injuries, knee, hip surgeries and more.",
    siteName: "Dr. Jibran Bashir",
    locale: "en_IN",
    images: [
      {
        url: "https://harud.s3.ap-south-1.amazonaws.com/1751178403906.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Jibran Bashir - Orthopedic Surgeon Srinagar Kashmir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@drjibranbashir",
    creator: "@drjibranbashir",
    title: "Dr. Jibran Bashir - Orthopedic Surgeon & Sports Injury Specialist",
    description:
      "Dr. Jibran Bashir, top orthopedic surgeon in Srinagar J&K, specializes in joint replacement, arthroscopy, sports injuries, knee, hip surgeries and more.",
    images: ["https://harud.s3.ap-south-1.amazonaws.com/1751178403906.jpeg"],
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
    canonical: "https://www.drjibranbashir.com",
  },
  category: "Healthcare",
  other: {
    "geo.region": "IN-JK",
    "geo.placename": "Srinagar, Jammu & Kashmir, India",
    "geo.position": "34.0837;74.7973",
    ICBM: "34.0837,74.7973",
    "theme-color": "#1AB4BA",
    "og:email": "info@drjibranbashir.com",
    "og:phone_number": "+918491049816",
    "og:instagram":
      "https://www.instagram.com/yourbonedoctor?igsh=cm1hZjB2dGZvdmtu",
    "og:facebook": "https://www.facebook.com/share/1JJm7bJiWN/",
    "og:linkedin":
      "https://www.linkedin.com/in/dr-jibran-bashir-387806190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  metadataBase: new URL("https://www.drjibranbashir.com"),
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
                name: "Dr. Jibran Bashir",
                jobTitle: "Orthopedic Surgeon & Sports Injury Specialist",
                description:
                  "Dr. Jibran Bashir, top orthopedic surgeon in Srinagar J&K, specializes in joint replacement, arthroscopy, sports injuries, knee, hip surgeries and more.",
                image:
                  "https://harud.s3.ap-south-1.amazonaws.com/1751178403906.jpeg",
                url: "https://www.drjibranbashir.com",
                telephone: "+91-8491049816",
                sameAs: [
                  "https://www.facebook.com/share/1JJm7bJiWN/",
                  "https://www.instagram.com/yourbonedoctor?igsh=cm1hZjB2dGZvdmtu",
                  "https://www.linkedin.com/in/dr-jibran-bashir-387806190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "PC Depot, Parimpora",
                  addressLocality: "Srinagar",
                  addressRegion: "Jammu & Kashmir",
                  addressCountry: "India",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                name: "BoneSense Joint Care Clinic",
                image:
                  "https://harud.s3.ap-south-1.amazonaws.com/1751178403906.jpeg",
                telephone: ["+91-8491049816", "+91-8491999816"],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "PC Depot, Parimpora",
                  addressLocality: "Srinagar",
                  addressRegion: "Jammu & Kashmir",
                  addressCountry: "India",
                },
                openingHours: "Mo-Sa 09:00-18:00",
                url: "https://www.drjibranbashir.com",
              },
              {
                "@context": "https://schema.org",
                "@type": "Hospital",
                name: "Kawoosa Hospital",
                image:
                  "https://harud.s3.ap-south-1.amazonaws.com/1751178403906.jpeg",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Umerabad, Srinagar",
                  addressRegion: "Jammu & Kashmir",
                  addressCountry: "India",
                },
                telephone: ["+91-8491049816", "+91-8491999816"],
                url: "https://www.drjibranbashir.com",
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
