const contacts = [
  {
    label: "Email",
    value: "marco.akl.2006.ta@gmail.com",
    href: "mailto:marco.akl.2006.ta@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/MarcoAkl",
    href: "https://github.com/MarcoAkl",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section__title">04. Contact</h2>
      <p>
        I&apos;m always open to chatting about security, software, or
        internship opportunities. Reach out through any of the channels
        below.
      </p>
      <div className="contact__links">
        {contacts.map((contact) => (
          <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer">
            <span className="contact__label">{contact.label}</span>
            <span>{contact.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
