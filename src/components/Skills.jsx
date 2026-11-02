import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="toolkit" className="section toolkit">
      <h2 className="section__title toolkit__title" data-reveal>
        What my projects use
      </h2>
      <div className="toolkit__body">
        <div className="toolkit__table">
          {skillGroups.map((group, groupIndex) => (
            <div className="toolkit__group" key={group.label} data-reveal style={{ "--i": groupIndex }}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
