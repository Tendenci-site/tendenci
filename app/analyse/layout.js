export const metadata = {
  title: "Gratis virksomhedsanalyse | Tendenci",
  description:
    "Få en gratis og uforpligtende analyse af din virksomheds online tilstedeværelse. Vi gennemgår dine sociale medier og giver dig konkrete anbefalinger.",
  openGraph: {
    title: "Gratis virksomhedsanalyse – Tendenci",
    description:
      "Få en gratis og uforpligtende analyse af din virksomheds online tilstedeværelse. Vi gennemgår dine sociale medier og giver konkrete anbefalinger.",
    url: "https://tendenci.dk/analyse",
    siteName: "Tendenci",
    images: [{ url: "/kaffe.png", width: 1200, height: 630, alt: "Tendenci – Gratis virksomhedsanalyse" }],
    locale: "da_DK",
    type: "website",
  },
};

export default function AnalyseLayout({ children }) {
  return children;
}
