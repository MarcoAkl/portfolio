import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__title">03. Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <a
            className="project-card"
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
