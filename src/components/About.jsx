const facts = [
  { label: "Studying", value: "Computer Science, degree in progress" },
  { label: "Builds with", value: "Java, React, Python" },
  { label: "Working toward", value: "Cybersecurity" },
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
          I&apos;m a computer science student who builds web apps and back-end
          services: a pair of Spring Boot microservices, a React and
          TypeScript directory app, and a small QA reporting tool.
        </p>
        <p>
          I build with AI coding assistants such as Claude, and I treat each
          project as a way to learn how the pieces fit together, from the
          database to the tests.
        </p>
        <p>
          Security is where I want to end up. My next step is networking
          fundamentals and hands-on practice, and I&apos;ll add that work here
          as I do it.
        </p>
      </div>
    </section>
  );
}
