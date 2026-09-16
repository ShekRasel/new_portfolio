import jsLogo from "src/assets/svg/javascript.svg";
import tsLogo from "src/assets/svg/typescript.svg";
import nodeLogo from "src/assets/svg/nodejs.svg";
import reactLogo from "src/assets/svg/react.svg";
import nextLogo from "src/assets/svg/nextjs.svg";
import tailwindLogo from "src/assets/svg/tailwind-css.svg";
import postgresLogo from "src/assets/svg/Postgresql_elephant.svg.png";
import mongoLogo from "src/assets/svg/mongodb.svg";
import { skillGroups } from "src/data/profile";
import { Reveal } from "./Reveal";

const skills = [
  { name: "React", src: reactLogo, category: "INTERFACE" },
  { name: "Next.js", src: nextLogo, category: "FRAMEWORK", monochrome: true },
  { name: "TypeScript", src: tsLogo, category: "LANGUAGE" },
  { name: "JavaScript", src: jsLogo, category: "LANGUAGE" },
  { name: "Node.js", src: nodeLogo, category: "BACKEND" },
  { name: "Tailwind CSS", src: tailwindLogo, category: "STYLING" },
  { name: "PostgreSQL", src: postgresLogo, category: "DATABASE" },
  { name: "MongoDB", src: mongoLogo, category: "DATABASE" },
];

export const Skill = () => (
  <section className="skills-section section page-width" aria-labelledby="skills-heading">
    <Reveal className="section-heading">
      <div><div className="eyebrow">THE TOOLKIT</div><h2 id="skills-heading">The right tools.<br /><span className="serif-accent">Endless possibilities.</span></h2></div>
      <p>My everyday frontend toolkit, backed by experience with APIs, data, state management, animation, and AI-assisted development.</p>
    </Reveal>
    <Reveal className="skills-grid">
      {skills.map(skill => (
        <div className="skill-item" key={skill.name}>
          <img src={skill.src} alt="" loading="lazy" className={skill.monochrome ? "monochrome-logo" : undefined} />
          <div><h3>{skill.name}</h3><span className="mono">{skill.category}</span></div>
        </div>
      ))}
    </Reveal>
    <Reveal className="skill-groups">
      {skillGroups.map(group => (
        <div className="skill-group" key={group.name}>
          <h3>{group.name}</h3>
          <div className="tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </div>
      ))}
    </Reveal>
  </section>
);
