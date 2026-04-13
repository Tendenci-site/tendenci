"use client";

import { useState, useEffect } from "react";

export default function SundhedscheckPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Vis ikke på sundhedscheck-siden selv
    if (window.location.pathname.includes("sundhedscheck")) return;

    // Tjek cookie
    if (document.cookie.includes("tc_popup_seen=1")) return;

    const timer = setTimeout(() => setVisible(true), 30000); // 30 sekunder
    return () => clearTimeout(timer);
  }, []);

  function hide() {
    setVisible(false);
    document.body.style.overflow = "";
    const d = new Date();
    d.setTime(d.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 dage
    document.cookie = "tc_popup_seen=1;expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
  }

  if (!visible) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) hide(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(8,14,20,.7)",
        backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "tcFadeIn .35s ease",
      }}
    >
      <style>{`
        @keyframes tcFadeIn{from{opacity:0}to{opacity:1}}
        @keyframes tcSlideUp{from{opacity:0;transform:translateY(20px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
      `}</style>

      <div style={{
        background: "#162230",
        border: "1px solid #253545",
        borderRadius: "16px",
        padding: "36px 32px",
        maxWidth: "440px",
        width: "100%",
        position: "relative",
        animation: "tcSlideUp .4s cubic-bezier(.4,0,.2,1)",
        boxShadow: "0 24px 64px rgba(0,0,0,.5)",
      }}>

        {/* Luk-knap */}
        <button
          onClick={hide}
          style={{
            position: "absolute", top: "14px", right: "14px",
            width: "32px", height: "32px", borderRadius: "8px",
            background: "rgba(255,255,255,.05)", border: "1px solid #253545",
            display: "grid", placeItems: "center", cursor: "pointer",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a7b8" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Ikon */}
        <div style={{
          width: "48px", height: "48px", borderRadius: "12px",
          background: "rgba(62,207,165,.1)", border: "1px solid rgba(62,207,165,.15)",
          display: "grid", placeItems: "center", marginBottom: "20px",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3ecfa5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>

        <h3 style={{
          fontFamily: "'Outfit',system-ui,sans-serif",
          fontSize: "1.3rem", fontWeight: 700, color: "#edf2f7",
          letterSpacing: "-.03em", lineHeight: 1.3, marginBottom: "8px",
        }}>
          Hvor sund er din virksomheds <span style={{ color: "#3ecfa5" }}>digitale motor?</span>
        </h3>

        <p style={{
          fontFamily: "'Outfit',system-ui,sans-serif",
          fontSize: ".88rem", color: "#94a7b8", lineHeight: 1.6,
          fontWeight: 300, marginBottom: "24px",
        }}>
          Tag vores gratis sundhedscheck på 2 minutter — og få en ærlig vurdering med konkrete anbefalinger.
        </p>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href="/tendenci-sundhedscheck.html"
            style={{
              fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: ".88rem",
              padding: "12px 24px", borderRadius: "100px", textDecoration: "none",
              background: "#3ecfa5", color: "#0f1923",
              boxShadow: "0 4px 20px rgba(62,207,165,.2)",
              flex: 1, textAlign: "center",
            }}
          >
            Tag testen nu →
          </a>
          <button
            onClick={hide}
            style={{
              fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: ".88rem",
              padding: "12px 24px", borderRadius: "100px", cursor: "pointer",
              background: "transparent", color: "#94a7b8",
              border: "1px solid #253545",
            }}
          >
            Ikke nu
          </button>
        </div>

        <div style={{
          marginTop: "16px", textAlign: "center",
          fontFamily: "'JetBrains Mono','Outfit',monospace",
          fontSize: ".65rem", letterSpacing: ".06em", color: "#5a7389",
        }}>
          7 spørgsmål · 2 minutter · helt gratis
        </div>

      </div>
    </div>
  );
}
