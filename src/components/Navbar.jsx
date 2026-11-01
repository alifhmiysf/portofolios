
const { useState, useEffect } = React;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Certificates", "#certificates"],
    ["Skills", "#skills"],
    ["Education", "#education"]
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`site-nav nav-y2k ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-y2k-inner">

        {/* BRAND */}
        <a
          href="#home"
          className="nav-brand"
          onClick={closeMenu}
          aria-label="Ali Fahmi Yusuf - Home"
        >
          <span className="nav-brand-icon">A.</span>

          <span className="nav-brand-text">
            <strong>ALI.EXE</strong>
            <small>PERSONAL DIGITAL SPACE</small>
          </span>
        </a>

        {/* NAVIGATION */}
        <div
          className={`nav-links nav-y2k-links ${
            menuOpen ? "menu-open" : ""
          }`}
        >
          <div className="nav-mobile-heading">
            <span>DIRECTORY</span>
            <span>07 ITEMS</span>
          </div>

          {links.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              className="nav-link nav-y2k-link"
              onClick={closeMenu}
            >
              <span className="nav-link-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{label}</span>
            </a>
          ))}

          {/* CONTACT ICON */}
          <a
            href="#contact"
            className="nav-link nav-y2k-link nav-contact-icon"
            onClick={closeMenu}
            aria-label="Contact"
            title="Contact"
          >
            <span className="nav-link-number">07</span>

            <svg
              className="nav-email-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-y2k-right">
          <div className="nav-system-status">
            <span className="nav-status-dot"></span>
            <span>SYS.ONLINE</span>
          </div>

          <button
            className="nav-menu nav-y2k-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span>{menuOpen ? "CLOSE" : "MENU"}</span>
            <span className="nav-menu-symbol">
              {menuOpen ? "×" : "+"}
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}

window.Navbar = Navbar;
