import { useMemo, useState } from "react";

const EXAMPLE = "http://paypa1.secure-login-verify.top/account?next=https://paypal.com";

const SUSPICIOUS_TLDS = new Set([
  "top", "xyz", "zip", "mov", "click", "tk", "ml", "ga", "cf", "gq",
  "work", "rest", "cam", "country", "support", "loan", "icu",
]);

const BRANDS = [
  "paypal", "apple", "google", "microsoft", "amazon", "netflix",
  "facebook", "instagram", "linkedin", "github", "outlook", "office",
];

const REDIRECT_KEYS = /^(url|redirect|redirect_uri|next|continue|return|dest|destination|goto)$/i;
const URGENT_WORDS = /(login|log-in|signin|sign-in|verify|secure|account|update|wallet|password)/i;

// Undo the usual character swaps (paypa1, g00gle, rnicrosoft) so a
// lookalike compares equal to the brand it imitates.
function unswap(text) {
  return text
    .toLowerCase()
    .replace(/0/g, "o")
    .replace(/1/g, "l")
    .replace(/3/g, "e")
    .replace(/4/g, "a")
    .replace(/5/g, "s")
    .replace(/7/g, "t")
    .replace(/rn/g, "m")
    .replace(/vv/g, "w");
}

function findBrandTrick(labels, host, path) {
  const owner = labels.at(-2) ?? "";
  if (BRANDS.includes(owner)) return null;
  for (const brand of BRANDS) {
    const lookalike = labels.find((label) => label !== brand && unswap(label) === brand);
    if (lookalike) {
      return `“${lookalike}” imitates ${brand} by swapping in lookalike characters.`;
    }
    if (unswap(host + path).includes(brand)) {
      return `It mentions ${brand}, but the site really belongs to ${labels.slice(-2).join(".")}.`;
    }
  }
  return null;
}

// A quick heuristic phishing score. It reads the address only; nothing is
// fetched or sent anywhere.
function analyse(raw) {
  const input = raw.trim();
  if (!input) return null;

  const hasScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(input);
  let url;
  try {
    url = new URL(hasScheme ? input : `http://${input}`);
  } catch {
    return { error: "That doesn’t look like a web address." };
  }

  const host = url.hostname.toLowerCase();
  const labels = host.split(".");
  const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.startsWith("[");
  const findings = [];
  const add = (points, text) => findings.push({ points, text });

  if (hasScheme && url.protocol === "http:") {
    add(1, "It doesn’t use HTTPS, so anything you type travels unencrypted.");
  }
  if (isIp) {
    add(3, "It points at a bare IP address instead of a domain name.");
  }
  if (labels.some((label) => label.startsWith("xn--"))) {
    add(3, "It uses punycode (xn--), which can hide lookalike letters from other alphabets.");
  }
  if (url.username) {
    add(3, `Everything before the @ is ignored: your browser would really go to ${host}.`);
  }
  if (!isIp) {
    const tld = labels.at(-1);
    if (SUSPICIOUS_TLDS.has(tld)) {
      add(2, `It ends in .${tld}, an ending that turns up often in phishing campaigns.`);
    }
    const trick = findBrandTrick(labels, host, url.pathname);
    if (trick) add(3, trick);
    if (labels.length > 3) {
      add(1, "It stacks several subdomains, which pushes the real domain out of view.");
    }
    if ((host.match(/-/g) ?? []).length >= 2) {
      add(1, "Its domain is strung together with hyphens to sound official.");
    }
    if (URGENT_WORDS.test(host)) {
      add(1, "Its domain leans on words like “login”, “secure” or “verify”.");
    }
  }
  for (const [key, value] of url.searchParams) {
    if (REDIRECT_KEYS.test(key) && /^(https?:)?\/\//i.test(value)) {
      add(2, "It carries a second web address inside it, which can bounce you somewhere else.");
      break;
    }
  }
  if (input.length > 90) {
    add(1, "It’s unusually long, which makes the real destination harder to read.");
  }

  const score = findings.reduce((sum, f) => sum + f.points, 0);
  const verdict =
    score >= 4 ? "Likely phishing" : score >= 2 ? "Be careful" : "Nothing obvious";
  return { host, score, verdict, findings };
}

export default function LinkCheck() {
  const [value, setValue] = useState(EXAMPLE);
  const result = useMemo(() => analyse(value), [value]);

  return (
    <section id="check" className="section check">
      <div className="check__intro">
        <h2 className="section__title" data-reveal>
          Would you click this link?
        </h2>
        <p data-reveal style={{ "--i": 1 }}>
          Paste any web address. This small checker, built into this site,
          looks for common phishing signs: lookalike spellings, risky endings
          and hidden redirects. It only reads the text; nothing is visited or
          sent anywhere.
        </p>
        <label className="check__field" data-reveal style={{ "--i": 2 }}>
          <span>Web address</span>
          <input
            type="text"
            inputMode="url"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </div>
      <div className="check__result" aria-live="polite" data-reveal style={{ "--i": 3 }}>
        {!result && <p className="check__verdict">Paste a link to check it.</p>}
        {result?.error && <p className="check__verdict">{result.error}</p>}
        {result?.verdict && (
          <>
            <p className="check__verdict" key={result.verdict}>
              {result.verdict}
            </p>
            <p className="check__host">
              Goes to <strong>{result.host}</strong>, {result.findings.length}{" "}
              {result.findings.length === 1 ? "warning sign" : "warning signs"}
            </p>
            {result.findings.length > 0 && (
              <ul className="check__findings">
                {result.findings.map((finding) => (
                  <li key={finding.text}>{finding.text}</li>
                ))}
              </ul>
            )}
            <p className="check__note">
              A heuristic, not a guarantee: a clean score doesn&apos;t make a
              link safe.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
