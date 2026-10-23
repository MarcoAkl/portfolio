import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import LinkCheck from "./components/LinkCheck";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Reveals every [data-reveal] element once as it scrolls into view. The
// hidden starting state only applies under html.js (set in index.html), so
// nothing stays invisible if this never runs.
function useRevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  useRevealOnScroll();

  return (
    <>
      <main className="page">
        <Hero />
        <About />
        <Projects />
        <LinkCheck />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
