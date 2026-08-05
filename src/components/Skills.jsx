import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section__title">02. Skills</h2>
      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skills__group" key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
