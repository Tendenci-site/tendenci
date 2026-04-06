export const metadata = {
  title: "Cookiepolitik – Tendenci",
  description:
    "Læs om hvordan Tendenci bruger cookies på vores hjemmeside – hvad vi indsamler, og hvordan du administrerer dine præferencer.",
  openGraph: {
    title: "Cookiepolitik – Tendenci",
    description: "Læs om hvordan Tendenci bruger cookies på vores hjemmeside.",
    url: "https://tendenci.dk/cookiepolitik",
    siteName: "Tendenci",
    locale: "da_DK",
    type: "website",
  },
};

export default function Cookiepolitik() {
  return (
    <div style={{ backgroundColor: "#f5f2ed", color: "#0f1e2e", fontFamily: "var(--font-nunito)" }} className="min-h-screen">

      {/* Top bar */}
      <div style={{ backgroundColor: "#f5f2ed", borderBottom: "1px solid rgba(15,30,46,0.1)" }} className="sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
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
      <div style={{ backgroundColor: "#0f1e2e" }} className="py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h1
            style={{ color: "#ffffff", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.2 }}
            className="mb-3"
          >
            Cookiepolitik
          </h1>
          <p style={{ color: "#ffffff", opacity: 0.65 }} className="text-base">
            Sidst opdateret: marts 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-10">

        <section className="flex flex-col gap-3">
          <h2 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#0f1e2e" }}>Hvad er cookies?</h2>
          <p style={{ color: "#0f1e2e", opacity: 0.75, lineHeight: 1.8 }} className="text-sm">
            Cookies er små tekstfiler der gemmes på din enhed når du besøger en hjemmeside. De bruges til at huske dine præferencer og til at give os information om hvordan siden bruges.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#0f1e2e" }}>Hvilke cookies bruger vi?</h2>

          <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e5e2dd" }} className="p-6 flex flex-col gap-2">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ backgroundColor: "#0f1e2e", color: "#c8f04a", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px" }}>Nødvendige</span>
            </div>
            <p style={{ fontWeight: 700, color: "#0f1e2e" }} className="text-sm">cookie_consent</p>
            <p style={{ color: "#0f1e2e", opacity: 0.65, lineHeight: 1.7 }} className="text-sm">
              Husker dit cookievalg så vi ikke viser banneret igen ved næste besøg. Denne cookie er nødvendig for at siden kan fungere korrekt og kræver ikke dit samtykke.
            </p>
            <p style={{ color: "#0f1e2e", opacity: 0.45 }} className="text-xs">Opbevares i: localStorage · Udløber: aldrig (til du rydder browserdataene)</p>
          </div>

          <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e5e2dd" }} className="p-6 flex flex-col gap-2">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ backgroundColor: "#f5f2ed", color: "#0f1e2e", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 700, padding: "3px 10px", border: "1px solid #e5e2dd" }}>Analytiske</span>
            </div>
            <p style={{ fontWeight: 700, color: "#0f1e2e" }} className="text-sm">Analysecookies (valgfrie)</p>
            <p style={{ color: "#0f1e2e", opacity: 0.65, lineHeight: 1.7 }} className="text-sm">
              Vi bruger analytiske cookies til at forstå hvordan besøgende bruger vores hjemmeside - f.eks. hvilke sider der besøges, og hvor længe. Disse data hjælper os med at forbedre indholdet og brugeroplevelsen. Analytiske cookies sættes kun hvis du accepterer alle cookies.
            </p>
            <p style={{ color: "#0f1e2e", opacity: 0.45 }} className="text-xs">Kræver samtykke · Du kan til enhver tid trække dit samtykke tilbage</p>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#0f1e2e" }}>Sådan administrerer du cookies</h2>
          <p style={{ color: "#0f1e2e", opacity: 0.75, lineHeight: 1.8 }} className="text-sm">
            Du kan til enhver tid ændre eller trække dit samtykke tilbage ved at rydde din browsers localStorage-data. Du kan også slette cookies direkte i din browsers indstillinger under "Privatliv" eller "Sikkerhed".
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#0f1e2e" }}>Kontakt</h2>
          <p style={{ color: "#0f1e2e", opacity: 0.75, lineHeight: 1.8 }} className="text-sm">
            Har du spørgsmål til vores brug af cookies, er du velkommen til at kontakte os på{" "}
            <a href="mailto:hejtendenci@gmail.com" style={{ color: "#0f1e2e", fontWeight: 700, textDecoration: "underline" }}>
              hejtendenci@gmail.com
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
