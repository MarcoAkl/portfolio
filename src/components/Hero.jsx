import Nav from "./Nav";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <Nav />
      <h1 className="hero__name lines">
        <span className="line">
          <span data-line style={{ "--i": 0 }}>
            Marco
          </span>
        </span>
        <span className="line">
          <span data-line style={{ "--i": 1 }} className="hero__name-second">
            Akl
          </span>
        </span>
      </h1>
      <div className="hero__intro">
        <p>
          Computer science student becoming a cybersecurity specialist. I
          build software, then take it apart to learn how it breaks.
        </p>
        <a className="button button--light" href="#work">
          See my work
        </a>
      </div>
    </section>
  );
}
