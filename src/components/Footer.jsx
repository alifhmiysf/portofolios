
const socialLinks = [
  {
    label: "LinkedIn",
    icon: "in",
    link: "https://www.linkedin.com/in/alifhmiysf/",
  },
  {
    label: "GitHub",
    icon: "GH",
    link: "https://github.com/alifhmiysf",
  },
  {
    label: "WhatsApp",
    icon: "WA",
    link: "https://wa.me/6287723400208",
  },
  {
    label: "Email",
    icon: "@",
    link: "mailto:alifahmiyusuf631@gmail.com",
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-y2k section-padding">
      <div className="container-editorial">

        <div className="footer-window">

          {/* TITLEBAR */}
          <div className="footer-titlebar">
            <div className="footer-title">
              <span className="footer-icon">✳</span>
              <span>ALI.EXE — SYSTEM FOOTER</span>
            </div>

            <div className="about-window-controls">
              <span>−</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>

          {/* FOOTER CONTENT */}
          <div className="footer-content">

            <div className="footer-brand">
              <span className="footer-brand-label">
                PERSONAL DIGITAL SPACE
              </span>

              <h2>
                ALI<span>.EXE</span>
              </h2>

              <p>
                Building things for the digital world.
              </p>

              {/* SOCIAL ICONS */}
              <div className="footer-socials">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={item.label}
                    title={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* INFORMATION */}
            <div className="footer-info">

              <div>
                <span className="footer-info-label">ROLE</span>
                <p>Backend Engineer</p>
              </div>

              <div>
                <span className="footer-info-label">LOCATION</span>
                <p>Yogyakarta, Indonesia</p>
              </div>

              <a href="#home" className="footer-back-top">
                BACK TO TOP <span>↑</span>
              </a>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p>
              © {year} ALI FAHMI YUSUF. ALL RIGHTS RESERVED.
            </p>

            <p className="footer-system-status">
              <span></span> SYSTEM NORMAL
            </p>
          </div>

        </div>

        <div className="footer-outside">
          <span>DESIGNED & DEVELOPED BY ALI</span>
          <span>END OF TRANSMISSION_</span>
        </div>

      </div>
    </footer>
  );
}

window.Footer = Footer;
