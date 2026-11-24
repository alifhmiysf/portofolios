const projects = [
  {
    number: "01",
    title: "Expense API",
    description:
      "Secure REST API for expense tracking with strong access control and production-ready architecture.",
    tags: ["Laravel", "API", "Docker"],
    link: "./projects/project-detail.html?id=expense-api",
    detailPage: "./projects/project-detail.html?id=expense-api",
    livePreview: null,
    previewAddress: "api://expense-api",
    category: "Backend Development",
    extension: "API",
    accent: "blue",
    type: "API PROJECT",
  },
  {
    number: "02",
    title: "E-Commerce Microservices",
    description:
      "Microservices-based e-commerce backend using Laravel, Docker, and Nginx API Gateway with inter-service communication and database isolation.",
    tags: ["Laravel", "Microservices", "Docker", "Nginx"],
    link: "./projects/project-detail.html?id=ecommerce-microservices",
    detailPage: "./projects/project-detail.html?id=ecommerce-microservices",
    livePreview: "https://simplestore.devstash.my.id/",
    previewAddress: "simplestore.devstash.my.id",
    category: "System Architecture",
    extension: "SYS",
    accent: "orange",
    type: "SYSTEM PROJECT",
  },
  {
    number: "03",
    title: "ChiliClass",
    description:
      "Deep learning-based chili pepper classification web application using MobileNetV2 and TensorFlow. Classifies chili images into five maturity and condition categories, with confidence scores and user-assisted prediction correction.",
    tags: [
      "Python",
      "Flask",
      "TensorFlow",
      "MobileNetV2",
      "Computer Vision",
      "Tailwind CSS",
    ],
    link: "./projects/project-detail.html?id=chiliclass",
    detailPage: "./projects/project-detail.html?id=chiliclass",
    livePreview: "https://chiliclass.devstash.my.id/",
    previewAddress: "chiliclass.devstash.my.id",
    category: "Machine Learning",
    extension: "AI",
    accent: "green",
    type: "AI PROJECT",
  },
  {
    number: "04",
    title: "MeowMap",
    description:
      "A cat rescue and community platform featuring interactive maps, cat sighting reports, breed information, and an adoption marketplace. Built with Laravel REST API, Sanctum authentication, MySQL, and Leaflet.",
    tags: [
      "Laravel 12",
      "PHP",
      "MySQL",
      "REST API",
      "Sanctum",
      "Leaflet",
      "OpenStreetMap",
    ],
    link: "./projects/project-detail.html?id=meowmap",
    detailPage: "./projects/project-detail.html?id=meowmap",
    livePreview: "https://devstash.my.id/",
    previewAddress: "devstash.my.id",
    category: "Full-Stack Development",
    extension: "MAP",
    accent: "orange",
    type: "FULL-STACK PROJECT",
  },
  {
    number: "05",
    title: "Auth API Go",
    description:
      "Secure authentication REST API built with Go and PostgreSQL, implementing JWT authentication, password hashing, middleware, and layered architecture.",
    tags: ["Go", "PostgreSQL", "JWT", "bcrypt", "Docker"],
    link: "./projects/project-detail.html?id=auth-api-go",
    detailPage: "./projects/project-detail.html?id=auth-api-go",
    livePreview: null,
    previewAddress: "api://auth-api",
    category: "API Security",
    extension: "SEC",
    accent: "green",
    type: "SECURITY PROJECT",
  },
  {
  number: "06",
  title: "Chapri Web",
  description:
    "Collaborative project management platform for teams to organize workspaces, manage tasks, communicate with members, and track project progress. Built with React, TypeScript, Firebase, and Cloud Firestore.",
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "Firebase",
    "Firestore",
    "Tailwind CSS"
  ],
  link: "./projects/project-detail.html?id=chapri-web",
  detailPage: "./projects/project-detail.html?id=chapri-web",
  livePreview: "https://chapri-web.vercel.app/login",
  previewAddress: "chapri-web.vercel.app",
  category: "Full-Stack Development",
  extension: "WEB",
  accent: "blue",
  type: "FULL-STACK PROJECT",
},
{
  number: "07",
  title: "ChainShield",
  description:
    "Blockchain-based security audit platform combining role-based access control, tamper-evident audit logging, Merkle Tree integrity verification, blockchain anchoring, and automated passive security assessment.",
  tags: [
    "Laravel",
    "PHP",
    "React",
    "Python",
    "MariaDB",
    "Solidity",
    "Hardhat",
    "Ethereum",
    "SHA-256",
    "Merkle Tree",
    "REST API",
    "HMAC-SHA256",
  ],
  link: "./projects/project-detail.html?id=chainshield",
  detailPage: "./projects/project-detail.html?id=chainshield",
  livePreview: null,
  previewAddress: "YOUTUBE.COM / CHAINSHIELD DEMO",
  category: "Cybersecurity & Blockchain",
  extension: "SEC",
  accent: "blue",
  type: "SECURITY SYSTEM",
},
];

