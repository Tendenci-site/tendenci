export const metadata = {
  title: "Om os | Tendenci",
  description:
    "Lær Tendenci at kende. Vi kombinerer erhvervsøkonomisk uddannelse fra CBS med praktisk erfaring på sociale medier – og holder os altid opdateret på hvad der virker.",
  openGraph: {
    title: "Om os – Tendenci",
    description:
      "Lær Tendenci at kende. Vi kombinerer akademisk forståelse for forretning med praktisk erfaring på sociale medier.",
    url: "https://tendenci.dk/om-os",
    siteName: "Tendenci",
    images: [{ url: "/Pizza.png", width: 1200, height: 630, alt: "Tendenci – Om os" }],
    locale: "da_DK",
    type: "website",
  },
};

const STATS = [
  { value: "68%", label: "af alle online oplevelser starter med en søgning" },
  { value: "49%", label: "af forbrugere bruger AI til at finde virksomheder" },
  { value: "3,5 mia.", label: "Google-søgninger foretages hver eneste dag" },
  { value: "0%", label: "af dine konkurrenter har styr på GEO endnu" },
];

const CARDS = [
  {
    emoji: "🎓",
    title: "Forretningsforståelse",
    body: "Vi studerer erhvervsøkonomi og virksomhedskommunikation på CBS. Det betyder at vores arbejde ikke kun er kreativt – det er forankret i en forståelse for hvad der skaber reel forretningsværdi.",
  },
  {
    emoji: "📱",
    title: "Praktisk erfaring",
    body: "Vi arbejder aktivt med sociale medier og ved hvad der virker i praksis. Vi har erfaring med hvordan de mest relevante platforme fungerer, og hvordan man driver en profil der skaber resultater.",
  },
  {
    emoji: "🔍",
    title: "Altid opdateret",
    body: "Sociale medier ændrer sig konstant. Vi holder os løbende opdateret på algoritmer, trends og nye platforme – så din virksomhed altid er et skridt foran.",
  },
];

export default function OmOs() {
  return (
    <div style={{ backgroundColor: "#f5f2ed", color: "#0f1e2e", fontFamily: "var(--font-manrope)" }} className="min-h-screen">

      {/* Top bar */}
      <div style={{ backgroundColor: "#f5f2ed", borderBottom: "1px solid rgba(15,30,46,0.1)" }} className="sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <a
            href="/"
            style={{ color: "#0f1e2e", borderRadius: "100px", border: "2px solid rgba(15,30,46,0.2)" }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold hover:opacity-70 transition-opacity"
          >
            ← Tilbage til forsiden
          </a>
        </div>
      </div>

      {/* 1. HERO */}
      <section style={{ backgroundColor: "#0f1e2e" }} className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1
            style={{ color: "#ffffff", fontWeight: 800, fontSize: "3.5rem", lineHeight: 1.1 }}
            className="mb-5"
          >
            Vi er Tendenci
          </h1>
          <p style={{ color: "#ffffff", opacity: 0.55, fontSize: "1.2rem" }}>
            Driven by trends. Built for businesses that want to grow.
          </p>
        </div>
      </section>

      {/* 2. VISION */}
      <section style={{ backgroundColor: "#f5f2ed" }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 style={{ fontWeight: 800, fontSize: "2rem", color: "#0f1e2e", marginBottom: "1.5rem" }}>
            Derfor eksisterer vi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Tekst */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ color: "#0f1e2e", opacity: 0.75, lineHeight: 1.85, fontSize: "1rem" }}>
                Du kender måske følelsen. Du støder ind i den bedste pizza du nogensinde har fået. Mærkeligt nok er der meget længere kø til den hippe restaurant lige ved siden af – dem du har set få masser af likes på Instagram. Du har prøvet den pizza, og den var faktisk ikke særlig god.
              </p>
              <p style={{ color: "#0f1e2e", opacity: 0.75, lineHeight: 1.85, fontSize: "1rem" }}>
                Nu står du her med den bedste pizza i byen, og tænker: Hvorfor har jeg aldrig hørt om dette sted?
              </p>
              <p style={{ color: "#0f1e2e", opacity: 0.75, lineHeight: 1.85, fontSize: "1rem" }}>
                Det er præcis dét vi er til for. Uanset om du er pizzamanden, kaffebiksen, tømrerfirmaet eller noget helt fjerde – og du ved at du har styr på dit produkt – så er vi den brik du mangler i puslespillet. Vi sørger for at de rigtige mennesker finder dig.
              </p>
            </div>

            {/* Billede */}
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 32px rgba(15,30,46,0.12)", minHeight: "300px" }} className="order-first md:order-last">
              <img
                src="/Pizza.png"
                alt="Pizza"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATISTIK */}
      <section style={{ backgroundColor: "#0f1e2e" }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "2rem", marginBottom: "0.75rem" }}>
            Derfor er digital synlighed ikke til at ignorere
          </h2>
          <p style={{ color: "#ffffff", opacity: 0.5, marginBottom: "3rem", fontSize: "1rem" }}>
            Tallene taler for sig selv
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((s) => (
              <div
                key={s.value}
                style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "14px", padding: "24px 20px" }}
              >
                <p style={{ color: "#00c9a7", fontWeight: 800, fontSize: "2.25rem", lineHeight: 1, marginBottom: "0.6rem" }}>
                  {s.value}
                </p>
                <p style={{ color: "#ffffff", opacity: 0.7, fontSize: "0.85rem", lineHeight: 1.5 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: "#ffffff", opacity: 0.3, fontSize: "0.75rem", marginTop: "1.75rem" }}>
            Kilder: BrightEdge Research (68%), Salesforce State of the Connected Customer 2024 (49%), Internet Live Stats (3,5 mia.)
          </p>
        </div>
      </section>

      {/* 4. HVEM ER VI */}
      <section style={{ backgroundColor: "#f5f2ed" }} className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 style={{ fontWeight: 800, fontSize: "2rem", color: "#0f1e2e", marginBottom: "0.75rem" }}>
            Menneskerne bag Tendenci
          </h2>
          <p style={{ color: "#0f1e2e", opacity: 0.65, fontSize: "1rem", marginBottom: "2.5rem", maxWidth: "600px", lineHeight: 1.7 }}>
            Vi kombinerer akademisk forståelse for forretning med praktisk erfaring på sociale medier – og holder os altid opdateret på hvad der virker lige nu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CARDS.map((card) => (
              <div
                key={card.title}
                style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <span style={{ fontSize: "2rem" }}>{card.emoji}</span>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0f1e2e" }}>{card.title}</h3>
                <p style={{ color: "#0f1e2e", opacity: 0.65, fontSize: "0.875rem", lineHeight: 1.75 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section style={{ backgroundColor: "#0f1e2e" }} className="py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8">
          <p
            style={{ color: "#ffffff", fontWeight: 800, fontSize: "2rem", lineHeight: 1.3, maxWidth: "560px" }}
          >
            "Vi tror på at sociale medier skal skabe kunder – ikke bare likes."
          </p>
          <a
            href="/analyse"
            style={{
              backgroundColor: "#00c9a7",
              color: "#0f1e2e",
              borderRadius: "100px",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "16px 36px",
              textDecoration: "none",
            }}
            className="inline-flex items-center hover:opacity-80 transition-opacity"
          >
            Få din gratis analyse →
          </a>
        </div>
      </section>

    </div>
  );
}
