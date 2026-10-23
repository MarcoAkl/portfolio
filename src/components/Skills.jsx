import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="toolkit" className="section toolkit">
      <h2 className="section__title toolkit__title" data-reveal>
        The tools I reach for
      </h2>
      <div className="toolkit__body">
        <figure className="toolkit__picture" data-reveal>
          <img
            src="/images/enigma.jpg"
            alt="Keyboard and lampboard of a four-rotor Enigma machine"
            loading="lazy"
            width="1200"
            height="1500"
          />
        </figure>
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
