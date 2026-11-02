import { useState } from "react";
import { projects } from "../data/projects";

// An index of project names. Pointing at or tabbing to a name makes it the
// active one; the sticky frame on the right shows its picture and details.
// On touch screens every row carries its own picture and description.
// Private repositories get a focusable row instead of a dead link.
export default function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="work" className="section work">
      <h2 className="section__title" data-reveal>
        Selected work
      </h2>
      <div className="work__grid">
        <ul className="work__list">
          {projects.map((project, index) => {
            const href = project.live ?? project.link;
            const Row = href ? "a" : "div";
            const rowProps = href
              ? { href, target: "_blank", rel: "noreferrer" }
              : { tabIndex: 0 };
            return (
            <li key={project.title} data-reveal style={{ "--i": index }}>
              <Row
                {...rowProps}
                className={`work__row ${index === active ? "is-active" : ""}`}
                onPointerEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <figure className="work__thumb">
                  <img
                    src={project.image}
                    alt={project.caption}
                    loading="lazy"
                    width="1440"
                    height="1080"
                    style={{ objectPosition: project.position }}
                  />
                </figure>
                <span className="work__name">{project.title}</span>
                <span className="work__tags">{project.tags.join(", ")}</span>
                <span className="work__desc">{project.description}</span>
                {!project.link && (
                  <span className="work__private">Private repository, code available on request</span>
                )}
              </Row>
            </li>
            );
          })}
        </ul>
        <aside className="work__preview" aria-live="polite" data-reveal>
          <div className="work__frame">
            {projects.map((project, index) => (
              <img
                key={project.title}
                src={project.image}
                alt={index === active ? project.caption : ""}
                className={index === active ? "is-active" : ""}
                loading="lazy"
                width="1440"
                height="1080"
                style={{ objectPosition: project.position }}
              />
            ))}
          </div>
          <p className="work__caption">{current.caption}</p>
          <p className="work__about">{current.description}</p>
          <div className="work__links">
            {current.live && (
              <a className="link work__open" href={current.live} target="_blank" rel="noreferrer">
                Open the live site
              </a>
            )}
            {current.link ? (
              <a className="link work__open" href={current.link} target="_blank" rel="noreferrer">
                View the code on GitHub
              </a>
            ) : (
              <p className="work__open">Private repository, code available on request</p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
