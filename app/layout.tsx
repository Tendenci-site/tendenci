import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tendenci | Social Media Bureau",
  description:
    "Tendenci er et social media bureau der også håndterer email marketing og hjemmesider — én partner til din digitale tilstedeværelse.",
  icons: {
    icon: "/Tendenci Logo (6).png",
  },
  openGraph: {
    title: "Tendenci – Sociale medier der skaber kunder",
    description:
      "Vi hjælper små og mellemstore virksomheder med at gøre sociale medier til et reelt forretningsværktøj. Struktureret, datadrevet og med fokus på resultater.",
    url: "https://tendenci.dk",
    siteName: "Tendenci",
    images: [{ url: "/kaffe.png", width: 1200, height: 630, alt: "Tendenci – Sociale medier der skaber kunder" }],
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
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
