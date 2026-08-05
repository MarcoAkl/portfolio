import { skillGroups } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`section reveal ${visible ? "is-visible" : ""}`}
    >
      <h2 className="section__title">02. Skills</h2>
      <div className="skills">
        {skillGroups.map((group, groupIndex) => (
          <div className="skills__group" key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item, itemIndex) => (
                <li
                  key={item}
                  style={{
                    "--delay": `${groupIndex * 100 + itemIndex * 40}ms`,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
