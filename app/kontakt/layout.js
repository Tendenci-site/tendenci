export const metadata = {
  title: "Kontakt | Tendenci",
  description:
    "Kontakt Tendenci – vi svarer inden for 24 timer på hverdage. Skriv til hejtendenci@gmail.com eller udfyld vores kontaktformular.",
  openGraph: {
    title: "Kontakt os – Tendenci",
    description:
      "Har du spørgsmål? Kontakt Tendenci og få svar inden for 24 timer på hverdage.",
    url: "https://tendenci.dk/kontakt",
    siteName: "Tendenci",
    images: [{ url: "/kaffe.png", width: 1200, height: 630, alt: "Tendenci – Kontakt" }],
    locale: "da_DK",
    type: "website",
  },
};

export default function KontaktLayout({ children }) {
  return children;
}
