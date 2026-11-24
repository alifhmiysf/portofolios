
const { useEffect } = React;

function ProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = window.PROJECTS_DATA?.[projectId];

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ALI.EXE`;
    }
  }, [project]);

  if (!project) {
    return (
      <main className="case-not-found">
        <span>ERROR 404 / FILE NOT FOUND</span>
        <h1>Project not found.</h1>
        <p>The requested project could not be located.</p>
        <a href="../index.html#projects">
          ← BACK TO PROJECT ARCHIVE
        </a>
      </main>
    );
  }

  // Overview: mendukung format string maupun object.
  const overviewItems = (project.overview || []).map(
    (item, index) => {
      if (typeof item === "string") {
        return {
          label: `OVERVIEW ${String(index + 1).padStart(2, "0")}`,
          value: item,
        };
      }

      return item;
    }
  );

  // Architecture: mendukung properti title maupun name.
  const architectureItems = (project.architecture || []).map(
    (item, index) => ({
      name: item.name || item.title || `Component ${index + 1}`,
      description: item.description || "",
      type: item.type || "component",
    })
  );

  return (
    <main className="case-page">

      {/* NAVIGATION */}
      <nav className="case-nav">
        <a href="../index.html" className="case-brand">
          <span className="case-brand-icon">A.</span>
          <span>ALI.EXE</span>
        </a>

        <div className="case-nav-status">
          <span className="case-status-dot"></span>
          PROJECT DOCUMENTATION
        </div>

        <a href="../index.html#projects" className="case-back">
          ← BACK TO ARCHIVE
        </a>
      </nav>

      <div className="case-container">

        {/* BREADCRUMB */}
        <div className="case-breadcrumb">
          <span>ROOT</span>
          <span>/</span>
          <span>PROJECTS</span>
          <span>/</span>
          <strong>{project.title.toUpperCase()}</strong>
        </div>

        {/* HERO */}
        <section className="case-hero">

          <div className="case-hero-meta">
            <span>PROJECT_{project.number}</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <div className="case-hero-content">
            <div>
              <span className="case-overline">
                SELECTED WORK / CASE STUDY
              </span>

              <h1>{project.title}</h1>

              <p className="case-subtitle">
                {project.subtitle}
              </p>
            </div>

            <div className="case-status-window">
              <div className="case-window-titlebar">
                <span>PROJECT_STATUS.EXE</span>
                <span>− □ ×</span>
              </div>

              <div className="case-status-content">
                <span className="case-status-indicator"></span>
                <strong>{project.status}</strong>
                <small>FILE VERIFIED</small>
              </div>
            </div>
          </div>

          <div className="case-tags">
            {(project.tags || []).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

        </section>

        {/* PROJECT PREVIEW */}
        <section className="case-preview-section">

          <div className="case-section-heading">
            <span>01 / VISUAL PREVIEW</span>
            <span>PROJECT WINDOW</span>
          </div>

          <div className="case-browser-window">

            {/* BROWSER TITLEBAR */}
            <div className="case-browser-titlebar">
              <div className="case-window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>ALI.EXE / PROJECT PREVIEW</span>

              <span>WEB APPLICATION</span>
            </div>

            {/* BROWSER TOOLBAR */}
            <div className="case-browser-toolbar">
              <span>↗</span>

              <span>
                {project.livePreview ||
                  project.demoUrl ||
                  "PROJECT INFORMATION"}
              </span>

              <span>
                {project.livePreview
                  ? "LIVE WEBSITE"
                  : project.demoVideo
                    ? "VIDEO DEMONSTRATION"
                    : "DOCUMENTATION"}
              </span>
            </div>

            {/* PREVIEW CONTENT */}
            <div className="case-preview-frame">

              {project.livePreview ? (

                <iframe
                  src={project.livePreview}
                  title={`${project.title} live preview`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

              ) : project.demoVideo ? (

                <iframe
                  src={project.demoVideo}
                  title={`${project.title} project demonstration`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              ) : (

                <div className="case-preview-placeholder">
                  <span>PROJECT_{project.number}</span>

                  <h3>{project.title}</h3>

                  <p>
                    Live preview is not available for this project.
                  </p>
                </div>

              )}

            </div>

          </div>

          {/* PREVIEW CAPTION */}
          <div className="case-preview-caption">

            {/* GITHUB LINK: hanya tampil jika proyek punya githubUrl */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="case-github-link"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="17"
                  height="17"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.23-5.06-5.48 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.98 0 4.26-2.59 5.2-5.07 5.47.4.35.75 1.02.75 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>

                VIEW SOURCE CODE ↗
              </a>
            )}

            <span>
              {project.livePreview
                ? "LIVE WEBSITE PREVIEW"
                : project.demoVideo
                  ? "PROJECT VIDEO DEMONSTRATION"
                  : "PROJECT DOCUMENTATION"}
            </span>

            {project.livePreview && (
              <a
                href={project.livePreview}
                target="_blank"
                rel="noopener noreferrer"
              >
                OPEN IN NEW TAB ↗
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                WATCH ON YOUTUBE ↗
              </a>
            )}

          </div>

        </section>

        {/* OVERVIEW */}
        <section className="case-section">

          <div className="case-section-heading">
            <span>02 / PROJECT OVERVIEW</span>
            <span>GENERAL INFORMATION</span>
          </div>

          <div className="case-overview-grid">

            <div className="case-overview-description">
              <h2>
                About the <em>project.</em>
              </h2>

              <p>{project.description}</p>
            </div>

            <div className="case-overview-info">
              {overviewItems.map((item, index) => (
                <div
                  className="case-info-row"
                  key={`${item.label}-${index}`}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

          </div>

        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="case-section">

          <div className="case-section-heading">
            <span>03 / PROBLEM & SOLUTION</span>
            <span>ENGINEERING APPROACH</span>
          </div>

          <div className="case-two-column">

            <article className="case-content-card">
              <span className="case-card-index">
                01 — THE PROBLEM
              </span>

              <h3>Problem statement.</h3>

              <p>{project.problem}</p>
            </article>

            <article className="case-content-card case-solution-card">
              <span className="case-card-index">
                02 — THE SOLUTION
              </span>

              <h3>Proposed solution.</h3>

              <p>{project.solution}</p>
            </article>

          </div>

        </section>

        {/* ARCHITECTURE */}
        <section className="case-section">

          <div className="case-section-heading">
            <span>04 / SYSTEM ARCHITECTURE</span>
            <span>STRUCTURE OVERVIEW</span>
          </div>

          <div className="case-architecture-window">

            <div className="case-architecture-titlebar">
              <span>ARCHITECTURE_MAP.SYS</span>
              <span>READ ONLY</span>
            </div>

            <div className="case-architecture-content">

              {architectureItems.map((item, index) => (
                <React.Fragment key={`${item.name}-${index}`}>

                  <div
                    className={`case-architecture-node ${item.type}`}
                  >
                    <span>{item.type.toUpperCase()}</span>

                    <strong>{item.name}</strong>

                    <small>{item.description}</small>
                  </div>

                  {index !== architectureItems.length - 1 && (
                    <div className="case-architecture-arrow">
                      ↓
                    </div>
                  )}

                </React.Fragment>
              ))}

            </div>

            <div className="case-architecture-footer">
              SYSTEM FLOW / CONCEPTUAL REPRESENTATION
            </div>

          </div>

        </section>

        {/* FEATURES */}
        <section className="case-section">

          <div className="case-section-heading">
            <span>05 / CORE FEATURES</span>
            <span>IMPLEMENTATION</span>
          </div>

          <div className="case-feature-grid">

            {(project.features || []).map((feature, index) => (
              <article
                className="case-feature-card"
                key={`${feature.title}-${index}`}
              >
                <span>
                  FEATURE_{String(index + 1).padStart(2, "0")}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            ))}

          </div>

        </section>

        {/* CHALLENGES */}
        <section className="case-section">

          <div className="case-section-heading">
            <span>06 / CHALLENGES</span>
            <span>DEVELOPMENT PROCESS</span>
          </div>

          <div className="case-challenge-list">

            {(project.challenges || []).map((item, index) => (
              <article
                className="case-challenge-item"
                key={`${item.title}-${index}`}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}

          </div>

        </section>

        {/* LEARNINGS */}
        <section className="case-section">

          <div className="case-section-heading">
            <span>07 / KEY TAKEAWAYS</span>
            <span>WHAT I LEARNED</span>
          </div>

          <div className="case-learning-window">

            <div className="case-learning-titlebar">
              <span>DEVELOPMENT_NOTES.TXT</span>
              <span>● SAVED</span>
            </div>

            <div className="case-learning-content">

              {(project.learnings || []).map((learning, index) => (
                <div key={index}>
                  <span>✓</span>
                  <p>{learning}</p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="case-footer">

          <div>
            <span>ALI.EXE / PROJECT ARCHIVE</span>
            <p>End of project documentation.</p>
          </div>

          <a href="../index.html#projects">
            ← RETURN TO PROJECTS
          </a>

        </footer>

      </div>
    </main>
  );
}

ReactDOM.createRoot(
  document.getElementById("project-detail-root")
).render(<ProjectDetail />);
