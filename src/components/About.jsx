import { useReveal } from "../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`section reveal ${visible ? "is-visible" : ""}`}
    >
      <h2 className="section__title">01. About</h2>
      <p>
        I&apos;m a Computer Science student with a growing focus on
        cybersecurity — everything from network defense and secure coding to
        offensive techniques like penetration testing and CTF challenges.
      </p>
      <p>
        I like understanding systems from the ground up: how a protocol is
        supposed to behave, and the more interesting question of what happens
        when it doesn&apos;t. That curiosity is what's pulling me toward
        security work, alongside solid software engineering fundamentals.
      </p>
      <p>
        Right now I&apos;m sharpening my skills through coursework, personal
        projects, and hands-on practice with tools like Wireshark, Nmap, and
        Burp Suite — with the goal of becoming a cybersecurity specialist.
      </p>
    </section>
  );
}
