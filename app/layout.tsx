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
    "Dr. Jibran Bashir is a leading orthopedic surgeon and sports injury specialist in India, offering advanced treatments including joint replacements, arthroscopic surgery, and trauma care. Expert in knee replacement, hip surgery, and sports medicine.",
  keywords: [
    "orthopedic surgeon",
    "sports injury specialist",
    "knee replacement",
    "hip replacement",
    "arthroscopic surgery",
    "joint replacement",
    "Dr Jibran Bashir",
    "orthopedic trauma",
    "deformity correction",
    "3D navigated knee replacement",
    "Ilizarov fixation",
  ],
  authors: [{ name: "Dr. Jibran Bashir" }],
  creator: "Dr. Jibran Bashir",
  publisher: "Dr. Jibran Bashir",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    title: "Dr. Jibran Bashir - Orthopedic Surgeon & Sports Injury Specialist",
    description:
      "Expert orthopedic care including joint replacements, sports injuries, arthroscopic surgery, and trauma treatment. Specialized in knee and hip replacements with advanced 3D navigation technology.",
    siteName: "Dr. Jibran Bashir",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Jibran Bashir - Orthopedic Surgeon",
    description:
      "Specialized orthopedic surgery and sports injury treatment by Dr. Jibran Bashir. Expert in joint replacements and minimally invasive procedures.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://drjibranbashir.com",
  },
  category: "Healthcare",
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "theme-color": "#1AB4BA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
        <GoogleAnalytics gaId="G-49WC28B23C" />
      </body>
    </html>
  );
}
