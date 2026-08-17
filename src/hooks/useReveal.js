import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Types out a sequence of `{ cmd, out }` blocks like a terminal session:
// each command is typed character-by-character, then its output lines
// appear at once. Respects prefers-reduced-motion by rendering the final
// state immediately instead of animating.
export function useTypedTerminal(blocks, speed = 28) {
  const [rendered, setRendered] = useState([]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const finalLines = blocks.flatMap((block) => [
      { type: "command", text: block.cmd },
      ...block.out.map((line) => ({ type: "output", text: line })),
    ]);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRendered(finalLines);
      setComplete(true);
      return undefined;
    }

    let cancelled = false;
    const done = [];
    setRendered([]);
    setComplete(false);

    (async () => {
      for (const block of blocks) {
        for (let i = 1; i <= block.cmd.length; i += 1) {
          if (cancelled) return;
          await sleep(speed);
          setRendered([...done, { type: "command", text: block.cmd.slice(0, i) }]);
        }
        done.push({ type: "command", text: block.cmd });
        await sleep(200);
        for (const line of block.out) {
          if (cancelled) return;
          done.push({ type: "output", text: line });
          setRendered([...done]);
          await sleep(150);
        }
        await sleep(300);
      }
      if (!cancelled) setComplete(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [blocks, speed]);

  return [rendered, complete];
}
