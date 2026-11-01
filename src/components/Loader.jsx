
const { useEffect, useState } = React;

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [bootText, setBootText] = useState("Initializing system...");

  useEffect(() => {
    const messages = [
      "Initializing system...",
      "Loading interface components...",
      "Preparing digital workspace...",
      "Connecting to ALI.EXE...",
      "System ready.",
    ];

    const progressTimer = setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + 2, 100);

        const messageIndex = Math.min(
          Math.floor(next / 25),
          messages.length - 1
        );

        setBootText(messages[messageIndex]);

        return next;
      });
    }, 35);

    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2200);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loader-xp ${exiting ? "loader-exiting" : ""}`}>

      <div className="loader-xp-screen">

        <div className="loader-xp-top">
          <span>ALI.EXE OPERATING SYSTEM</span>
          <span>VERSION 2.026</span>
        </div>

        <div className="loader-xp-center">

          <div className="loader-xp-logo">
            <div className="loader-xp-symbol">
              <span className="xp-square xp-red"></span>
              <span className="xp-square xp-green"></span>
              <span className="xp-square xp-blue"></span>
              <span className="xp-square xp-yellow"></span>
            </div>
          </div>

          <div className="loader-xp-brand">
            <h1>
              ALI<span>.EXE</span>
            </h1>

            <p>PERSONAL DIGITAL SPACE</p>
          </div>

          <div className="loader-xp-loading">
            <div className="loader-xp-progress-track">
              <div
                className="loader-xp-progress-fill"
                style={{ width: `${progress}%` }}
              >
                <span></span>
              </div>
            </div>

            <div className="loader-xp-progress-info">
              <span>{bootText}</span>
              <span>{progress}%</span>
            </div>
          </div>

        </div>

        <div className="loader-xp-bottom">
          <span>© 2026 ALI FAHMI YUSUF</span>
          <span>BUILT WITH CURIOSITY.</span>
        </div>

      </div>

      <div className="loader-xp-scanline"></div>

    </div>
  );
}

window.Loader = Loader;
