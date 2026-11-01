
function Hero() {
  return (
    <section id="home" className="hero-y2k">

      {/* Decorative background */}
      <div className="y2k-bg-grid"></div>
      <div className="y2k-bg-star y2k-star-one">✳</div>
      <div className="y2k-bg-star y2k-star-two">✦</div>

      <div className="y2k-container">

        {/* Top status bar */}
        <div className="y2k-topbar reveal">
          <div className="y2k-topbar-brand">
            <span className="y2k-brand-icon">A.</span>
            <span>ALI.EXE</span>
          </div>

          <div className="y2k-topbar-center">
            PERSONAL DIGITAL SPACE
          </div>

          <div className="y2k-topbar-status">
            <span className="y2k-online-dot"></span>
            SYSTEM ONLINE
          </div>
        </div>

        {/* Main content */}
        <div className="y2k-hero-main">

          {/* Left side */}
          <div className="y2k-hero-copy">

            <div className="y2k-window y2k-intro-window reveal">

              <div className="y2k-window-titlebar">
                <div className="y2k-window-title">
                  <span>▣</span>
                  welcome.exe
                </div>

                <div className="y2k-window-controls">
                  <span>_</span>
                  <span>□</span>
                  <span>×</span>
                </div>
              </div>

              <div className="y2k-intro-content">
                <span className="y2k-small-label">
                  USER PROFILE / 001
                </span>

                <h1>
                  HELLO,
                  <br />
                  I'M <span>ALI.</span>
                </h1>

                <div className="y2k-intro-divider"></div>

                <p>
                  Backend Engineer building secure,
                  scalable, and reliable digital experiences.
                  I enjoy turning complex problems into
                  practical software solutions.
                </p>

                <div className="y2k-user-info">
                  <span>USER: ALI FAHMI YUSUF</span>
                  <span>ROLE: BACKEND ENGINEER</span>
                  <span>LOCATION: INDONESIA</span>
                </div>
              </div>
            </div>

            {/* Main buttons */}
            <div className="y2k-hero-actions reveal">

              <a href="#projects" className="y2k-button-primary">
                <span>▤</span>
                EXPLORE PROJECTS
                <span className="y2k-button-arrow">↗</span>
              </a>

              <a href="#contact" className="y2k-button-secondary">
                LET'S CONNECT
                <span>↗</span>
              </a>

            </div>

            {/* Status */}
            <div className="y2k-availability reveal">
              <span className="y2k-online-dot"></span>
              <span>OPEN TO OPPORTUNITIES</span>
              <span className="y2k-status-separator">/</span>
              <span>AVAILABLE FOR COLLABORATION</span>
            </div>

          </div>

          {/* Right side: 3D computer */}
          <div className="y2k-hero-visual reveal">

            <div className="y2k-visual-label">
              <span>MY DIGITAL WORKSPACE</span>
              <span>FIG. 001</span>
            </div>

            <div className="y2k-computer-stage">

              <div className="y2k-stage-circle"></div>

              <div className="y2k-stage-cross y2k-cross-one">+</div>
              <div className="y2k-stage-cross y2k-cross-two">+</div>

              <div className="y2k-computer-window">

                <div className="y2k-window-titlebar">
                  <div className="y2k-window-title">
                    <span>▣</span>
                    retro-workstation.glb
                  </div>

                  <div className="y2k-window-controls">
                    <span>_</span>
                    <span>□</span>
                    <span>×</span>
                  </div>
                </div>

                <div className="y2k-model-screen">

                  <div className="y2k-model-tag">
                    <span className="y2k-online-dot"></span>
                    3D OBJECT / ACTIVE
                  </div>

                  <model-viewer
                    src="assets/RetroComputerBooth.glb"
                    alt="Ali's 3D Retro Computer Booth"
                    auto-rotate
                    auto-rotate-delay="0"
                    rotation-per-second="15deg"
                    camera-controls
                    disable-zoom
                    shadow-intensity="1"
                    environment-image="neutral"
                    exposure="1"
                    loading="eager"
                    interaction-prompt="none"
                  />

                  <div className="y2k-model-watermark">
                    3D / 2000
                  </div>

                </div>

                <div className="y2k-model-footer">
                  <span>INTERACTIVE MODEL</span>
                  <span>DRAG TO ROTATE ↗</span>
                </div>

              </div>

              {/* Floating sticker */}
              <div className="y2k-floating-sticker">
                <span className="y2k-sticker-symbol">✳</span>
                <span>CODE</span>
                <span>CREATE</span>
                <span>REPEAT</span>
              </div>

              {/* Floating badge */}
              <div className="y2k-floating-badge">
                <span>EST.</span>
                <strong>2022</strong>
                <span>DEVELOPER</span>
              </div>

            </div>

            <div className="y2k-visual-caption">
              <div>
                <span>CURRENT FOCUS</span>
                <strong>Backend Development & API Architecture</strong>
              </div>

              <span className="y2k-caption-icon">↗</span>
            </div>

          </div>

        </div>

        {/* Bottom information */}
        <div className="y2k-hero-bottom reveal">

          <a href="#about" className="y2k-scroll-hint">
  <span className="y2k-scroll-icon">↓</span>
  SCROLL TO EXPLORE
</a>

          <div className="y2k-tech-ticker">
            <span>LARAVEL</span>
            <span>✳</span>
            <span>PHP</span>
            <span>✳</span>
            <span>GO</span>
            <span>✳</span>
            <span>JAVASCRIPT</span>
          </div>

          <div className="y2k-copyright">
            © 2026 ALI FAHMI YUSUF
          </div>

        </div>

      </div>
    </section>
  );
}

window.Hero = Hero;
