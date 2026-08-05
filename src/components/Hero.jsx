export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">// whoami</p>
      <h1>
        Marco Akl<span className="accent">_</span>
      </h1>
      <p className="hero__subtitle">
        CS Student &amp; Aspiring Cybersecurity Specialist
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
    </section>
  );
}
