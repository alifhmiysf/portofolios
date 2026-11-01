
const educationData = [
  {
    number: "01",
    institution: "Universitas Teknologi Digital Indonesia",
    shortName: "UTDI",
    degree: "Bachelor of Informatics · Informatics",
    period: "SEP 2024 — PRESENT",
    type: "UNDERGRADUATE",
    description:
      "Studying foundational computer science topics, including algorithms, computer networks, and programming.",
    status: "CURRENTLY STUDYING",
    code: "EDU-2024-01",
  },
  {
    number: "02",
    institution: "SMK Muhammadiyah 1 Yogyakarta",
    shortName: "SMK",
    degree: "Vocational School Graduate · Software Engineering",
    period: "JUL 2021 — MAY 2024",
    type: "VOCATIONAL",
    description:
      "Focus on web development, programming, and software design principles.",
    status: "COMPLETED",
    code: "EDU-2021-02",
  },
];

function Education() {
  return (
    <section id="education" className="education-y2k section-padding">
      <div className="container-editorial">

        <div className="education-heading reveal">
          <div>
            <div className="y2k-section-label">
              <span className="y2k-label-dot"></span>
              05 / ACADEMIC RECORDS
            </div>

            <h2 className="education-title">
              Learning
              <br />
              <span>never stops.</span>
            </h2>
          </div>

          <p className="education-intro">
            Every experience builds a foundation.
            Here is where my journey in informatics
            and software engineering began.
          </p>
        </div>

        <div className="education-window reveal">

          <div className="education-window-bar">
            <div className="about-window-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="education-window-title">
              DOCUMENTS / EDUCATION
            </span>

            <span className="education-window-version">
              2 RECORDS
            </span>
          </div>

          <div className="education-toolbar">
            <div>
              <span>MY COMPUTER</span>
              <span>/</span>
              <strong>ACADEMIC HISTORY</strong>
            </div>

            <span>PERSONAL ARCHIVE</span>
          </div>

          <div className="education-records">
            {educationData.map((item) => (
              <article
                className="education-record"
                key={item.number}
              >
                <div className="education-record-index">
                  <span>{item.number}</span>
                  <div className="education-record-line"></div>
                </div>

                <div className="education-document">

                  <div className="education-document-top">
                    <span className="education-document-code">
                      {item.code}
                    </span>

                    <span
                      className={`education-status ${
                        item.status === "COMPLETED"
                          ? "is-completed"
                          : "is-current"
                      }`}
                    >
                      <span></span>
                      {item.status}
                    </span>
                  </div>

                  <div className="education-document-body">
                    <div className="education-institution-icon">
                      {item.shortName}
                    </div>

                    <div className="education-institution-info">
                      <span className="education-type">
                        {item.type}
                      </span>

                      <h3>{item.institution}</h3>

                      <p>{item.degree}</p>
                    </div>
                  </div>

                  <div className="education-document-bottom">
                    <div>
                      <span>STUDY PERIOD</span>
                      <strong>{item.period}</strong>
                    </div>

                    <span className="education-document-mark">
                      ACADEMIC FILE
                    </span>
                  </div>

                  <p className="education-description">
                    {item.description}
                  </p>

                </div>
              </article>
            ))}
          </div>

          <div className="education-window-footer">
            <span>
              <span className="education-footer-dot"></span>
              ARCHIVE ACCESSIBLE
            </span>

            <span>ALI.EXE / EDUCATION.DAT</span>
          </div>

        </div>

        <div className="education-bottom-note reveal">
          <span>FOUNDATION BUILT THROUGH LEARNING</span>
          <span>MORE CHAPTERS AHEAD ↗</span>
        </div>

      </div>
    </section>
  );
}

window.Education = Education;
