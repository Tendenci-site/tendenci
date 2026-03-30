"use client";

import { useState } from "react";

const FAQ = [
  {
    q: "Hvad koster det at arbejde med Tendenci?",
    a: "Vi tilpasser vores løsninger til din virksomheds behov og budget. Kontakt os for en uforpligtende snak om hvad der passer til dig.",
  },
  {
    q: "Hvor lang tid går der før jeg ser resultater?",
    a: "De fleste virksomheder begynder at se øget synlighed og engagement inden for de første 4-8 uger. Konkrete resultater i form af henvendelser og salg afhænger af branche og indsats.",
  },
  {
    q: "Hvilke sociale medier arbejder I med?",
    a: "Vi arbejder primært med Instagram, Facebook og TikTok. Vi hjælper dig med at finde ud af hvilke platforme der giver mest mening for netop din virksomhed.",
  },
  {
    q: "Skal jeg selv producere indhold?",
    a: "Nej – det er hele idéen. Vi håndterer alt fra strategi til produktion og publicering. Du godkender indholdet, men behøver ikke bruge tid på det selv.",
  },
  {
    q: "Hvad indeholder den gratis analyse?",
    a: "Vi gennemgår dine sociale medieprofiler, dit nuværende indhold, dine konkurrenter og din målgruppe. Du får konkrete anbefalinger du kan handle på med det samme.",
  },
  {
    q: "Binder jeg mig til en lang kontrakt?",
    a: "Vi tror på at resultaterne skal tale for sig selv. Vi arbejder derfor med løbende aftaler uden lange bindingsperioder.",
  },
];

export default function Kontakt() {
  const [open, setOpen] = useState(null);

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
          <h1
            style={{ color: "#ffffff", fontWeight: 800, fontSize: "2.75rem", lineHeight: 1.2 }}
            className="mb-4"
          >
            Kontakt os
          </h1>
          <p style={{ color: "#ffffff", opacity: 0.7 }} className="text-lg">
            Vi er altid klar til at hjælpe. Ræk ud og vi vender tilbage inden for 24 timer på hverdage.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-14">

        {/* Kontaktinfo */}
        <section>
          <div
            style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e2dd" }}
            className="p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <div
              style={{ backgroundColor: "#0f1e2e", borderRadius: "50%", width: 48, height: 48, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H19V15H1V1Z" stroke="#c8f04a" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M1 1L10 9L19 1" stroke="#c8f04a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <a
                href="mailto:hejtendenci@gmail.com"
                style={{ color: "#0f1e2e", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}
                className="hover:opacity-70 transition-opacity"
              >
                hejtendenci@gmail.com
              </a>
              <p style={{ color: "#0f1e2e", opacity: 0.55, fontSize: "0.875rem", marginTop: 4 }}>
                Vi svarer inden for 24 timer på hverdage
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="flex flex-col gap-5">
          <h2 style={{ fontWeight: 800, fontSize: "1.75rem", color: "#0f1e2e" }}>
            Ofte stillede spørgsmål
          </h2>

          <div className="flex flex-col gap-3">
            {FAQ.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid #e5e2dd",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    textAlign: "left",
                  }}
                >
                  <span style={{ color: "#0f1e2e", fontWeight: 700, fontSize: "0.95rem" }}>
                    {item.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      backgroundColor: open === i ? "#0f1e2e" : "#f5f2ed",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background-color 0.2s",
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                    >
                      <path
                        d="M5 1V9M1 5H9"
                        stroke={open === i ? "#c8f04a" : "#0f1e2e"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div style={{ padding: "0 20px 18px", borderTop: "1px solid #f0ede8" }}>
                    <p style={{ color: "#0f1e2e", opacity: 0.7, fontSize: "0.9rem", lineHeight: 1.75, paddingTop: 14 }}>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center pb-4">
          <a
            href="/analyse"
            style={{
              backgroundColor: "#c8f04a",
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

      </div>
    </div>
  );
}
