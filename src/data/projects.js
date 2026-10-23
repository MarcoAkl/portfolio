// Edit this list to swap in your real projects as you build them.
// Each picture is a piece of computing or cryptography history, not a
// screenshot of the project; `caption` says what it actually shows.
export const projects = [
  {
    title: "Network Vulnerability Scanner",
    description:
      "A Python CLI tool that sweeps a local network, fingerprints open ports/services with an Nmap wrapper, and flags hosts running known-vulnerable versions.",
    tags: ["Python", "Nmap", "Networking"],
    link: "https://github.com/MarcoAkl",
    image: "/images/arpanet-map-1977.png",
    caption: "ARPANET logical map, March 1977",
    position: "50% 40%",
  },
  {
    title: "Encrypted Password Vault",
    description:
      "A local-first password manager with AES-256 encryption at rest, a master-password key derivation flow, and a simple CLI for storing and retrieving credentials.",
    tags: ["Python", "Cryptography", "Security"],
    link: "https://github.com/MarcoAkl",
    image: "/images/enigma.jpg",
    caption: "Four-rotor Enigma machine in its wooden case",
    position: "45% 50%",
  },
  {
    title: "Phishing URL Detector",
    description:
      "A browser extension that heuristically scores links on a page for phishing risk (lookalike domains, redirect chains, suspicious TLDs) and warns before you click.",
    tags: ["JavaScript", "Browser Extension", "Security"],
    link: "https://github.com/MarcoAkl",
    image: "/images/switchboard-1907.jpg",
    caption: "Telephone switchboard operators, Salt Lake City, 1907",
    position: "75% 50%",
  },
  {
    title: "CTF Write-ups",
    description:
      "A growing collection of solved challenges from picoCTF and HackTheBox, documenting the vulnerability, exploit path, and lessons learned for each.",
    tags: ["CTF", "Exploitation", "Documentation"],
    link: "https://github.com/MarcoAkl",
    image: "/images/colossus.jpg",
    caption: "The rebuilt Colossus codebreaking computer, Bletchley Park",
    position: "70% 50%",
  },
  {
    title: "This Portfolio",
    description:
      "A fast, dependency-light React site built to showcase projects and coursework, deployed on Netlify straight from GitHub.",
    tags: ["React", "Vite", "Netlify"],
    link: "https://github.com/MarcoAkl/portfolio",
    image: "/images/punch-card.jpg",
    caption: "An 80-column punched card",
    position: "50% 50%",
  },
];
