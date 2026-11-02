const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#toolkit", label: "Toolkit" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav__brand" aria-label="Marco Akl, back to top">
        MA
      </a>
      <nav className="nav__links" aria-label="Sections">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="link nav__wide">
            {link.label}
          </a>
        ))}
        <a href="#contact" className="link nav__action">
          Contact
        </a>
      </nav>
    </header>
  );
}
