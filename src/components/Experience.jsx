import { education, experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2 className="section__title" data-reveal>
        Experience
      </h2>
      <ol className="experience__list">
        {experience.map((job, index) => (
          <li key={job.role} className="experience__item" data-reveal style={{ "--i": index }}>
            <p className="experience__dates">{job.dates}</p>
            <div className="experience__who">
              <h3>{job.role}</h3>
              <p>{job.company}</p>
            </div>
            <ul className="experience__points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <h3 className="experience__subhead" data-reveal>
        Education
      </h3>
      <ol className="experience__list">
        {education.map((school, index) => (
          <li key={school.role} className="experience__item" data-reveal style={{ "--i": index }}>
            <p className="experience__dates">{school.dates}</p>
            <div className="experience__who">
              <h3>{school.role}</h3>
              <p>{school.company}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
