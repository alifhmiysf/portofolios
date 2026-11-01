
function About() {
  const facts = [
    {
      number: "01",
      title: "Laravel",
      description: "Backend & API development",
      status: "ACTIVE"
    },
    {
      number: "02",
      title: "Docker",
      description: "Deployment & containerization",
      status: "ACTIVE"
    },
    {
      number: "03",
      title: "Security",
      description: "Authentication & authorization",
      status: "FOCUS"
    },
    {
      number: "04",
      title: "CI/CD",
      description: "Automated delivery",
      status: "LEARNING"
    }
  ];

  return (
    <section id="about" className="about-section about-y2k section-padding">
      <div className="container-editorial">

        {/* SECTION HEADER */}
        <div className="about-section-heading reveal">
          <div className="y2k-section-label">
            <span className="y2k-label-dot"></span>
            01 / USER PROFILE
          </div>

          <span className="y2k-section-code">
            FILE: ABOUT_ME.EXE
          </span>
        </div>

        <div className="about-y2k-layout">

          {/* PROFILE WINDOW */}
          <div className="about-profile-window reveal">

            <div className="about-window-titlebar">
              <div className="about-window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>USER_PROFILE.JPG</span>

              <span className="about-window-extension">JPG</span>
            </div>

            <div className="about-profile-content">

              <div className="about-photo-frame">
                <img
                  src="assets/profile.jpg"
                  alt="Ali Fahmi Yusuf"
                  className="about-image"
                  loading="lazy"
                />

                <span className="about-photo-index">
                  IMG_001 / 2026
                </span>
              </div>

              <div className="about-profile-info">
                <div>
                  <span className="about-micro-label">
                    USER IDENTIFICATION
                  </span>

                  <h3>Ali Fahmi Yusuf</h3>

                  <p>Backend Engineer</p>
                </div>

                <div className="about-profile-divider"></div>

                <div className="about-profile-meta">
                  <div>
                    <span>FIELD</span>
                    <strong>Informatics</strong>
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <strong>Yogyakarta, ID</strong>
                  </div>

                  <div>
                    <span>STATUS</span>
                    <strong className="about-available">
                      <i></i> Learning & Building
                    </strong>
                  </div>
                </div>
              </div>

            </div>

            <div className="about-window-footer">
              <span>PROFILE_DATA.DAT</span>
              <span>256 KB</span>
            </div>
          </div>

          {/* ABOUT INFORMATION */}
          <div className="about-info-column reveal">

            <div className="about-info-window">

              <div className="about-window-titlebar">
                <div className="about-window-controls">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span>ABOUT_ME.EXE</span>

                <span className="about-window-extension">
                  TXT
                </span>
              </div>

              <div className="about-description">

                <span className="about-micro-label">
                  HELLO, WORLD!
                </span>

                <h2>
                  Engineering with
                  <br />
                  <em>purpose.</em>
                </h2>

                <p>
                  I am a Backend Engineer focused on building secure and
                  maintainable systems. I care deeply about authentication,
                  authorization, data integrity, automated testing, and
                  clean architecture.
                </p>

                <p>
                  My interests include backend development, API architecture,
                  database design, and deployment. I enjoy understanding how
                  systems work behind the interface and making them reliable.
                </p>

              </div>

              <div className="about-terminal-line">
                <span>ALI@PORTFOLIO:~$</span>
                <span> cat about.txt</span>
                <span className="about-cursor">_</span>
              </div>

            </div>

            {/* EXPERTISE MODULES */}
            <div className="about-modules">

              <div className="about-modules-heading">
                <span>INSTALLED MODULES</span>
                <span>04 MODULES</span>
              </div>

              <div className="about-facts-grid">
                {facts.map((fact) => (
                  <div className="about-module" key={fact.title}>
                    <div className="about-module-top">
                      <span>{fact.number}</span>
                      <span className={`about-module-status status-${fact.status.toLowerCase()}`}>
                        {fact.status}
                      </span>
                    </div>

                    <strong>{fact.title}</strong>
                    <p>{fact.description}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        <div className="about-bottom-note reveal">
          <span>END OF FILE</span>
          <span>MORE TO EXPLORE ↓</span>
        </div>

      </div>
    </section>
  );
}

window.About = About;
