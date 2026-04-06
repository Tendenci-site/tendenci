import Navbar from "./components/Navbar";

const NAV_LINKS = [
  { label: "Ydelser", href: "#ydelser" },
  { label: "Proces", href: "#proces" },
  { label: "Om os", href: "#om-os" },
  { label: "Kontakt", href: "#kontakt" },
];

const SERVICES = [
  {
    title: "Paid Ads",
    description:
      "Vi opsætter og optimerer annoncer på Meta og Google der skaffer kunder - ikke bare klik og visninger.",
    dark: true,
    emoji: "🎯",
    href: "/ydelser/paid-ads",
  },
  {
    title: "SEO & GEO",
    description: "Vi sørger for at du bliver fundet - på Google og i AI-svar fra ChatGPT og Perplexity.",
    dark: false,
    emoji: "🔍",
    href: "/ydelser/seo-geo",
  },
  {
    title: "Email Marketing",
    description:
      "Vi opsætter og driver din email markedsføring - fra nyhedsbrev til automatiserede flows der sælger mens du sover.",
    dark: false,
    emoji: "📧",
    href: "/ydelser/email-marketing",
  },
  {
    title: "Hjemmeside",
    description:
      "Vi bygger og vedligeholder din hjemmeside - professionel, hurtig og optimeret til at konvertere besøgende til kunder.",
    dark: false,
    emoji: "🌐",
    href: "/ydelser/hjemmeside",
  },
];

const STEPS = [
  { number: "01", title: "Indsigtssamtale", desc: "Vi starter med en gratis samtale hvor vi lærer din virksomhed, målgruppe og mål at kende ordentligt." },
  { number: "02", title: "Strategi & kanalvalg", desc: "Vi vælger de kanaler der giver mest igen for netop din virksomhed - og lægger en klar plan med målbare mål." },
  { number: "03", title: "Opsætning & eksekvering", desc: "Vi sætter det hele op og eksekverer. Du godkender retningen, vi klarer resten." },
  { number: "04", title: "Opfølgning & optimering", desc: "Månedlig gennemgang af resultater og løbende justering af indsatsen baseret på data og konkrete erfaringer." },
];


