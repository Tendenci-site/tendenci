import Link from "next/link";

export const metadata = {
  title: "Hjemmeside – Professionel og bygget til at konvertere | Tendenci",
  description:
    "Vi bygger professionelle hjemmesider i Next.js der er hurtige, smukke og optimeret til at konvertere besøgende til kunder. Du bestemmer designet - vi bygger det.",
};

export default function HjemmesidePage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00c9a7] opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#00c9a7] opacity-5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#00c9a7] text-[#0f1e2e] text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            Hjemmeside
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] max-w-3xl mb-8">
            Din hjemmeside er din{" "}
            <span className="text-[#00c9a7]">bedste sælger.</span>
            <br />Behandl den som én.
          </h1>

          <p className="text-[#8ba3bc] text-xl max-w-2xl leading-relaxed mb-12">
            Vi bygger hjemmesider der ser skarpe ud og rent faktisk skaffer kunder.
            Du bestemmer farver, fonte og udtryk - vi sørger for at det virker.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/analyse"
              className="inline-block bg-[#00c9a7] text-[#0f1e2e] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200"
            >
              Få gratis hjemmeside-analyse →
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
      <section className="bg-[#00c9a7] px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "75%", label: "af brugere vurderer en virksomheds troværdighed baseret på hjemmesiden alene" },
            { num: "3 sek.", label: "Så lang tid har du til at fange en besøgendes opmærksomhed" },
            { num: "100×", label: "Hurtigere end WordPress - Next.js er bygget til hastighed" },
            { num: "1×", label: "Du betaler for opsætning. Koden er din - for altid." },
          ].map((s) => (
            <div key={s.num} className="text-[#0f1e2e]">
              <div className="text-4xl md:text-5xl font-bold mb-2">{s.num}</div>
              <div className="text-sm text-[#1a2f47] leading-snug">{s.label}</div>
            </div>
          ))}
          <p className="text-[#1a2f47] text-xs mt-8 opacity-60 col-span-2 md:col-span-4">
            Kilder: Stanford Web Credibility Research (75%), Google/Think with Google (3 sek.), Vercel/Next.js benchmarks (hastighed), internt (kodeejerskab)
          </p>
        </div>
      </section>

      {/* ── DU BESTEMMER ── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00c9a7] mb-4">
              Dit brand. Dit valg.
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Du bestemmer alt.
              <br />Vi bygger det.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Ingen skabeloner. Ingen kompromisser. Du fortæller os hvilke farver,
              fonte og udtryk der passer til din virksomhed - og vi bygger det præcis
              som du vil have det. Fra den mindste detalje til den samlede oplevelse.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Vi bygger i Next.js - den hurtigste teknologi til hjemmesider i dag.
              Det betyder lynhurtige sider, stærk SEO og en oplevelse dine kunder
              ikke glemmer.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { emoji: "🎨", label: "Farver", desc: "Dit brand, dine farver. Vi matcher præcis dit visuelle udtryk." },
              { emoji: "✍️", label: "Font & typografi", desc: "Vi finder den fonte der passer til din personlighed og branche." },
              { emoji: "🖼️", label: "Billeder & grafik", desc: "Vi rådgiver om billedstil og hjælper med at finde det rigtige visuelle materiale." },
              { emoji: "📐", label: "Layout & struktur", desc: "Hvilke sektioner skal siden have? Vi designer det flow der giver mest mening for dine kunder." },
              { emoji: "📝", label: "Tekster", desc: "Vi kan skrive alle tekster for dig - eller du leverer dem, og vi tilpasser dem." },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-[#f4f4f2] rounded-2xl p-5 hover:bg-[#0f1e2e] hover:text-white transition-colors duration-300 group"
              >
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <div className="font-semibold mb-0.5 group-hover:text-white">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-[#8ba3bc] leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVORFOR NEXT.JS ── */}
      <section className="bg-[#0f1e2e] px-6 py-24 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00c9a7] mb-4 text-center">
            Teknologi
          </p>
          <h2 className="text-4xl font-bold text-center mb-6">
            Hvorfor vi bygger i Next.js
          </h2>
          <p className="text-[#8ba3bc] text-center max-w-xl mx-auto mb-16">
            De fleste bureauer bruger WordPress. Vi bruger Next.js - og det gør
            en markant forskel for dine kunder og for Google.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Lynhurtigt",
                desc: "Next.js-sider indlæser på millisekunder. Langsomme hjemmesider mister kunder - 40% forlader en side der tager mere end 3 sekunder at loade.",
              },
              {
                icon: "🔍",
                title: "SEO-optimeret fra start",
                desc: "Next.js er bygget til at ranke højt på Google. Teknisk SEO er ikke noget vi tilføjer bagefter - det er bagt ind i fundamentet.",
              },
              {
                icon: "📱",
                title: "Perfekt på alle skærme",
                desc: "Din hjemmeside ser skarp ud på telefon, tablet og computer. Over 60% af besøg sker på mobil - det prioriterer vi.",
              },
              {
                icon: "🔒",
                title: "Sikker og stabil",
                desc: "Ingen plugins der bryder ned. Ingen WordPress-opdateringer der ødelægger siden. Next.js er robust og pålidelig.",
              },
              {
                icon: "📈",
                title: "Bygget til at vokse",
                desc: "Din hjemmeside kan nemt udvides med nye sider, funktioner og integrationer efterhånden som din virksomhed vokser.",
              },
              {
                icon: "🏠",
                title: "Koden er din",
                desc: "Du ejer koden. Altid. Ingen månedlige platform-gebyrer, ingen lock-in. Du kan tage koden med dig hvis du vil.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1a2f47] rounded-2xl p-7 hover:bg-[#243d57] transition"
              >
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
        <p className="text-xs font-bold uppercase tracking-widest text-[#00c9a7] mb-4 text-center">
          Processen
        </p>
        <h2 className="text-4xl font-bold text-center mb-16">
          Fra idé til live hjemmeside
        </h2>

        <div className="relative">
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-[#f4f4f2] hidden md:block" />
          <div className="grid md:grid-cols-5 gap-6 relative">
            {[
              { num: "01", title: "Brief", desc: "Vi lærer din virksomhed, målgruppe og ønsker at kende. Du fortæller os hvad du vil have." },
              { num: "02", title: "Design", desc: "Vi viser dig et udkast til layout og visuelt udtryk inden vi bygger." },
              { num: "03", title: "Bygning", desc: "Vi bygger siden i Next.js baseret på det godkendte design." },
              { num: "04", title: "Godkendelse", desc: "Du gennemgår siden og giver feedback. Vi retter til du er tilfreds." },
              { num: "05", title: "Launch", desc: "Vi sætter siden live, sætter domæne op og sikrer at alt virker." },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="w-16 h-16 rounded-full bg-[#00c9a7] flex items-center justify-center font-bold text-[#0f1e2e] text-base mb-5 relative z-10">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVAD DU FÅR ── */}
      <section className="bg-[#f4f4f2] px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00c9a7] mb-4 text-center">
            Hvad er inkluderet
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            Alt hvad din hjemmeside har brug for
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "✅", text: "Fuldt responsivt design - perfekt på alle skærme" },
              { icon: "✅", text: "SEO-optimering fra dag ét - bygget ind i koden" },
              { icon: "✅", text: "Kontaktformular der sender direkte til din indbakke" },
              { icon: "✅", text: "Google Analytics opsætning så du kan følge trafikken" },
              { icon: "✅", text: "Cookiebanner og privatlivspolitik inkluderet" },
              { icon: "✅", text: "Lynhurtig hosting via Vercel - gratis for dig" },
              { icon: "✅", text: "Koden leveres til dig via GitHub - du ejer den altid" },
              { icon: "✅", text: "Oplæring i hvordan du selv opdaterer tekster og billeder" },
              { icon: "✅", text: "Integration med din email-platform hvis relevant" },
              { icon: "✅", text: "30 dages support efter launch - vi er klar hvis noget driller" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100"
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-[#00c9a7] mb-4 text-center">
          Ofte stillede spørgsmål
        </p>
        <h2 className="text-4xl font-bold text-center mb-14">
          Det spørger folk om
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Hvad koster en hjemmeside?",
              a: "Det afhænger af omfanget. En simpel virksomhedsside starter typisk fra 8.000-15.000 kr. Mere komplekse løsninger med mange sider og funktioner koster mere. Kontakt os for et uforpligtende tilbud baseret på præcis hvad du har brug for.",
            },
            {
              q: "Hvor lang tid tager det at bygge?",
              a: "En standard virksomhedsside tager typisk 2-4 uger fra brief til launch. Det afhænger af hvor hurtigt du godkender og giver feedback undervejs.",
            },
            {
              q: "Kan jeg selv opdatere siden bagefter?",
              a: "Ja. Vi bygger siden så du nemt kan opdatere tekster og billeder selv. Og vi oplærer dig i hvordan. Har du brug for større ændringer kan vi altid hjælpe.",
            },
            {
              q: "Hvad hvis jeg allerede har en hjemmeside?",
              a: "Vi kan enten bygge en ny fra bunden eller forbedre den eksisterende. Vi starter altid med at gennemgå hvad du allerede har og give dig en ærlig vurdering.",
            },
            {
              q: "Hvad er hosting og hvad koster det?",
              a: "Vi hoster din hjemmeside gratis på Vercel - den platform Next.js er bygget til. Du betaler kun for dit domæne (ca. 100-150 kr./år). Ingen månedlige hosting-gebyrer.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              className="bg-[#f4f4f2] rounded-2xl p-7 border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0f1e2e] px-6 py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00c9a7] opacity-5" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Klar til en hjemmeside der{" "}
            <span className="text-[#00c9a7]">arbejder for dig?</span>
          </h2>
          <p className="text-[#8ba3bc] text-lg mb-10 leading-relaxed">
            Vi starter med en gratis gennemgang af din nuværende hjemmeside
            og fortæller dig ærligt hvad der fungerer - og hvad der koster dig kunder.
          </p>
          <Link
            href="/analyse"
            className="inline-block bg-[#00c9a7] text-[#0f1e2e] font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform duration-200"
          >
            Få gratis hjemmeside-analyse →
          </Link>
          <p className="text-[#8ba3bc] text-sm mt-5">
            Ingen binding · Ingen skjulte gebyrer · Svar inden for 24 timer
          </p>
        </div>
      </section>

    </main>
  );
}
