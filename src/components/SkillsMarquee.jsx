
function SkillsMarquee() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isMaximized, setIsMaximized] = React.useState(false);

  // Lock page scrolling while Explorer is fullscreen
  React.useEffect(() => {
    if (!isMaximized) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMaximized]);

  const skillGroups = [
    {
      id: "01",
      name: "BACKEND & API",
      description: "Building application logic and services",
      skills: [
        { name: "Laravel", code: "LR", type: "Framework" },
        { name: "PHP", code: "PHP", type: "Language" },
        { name: "Go", code: "GO", type: "Language" },
        { name: "JavaScript", code: "JS", type: "Language" },
        { name: "REST API", code: "API", type: "Architecture" },
        { name: "JWT", code: "JWT", type: "Authentication" },
      ],
    },
    {
      id: "02",
      name: "DATABASE",
      description: "Data storage and management",
      skills: [
        { name: "PostgreSQL", code: "PG", type: "Database" },
        { name: "MySQL", code: "SQL", type: "Database" },
      ],
    },
    {
      id: "03",
      name: "INFRASTRUCTURE",
      description: "Deployment and system operations",
      skills: [
        { name: "Docker", code: "DK", type: "Containerization" },
        { name: "Nginx", code: "NG", type: "Web Server" },
        { name: "CI/CD", code: "CI", type: "Automation" },
        { name: "Git", code: "GT", type: "Version Control" },
      ],
    },
    {
      id: "04",
      name: "ENGINEERING",
      description: "Application security and architecture",
      skills: [
        { name: "Authentication", code: "AUTH", type: "Security" },
        { name: "Authorization", code: "ACL", type: "Access Control" },
        { name: "Microservices", code: "MS", type: "Architecture" },
      ],
    },
  ];

  const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0
  );

  // Check whether React Portal is available
  const hasPortal =
    typeof ReactDOM !== "undefined" &&
    typeof ReactDOM.createPortal === "function";

  // Open Explorer
  const openExplorer = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setIsMaximized(false);
  };

  // Close Explorer
  const closeExplorer = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setIsMaximized(false);
  };

  // Minimize Explorer
  const minimizeExplorer = () => {
    setIsMinimized(true);
    setIsMaximized(false);
  };

  // Maximize / Restore Explorer
  const toggleMaximize = () => {
    setIsMaximized((current) => !current);
  };

  // Restore Explorer from taskbar
  const restoreExplorer = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  // Explorer window
  const explorerWindow = (
    <div
      className={`skills-desktop-window ${
        isMaximized ? "is-maximized" : ""
      }`}
    >
      {/* Window title bar */}
      <div className="skills-window-bar">

        <span className="skills-window-title">
          PROGRAMS / INSTALLED
        </span>

        {/* Window controls */}
        <div className="skills-window-controls">

          {/* YELLOW - MINIMIZE */}
          <button
            type="button"
            className="window-control window-minimize"
            onClick={minimizeExplorer}
            aria-label="Minimize Explorer"
            title="Minimize"
          >
            <span>−</span>
          </button>

          {/* GREEN - MAXIMIZE / RESTORE */}
          <button
            type="button"
            className="window-control window-maximize"
            onClick={toggleMaximize}
            aria-label={
              isMaximized
                ? "Restore Explorer"
                : "Maximize Explorer"
            }
            title={isMaximized ? "Restore" : "Maximize"}
          >
            <span>{isMaximized ? "↙" : "↗"}</span>
          </button>

          {/* RED - CLOSE */}
          <button
            type="button"
            className="window-control window-close"
            onClick={closeExplorer}
            aria-label="Close Explorer"
            title="Close"
          >
            <span>×</span>
          </button>

        </div>
      </div>

      {/* Toolbar */}
      <div className="skills-toolbar">
        <div className="skills-path">
          <span>MY COMPUTER</span>
          <span>/</span>
          <strong>TECH STACK</strong>
        </div>

        <span className="skills-total">
          {totalSkills} ITEMS INSTALLED
        </span>
      </div>

      {/* Main content */}
      <div className="skills-content">

        {/* Sidebar */}
        <aside className="skills-sidebar">
          <div className="skills-sidebar-heading">
            DIRECTORY
          </div>

          {skillGroups.map((group) => (
            <a
              href={`#skill-group-${group.id}`}
              className="skills-sidebar-item"
              key={group.id}
            >
              <span className="skills-folder-icon">▰</span>
              {group.name}
            </a>
          ))}

          <div className="skills-sidebar-note">
            <span>●</span>
            SYSTEM READY
          </div>
        </aside>

        {/* Skills directory */}
        <div className="skills-main">
          {skillGroups.map((group) => (
            <div
              className="skills-group"
              id={`skill-group-${group.id}`}
              key={group.id}
            >
              <div className="skills-group-heading">
                <div>
                  <span className="skills-group-number">
                    {group.id}
                  </span>

                  <h3>{group.name}</h3>
                </div>

                <span className="skills-group-count">
                  {String(group.skills.length).padStart(2, "0")} FILES
                </span>
              </div>

              <p className="skills-group-description">
                {group.description}
              </p>

              <div className="skills-app-grid">
                {group.skills.map((skill) => (
                  <div
                    className="skills-app"
                    key={skill.name}
                  >
                    <div className="skills-app-icon">
                      <span>{skill.code}</span>
                    </div>

                    <div className="skills-app-info">
                      <h4>{skill.name}</h4>
                      <span>{skill.type}</span>
                    </div>

                    <span className="skills-app-status">
                      INSTALLED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="skills-statusbar">
        <span>
          <span className="skills-status-dot"></span>
          ALL SYSTEMS OPERATIONAL
        </span>

        <span>
          ALI.EXE — PERSONAL DIGITAL SPACE
        </span>
      </div>
    </div>
  );

  return (
    <>
      <section id="skills" className="skills-y2k section-padding">
        <div className="container-editorial">

          {/* Section heading */}
          <div className="skills-heading reveal">
            <div>
              <div className="y2k-section-label">
                <span className="y2k-label-dot"></span>
                04 / INSTALLED APPLICATIONS
              </div>

              <h2 className="skills-title">
                My technical
                <br />
                <span>toolbox.</span>
              </h2>
            </div>

            <p className="skills-intro">
              A collection of technologies and engineering practices
              I use to build backend applications, APIs, and software systems.
            </p>
          </div>

          {/* Desktop launcher */}
          {!isOpen && (
            <div className="skills-desktop-launcher reveal">
              <button
                type="button"
                className="skills-launcher"
                onClick={openExplorer}
                aria-label="Open Tech Stack Explorer"
              >
                <span className="skills-launcher-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>

                <span className="skills-launcher-name">
                  TECH STACK
                </span>

                <span className="skills-launcher-type">
                  FOLDER / APPLICATION
                </span>
              </button>

              <p className="skills-launcher-hint">
                CLICK TO OPEN APPLICATION
              </p>
            </div>
          )}

          {/* Normal Explorer window */}
          {isOpen && !isMinimized && !isMaximized && (
            explorerWindow
          )}

          {/* Taskbar */}
          {isOpen && (
            <div className="skills-taskbar">
              <button
                type="button"
                className={`skills-taskbar-app ${
                  isMinimized ? "is-minimized" : "is-active"
                }`}
                onClick={restoreExplorer}
                aria-label="Restore Tech Stack Explorer"
              >
                <span className="skills-taskbar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>

                <span>TECH STACK</span>

                <span className="skills-taskbar-indicator"></span>
              </button>

              <span className="skills-taskbar-label">
                {isMinimized
                  ? "APPLICATION MINIMIZED"
                  : "APPLICATION RUNNING"}
              </span>
            </div>
          )}

          {/* Bottom note */}
          <div className="skills-bottom-note reveal">
            <span>05 / ALWAYS LEARNING</span>
            <span>TOOLS EVOLVE. CURIOSITY REMAINS.</span>
          </div>

        </div>
      </section>

      {/* Fullscreen Explorer Portal */}
      {isOpen && !isMinimized && isMaximized && (
        hasPortal
          ? ReactDOM.createPortal(
              explorerWindow,
              document.body
            )
          : explorerWindow
      )}
    </>
  );
}

window.SkillsMarquee = SkillsMarquee;
