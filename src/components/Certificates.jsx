const certificates = [
  {
    number: "01",
    title: "Data Visualization",
    issuer: "freeCodeCamp",
    date: "Issued Apr 2025",
    credential: "alifhmiysf-dv",
    link: "https://freecodecamp.org/certification/alifhmiysf/data-visualization",
    type: "DATA",
    color: "blue"
  },
  {
    number: "02",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Issued Apr 2025",
    credential: "alifhmiysf-jaads",
    link: "https://freecodecamp.org/certification/alifhmiysf/javascript-algorithms-and-data-structures-v8",
    type: "JS",
    color: "orange"
  },
  {
    number: "03",
    title: "JavaScript Basic",
    issuer: "HackerRank",
    date: "Issued Mar 2025",
    credential: "4COA371C0D9B",
    link: "https://www.hackerrank.com/certificates/4c0a371c0d9b",
    type: "JS",
    color: "green"
  },
  {
    number: "04",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Issued Jan 2025",
    credential: "DC2A641824ED",
    link: "https://www.hackerrank.com/",
    type: "SQL",
    color: "blue"
  }
];

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = React.useState(0);

  const selectedCert = certificates[selectedCertificate];

  return (
    <section
      id="certificates"
      className="certificates-y2k section-padding"
    >
      <div className="container-editorial">

        {/* SECTION HEADER */}
        <div className="certificates-y2k-heading reveal">
          <div className="y2k-section-label">
            <span className="y2k-label-dot"></span>
            03 / ACHIEVEMENTS
          </div>

          <span className="y2k-section-code">
            DIRECTORY: /CREDENTIALS
          </span>
        </div>

        {/* INTRO */}
        <div className="certificates-y2k-intro">

          <div className="reveal">
            <span className="certificates-overline">
              VERIFIED LEARNING RECORDS
            </span>

            <h2>
              Achievement
              <br />
              <em>files.</em>
            </h2>
          </div>

          <div className="certificates-intro-text reveal">
            <p>
              Professional learning and verified credentials in
              JavaScript, SQL, and data visualization.
            </p>

            <div className="certificates-count">
              <strong>04</strong>
              <span>
                DOCUMENTS
                <br />
                REGISTERED
              </span>
            </div>
          </div>

        </div>

        {/* DIGITAL ARCHIVE */}
        <div className="certificates-archive reveal">

          {/* ARCHIVE TOPBAR */}
          <div className="certificates-titlebar">
            <div className="about-window-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="certificates-window-title">
              CREDENTIALS / DIGITAL ARCHIVE
            </span>

            <span className="certificates-window-version">
              INDEX.V1
            </span>
          </div>

          {/* TOOLBAR */}
          <div className="certificates-toolbar">
            <span>
              <span className="archive-folder-icon">▰</span>
              / MY CREDENTIALS
            </span>

            <span>VIEW: LIST</span>
          </div>

          {/* ARCHIVE TABLE */}
          <div className="certificates-index">

            <div className="certificates-index-header">
              <span>NO.</span>
              <span>CERTIFICATE NAME</span>
              <span>ISSUER</span>
              <span>DATE</span>
              <span>TYPE</span>
              <span></span>
            </div>

            <div className="certificates-index-list">

              {certificates.map((cert, index) => (
                <button
                  type="button"
                  key={cert.number}
                  className={`certificate-row certificate-${cert.color} ${
                    selectedCertificate === index ? "is-selected" : ""
                  }`}
                  onClick={() => setSelectedCertificate(index)}
                  aria-pressed={selectedCertificate === index}
                >

                  <span className="certificate-row-number">
                    {cert.number}
                  </span>

                  <span className="certificate-row-title">
                    {cert.title}
                  </span>

                  <span className="certificate-row-issuer">
                    {cert.issuer}
                  </span>

                  <span className="certificate-row-date">
                    {cert.date.replace("Issued ", "")}
                  </span>

                  <span className="certificate-row-type">
                    {cert.type}
                  </span>

                  <span className="certificate-row-arrow">
                    ↗
                  </span>

                </button>
              ))}

            </div>

          </div>

          {/* SELECTED CERTIFICATE DETAIL */}
          <div className={`certificate-detail certificate-${selectedCert.color}`}>

            <div className="certificate-detail-heading">
              <div>
                <span className="certificate-detail-overline">
                  SELECTED ARCHIVE RECORD
                </span>

                <h3>
                  DOCUMENT_{selectedCert.number}
                </h3>
              </div>

              <span className="certificate-verified">
                <span>✓</span>
                VERIFIED
              </span>
            </div>

            <div className="certificate-detail-content">

              <div className="certificate-detail-main">
                <span className="certificate-detail-issuer">
                  {selectedCert.issuer}
                </span>

                <h4>{selectedCert.title}</h4>

                <p>
                  {selectedCert.date}
                </p>
              </div>

              <div className="certificate-detail-meta">
                <span>CREDENTIAL ID</span>
                <strong>{selectedCert.credential}</strong>
              </div>

              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-open-link"
              >
                <span>VERIFY CREDENTIAL</span>
                <span>↗</span>
              </a>

            </div>

          </div>

          {/* STATUS BAR */}
          <div className="certificates-statusbar">
            <span>04 OBJECTS</span>
            <span>
              SELECTED: {selectedCert.number} / 04
            </span>
            <span>ALI.EXE / CERTIFICATES</span>
          </div>

        </div>

        {/* BOTTOM NOTE */}
        <div className="certificates-bottom-note reveal">
          <span>END OF RECORDS</span>
          <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
        </div>

      </div>
    </section>
  );
}

window.Certificates = Certificates;