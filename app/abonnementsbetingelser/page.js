export const metadata = {
  title: "Abonnementsbetingelser | Tendenci",
  description:
    "Læs Tendencis abonnementsbetingelser – priser, betaling, opsigelse og dine rettigheder som kunde.",
  openGraph: {
    title: "Abonnementsbetingelser | Tendenci",
    description: "Læs Tendencis abonnementsbetingelser – priser, betaling, opsigelse og dine rettigheder som kunde.",
    url: "https://tendenci.dk/abonnementsbetingelser",
    siteName: "Tendenci",
    locale: "da_DK",
    type: "website",
  },
};

const SECTIONS = [
  {
    title: "1. Om Tendenci",
    body: "Disse betingelser gælder for alle aftaler indgået med Tendenci, CVR-nummer 46373987. Tendenci er et dansk social media bureau der tilbyder ydelser inden for sociale medier, email marketing og hjemmesideudvikling til små og mellemstore virksomheder.",
  },
  {
    title: "2. Abonnement og betaling",
    body: "Alle priser er angivet i danske kroner eksklusiv moms. Betaling forfalder den 1. i hver måned og betales forud for den kommende måned. Betaling sker via faktura som fremsendes til den oplyste email-adresse. Ved manglende betaling forbeholder Tendenci sig retten til at pausere ydelserne indtil betaling er modtaget. Ved fortsat manglende betaling efter 14 dage forbeholder Tendenci sig retten til at ophæve aftalen.",
  },
  {
    title: "3. Opstartstilbud",
    body: "Nye kunder tilbydes de første 3 måneder til nedsat opstartstilbudspris. Efter de første 3 måneder overgår abonnementet automatisk til den gældende normalpris. Kunden informeres skriftligt om prisovergangen senest 30 dage inden normalpris træder i kraft.",
  },
  {
    title: "4. Opsigelse",
    body: "Abonnementet kan til enhver tid opsiges med virkning fra udgangen af den indeværende måned. Opsigelse skal ske skriftligt via email til hejtendenci@gmail.com senest den sidste hverdag i måneden for at have virkning fra samme måneds udgang. Ved opsigelse efter denne dato vil opsigelsen have virkning fra udgangen af den efterfølgende måned. Der er ingen binding og ingen opsigelsesvarsler ud over ovenstående.",
  },
  {
    title: "5. Indhold og rettigheder",
    body: "Alt indhold produceret af Tendenci på vegne af kunden tilhører kunden ved fuld betaling. Tendenci forbeholder sig retten til at anvende produceret indhold i anonymiseret form til markedsføringsformål medmindre kunden skriftligt frabeder sig dette. Kunden er ansvarlig for at det materiale der leveres til Tendenci ikke krænker tredjemands rettigheder.",
  },
  {
    title: "6. Fortrolighed",
    body: "Tendenci behandler alle kundeoplysninger fortroligt og videregiver ikke oplysninger til tredjepart uden kundens samtykke. Tendenci er underlagt dansk lovgivning om databeskyttelse og GDPR.",
  },
  {
    title: "7. Ansvar",
    body: "Tendenci påtager sig intet ansvar for tab der opstår som følge af ændringer i sociale mediers algoritmer, platformsændringer eller andre forhold uden for Tendencis kontrol. Tendencis ansvar er under alle omstændigheder begrænset til det beløb kunden har indbetalt i den pågældende måned.",
  },
  {
    title: "8. Ændringer i betingelser",
    body: "Tendenci forbeholder sig retten til at ændre disse betingelser med 30 dages varsel. Kunden informeres skriftligt om ændringer via email. Fortsætter kunden abonnementet efter ikrafttrædelsen af nye betingelser, anses dette som accept af de nye betingelser.",
  },
  {
    title: "9. Lovvalg og værneting",
    body: "Disse betingelser er underlagt dansk ret. Eventuelle tvister afgøres ved danske domstole med Københavns Byret som første instans.",
  },
  {
    title: "10. Kontakt",
    body: "Har du spørgsmål til disse betingelser kan du kontakte os på hejtendenci@gmail.com. Vi svarer inden for 24 timer på hverdage.",
  },
];

export default function Abonnementsbetingelser() {
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
      <div style={{ backgroundColor: "#0f1e2e" }} className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 style={{ color: "#ffffff", fontWeight: 800, fontSize: "2.75rem", lineHeight: 1.2, marginBottom: "0.75rem" }}>
            Abonnementsbetingelser
          </h1>
          <p style={{ color: "#ffffff", opacity: 0.45, fontSize: "0.875rem" }}>
            Senest opdateret: Marts 2026
          </p>
        </div>
      </div>

      {/* Indhold */}
      <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-8">
        {SECTIONS.map((s) => (
          <div
            key={s.title}
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e2dd", padding: "28px 32px" }}
          >
            <h2 style={{ color: "#0f1e2e", fontWeight: 800, fontSize: "1.05rem", marginBottom: "12px" }}>
              {s.title}
            </h2>
            <p style={{ color: "#0f1e2e", opacity: 0.7, fontSize: "0.9rem", lineHeight: 1.8 }}>
              {s.body}
            </p>
          </div>
        ))}

        <p style={{ color: "#0f1e2e", opacity: 0.35, fontSize: "0.8rem", textAlign: "center", paddingBottom: "8px" }}>
          Disse betingelser er gældende fra marts 2026.
        </p>
      </div>

    </div>
  );
}
