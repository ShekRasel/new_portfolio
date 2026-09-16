import { useState } from "react";
import { FiArrowUpRight, FiSearch, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "src/projects/project";
import { Reveal } from "src/components/Reveal";
import { ContactBanner } from "src/components/ContactBanner";

const filters = ["All projects", "Next.js", "React", "Full stack"];

export const Project = ({ featured = false }: { featured?: boolean }) => {
  const [filter, setFilter] = useState("All projects");
  const [query, setQuery] = useState("");
  const matching = projects.filter(project => {
    const tech = [...project.technology.Frontend, ...project.technology.Backend].join(" ").toLowerCase();
    const categoryMatch = filter === "All projects" || (filter === "Full stack" ? project.technology.Backend.length > 0 : tech.includes(filter === "React" ? "react" : "next"));
    return categoryMatch && (project.name + " " + tech).toLowerCase().includes(query.toLowerCase().trim());
  });
  const visible = featured ? projects.slice(0, 4) : matching;
  return <>
    <section id="selected-work" className={"page-width section projects-section " + (!featured ? "page-section" : "")}>
      <Reveal className="section-heading"><div><div className="eyebrow">{featured ? "01 / SELECTED WORK" : "THE PROJECT COLLECTION"}</div>{featured ? <h2>A few things<br /><span className="serif-accent">I’ve brought to life.</span></h2> : <h1 className="page-title">Ideas, made <span className="serif-accent">real.</span></h1>}</div>{featured ? <Link className="text-link" to="/projects">View all projects <FiArrowUpRight /></Link> : <p>A selection of websites and applications. Each one a new challenge, a new lesson, and a little more attention to detail.</p>}</Reveal>
      {!featured && <div className="project-toolbar"><div className="filter-list" aria-label="Filter projects">{filters.map(item => <button key={item} className={filter === item ? "filter-chip selected" : "filter-chip"} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === "All projects" && <span>{projects.length}</span>}</button>)}</div><label className="search-field"><FiSearch /><input aria-label="Search projects" placeholder="Find a project…" value={query} onChange={event => setQuery(event.target.value)} /></label></div>}
      {!featured && <p className="results-count mono" aria-live="polite">{visible.length} PROJECT{visible.length !== 1 ? "S" : ""} / {filter.toUpperCase()}</p>}
      <div className="project-grid">{visible.map((project, index) => <Reveal key={project.id} delay={featured ? (index % 2) * 0.08 : 0}>
        <Link className={"project-card project-tone-" + index % 4} to={"/project/" + encodeURIComponent(project.name)}>
          <div className="project-image-wrap"><div className="project-browser"><span /><span /><span /><div>{project.name}</div></div><img src={project.image} alt={project.name + " website preview"} loading="lazy" /><span className="project-open" aria-hidden="true"><FiArrowUpRight /></span><span className="project-index mono">0{index + 1}</span></div>
          <div className="project-card-info"><div><div className="project-category mono">{project.technology.Backend.length ? "FULL-STACK APPLICATION" : "DESIGN & DEVELOPMENT"}</div><h3>{project.name}</h3></div><FiArrowUpRight /></div>
          <p className="project-summary">{project.descriptions[0].replace(/^\d+\.\s*/, "")}</p>
          <div className="tags">{project.technology.Frontend.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</div>
        </Link>
      </Reveal>)}</div>
      {!visible.length && <div className="empty-state"><FiSearch /><h2>No matching projects.</h2><p>Try another technology or search term.</p><button className="button button-dark" onClick={() => { setQuery(""); setFilter("All projects"); }}>Reset filters <FiArrowRight /></button></div>}
    </section>
    {!featured && <ContactBanner />}
  </>;
};
