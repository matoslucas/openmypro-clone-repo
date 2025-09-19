import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenMyPro | Book Health, Wellness & Beauty Appointments Instantly",
  description: "Find and book top-rated health, wellness, and beauty professionals instantly. Premium salon services, medical appointments, and wellness treatments in one platform.",
  keywords: "health appointments, wellness professionals, beauty services, medical bookings, instant booking, healthcare professionals",
  openGraph: {
    title: "OpenMyPro | Instantly Book Trusted Health, Wellness & Beauty Pros",
    description: "Find and book top-rated health, wellness, and beauty professionals instantly. Premium salon services, medical appointments, and wellness treatments in one platform.",
    url: "https://openmypro.com/",
    siteName: "OpenMyPro",
    images: [
      {
        url: "https://openmypro.com/assets/images/OMDLogo.png",
        width: 600,
        height: 600,
        alt: "OpenMyPro Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenMyPro | Instantly Book Trusted Health, Wellness & Beauty Pros",
    description: "Find and book top-rated health, wellness, and beauty professionals instantly. Premium salon services, medical appointments, and wellness treatments in one platform.",
    images: ["https://openmypro.com/assets/images/OMDLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
