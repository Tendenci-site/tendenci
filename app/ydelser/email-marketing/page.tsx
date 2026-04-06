import Link from "next/link";

export const metadata = {
  title: "Email Marketing – Automatiserede flows der sælger | Tendenci",
  description:
    "Email marketing giver 4.200% ROI i gennemsnit. Vi opsætter nyhedsbreve og automatiserede flows der sælger mens du sover — for SMV'er i Danmark.",
};

export default function EmailMarketingPage() {
  return (
    <main className="bg-white text-[#0f1e2e] overflow-hidden">

      {/* Top bar */}
      <div style={{ backgroundColor: "#f5f2ed", borderBottom: "1px solid rgba(15,30,46,0.1)" }} className="sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            style={{ color: "#0f1e2e", borderRadius: "100px", border: "2px solid rgba(15,30,46,0.2)" }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold hover:opacity-70 transition-opacity"
          >
            ← Tilbage til forsiden
          </Link>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-[#0f1e2e] px-6 pt-28 pb-32 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#c8f04a] opacity-5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#c8f04a] text-[#0f1e2e] text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            Email Marketing
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] max-w-3xl mb-8">
            Den eneste kanal{" "}
            <span className="text-[#c8f04a]">du ejer.</span>
            <br />Sociale medier låner du den.
          </h1>

          <p className="text-[#8ba3bc] text-xl max-w-2xl leading-relaxed mb-12">
            Algoritmen bestemmer hvem der ser dit indhold på Instagram. Din
            email-liste er din - for altid. Vi hjælper dig med at bygge den og
            bruge den til at skabe salg på autopilot.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/analyse"
              className="inline-block bg-[#c8f04a] text-[#0f1e2e] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200"
            >
              Få gratis email-analyse →
            </Link>
            <Link
              href="/pakker"
              className="inline-block border border-white/20 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition"
            >
              Se vores pakker
            </Link>
          </div>
        </div>
      </section>

      {/* ── TAL ── */}
      <section className="bg-[#c8f04a] px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "4.200%", label: "Gennemsnitligt ROI på email marketing (Litmus 2023)" },
            { num: "3×", label: "Højere konverteringsrate end sociale medier (McKinsey)" },
            { num: "4 mia.", label: "Mennesker bruger email dagligt - flere end alle SoMe-platforme" },
            { num: "1 kr.", label: "Investeret i email giver 42 kr. tilbage i gennemsnit" },
          ].map((s) => (
            <div key={s.num} className="text-[#0f1e2e]">
              <div className="text-4xl md:text-5xl font-bold mb-2">{s.num}</div>
              <div className="text-sm text-[#1a2f47] leading-snug">{s.label}</div>
            </div>
          ))}
          <p className="text-[#1a2f47] text-xs mt-8 opacity-60 col-span-2 md:col-span-4">
            Kilder: Litmus State of Email 2023 (4.200% ROI), McKinsey & Company (3×), Statista 2024 (4 mia. brugere), DMA / Litmus (42 kr. pr. investeret krone)
          </p>
        </div>
      </section>

      {/* ── HVORFOR EMAIL ── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#c8f04a] mb-4">
              Hvorfor email?
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Sociale medier skaber synlighed.
              <br />
              <span className="text-[#c8f04a]">Email skaber salg.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Når nogen tilmelder sig dit nyhedsbrev, har de aktivt sagt: "Jeg
              vil høre fra dig." Det er guld. De er varme leads der kender dig,
              stoler på dig, og er klar til at købe.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Vi bygger din liste, skriver dine emails og opsætter automatiserede
              flows der arbejder for dig - også når du sover. Fra velkomst-email
              til salgsflow til genaktivering af inaktive kunder.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "✅",
                title: "Du ejer listen - altid",
                desc: "Instagram kan lukke din konto i morgen. Din email-liste er din for evigt, uanset hvad der sker med sociale medier.",
              },
              {
                icon: "📬",
                title: "Direkte adgang til kunden",
                desc: "Ingen algoritme bestemmer om din email ses. Du lander direkte i indbakken - ikke i et feed der konkurrerer mod 1.000 andre opslag.",
              },
              {
                icon: "🔁",
                title: "Automatiseret salg",
                desc: "Et godt flow sætter du op én gang. Derefter sælger det automatisk til nye og eksisterende kunder - måned efter måned.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-[#f4f4f2] rounded-2xl p-5"
              >
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold mb-1">{item.title}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVAD VI BYGGER ── */}
      <section className="bg-[#0f1e2e] px-6 py-24 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c8f04a] mb-4 text-center">
            Hvad vi bygger til dig
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            Fra nul til automatiseret email-maskine
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "👋",
                title: "Velkomst-flow",
                desc: "Det vigtigste flow du kan have. Nye tilmeldinger modtager en serie emails der introducerer din virksomhed, bygger tillid og fører mod første køb.",
                tag: "Mest vigtigt",
              },
              {
                icon: "📰",
                title: "Nyhedsbrev",
                desc: "Regelmæssigt nyhedsbrev der holder dig top-of-mind hos kunder og leads. Vi skriver det, du godkender det - og det sendes automatisk.",
                tag: null,
              },
              {
                icon: "🛒",
                title: "Salgs-flow",
                desc: "Målrettede emails til specifikke segmenter af din liste med tilbud, kampagner og sæsonaktiviteter der konverterer.",
                tag: null,
              },
              {
                icon: "💤",
                title: "Genaktiverings-flow",
                desc: "Kunder der ikke har købt i et stykke tid får en automatisk serie der vækker dem op igen - med et tilbud de ikke kan sige nej til.",
                tag: null,
              },
              {
                icon: "⭐",
                title: "Anmeldelse-flow",
                desc: "Automatisk opfølgning efter et køb eller en ydelse der beder kunden om en anmeldelse på Google - din mest værdifulde markedsføring.",
                tag: null,
              },
              {
                icon: "📊",
                title: "Løbende optimering",
                desc: "Vi analyserer åbningsrater, klikrater og konverteringer løbende og justerer emnelinjer, indhold og timing for maksimal effekt.",
                tag: null,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1a2f47] rounded-2xl p-7 relative hover:bg-[#243d57] transition"
              >
                {item.tag && (
                  <span className="absolute top-5 right-5 bg-[#c8f04a] text-[#0f1e2e] text-xs font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-[#8ba3bc] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSEN ── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c8f04a] mb-4 text-center">
          Processen
        </p>
        <h2 className="text-4xl font-bold text-center mb-16">
          Sådan kommer vi i gang
        </h2>

        <div className="relative">
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-[#f4f4f2] hidden md:block" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              { num: "01", title: "Strategi", desc: "Vi kortlægger din målgruppe, dine produkter og hvilke flows der giver mest mening for din forretning." },
              { num: "02", title: "Opsætning", desc: "Vi opsætter din email-platform (Klaviyo, Mailchimp eller lignende), integrerer med din hjemmeside og bygger listerne op." },
              { num: "03", title: "Flows & indhold", desc: "Vi skriver og designer alle emails og flows. Du godkender inden alt aktiveres." },
              { num: "04", title: "Optimering", desc: "Vi overvåger performance månedligt og justerer løbende så din email-maskine bliver bedre og bedre." },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="w-16 h-16 rounded-full bg-[#c8f04a] flex items-center justify-center font-bold text-[#0f1e2e] text-lg mb-6 relative z-10">
                  {step.num}
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f4f4f2] px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c8f04a] mb-4 text-center">
            Ofte stillede spørgsmål
          </p>
          <h2 className="text-4xl font-bold text-center mb-14">
            Det spørger folk om
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Jeg har ingen email-liste endnu. Er det for sent?",
                a: "Overhovedet ikke - faktisk er det det bedste tidspunkt at starte. Vi opsætter det hele fra bunden, inklusiv en tilmeldingsformular på din hjemmeside og en strategi for at vokse listen hurtigt.",
              },
              {
                q: "Hvilken email-platform bruger I?",
                a: "Vi arbejder primært med Klaviyo og Mailchimp, men tilpasser os til hvad der giver mening for din virksomhed og dit budget. Klaviyo er bedst til webshops, Mailchimp er enklere og billigere for servicevirksomheder.",
              },
              {
                q: "Skal jeg selv skrive emailsne?",
                a: "Nej. Vi skriver alle emails og flows. Du godkender inden de aktiveres - men du behøver ikke bruge din tid på at sidde og skrive.",
              },
              {
                q: "Hvad koster det i platform-abonnement?",
                a: "Det afhænger af din listestørrelse. Mailchimp er gratis op til 500 kontakter. Klaviyo starter ved ca. 200 kr./md. for op til 500 kontakter. Vi hjælper dig med at vælge den rigtige løsning.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-7 border border-gray-100"
              >
                <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0f1e2e] px-6 py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c8f04a] opacity-5" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Klar til emails der{" "}
            <span className="text-[#c8f04a]">sælger mens du sover?</span>
          </h2>
          <p className="text-[#8ba3bc] text-lg mb-10 leading-relaxed">
            Vi starter med en gratis analyse af din nuværende email-setup - eller
            hjælper dig med at komme i gang fra bunden. Ingen binding, ingen skjulte gebyrer.
          </p>
          <Link
            href="/analyse"
            className="inline-block bg-[#c8f04a] text-[#0f1e2e] font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform duration-200"
          >
            Få gratis email-analyse →
          </Link>
          <p className="text-[#8ba3bc] text-sm mt-5">
            Ingen binding · Ingen skjulte gebyrer · Svar inden for 24 timer
          </p>
        </div>
      </section>

    </main>
  );
}
