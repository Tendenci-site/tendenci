import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import SundhedscheckPopup from "./components/SundhedscheckPopup";
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Tendenci – Digital marketing der skaber kunder",
  description:
    "Vi hjælper SMV'er med paid ads, SEO og email marketing - det der rent faktisk skaber kunder. Ingen likes uden salg.",
  icons: {
    icon: "/Tendenci Logo (6).png",
  },
  openGraph: {
    title: "Tendenci – Digital marketing der skaber kunder",
    description:
      "Vi hjælper små og mellemstore virksomheder med at gøre sociale medier til et reelt forretningsværktøj. Struktureret, datadrevet og med fokus på resultater.",
    url: "https://tendenci.dk",
    siteName: "Tendenci",
    images: [{ url: "/kaffe.png", width: 1200, height: 630, alt: "Tendenci – Digital marketing der skaber kunder" }],
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className={`${manrope.className} min-h-full flex flex-col`}>
        {children}
        <CookieBanner />
      <SundhedscheckPopup />
      </body>
    </html>
  );
}
