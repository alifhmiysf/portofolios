
const { useState, useEffect } = React;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [targetSection, setTargetSection] = useState("");

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

  useEffect(() => {
    if (!navigating) return;

    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 16) + 8;

      if (progress >= 100) {
        progress = 100;
        setLoadingProgress(100);

        clearInterval(interval);

        setTimeout(() => {
          const target = document.querySelector(targetSection);

          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }

          setNavigating(false);
          setLoadingProgress(0);
          setTargetSection("");
        }, 180);
      } else {
        setLoadingProgress(progress);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [navigating, targetSection]);

  const handleNavigation = (event, href) => {
    event.preventDefault();

    if (navigating) return;

    setMenuOpen(false);
    setTargetSection(href);
    setLoadingProgress(0);
    setNavigating(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`site-nav nav-y2k ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-y2k-inner">

          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => handleNavigation(e, "#home")}
            aria-label="Ali Fahmi Yusuf - Home"
          >
            <span className="nav-brand-icon">A.</span>

            <span className="nav-brand-text">
              <strong>ALI.EXE</strong>
              <small>PERSONAL DIGITAL SPACE</small>
            </span>
          </a>

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
                onClick={(e) => handleNavigation(e, href)}
              >
                <span className="nav-link-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{label}</span>
              </a>
            ))}

            <a
              href="#contact"
              className="nav-link nav-y2k-link nav-contact-icon"
              onClick={(e) => handleNavigation(e, "#contact")}
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

      {navigating && (
        <div className="xp-navigation-overlay">
          <div className="xp-navigation-window">

            <div className="xp-navigation-titlebar">
              <span>Windows Internet Navigation</span>
              <span className="xp-window-close">×</span>
            </div>

            <div className="xp-navigation-content">
              <div className="xp-navigation-icon">🌐</div>

              <div className="xp-navigation-info">
                <strong>Loading {targetSection.replace("#", "")}...</strong>
                <span>Please wait while the page is loading.</span>

                <div className="xp-progress-track">
                  <div
                    className="xp-progress-fill"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>

                <small>{loadingProgress}% COMPLETED</small>
              </div>
            </div>

            <div className="xp-navigation-footer">
              <span>ALI.EXE SYSTEM</span>
              <span>PLEASE WAIT...</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

window.Navbar = Navbar;
