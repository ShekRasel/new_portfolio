import { FiArrowUpRight, FiBriefcase, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { education, experience } from "src/data/profile";
import { Reveal } from "./Reveal";

export const Experience = ({ showEducation = false }: { showEducation?: boolean }) => (
  <section id="experience" className="section page-width experience-section" aria-labelledby="experience-heading">
    <Reveal className="section-heading">
      <div>
        <div className="eyebrow">{showEducation ? "THE PROFESSIONAL JOURNEY" : "02 / PROFESSIONAL EXPERIENCE"}</div>
        <h2 id="experience-heading">Real teams.<br /><span className="serif-accent">Meaningful work.</span></h2>
      </div>
      <p>From crafting responsive interfaces to contributing to full-stack products. The teams, projects, and lessons shaping my work.</p>
    </Reveal>

    <ol className="experience-timeline">
      {experience.map((job, index) => (
        <li key={job.company} className="experience-item">
          <Reveal className="experience-row" delay={index * 0.04}>
            <div className="experience-period">
              <span className="experience-marker" aria-hidden="true"><FiBriefcase /></span>
              <div className="experience-dates">
                <time dateTime={job.start}>{job.startLabel}</time>
                <span aria-hidden="true"> — </span>
                {job.end ? <time dateTime={job.end}>{job.endLabel}</time> : <span>{job.endLabel}</span>}
              </div>
              {!job.end && <span className="current-role"><span className="status-dot" /> CURRENT ROLE</span>}
              {job.employment && <span className="experience-employment">{job.employment}</span>}
            </div>

            <article className="experience-card">
              <div className="experience-card-heading">
                <div><div className="experience-company">{job.company}</div><h3>{job.role}</h3></div>
                <span className="experience-number mono" aria-hidden="true">/{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="experience-location"><FiMapPin aria-hidden="true" />{job.location}</p>
              <ul className="experience-highlights">{job.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="tags">{job.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>

    {showEducation ? (
      <Reveal className="education-card">
        <div><div className="eyebrow">EDUCATION</div><h3>{education.degree}</h3><p>{education.institution}</p></div>
        <div className="education-period"><time dateTime={education.start}>{education.startLabel}</time><span> — </span><time dateTime={education.end}>{education.endLabel}</time></div>
      </Reveal>
    ) : (
      <div className="experience-footer"><Link className="text-link" to="/about">More about my background <FiArrowUpRight /></Link></div>
    )}
  </section>
);