export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#f5f2ed", color: "#0f1e2e" }}
      className="flex flex-col min-h-screen"
    >
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundImage: "url('/kaffe.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        className="pt-24 pb-28"
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(15,30,46,0.6)",
          }}
        />
        <div style={{ position: "relative" }} className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
            {/* Badge */}
            <span
              style={{
                backgroundColor: "#c8f04a",
                color: "#0f1e2e",
                borderRadius: "100px",
              }}
              className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-8"
            >
              Få flere kunder gennem paid ads, SEO & email
            </span>

            <h1
              style={{
                fontFamily: "var(--font-nunito)",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
              className="text-5xl md:text-7xl font-normal max-w-3xl mb-8"
            >
              Du er god til din forretning. Vi er gode til at skaffe dig kunder.
            </h1>

            <p
              style={{ color: "#ffffff" }}
              className="text-lg md:text-xl max-w-2xl leading-relaxed opacity-80 mb-6"
            >
              Paid ads, SEO og email marketing der virker. Ingen likes uden salg.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
              {["Paid Ads", "SEO & GEO", "Email Marketing"].map((item) => (
                <span key={item} style={{ color: "#ffffff" }} className="flex items-center gap-2 text-sm opacity-70">
                  <span style={{ color: "#c8f04a", fontSize: "1.1rem" }}>●</span>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/analyse"
                style={{
                  backgroundColor: "#c8f04a",
                  color: "#0f1e2e",
                  borderRadius: "100px",
                }}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium hover:opacity-80 transition-opacity"
              >
                Få gratis analyse af din virksomhed
              </a>
              <a
                href="#ydelser"
                style={{
                  border: "2px solid rgba(255,255,255,0.5)",
                  color: "#ffffff",
                  borderRadius: "100px",
                }}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium hover:bg-white/10 transition-colors"
              >
                Se hvad vi tilbyder
              </a>
            </div>
        </div>
      </section>

      {/* ── GRATIS ANALYSE ───────────────────────────────────────── */}
      <section id="analyse" style={{ backgroundColor: "#e8f7c0" }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2
              style={{ fontFamily: "var(--font-nunito)", color: "#0f1e2e" }}
              className="text-4xl md:text-5xl font-normal mb-5 leading-tight"
            >
              Få en gratis analyse af din virksomheds online tilstedeværelse
            </h2>
            <p style={{ color: "#0f1e2e", opacity: 0.7 }} className="text-lg leading-relaxed">
              Vi gennemgår din virksomhed og giver dig et konkret billede af
              hvor du står – og hvad der skal til for at sociale medier begynder
              at skabe kunder.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {[
              {
                title: "Synlighedsanalyse",
                desc: "Finder dine kunder dig på Google når de søger efter det du tilbyder? Vi tjekker det.",
              },
              {
                title: "Annonce-potentiale",
                desc: "Vi vurderer hvad paid ads realistisk ville koste og give tilbage for netop din virksomhed.",
              },
              {
                title: "Konkurrentblik",
                desc: "Vi ser på hvad dine konkurrenter gør digitalt - og hvor du har mulighed for at komme foran dem.",
              },
              {
                title: "Email-setup",
                desc: "Har I et nyhedsbrev? Vi vurderer om I mister kunder der aldrig vender tilbage - og hvad der skal til.",
              },
              {
                title: "GEO-analyse",
                desc: "Bliver din virksomhed nævnt når folk spørger ChatGPT eller Google AI? Vi tjekker din position i AI-søgninger.",
              },
              {
                title: "Konkrete anbefalinger",
                desc: "Du får 3-5 prioriterede handlinger med konkret effekt - ikke generiske råd, men præcis hvad din virksomhed mangler.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{ backgroundColor: "#ffffff", borderRadius: "12px" }}
                className="p-6 flex gap-4"
              >
                <span
                  style={{
                    backgroundColor: "#0f1e2e",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginTop: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#c8f04a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p
                    style={{ fontFamily: "var(--font-nunito)", color: "#0f1e2e" }}
                    className="font-semibold mb-1"
                  >
                    {item.title}
                  </p>
                  <p style={{ color: "#0f1e2e", opacity: 0.65 }} className="text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/analyse"
            style={{
              backgroundColor: "#0f1e2e",
              color: "#f5f2ed",
              borderRadius: "100px",
            }}
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold hover:opacity-80 transition-opacity"
          >
            Få din gratis analyse nu →
          </a>
        </div>
      </section>

      {/* ── TICKER STRIP ─────────────────────────────────────────── */}
      <div
        style={{ backgroundColor: "#0f1e2e", color: "#f5f2ed" }}
        className="py-5 text-center text-sm tracking-wide"
      >
        Bruges af virksomheder inden for:{" "}
        <span style={{ color: "#c8f04a" }} className="font-semibold">
          Håndværk · Konsulenter · Detail · Sundhed · Advokat & Revision
        </span>
      </div>

      {/* ── YDELSER ──────────────────────────────────────────────── */}
      <section id="ydelser" className="max-w-6xl mx-auto px-6 py-24">
        <p
          style={{ color: "#c8f04a", fontFamily: "var(--font-nunito)" }}
          className="text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Hvad vi tilbyder
        </p>
        <h2
          style={{ fontFamily: "var(--font-nunito)", color: "#0f1e2e" }}
          className="text-4xl md:text-5xl font-normal mb-14 max-w-lg"
        >
          Vores ydelser
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              style={{
                backgroundColor: s.dark ? "#0f1e2e" : "#ffffff",
                color: s.dark ? "#f5f2ed" : "#0f1e2e",
                borderRadius: "16px",
              }}
              className="p-8 flex flex-col gap-4"
            >
              <span style={{ fontSize: "2rem" }}>{s.emoji}</span>
              <h3
                style={{
                  fontFamily: "var(--font-nunito)",
                  fontSize: "1.25rem",
                }}
                className="font-normal leading-snug"
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ opacity: s.dark ? 0.75 : 0.65 }}
              >
                {s.description}
              </p>
              {"href" in s && s.href && (
                <a
                  href={s.href}
                  style={{
                    color: s.dark ? "#c8f04a" : "#0f1e2e",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    marginTop: "auto",
                    textDecoration: "none",
                    opacity: 0.7,
                  }}
                  className="hover:opacity-100 transition-opacity"
                >
                  Læs mere →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── EMAIL MARKETING ──────────────────────────────────────── */}
      <section id="email-marketing" style={{ backgroundColor: "#ffffff" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ color: "#c8f04a", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Hvorfor email marketing?
          </p>
          <h2
            style={{ fontFamily: "var(--font-nunito)", color: "#0f1e2e", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.15, maxWidth: "600px", marginBottom: "1.25rem" }}
          >
            Din indbakke er det mest værdifulde sted du kan være
          </h2>
          <p style={{ color: "#0f1e2e", opacity: 0.65, fontSize: "1rem", lineHeight: 1.75, maxWidth: "620px", marginBottom: "3rem" }}>
            Sociale medier er fantastiske – men du ejer ikke din følgerskare. Algoritmen bestemmer hvem der ser dit indhold. Med email marketing ejer du listen. Altid.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { value: "4.200%", desc: "Gennemsnitligt afkast på email marketing – for hver 100 kr. du investerer får du 4.200 kr. tilbage", source: "Litmus Email Marketing Report 2023" },
              { value: "4 mia.", desc: "mennesker bruger email dagligt – flere end alle sociale medier tilsammen", source: "Statista 2024" },
              { value: "3x", desc: "højere konverteringsrate end sociale medier – email er stadig den kanal der sælger mest", source: "McKinsey & Company" },
            ].map((fact) => (
              <div
                key={fact.value}
                style={{ backgroundColor: "#0f1e2e", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "0.75rem" }}
              >
                <p style={{ color: "#c8f04a", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1 }}>
                  {fact.value}
                </p>
                <p style={{ color: "#ffffff", opacity: 0.65, fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }}>
                  {fact.desc}
                </p>
                <p style={{ color: "#ffffff", opacity: 0.3, fontSize: "0.72rem" }}>
                  Kilde: {fact.source}
                </p>
              </div>
            ))}
          </div>

          <p style={{ color: "#0f1e2e", fontWeight: 800, fontSize: "1.15rem", textAlign: "center", marginBottom: "2rem" }}>
            Paid ads skaber kunder. SEO skaber synlighed. Email skaber loyalitet. Vi hjælper dig med det hele.
          </p>

          <div style={{ textAlign: "center" }}>
            <a
              href="/kontakt"
              style={{ backgroundColor: "#0f1e2e", color: "#f5f2ed", borderRadius: "100px", fontWeight: 600, fontSize: "0.95rem", padding: "14px 32px", textDecoration: "none" }}
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              Hør mere om email marketing →
            </a>
          </div>
        </div>
      </section>

      {/* ── ÉN PARTNER ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0f1e2e" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            style={{ color: "#ffffff", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.2, maxWidth: "640px", marginBottom: "1.25rem" }}
          >
            Én partner. Ét overblik. Ingen koordinering.
          </h2>
          <p style={{ color: "#ffffff", opacity: 0.55, fontSize: "1rem", lineHeight: 1.75, maxWidth: "620px", marginBottom: "3.5rem" }}>
            De fleste virksomheder bruger 2-3 forskellige bureauer til hjemmeside, sociale medier og email. Det koster tid, penge og skaber forvirring. Vi håndterer det hele – så du kun skal forholde dig til én partner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { emoji: "🎯", title: "Paid Ads", desc: "Vi sætter annoncer op på Meta og Google der skaffer kunder - og optimerer løbende så pengene arbejder hårdest muligt." },
              { emoji: "🔍", title: "SEO & GEO", desc: "Bliv fundet på Google og i AI-søgninger. Vi sørger for at kunderne finder dig - ikke konkurrenten." },
              { emoji: "📧", title: "Email Marketing", desc: "Din liste er din mest værdifulde kanal. Vi bygger den og sørger for at den sælger." },
              { emoji: "🌐", title: "Hjemmeside", desc: "Professionel, hurtig og bygget til at konvertere - ikke bare til at se godt ud." },
            ].map((item) => (
              <div
                key={item.title}
                style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.15rem" }}>{item.title}</h3>
                <p style={{ color: "#ffffff", opacity: 0.55, fontSize: "0.875rem", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }} className="flex flex-col items-center gap-6">
            <p style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.4rem" }}>
              Alt samlet ét sted – hos Tendenci.
            </p>
            <a
              href="/analyse"
              style={{ backgroundColor: "#c8f04a", color: "#0f1e2e", borderRadius: "100px", fontWeight: 700, fontSize: "0.95rem", padding: "14px 32px", textDecoration: "none" }}
              className="inline-flex items-center hover:opacity-80 transition-opacity"
            >
              Se hvad vi kan gøre for dig →
            </a>
          </div>
        </div>
      </section>

      {/* ── PAKKER TEASER ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f5f2ed" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 style={{ color: "#0f1e2e", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.2 }}>
            Find den pakke der passer til dig
          </h2>
          <p style={{ color: "#0f1e2e", opacity: 0.6, fontSize: "1rem", lineHeight: 1.7, maxWidth: "520px" }}>
            Fra social media strategi til komplet digital tilstedeværelse – vi har en løsning til alle virksomheder.
          </p>
          <a
            href="/pakker"
            style={{ backgroundColor: "#0f1e2e", color: "#f5f2ed", borderRadius: "100px", fontWeight: 700, fontSize: "1rem", padding: "16px 36px", textDecoration: "none" }}
            className="inline-flex items-center hover:opacity-80 transition-opacity"
          >
            Se vores pakker →
          </a>
        </div>
      </section>

      {/* ── PROCES ───────────────────────────────────────────────── */}
      <section
        id="proces"
        style={{ backgroundColor: "#0f1e2e" }}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{ color: "#c8f04a" }}
            className="text-xs font-semibold tracking-widest uppercase mb-3"
          >
            Sådan arbejder vi
          </p>
          <h2
            style={{
              fontFamily: "var(--font-nunito)",
              color: "#f5f2ed",
            }}
            className="text-4xl md:text-5xl font-normal mb-16 max-w-lg"
          >
            Vores proces
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span
                  style={{
                    color: "#c8f04a",
                    fontFamily: "var(--font-nunito)",
                    fontSize: "3rem",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
                <div
                  style={{ backgroundColor: "#c8f04a", height: 2, width: 40 }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-nunito)",
                    color: "#f5f2ed",
                    fontSize: "1.25rem",
                  }}
                  className="font-normal"
                >
                  {step.title}
                </h3>
                <p style={{ color: "#ffffff", opacity: 0.5, fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        id="kontakt"
        style={{ backgroundColor: "#0f1e2e" }}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <h2
            style={{
              fontFamily: "var(--font-nunito)",
              color: "#f5f2ed",
              lineHeight: 1.15,
            }}
            className="text-4xl md:text-6xl font-normal max-w-2xl mb-10"
          >
            Klar til marketing der rent faktisk skaber kunder?
          </h2>
          <p
            style={{ color: "#f5f2ed", opacity: 0.65 }}
            className="text-lg max-w-xl mb-10 leading-relaxed"
          >
            Få en gratis og uforpligtende analyse af din virksomhed. Vi gennemgår din digitale tilstedeværelse og fortæller ærligt hvad der mangler - og hvad det vil give.
          </p>
          <a
            href="/analyse"
            style={{
              backgroundColor: "#c8f04a",
              color: "#0f1e2e",
              borderRadius: "100px",
            }}
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold hover:opacity-85 transition-opacity"
          >
            Få gratis analyse af din virksomhed
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer
        style={{ backgroundColor: "#0f1e2e", color: "#f5f2ed" }}
        className="border-t border-white/10 py-14"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

            {/* Logo + tagline */}
            <div className="flex flex-col gap-3">
              <a href="#" style={{ color: "#f5f2ed", fontWeight: 800, fontSize: "1.25rem" }}>
                Tendenci
              </a>
              <p style={{ color: "#f5f2ed", opacity: 0.45, fontSize: "0.85rem", lineHeight: 1.6 }}>
                Driven by trends. Built for businesses that want to grow.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <p style={{ color: "#f5f2ed", opacity: 0.35, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Navigation
              </p>
              <ul className="flex flex-col gap-2">
                {[...NAV_LINKS, { label: "Gratis analyse", href: "/analyse" }].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      style={{ color: "#f5f2ed", opacity: 0.6, fontSize: "0.9rem" }}
                      className="hover:opacity-100 transition-opacity"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontakt */}
            <div className="flex flex-col gap-3">
              <p style={{ color: "#f5f2ed", opacity: 0.35, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Kontakt
              </p>
              <a
                href="mailto:hejtendenci@gmail.com"
                style={{ color: "#c8f04a", fontSize: "0.9rem", fontWeight: 600 }}
                className="hover:opacity-80 transition-opacity"
              >
                hejtendenci@gmail.com
              </a>
              <p style={{ color: "#f5f2ed", opacity: 0.45, fontSize: "0.85rem", lineHeight: 1.6 }}>
                Vi svarer inden for 24 timer på hverdage
              </p>
              <a
                href="https://www.instagram.com/tendenciagency/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f5f2ed", opacity: 0.6, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "8px" }}
                className="hover:opacity-100 transition-opacity"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
                @tendenciagency
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          >
            <p style={{ color: "#f5f2ed", opacity: 0.3 }} className="text-xs">
              © 2025 Tendenci. Alle rettigheder forbeholdes. · CVR 46373987
            </p>
            <div className="flex items-center gap-5">
              <a
                href="/cookiepolitik"
                style={{ color: "#f5f2ed", opacity: 0.3 }}
                className="text-xs hover:opacity-60 transition-opacity"
              >
                Cookiepolitik
              </a>
              <a
                href="/abonnementsbetingelser"
                style={{ color: "#f5f2ed", opacity: 0.3 }}
                className="text-xs hover:opacity-60 transition-opacity"
              >
                Abonnementsbetingelser
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
