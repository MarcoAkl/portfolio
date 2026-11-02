import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="toolkit" className="section toolkit">
      <h2 className="section__title toolkit__title" data-reveal>
        What my projects use
      </h2>
      <div className="toolkit__body">
        <figure className="toolkit__picture" data-reveal>
          <img
            src="/images/colossus.jpg"
            alt="The rebuilt Colossus codebreaking computer at Bletchley Park"
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
