import Note from "./Note";

const EMAIL = "marco.akl.2006.ta@gmail.com";

const rows = [
  { value: EMAIL, href: `mailto:${EMAIL}` },
  { value: "github.com/MarcoAkl", href: "https://github.com/MarcoAkl" },
  { value: "Open to internships" },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section__title" data-reveal>
        Get in touch
      </h2>
      <p className="contact__intro" data-reveal style={{ "--i": 1 }}>
        I&apos;m always open to talking about security, software or internship
        opportunities.
      </p>
      <ul className="contact__rows">
        {rows.map((row, index) => (
          <li key={row.value} data-reveal style={{ "--i": index }}>
            {row.href ? (
              <a
                className="contact__value link"
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel={row.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {row.value}
              </a>
            ) : (
              <span className="contact__value">{row.value}</span>
            )}
          </li>
        ))}
        <li className="contact__hello" data-reveal style={{ "--i": rows.length }}>
          <span className="contact__value">Say hello</span>
          <a
            className="contact__go"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Hello from your portfolio")}`}
            aria-label="Email Marco"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13M13 6l6 6-6 6" />
            </svg>
          </a>
        </li>
      </ul>
      <Note />
    </section>
  );
}