function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = React.useState(1);

  const activeProject = projects[selectedProject];

  return (
    <section id="projects" className="projects-y2k section-padding">
      <div className="container-editorial">

        {/* SECTION HEADER */}
        <div className="projects-y2k-heading reveal">
          <div className="y2k-section-label">
            <span className="y2k-label-dot"></span>
            02 / DIGITAL ARCHIVE
          </div>

          <span className="y2k-section-code">
            DIRECTORY: /MY_PROJECTS
          </span>
        </div>

        {/* INTRO */}
        <div className="projects-y2k-intro">
          <div className="reveal">
            <span className="projects-y2k-overline">
              SELECTED WORKS — 2024 / 2026
            </span>

            <h2>
              My digital
              <br />
              <em>archive.</em>
            </h2>
          </div>

          <div className="projects-y2k-description reveal">
            <p>
              A collection of projects focused on backend development,
              API architecture, authentication, microservices,
              and software engineering.
            </p>
          </div>
        </div>

        {/* PROJECT WORKSPACE */}
        <div className="projects-archive-window reveal">

          {/* TITLEBAR */}
          <div className="projects-archive-titlebar">
            <div className="about-window-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>ALI.EXE / PROJECT EXPLORER</span>

            <span className="projects-archive-path">
              {projects.length.toString().padStart(2, "0")} FILES
            </span>
          </div>

          {/* TOOLBAR */}
          <div className="projects-archive-toolbar">
            <div>
              <span className="projects-folder-icon">▰</span>
              <span>My Projects</span>
              <span className="projects-path-divider">/</span>
              <span>{activeProject.title}</span>
            </div>

            <span className="projects-archive-sort">
              FILE SYSTEM: ONLINE
            </span>
          </div>

          {/* MAIN WORKSPACE */}
          <div className="project-workspace">

            {/* LEFT: FILE LIST */}
            <aside className="project-sidebar">

              <div className="project-sidebar-heading">
                <span>DIRECTORY</span>
                <span>
                  {projects.length.toString().padStart(2, "0")} ITEMS
                </span>
              </div>

              <div className="project-file-list">
                {projects.map((project, index) => (
                  <button
                    type="button"
                    key={project.number}
                    className={`project-file-item ${
                      selectedProject === index ? "active" : ""
                    }`}
                    onClick={() => setSelectedProject(index)}
                    aria-pressed={selectedProject === index}
                  >
                    <div
                      className={`project-file-symbol accent-${project.accent}`}
                    >
                      <span>{project.extension}</span>
                    </div>

                    <div className="project-file-info">
                      <span className="project-file-name">
                        {project.title}
                      </span>

                      <span className="project-file-meta">
                        FILE_{project.number} · .{project.extension}
                      </span>
                    </div>

                    <span className="project-file-arrow">↗</span>
                  </button>
                ))}
              </div>

              <div className="project-sidebar-footer">
                <span>LOCAL DIRECTORY</span>
                <span>ALI.EXE</span>
              </div>

            </aside>

            {/* RIGHT: PREVIEW PANEL */}
            <div className="project-preview-panel">

              {/* PREVIEW HEADER */}
              <div className="project-preview-heading">
                <div>
                  <span className="project-preview-label">
                    {activeProject.livePreview
                      ? "LIVE WEBSITE PREVIEW"
                      : "PROJECT INFORMATION"}
                  </span>

                  <h3>{activeProject.title}</h3>
                </div>

                <span
                  className={`project-preview-type accent-${activeProject.accent}`}
                >
                  {activeProject.type}
                </span>
              </div>

              {/* BROWSER */}
              <div className="project-browser">

                {/* BROWSER TOOLBAR */}
                <div className="project-browser-toolbar">
                  <div className="project-browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="project-browser-address">
                    <span>↗</span>
                    <span>{activeProject.previewAddress}</span>
                  </div>

                  {activeProject.livePreview && (
                    <a
                      href={activeProject.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-browser-external"
                      aria-label="Open website in new tab"
                      title="Open in new tab"
                    >
                      ↗
                    </a>
                  )}
                </div>

                {/* LIVE WEBSITE PREVIEW */}
                {activeProject.livePreview ? (
                  <div className="project-live-frame">
                    <iframe
                      key={activeProject.livePreview}
                      src={activeProject.livePreview}
                      title={`${activeProject.title} live preview`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                ) : (
                  /* PROJECT INFORMATION */
                  <div className="project-info-preview">
                    <div
                      className={`project-info-icon accent-${activeProject.accent}`}
                    >
                      {activeProject.extension}
                    </div>

                    <span className="project-info-number">
                      PROJECT FILE_{activeProject.number}
                    </span>

                    <h4>{activeProject.title}</h4>

                    <p>{activeProject.description}</p>

                    <div className="project-info-category">
                      <span>CATEGORY</span>
                      <strong>{activeProject.category}</strong>
                    </div>
                  </div>
                )}

              </div>

              {/* PROJECT DETAILS */}
              <div className="project-preview-details">

                <div className="project-preview-description">
                  <span>ABOUT THIS PROJECT</span>
                  <p>{activeProject.description}</p>
                </div>

                <div className="project-preview-stack">
                  <span>TECH STACK</span>

                  <div className="project-y2k-tags">
                    {activeProject.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* PROJECT ACTIONS */}
                  <div className="project-detail-actions">

                    <a
                      href={activeProject.detailPage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-docs-button"
                    >
                      READ DOCS <span>↗</span>
                    </a>

                    {activeProject.livePreview && (
                      <a
                        href={activeProject.livePreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-button"
                      >
                        OPEN LIVE SITE <span>↗</span>
                      </a>
                    )}

                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* STATUSBAR */}
          <div className="projects-archive-status">
            <span>{projects.length} OBJECTS</span>
            <span>SELECT A FILE TO EXPLORE</span>
            <span>ALI.EXE / PROJECTS</span>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="projects-y2k-bottom reveal">
          <span>END OF DIRECTORY</span>
          <span>MORE PROJECTS COMING SOON...</span>
        </div>

      </div>
    </section>
  );
}

window.ProjectCarousel = ProjectCarousel;
