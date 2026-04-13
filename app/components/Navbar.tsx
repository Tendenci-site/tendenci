const NAV_LINKS = [
  { label: "Ydelser", href: "#ydelser" },
  { label: "Pakker", href: "/pakker" },
  { label: "Proces", href: "#proces" },
  { label: "Om os", href: "/om-os" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  return (
    <header
      style={{ backgroundColor: "#f5f2ed" }}
      className="sticky top-0 z-50 border-b border-black/10"
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", flexShrink: 0, maxWidth: "60%" }}>
          <img
            src="/Tendenci Logo (4).png"
            alt="Tendenci"
            style={{ height: 160, width: "auto", maxWidth: "100%", display: "block" }}
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                style={{ color: "#0f1e2e" }}
                className="hover:opacity-60 transition-opacity"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA – desktop full size, mobile smaller */}
        <a
          href="href="/tendenci-sundhedscheck.html"
          style={{
            backgroundColor: "#0f1e2e",
            color: "#f5f2ed",
            borderRadius: "100px",
            flexShrink: 0,
          }}
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          Test din virksomhed
        </a>
        <a
          href="/tendenci-sundhedscheck.html"
          style={{
            backgroundColor: "#0f1e2e",
            color: "#f5f2ed",
            borderRadius: "100px",
            flexShrink: 0,
            fontSize: "12px",
            padding: "8px 14px",
          }}
          className="md:hidden inline-flex items-center font-medium hover:opacity-80 transition-opacity"
        >
          Gratis virksomhedsanalyse
        </a>
      </nav>
    </header>
  );
}
