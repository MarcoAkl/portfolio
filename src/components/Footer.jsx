const credits = [
  {
    title: "Arpanet logical map, march 1977",
    page: "https://commons.wikimedia.org/wiki/File:Arpanet_logical_map,_march_1977.png",
    by: "ARPANET",
    license: "public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
  },
  {
    title: "Enigma-IMG 0487-black",
    page: "https://commons.wikimedia.org/wiki/File:Enigma-IMG_0487-black.jpg",
    by: "Rama",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/fr/deed.en",
  },
  {
    title: "Colossus Computer, Bletchley Park",
    page: "https://commons.wikimedia.org/wiki/File:Colossus_Computer_-_Bletchley_Park_-_geograph.org.uk_-_3419224.jpg",
    by: "Paul Gillett",
    license: "CC BY-SA 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div>
          <p className="footer__head">On this page</p>
          <ul>
            <li><a className="link" href="#about">About</a></li>
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
          </ul>
        </div>
        <div>
          <p className="footer__head">Built with</p>
          <ul>
            <li>React and Vite</li>
            <li>Deployed on Netlify</li>
          </ul>
        </div>
        <div className="footer__credits">
          <p className="footer__head">Pictures</p>
          <p>
            {credits.map((c, i) => (
              <span key={c.page}>
                <a className="link" href={c.page} target="_blank" rel="noreferrer">“{c.title}”</a> by {c.by},{" "}
                <a className="link" href={c.licenseUrl} target="_blank" rel="noreferrer">{c.license}</a>
                {i < credits.length - 1 ? "; " : ", via Wikimedia Commons."}
              </span>
            ))}
          </p>
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
