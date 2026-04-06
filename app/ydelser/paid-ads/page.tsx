import Link from "next/link";

export const metadata = {
  title: "Paid Ads – Meta & Google annoncer der skaffer kunder | Tendenci",
  description:
    "Vi opsætter og optimerer annoncer på Meta og Google der skaber målbare resultater. Ingen spildte kroner - kun annoncer der konverterer.",
};

export default function PaidAdsPage() {
  return (
    <main className="bg-white text-[#0f1e2e] overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-[#0f1e2e] px-6 pt-28 pb-32 text-white overflow-hidden">
        {/* Baggrundselement */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c8f04a] opacity-5 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c8f04a] opacity-5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#c8f04a] text-[#0f1e2e] text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            Paid Ads
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] max-w-3xl mb-8">
            Annoncer der{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#c8f04a]">skaffer kunder</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#c8f04a] opacity-20 rounded" />
            </span>
            {" "}- ikke bare klik.
          </h1>

          <p className="text-[#8ba3bc] text-xl max-w-2xl leading-relaxed mb-12">
            De fleste virksomheder bruger penge på annoncer og ved ikke om de virker.
            Vi opsætter, optimerer og rapporterer - så du præcis ved hvad du får for pengene.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/analyse"
              className="inline-block bg-[#c8f04a] text-[#0f1e2e] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200"
            >
              Få gratis annonce-analyse →
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

      {/* ── SOCIALE BEVIS - TAL ── */}
      <section className="bg-[#c8f04a] px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "3,8×", label: "Gennemsnitligt ROAS på Meta-annoncer for SMV'er" },
            { num: "200%", label: "Gennemsnitlig stigning i henvendelser efter 90 dage" },
            { num: "48t", label: "Fra briefing til live annoncer" },
            { num: "0 kr.", label: "Spildt på annoncer der ikke virker - vi stopper dem" },
          ].map((s) => (
            <div key={s.num} className="text-[#0f1e2e]">
              <div className="text-4xl md:text-5xl font-bold mb-2">{s.num}</div>
              <div className="text-sm text-[#1a2f47] leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HVAD ER PAID ADS ── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#c8f04a] mb-4">
              Hvad er paid ads?
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Du betaler for at blive vist til de rigtige mennesker
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Paid ads er betalte annoncer på Meta (Facebook & Instagram) og Google.
              Når nogen søger efter det du tilbyder - eller matcher din ideelle kunde -
              dukker du op. Du betaler kun når det virker.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Det lyder enkelt. Men de fleste SMV'er bruger penge på annoncer der
              rammer forkert, har svage budskaber eller sender folk til en side der
              ikke konverterer. Vi løser det hele.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎯", title: "Meta Ads", desc: "Facebook & Instagram - nå præcis din målgruppe baseret på interesser, adfærd og geografi." },
              { icon: "🔍", title: "Google Ads", desc: "Søgeannoncer der fanger kunder i det øjeblik de leder efter det du tilbyder." },
              { icon: "🔄", title: "Retargeting", desc: "Genaktiver besøgende der ikke konverterede første gang - de er dine varmeste leads." },
              { icon: "📐", title: "A/B test", desc: "Vi tester løbende hvad der virker og skærer det væk der ikke gør." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#f4f4f2] rounded-2xl p-5 hover:bg-[#0f1e2e] hover:text-white transition-colors duration-300 group"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-semibold mb-1 text-sm group-hover:text-white">{item.title}</div>
                <div className="text-xs text-gray-500 leading-relaxed group-hover:text-[#8ba3bc]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSEN ── */}
      <section className="bg-[#0f1e2e] px-6 py-24 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c8f04a] mb-4 text-center">
            Sådan arbejder vi
          </p>
          <h2 className="text-4xl font-bold text-center mb-16">
            Fra første samtale til løbende resultater
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Analyse & strategi",
                desc: "Vi gennemgår din virksomhed, målgruppe og konkurrenter. Derefter vælger vi platforme og budskaber.",
              },
              {
                num: "02",
                title: "Opsætning",
                desc: "Vi bygger kampagnerne - annoncekonti, pixelopsætning, målgrupper, budgetter og kreativt materiale.",
              },
              {
                num: "03",
                title: "Optimering",
                desc: "Vi overvåger dagligt og justerer løbende. Det der ikke virker skæres. Det der virker skaleres.",
              },
              {
                num: "04",
                title: "Rapportering",
                desc: "Månedlig rapport med præcise tal: hvad kostede en kunde, hvad gav annoncerne tilbage, og hvad er næste skridt.",
              },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="text-6xl font-bold text-[#c8f04a] opacity-20 mb-4 leading-none">
                  {step.num}
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-[#8ba3bc] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HVAD DU FÅR ── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-[#c8f04a] mb-4 text-center">
          Det du får
        </p>
        <h2 className="text-4xl font-bold text-center mb-16">
          Alt hvad du har brug for - intet du ikke har
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "⚙️", title: "Komplet opsætning", desc: "Annoncekonti, pixel/konverteringssporing, målgrupper og budgetter. Alt er klar fra dag ét." },
            { icon: "🎨", title: "Kreativt materiale", desc: "Vi hjælper med at skrive annoncetekster og rådgiver om visuals der stopper scrollet." },
            { icon: "📊", title: "Live dashboard", desc: "Du har altid adgang til et dashboard der viser dine kampagners performance i realtid." },
            { icon: "🧪", title: "Løbende A/B test", desc: "Vi tester konstant nye varianter af annoncer så vi altid finder det der performer bedst." },
            { icon: "📞", title: "Fast kontaktperson", desc: "Én person der kender din forretning og er nem at få fat i - ingen ticketsystemer." },
            { icon: "📄", title: "Månedlig rapport", desc: "Klar rapport med alle nøgletal: ROAS, CPC, konverteringsrate og anbefalinger til næste måned." },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-100 rounded-2xl p-7 hover:border-[#c8f04a] hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
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
                q: "Hvad skal jeg have i annonce-budget?",
                a: "Vi anbefaler minimum 3.000-5.000 kr./md. i annoncekroner for at få nok data til at optimere. Det er adskilt fra vores honorar. Vi tilpasser altid strategien til dit budget.",
              },
              {
                q: "Hvornår begynder jeg at se resultater?",
                a: "De fleste ser de første resultater inden for 2-4 uger. De første 30 dage bruger vi til at teste og indsamle data. Herefter optimerer vi løbende - og resultaterne forbedres måned for måned.",
              },
              {
                q: "Hvad hvis annoncerne ikke virker?",
                a: "Vi stopper det der ikke virker og skalerer det der gør. Du får altid fuld transparens i vores rapporter - ingen skjulte tal, ingen skjulte gebyrer.",
              },
              {
                q: "Kan I lave annoncer hvis jeg ikke har billeder og videoer?",
                a: "Ja. Vi rådgiver om hvad du skal optage eller fotografere, og vi skriver alle annoncetekster. Har du slet ingen materiale hjælper vi med at finde en løsning.",
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
            Klar til annoncer der{" "}
            <span className="text-[#c8f04a]">rent faktisk virker?</span>
          </h2>
          <p className="text-[#8ba3bc] text-lg mb-10 leading-relaxed">
            Vi starter med en gratis analyse af dit annonce-potentiale. Du får
            et ærligt svar på hvad paid ads kan give din virksomhed - og hvad det koster.
          </p>
          <Link
            href="/analyse"
            className="inline-block bg-[#c8f04a] text-[#0f1e2e] font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform duration-200"
          >
            Få gratis analyse →
          </Link>
          <p className="text-[#8ba3bc] text-sm mt-5">
            Ingen binding · Ingen skjulte gebyrer · Svar inden for 24 timer
          </p>
        </div>
      </section>

    </main>
  );
}
