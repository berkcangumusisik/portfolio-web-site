import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import profile from "../data/profile.json";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profile.title,
  description: profile.about,
};

const siteUrl = "https://berkcangumusisik.com";
const siteName = "Berkcan Gümüşışık Portfolio";
const keywords = [
  "Berkcan Gümüşışık",
  "Full Stack Developer",
  "React",
  "Next.js",
  ".NET Core",
  "Tailwind CSS",
  "Portfolio",
  "Yazılım Geliştirici",
  "AI Developer",
  "Web Developer",
  "Freelance Developer",
  "Ankara",
  "Türkiye"
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#18181b" />
        <title>{profile.title}</title>
        <meta name="description" content={profile.about} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="author" content="Berkcan Gümüşışık" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={profile.title} />
        <meta property="og:description" content={profile.about} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:image" content="/public/globe.svg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={profile.title} />
        <meta name="twitter:description" content={profile.about} />
        <meta name="twitter:site" content="@berkcangumusisik" />
        <meta name="twitter:creator" content="@berkcangumusisik" />
        <meta name="twitter:image" content="/public/globe.svg" />
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Berkcan Gümüşışık",
            "url": siteUrl,
            "image": `${siteUrl}/public/globe.svg`,
            "sameAs": [
              "https://github.com/berkcangumusisik",
              "https://www.linkedin.com/in/berkcan-gumusisik/"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": siteName
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ankara",
              "addressCountry": "Türkiye"
            }
          })
        }} />
      </head>
      <body
        className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
