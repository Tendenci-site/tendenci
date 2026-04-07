export const metadata = {
  title: "Pakker | Tendenci",
  description:
    "Se vores pakker – fra social media strategi til komplet digital tilstedeværelse. Find den løsning der passer til din virksomhed.",
  openGraph: {
    title: "Pakker | Tendenci",
    description: "Se vores pakker – fra social media strategi til komplet digital tilstedeværelse.",
    url: "https://tendenci.dk/pakker",
    siteName: "Tendenci",
    locale: "da_DK",
    type: "website",
  },
};

const CHECK = (dark) => (
  <span style={{ width: 18, height: 18, borderRadius: "50%", backgroundColor: dark ? "#00c9a7" : "#0f1e2e", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
      <path d="M1 4L3.5 6.5L9 1" stroke={dark ? "#0f1e2e" : "#00c9a7"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

export default function Pakker() {
  return (
    <div style={{ backgroundColor: "#f5f2ed", color: "#0f1e2e", fontFamily: "var(--font-manrope)" }} className="min-h-screen">

      {/* Top bar */}
      <div style={{ backgroundColor: "#f5f2ed", borderBottom: "1px solid rgba(15,30,46,0.1)" }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <a
            href="/"
            style={{ color: "#0f1e2e", borderRadius: "100px", border: "2px solid rgba(15,30,46,0.2)" }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold hover:opacity-70 transition-opacity"
          >
            ← Tilbage til forsiden
          </a>
        </div>
      </div>

      {/* Hero */}
      <div style={{ backgroundColor: "#0f1e2e" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 style={{ color: "#ffffff", fontWeight: 800, fontSize: "2.75rem", lineHeight: 1.2, marginBottom: "1rem" }}>
            Vores pakker
          </h1>
          <p style={{ color: "#ffffff", opacity: 0.65, fontSize: "1.1rem", maxWidth: "540px", lineHeight: 1.7 }}>
            Vælg den løsning der passer til din virksomhed – eller kontakt os for en skræddersyet pakke.
          </p>
        </div>
      </div>

      {/* Pakker */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Basis */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e2dd", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <p style={{ color: "#0f1e2e", fontWeight: 800, fontSize: "1.4rem" }}>Basis</p>
              <p style={{ color: "#0f1e2e", opacity: 0.5, fontSize: "0.875rem", marginTop: "4px" }}>Kom godt i gang</p>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {["Paid Ads opsætning (Meta eller Google)", "Løbende annonce-optimering", "Email marketing (opsætning + 1 flow)", "Månedlig rapport med konkrete tal", "Bi-månedlig opfølgning"].map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem", color: "#0f1e2e" }}>
                  {CHECK(false)}
                  {f}
                </li>
              ))}
            </ul>
            <a href="/analyse" style={{ backgroundColor: "#0f1e2e", color: "#f5f2ed", borderRadius: "100px", fontWeight: 600, fontSize: "0.875rem", padding: "12px 24px", textDecoration: "none", textAlign: "center" }} className="hover:opacity-80 transition-opacity">
              Kom i gang →
            </a>
          </div>

          {/* Pro */}
          <div style={{ backgroundColor: "#0f1e2e", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}>
            <span style={{ position: "absolute", top: "20px", right: "20px", backgroundColor: "#00c9a7", color: "#0f1e2e", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 700, padding: "4px 12px", textTransform: "uppercase" }}>
              Mest populær
            </span>
            <div>
              <p style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.4rem" }}>Pro</p>
              <p style={{ color: "#ffffff", opacity: 0.5, fontSize: "0.875rem", marginTop: "4px" }}>Din komplette digitale afdeling</p>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {["Alt i Basis", "SEO & GEO optimering", "Løbende email produktion og automatisering", "Hjemmeside bygning og vedligehold", "Bi-ugentlig opfølgning", "Prioriteret support"].map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem", color: "#ffffff" }}>
                  {CHECK(true)}
                  {f}
                </li>
              ))}
            </ul>
            <a href="/analyse" style={{ backgroundColor: "#00c9a7", color: "#0f1e2e", borderRadius: "100px", fontWeight: 700, fontSize: "0.875rem", padding: "12px 24px", textDecoration: "none", textAlign: "center" }} className="hover:opacity-80 transition-opacity">
              Kom i gang →
            </a>
          </div>

          {/* Skræddersyet */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "2px dashed #c8c4be", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <p style={{ color: "#0f1e2e", fontWeight: 800, fontSize: "1.4rem" }}>Skræddersyet</p>
              <p style={{ color: "#0f1e2e", opacity: 0.5, fontSize: "0.875rem", marginTop: "4px" }}>Præcis det du har brug for</p>
            </div>
            <p style={{ color: "#0f1e2e", opacity: 0.65, fontSize: "0.875rem", lineHeight: 1.75 }}>
              Har du specifikke behov der ikke passer ind i vores standardpakker? Vi sammensætter en løsning der passer præcis til din virksomhed og dit budget.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
              {["Vælg selv hvilke ydelser du vil have", "Fleksibelt budget", "Ingen unødige tillægsydelser"].map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem", color: "#0f1e2e" }}>
                  {CHECK(false)}
                  {f}
                </li>
              ))}
            </ul>
            <a href="/kontakt" style={{ backgroundColor: "#0f1e2e", color: "#f5f2ed", borderRadius: "100px", fontWeight: 600, fontSize: "0.875rem", padding: "12px 24px", textDecoration: "none", textAlign: "center" }} className="hover:opacity-80 transition-opacity">
              Kontakt os →
            </a>
          </div>

        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "center" }}>
          <p style={{ color: "#0f1e2e", opacity: 0.45, fontSize: "0.85rem" }}>
            Alle pakker starter med en gratis analyse af din virksomhed. Ingen binding, ingen skjulte gebyrer.
          </p>
          <a
            href="/abonnementsbetingelser"
            style={{ color: "#0f1e2e", opacity: 0.4, fontSize: "0.8rem", textDecoration: "underline" }}
            className="hover:opacity-70 transition-opacity"
          >
            Læs vores abonnementsbetingelser →
          </a>
        </div>
      </div>

    </div>
  );
}
