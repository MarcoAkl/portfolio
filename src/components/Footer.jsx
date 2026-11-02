export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div>
          <p className="footer__head">On this page</p>
          <ul>
            <li><a className="link" href="#about">About</a></li>
            <li><a className="link" href="#experience">Experience</a></li>
            <li><a className="link" href="#work">Work</a></li>
            <li><a className="link" href="#toolkit">Toolkit</a></li>
            <li><a className="link" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="footer__head">Elsewhere</p>
          <ul>
            <li><a className="link" href="https://github.com/MarcoAkl" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="link" href="mailto:marco.akl.2006.ta@gmail.com">Email</a></li>
            <li><a className="link" href="/Marco-Akl-CV.pdf" download="Marco-Akl-CV.pdf">CV (PDF)</a></li>
          </ul>
        </div>
        <div>
          <p className="footer__head">Built with</p>
          <ul>
            <li>React and Vite</li>
            <li>Deployed on Netlify</li>
          </ul>
        </div>
      </div>
      <div className="footer__mark">
        <svg viewBox="0 0 1000 150" role="img" aria-label="Marco Akl">
          <text x="0" y="132" textLength="1000" lengthAdjust="spacingAndGlyphs">
            MARCO AKL
          </text>
        </svg>
        <p className="footer__legal">© {year} Marco Akl</p>
      </div>
    </footer>
  );
}
