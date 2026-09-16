import { useState } from "react";
import { FiArrowLeft, FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { projects } from "src/projects/project";
import { Reveal } from "src/components/Reveal";
import { ContactBanner } from "src/components/ContactBanner";
import { NotFound } from "./NotFound";

export const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(item => item.name === slug);
  const [imageNumber, setImageNumber] = useState(0);
  if (!project) return <NotFound project />;
  const images = project.subImages?.length ? project.subImages : [project.image];
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  const changeImage = (direction: number) => setImageNumber(current => (current + direction + images.length) % images.length);
  return <>
    <section className="page-width page-section project-detail">
      <Link to="/projects" className="text-link back-link"><FiArrowLeft /> Back to projects</Link>
      <Reveal className="detail-heading"><div><div className="eyebrow">PROJECT / {String(project.id).padStart(2, "0")}</div><h1 className="page-title">{project.name}</h1></div><div className="button-row"><a className="button button-dark" href={project.projectLink} target="_blank" rel="noreferrer">Visit live site <FiArrowUpRight /></a><a className="button button-outline" href={project.githubLink} target="_blank" rel="noreferrer"><FiGithub /> Source code</a></div></Reveal>
      <Reveal className="project-gallery">
        <div className="gallery-topbar"><div className="browser-dots"><span /><span /><span /></div><span className="mono">PROJECT GALLERY</span><span className="mono" aria-live="polite">{String(imageNumber + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></div>
        <div className="gallery-stage" tabIndex={0} role="region" aria-label="Project screenshots. Use left and right arrow keys to browse." onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); changeImage(event.key === "ArrowLeft" ? -1 : 1); } }}><img src={images[imageNumber]} alt={project.name + " screenshot " + (imageNumber + 1)} />{images.length > 1 && <div className="gallery-controls"><button className="icon-button" aria-label="Previous screenshot" onClick={() => changeImage(-1)}><FiChevronLeft /></button><button className="icon-button" aria-label="Next screenshot" onClick={() => changeImage(1)}><FiChevronRight /></button></div>}</div>
        {images.length > 1 && <div className="gallery-thumbnails">{images.map((image, index) => <button className={index === imageNumber ? "selected" : ""} key={image} onClick={() => setImageNumber(index)} aria-label={"View screenshot " + (index + 1)} aria-pressed={index === imageNumber}><img src={image} alt="" loading="lazy" /></button>)}</div>}
      </Reveal>
      <a className="text-link" href={images[imageNumber]} target="_blank" rel="noreferrer">Open full-size screenshot <FiArrowUpRight /></a>
      <Reveal className="detail-content"><div><div className="eyebrow">THE OVERVIEW</div><h2>Behind the build<span className="olive-dot">.</span></h2><ul className="project-highlights">{project.descriptions.map(description => <li key={description}>{description.replace(/^\d+\.\s*/, "")}</li>)}</ul></div><aside className="detail-sidebar"><div className="eyebrow">BUILT WITH</div><h3>Frontend</h3><div className="tags">{project.technology.Frontend.map(tech => <span key={tech}>{tech}</span>)}</div>{project.technology.Backend.length > 0 && <><h3>Backend</h3><div className="tags">{project.technology.Backend.map(tech => <span key={tech}>{tech}</span>)}</div></>}<div className="sidebar-divider" /><span className="mono">PROJECT TYPE</span><p>{project.technology.Backend.length ? "Full-stack web application" : "Frontend development"}</p></aside></Reveal>
      <Link className="next-project" to={"/project/" + encodeURIComponent(nextProject.name)}><div><span className="eyebrow">UP NEXT</span><h3>{nextProject.name}</h3></div><FiArrowUpRight /></Link>
    </section><ContactBanner />
  </>;
};
