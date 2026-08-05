import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className={`section reveal ${visible ? "is-visible" : ""}`}
    >
      <h2 className="section__title">03. Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <a
            className={`project-card ${visible ? "is-visible" : ""}`}
            style={{ "--delay": `${index * 80}ms` }}
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-card__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
