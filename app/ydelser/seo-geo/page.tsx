import Link from "next/link";

export const metadata = {
  title: "SEO & GEO – Bliv fundet på Google og af AI | Tendenci",
  description:
    "SEO og GEO er de vigtigste digitale kanaler i 2026. Vi hjælper SMV'er med at blive fundet - både på Google og i AI-svar fra ChatGPT og Perplexity.",
};

export default function SeoGeoPage() {
  return (
    <main className="bg-white text-[#0f1e2e]">

      {/* ── HERO ── */}
      <section className="bg-[#0f1e2e] text-white px-6 py-24 text-center">
        <span className="inline-block bg-[#c8f04a] text-[#0f1e2e] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Ydelse
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-2xl mx-auto mb-6">
          Dine kunder googler dig ikke længere.{" "}
          <span className="text-[#c8f04a]">De spørger ChatGPT.</span>
        </h1>
        <p className="text-[#8ba3bc] text-lg max-w-xl mx-auto mb-10">
          I 2026 er der to slags virksomheder: dem der bliver fundet - og dem
          der ikke gør. SEO og GEO er forskellen.
        </p>
        <Link
          href="/analyse"
          className="inline-block bg-[#c8f04a] text-[#0f1e2e] font-semibold px-8 py-4 rounded-full hover:opacity-90 transition"
        >
          Få gratis analyse af din synlighed →
        </Link>
      </section>

      {/* ── HVAD ER SEO OG GEO ── */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c8f04a] mb-4 text-center">
          Forstå forskellen
        </p>
        <h2 className="text-3xl font-semibold text-center mb-14">
          To kanaler. Begge er afgørende.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SEO */}
          <div className="bg-[#f4f4f2] rounded-2xl p-8">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-3">
              SEO{" "}
              <span className="text-sm font-normal text-gray-500">
                - Search Engine Optimization
              </span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              SEO handler om at din virksomhed dukker op på Google når kunderne
              søger efter det du tilbyder. Når nogen skriver "tømrer København"
              eller "revisor Frederiksberg" - vil du gerne stå øverst.
            </p>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Eksempel
              </p>
              <p className="text-sm text-gray-600">
                En kunde søger{" "}
                <span className="font-medium text-[#0f1e2e]">
                  "bedste frisør Nørrebro"
                </span>{" "}
                på Google. Uden SEO er du ikke på siden. Med SEO er du det
                første de ser.
              </p>
            </div>
          </div>

          {/* GEO */}
          <div className="bg-[#0f1e2e] rounded-2xl p-8 text-white">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-3">
              GEO{" "}
              <span className="text-sm font-normal text-[#8ba3bc]">
                - Generative Engine Optimization
              </span>
            </h3>
            <p className="text-[#8ba3bc] leading-relaxed mb-4">
              GEO er den nye disciplin. Når folk spørger ChatGPT, Perplexity
              eller Google AI om anbefalinger - hvem nævner AI'en? GEO handler
              om at optimere dit digitale fodaftryk så AI-modeller kender og
              anbefaler din virksomhed.
            </p>
            <div className="bg-[#1a2f47] rounded-xl p-4">
              <p className="text-xs font-semibold text-[#c8f04a] uppercase tracking-wide mb-2">
                Eksempel
              </p>
              <p className="text-sm text-[#8ba3bc]">
                En kunde spørger ChatGPT{" "}
                <span className="font-medium text-white">
                  "hvilket flyttefirma er bedst i København?"
                </span>{" "}
                Uden GEO nævnes du ikke. Med GEO er du en af de første.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HVORFOR DET HASTER ── */}
      <section className="bg-[#f4f4f2] px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#c8f04a] mb-4 text-center">
            Hvorfor nu
          </p>
          <h2 className="text-3xl font-semibold text-center mb-14">
            2026 er et vendepunkt
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-semibold text-[#0f1e2e] mb-2">
                68<span className="text-[#c8f04a]">%</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                af alle online oplevelser starter med en søgemaskine
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-semibold text-[#0f1e2e] mb-2">
                49<span className="text-[#c8f04a]">%</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                af forbrugere bruger nu AI til at finde virksomheder og
                produkter
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-semibold text-[#0f1e2e] mb-2">
                0<span className="text-[#c8f04a]">%</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                af dine konkurrenter har styr på GEO endnu. Det er dit vindue.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center mb-14">
            Kilder: BrightEdge Research (68%), Salesforce State of the Connected Customer 2024 (49%)
          </p>

          <div className="bg-[#0f1e2e] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Hvorfor det haster - og ikke kan vente
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-[#c8f04a] font-semibold mb-2">SEO</p>
                <p className="text-[#8ba3bc] text-sm leading-relaxed">
                  SEO tager 3-6 måneder at bygge op. Virksomheder der starter
                  i dag høster kunderne sidst på året. Dem der venter til 2027
                  starter forfra - mens du allerede er foran.
                </p>
              </div>
              <div>
                <p className="text-[#c8f04a] font-semibold mb-2">GEO</p>
                <p className="text-[#8ba3bc] text-sm leading-relaxed">
                  GEO er nyt nok til at de fleste ikke kender det. Det betyder
                  at markedet er åbent. Om 12-18 måneder vil alle tale om
                  det - og dem der er tidligt inde vil have en uovervindelig
                  fordel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HVAD VI GØR ── */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#c8f04a] mb-4 text-center">
          Sådan hjælper vi
        </p>
        <h2 className="text-3xl font-semibold text-center mb-14">
          Hvad Tendenci konkret gør for dig
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🗺️",
              title: "Søgeordsanalyse",
              desc: "Vi finder præcis hvilke ord dine kunder bruger når de leder efter det du tilbyder - og bygger en strategi rundt om dem.",
            },
            {
              icon: "✍️",
              title: "Indhold der ranker",
              desc: "Vi producerer tekster, sider og artikler der er optimeret til at rangere på Google og blive brugt som kilde af AI-modeller.",
            },
            {
              icon: "🤖",
              title: "GEO-optimering",
              desc: "Vi strukturerer din digitale tilstedeværelse så ChatGPT, Perplexity og Google AI kender din virksomhed og anbefaler den.",
            },
            {
              icon: "📊",
              title: "Løbende opfølgning",
              desc: "Du får månedlige rapporter der viser din placering på Google og om din virksomhed nævnes i AI-svar - med konkrete næste skridt.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-gray-100 rounded-2xl p-6 hover:border-[#c8f04a] transition"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#c8f04a] px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#0f1e2e] mb-4">
          Er din virksomhed synlig - på Google og i AI?
        </h2>
        <p className="text-[#1a2f47] mb-8 max-w-xl mx-auto">
          Vi laver en gratis analyse af din digitale synlighed. Du får et ærligt
          billede af hvor du står - og hvad der skal til for at du bliver fundet.
        </p>
        <Link
          href="/analyse"
          className="inline-block bg-[#0f1e2e] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition"
        >
          Få gratis synlighedsanalyse →
        </Link>
        <p className="text-[#1a2f47] text-sm mt-4">
          Ingen binding. Ingen skjulte gebyrer. Svar inden for 24 timer.
        </p>
      </section>

    </main>
  );
}
