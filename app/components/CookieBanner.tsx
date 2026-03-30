"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie_consent");
    if (!choice) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "all");
    setVisible(false);
  }

  function necessary() {
    localStorage.setItem("cookie_consent", "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#0f1e2e",
        zIndex: 1000,
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <p style={{ color: "#ffffff", fontSize: "0.9rem", opacity: 0.85, maxWidth: "600px" }}>
          Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside.{" "}
          <a
            href="/cookiepolitik"
            style={{ color: "#c8f04a", textDecoration: "underline" }}
          >
            Læs mere
          </a>
        </p>
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          <button
            onClick={necessary}
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.4)",
              borderRadius: "100px",
              padding: "8px 18px",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Kun nødvendige
          </button>
          <button
            onClick={accept}
            style={{
              backgroundColor: "#c8f04a",
              color: "#0f1e2e",
              border: "none",
              borderRadius: "100px",
              padding: "8px 18px",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Accepter alle
          </button>
        </div>
      </div>
    </div>
  );
}
