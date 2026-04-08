"use client";

import { useState } from "react";

export default function Analyse() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const params = new URLSearchParams();
    params.append("to", "hejtendenci@gmail.com");
    params.append("subject", `Gratis analyse – ${data.get("virksomhed")}`);
    params.append(
      "body",
      `Navn: ${data.get("navn")}\nVirksomhed: ${data.get("virksomhed")}\nBranche: ${data.get("branche")}\nEmail: ${data.get("email")}\n\nHvad ønsker du hjælp til:\n${data.get("besked")}`
    );
    window.location.href = `mailto:hejtendenci@gmail.com?subject=${encodeURIComponent(`Gratis analyse – ${data.get("virksomhed")}`)}&body=${encodeURIComponent(`Navn: ${data.get("navn")}\nVirksomhed: ${data.get("virksomhed")}\nBranche: ${data.get("branche")}\nEmail: ${data.get("email")}\n\nHvad ønsker du hjælp til:\n${data.get("besked")}`)}`;
    setSent(true);
  }

  const STEPS = [
    {
      number: "01",
      title: "Fortæl os om din virksomhed",
      content: null,
    },
    {
      number: "02",
      title: "Vi tager kontakt inden for 24 timer på hverdage",
      content:
        "Så snart vi modtager din henvendelse kontakter vi dig – enten på mail eller telefon. Vi stiller et par korte spørgsmål så vi kan lave den mest præcise analyse muligt.",
    },
    {
      number: "03",
      title: "Modtag din gratis analyse inden for 1 uge",
      content:
        "Du modtager en grundig analyse af din online tilstedeværelse med konkrete anbefalinger du kan handle på med det samme. Helt gratis og uden forpligtelser.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f5f2ed", color: "#0f1e2e", fontFamily: "var(--font-manrope)" }} className="min-h-screen">

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
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1
            style={{ color: "#ffffff", fontFamily: "var(--font-manrope)", fontSize: "2.75rem", lineHeight: 1.2, fontWeight: 800 }}
            className="mb-4"
          >
            Fedt at du er klar til at blive fundet af flere kunder!
          </h1>
          <p style={{ color: "#ffffff", opacity: 0.75 }} className="text-lg">
            Sådan foregår det – vi klarer det hele for dig.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-12">

        {/* Step 1 */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div
              style={{ backgroundColor: "#00c9a7", color: "#0f1e2e", borderRadius: "50%", width: 48, height: 48, fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}
              className="flex items-center justify-center"
            >
              01
            </div>
            <div style={{ width: 2, backgroundColor: "#00c9a7", opacity: 0.3, flex: 1, marginTop: 8 }} />
          </div>
          <div className="flex flex-col gap-5 pb-4 flex-1">
            <h2 style={{ fontWeight: 800, fontSize: "1.4rem", color: "#0f1e2e" }}>
              Fortæl os om din virksomhed
            </h2>
            <div style={{ color: "#0f1e2e", opacity: 0.7 }} className="text-sm leading-relaxed">
              <p className="mb-2">Udfyld kontaktformularen nedenfor med følgende:</p>
              <ul className="flex flex-col gap-1 pl-1">
                {[
                  "Din virksomheds navn og branche",
                  "Hvilke digitale kanaler I allerede bruger",
                  "Hvad I ønsker hjælp til",
                  "Skriv i beskrivelsen hvis du ønsker at blive kontaktet telefonisk",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "#00c9a7", fontWeight: 700 }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact form */}
            {sent ? (
              <div
                style={{ backgroundColor: "#00c9a7", borderRadius: "16px" }}
                className="p-6 text-center"
              >
                <p style={{ color: "#0f1e2e", fontWeight: 700, fontSize: "1.1rem" }}>
                  Tak! Vi vender tilbage inden for 24 timer. 🎉
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e5e2dd" }}
                className="p-6 flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0f1e2e" }}>Navn</label>
                    <input
                      name="navn"
                      required
                      placeholder="Dit fulde navn"
                      style={{ border: "1.5px solid #e5e2dd", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", color: "#0f1e2e", outline: "none" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0f1e2e" }}>Virksomhed</label>
                    <input
                      name="virksomhed"
                      required
                      placeholder="Virksomhedens navn"
                      style={{ border: "1.5px solid #e5e2dd", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", color: "#0f1e2e", outline: "none" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0f1e2e" }}>Branche</label>
                    <input
                      name="branche"
                      required
                      placeholder="F.eks. Håndværk, Detail..."
                      style={{ border: "1.5px solid #e5e2dd", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", color: "#0f1e2e", outline: "none" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0f1e2e" }}>Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="din@email.dk"
                      style={{ border: "1.5px solid #e5e2dd", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", color: "#0f1e2e", outline: "none" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0f1e2e" }}>Hvad ønsker du hjælp til?</label>
                  <textarea
                    name="besked"
                    required
                    rows={4}
                    placeholder="Beskriv gerne din virksomhed, hvad I har prøvet før, og hvad I ønsker at opnå..."
                    style={{ border: "1.5px solid #e5e2dd", borderRadius: "10px", padding: "10px 14px", fontSize: "0.9rem", color: "#0f1e2e", outline: "none", resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "#0f1e2e", color: "#f5f2ed", borderRadius: "100px" }}
                  className="self-start px-8 py-3.5 text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  Send og kom i gang →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Steps 2 & 3 */}
        {STEPS.slice(1).map((step, i) => (
          <div key={step.number} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div
                style={{ backgroundColor: "#00c9a7", color: "#0f1e2e", borderRadius: "50%", width: 48, height: 48, fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}
                className="flex items-center justify-center"
              >
                {step.number}
              </div>
              {i === 0 && <div style={{ width: 2, backgroundColor: "#00c9a7", opacity: 0.3, flex: 1, marginTop: 8 }} />}
            </div>
            <div className="flex flex-col gap-3 pb-4">
              <h2 style={{ fontWeight: 800, fontSize: "1.4rem", color: "#0f1e2e" }}>
                {step.title}
              </h2>
              <p style={{ color: "#0f1e2e", opacity: 0.7 }} className="text-sm leading-relaxed max-w-xl">
                {step.content}
              </p>
            </div>
          </div>
        ))}

        {/* Bottom note */}
        <p style={{ color: "#0f1e2e", opacity: 0.5 }} className="text-sm text-center mt-4">
          Har du spørgsmål? Skriv til os på{" "}
          <a href="mailto:hejtendenci@gmail.com" style={{ color: "#0f1e2e", fontWeight: 700, textDecoration: "underline" }}>
            hejtendenci@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
