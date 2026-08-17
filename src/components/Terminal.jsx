import { useTypedTerminal } from "../hooks/useReveal";

// Real content, not filler: whoami-style intro plus the actual security
// tools from src/data/skills.js, so the animation is worth reading.
const SESSION = [
  { cmd: "whoami", out: ["marco_akl"] },
  { cmd: "cat role.txt", out: ["CS student · security-focused"] },
  { cmd: "ls skills/security", out: ["nmap  wireshark  burp  linux"] },
];

export default function Terminal() {
  const [lines, complete] = useTypedTerminal(SESSION);

  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal__bar">
        <span className="terminal__dot" />
        <span className="terminal__dot" />
        <span className="terminal__dot" />
        <span className="terminal__title">marco@portfolio:~</span>
      </div>
      <div className="terminal__body">
        {lines.map((line, index) => (
          <div
            key={index}
            className={
              line.type === "command"
                ? "terminal__line terminal__line--command"
                : "terminal__line terminal__line--output"
            }
          >
            {line.type === "command" ? (
              <>
                <span className="terminal__prompt">$</span> {line.text}
              </>
            ) : (
              line.text
            )}
          </div>
        ))}
        {complete && (
          <div className="terminal__line terminal__line--command">
            <span className="terminal__prompt">$</span>{" "}
            <span className="blink">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
