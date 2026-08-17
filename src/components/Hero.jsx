import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">// whoami</p>
          <h1>
            Marco Akl<span className="accent blink">_</span>
          </h1>
          <p className="hero__subtitle">
            CS Student &amp; Aspiring Cybersecurity Specialist
            <span className="blink">|</span>
          </p>
          <p className="hero__desc">
            I build software and pick it apart again — learning how systems
            break so I can help build the ones that don&apos;t.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get In Touch
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}
