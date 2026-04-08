import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Om os | Tendenci",
  description:
    "Lær Tendenci at kende. Vi kombinerer erhvervsøkonomisk uddannelse fra CBS med praktisk erfaring inden for paid ads, SEO og email marketing.",
  openGraph: {
    title: "Om os | Tendenci",
    description: "Lær Tendenci at kende.",
    url: "https://tendenci.dk/om-os",
    siteName: "Tendenci",
    locale: "da_DK",
    type: "website",
  },
};

export default function OmOsPage() {
  return (
    <main className="bg-white text-[#0f1e2e]">

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
      <section className="bg-[#0f1e2e] px-6 py-24 text-center text-white">
        <span className="inline-block bg-[#00c9a7] text-[#0f1e2e] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          Om os
        </span>
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
          Vi er til for virksomheder der fortjener at blive fundet.
        </h1>
      </section>

      {/* ── VILLADS ── */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Billede */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#00c9a7] opacity-10" />
            <Image
              src="/Villads.jpg"
              alt="Villads Fischer - Grundlægger af Tendenci"
              width={560}
              height={640}
              className="relative rounded-2xl w-full object-cover shadow-xl"
              priority
            />
            {/* Badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#0f1e2e] text-white rounded-2xl px-5 py-4 shadow-xl border border-[#00c9a7]/20">
              <div className="text-xs text-[#00c9a7] font-bold uppercase tracking-widest mb-1">Grundlægger</div>
              <div className="font-bold text-lg">Villads Fischer</div>
              <div className="text-xs text-[#8ba3bc] mt-0.5">CBS · Tendenci</div>
            </div>
          </div>

          {/* Tekst */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00c9a7] mb-6">
              Mennesket bag Tendenci
            </p>

            <div className="space-y-5 text-gray-500 leading-relaxed text-[15px]">
              <p>
                Jeg startede Tendenci fordi jeg brænder for det kommercielle.
                Hvad får folk til at købe? Hvad skaber reel vækst? Og hvad er
                bare støj?               </p>
              <p>
                Jeg har altid haft et naturligt drive til at tage ejerskab over
                projekter - forme dem, sætte retningen og se dem gå fra idé til
                virkelighed. Det giver mig en enorm tilfredsstillelse, og det er
                præcis den energi jeg bringer med ind i hvert samarbejde med Tendenci.
              </p>
              <p>
                Til daglig studerer jeg på CBS, hvor jeg bygger en solid forståelse
                for hvad der rent faktisk skaber forretningsværdi. Det kombinerer
                jeg med praktisk erfaring fra erhvervslivet.
              </p>
              <p className="text-[#0f1e2e] font-medium">
                Tendenci er mit projekt. Jeg tager det seriøst - og jeg glæder
                mig til at høre om din virksomhed.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/analyse"
                className="inline-block bg-[#00c9a7] text-[#0f1e2e] font-bold px-7 py-3.5 rounded-full hover:scale-105 transition-transform duration-200"
              >
                Få gratis analyse →
              </Link>
              <Link
                href="/kontakt"
                className="inline-block border border-gray-200 text-[#0f1e2e] font-medium px-7 py-3.5 rounded-full hover:border-[#00c9a7] transition"
              >
                Kontakt mig
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HVORFOR TENDENCI ── */}
      <section className="bg-[#f4f4f2] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00c9a7] mb-4 text-center">
            Vores tilgang
          </p>
          <h2 className="text-3xl font-bold text-center mb-14">
            Vi tror på marketing der kan mærkes på bundlinjen
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Resultater frem for aktivitet", desc: "Vi måler ikke succes i opslag eller klik. Vi måler i henvendelser, salg og kunder." },
              { icon: "🤝", title: "Én partner til det hele", desc: "Ingen koordinering mellem tre bureauer. Vi håndterer paid ads, SEO og email under ét tag." },
              { icon: "📊", title: "Data driver alt", desc: "Hvert beslutning vi tager er baseret på data - ikke mavefornemmelser eller trends." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-gray-100">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0f1e2e] px-6 py-24 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Klar til at komme i gang?
        </h2>
        <p className="text-[#8ba3bc] mb-8 max-w-lg mx-auto">
          Lad os tage en uforpligtende snak om din virksomhed og hvad der skal til for at skaffe dig flere kunder.
        </p>
        <Link
          href="/analyse"
          className="inline-block bg-[#00c9a7] text-[#0f1e2e] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-200"
        >
          Få gratis analyse →
        </Link>
        <p className="text-[#8ba3bc] text-sm mt-4">
          Ingen binding · Ingen skjulte gebyrer · Svar inden for 24 timer
        </p>
      </section>

    </main>
  );
}
