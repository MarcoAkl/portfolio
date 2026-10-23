const facts = [
  { label: "Studying", value: "Computer Science" },
  { label: "Focus", value: "Cybersecurity" },
  { label: "Practising on", value: "picoCTF, Hack The Box" },
  { label: "Open to", value: "Internships" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section__title" data-reveal>
        About me
      </h2>
      <dl className="about__facts" data-reveal style={{ "--i": 2 }}>
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <div className="about__text" data-reveal style={{ "--i": 1 }}>
        <p className="about__lead">
          I&apos;m a computer science student focused on security: network
          defence and secure coding on one side, penetration testing and CTF
          challenges on the other. I like knowing how a protocol is supposed
          to behave, and finding out what happens when it doesn&apos;t.
        </p>
        <p>
          Right now I&apos;m sharpening that through coursework, personal
          projects and hands-on practice with Wireshark, Nmap and Burp Suite,
          with the goal of working as a cybersecurity specialist.
        </p>
      </div>
    </section>
  );
}
