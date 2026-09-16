import { Link } from "react-router-dom";
import { FiArrowUpRight, FiDownload, FiCode, FiBookOpen, FiMapPin, FiUsers } from "react-icons/fi";
import { Assets } from "src/utilities/assets";
import { profile, experience } from "src/data/profile";
import { Reveal } from "src/components/Reveal";
import { Skill } from "src/components/Skill";
import { Experience } from "src/components/Experience";
import { ContactBanner } from "src/components/ContactBanner";

export const AboutMe = ({ compact = false }: { compact?: boolean }) => (
  <>
    <section className={"about-section section page-width " + (!compact ? "page-section" : "")}>
      {!compact && (
        <Reveal className="about-page-heading">
          <div className="eyebrow">{profile.title.toUpperCase()}</div>
          <h1 className="page-title">Frontend by focus.<br /><span className="serif-accent">Full stack by experience.</span></h1>
        </Reveal>
      )}
      <div className="about-grid">
        <Reveal className="about-image">
          <img src={Assets.profile_Image} alt={profile.name} loading="lazy" />
          <div className="about-image-note"><span className="label-star" aria-hidden="true">✳</span><span>Clean code.<br />Thoughtful experiences.</span></div>
          <span className="mono about-photo-caption">A LITTLE ABOUT ME / SHEK RASEL</span>
        </Reveal>
        <Reveal className="about-copy">
          <div className="eyebrow">{compact ? "04 / BEYOND THE CODE" : "HELLO, I’M RASEL"}</div>
          <h2>A frontend focus.<br /><span className="serif-accent">A full-stack perspective.</span></h2>
          <p>I’m {profile.name}, a frontend-focused software engineer based in Gazipur, Dhaka. I build responsive, scalable, and SEO-friendly web applications with Next.js, React, TypeScript, Node.js, and Tailwind CSS.</p>
          <p>{profile.approach}</p>
          {!compact && <p>I also use ChatGPT, Cursor AI, and Claude to accelerate development and improve code quality, bringing AI-assisted development into my everyday workflow.</p>}
          <div className="profile-location"><FiMapPin aria-hidden="true" />{profile.location}</div>
          <div className="about-facts">
            <div><strong>{experience.length} teams</strong><span>Professional experience</span></div>
            <div><strong>Frontend</strong><span>Focus, with full-stack experience</span></div>
          </div>
          <div className="button-row">
            {compact && <Link to="/about" className="button button-dark">More about me <FiArrowUpRight /></Link>}
            <a className={"button " + (compact ? "button-outline" : "button-dark")} href={Assets.cv} download>Download résumé <FiDownload /></a>
          </div>
        </Reveal>
      </div>
      {!compact && (
        <div className="personal-grid">
          <Reveal><FiCode /><h3>From Figma to production</h3><p>I collaborate with UI/UX designers to turn designs into responsive, scalable interfaces, with attention to cross-browser compatibility, performance, and maintainable code.</p></Reveal>
          <Reveal delay={0.08}><FiUsers /><h3>Better work, together</h3><p>At ShafaCode, I mentored junior developers and created frontend standard operating procedures to help teams build with consistent clean code practices.</p></Reveal>
          <Reveal delay={0.16}><FiBookOpen /><h3>A systems perspective</h3><p>From planning ERP architecture and diagrams to building authentication and database workflows, I connect frontend decisions with the bigger picture.</p></Reveal>
        </div>
      )}
    </section>
    {!compact && <><Experience showEducation /><Skill /><ContactBanner /></>}
  </>
);
