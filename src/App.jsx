function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (loading) return;

    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [loading]);

  return (
    <>
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      <div
        className={`main-website ${
          loading ? "website-loading" : "website-ready"
        }`}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <ProjectCarousel />
          <Certificates />
          <SkillsMarquee />
          <Education />
        </main>

        <Footer />
      </div>
    </>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);