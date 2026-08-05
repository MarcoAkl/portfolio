const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#note", label: "Leave a Note" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          Marco<span className="accent">.</span>Akl
        </a>
        <nav className="nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
