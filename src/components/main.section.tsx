import { Link } from "react-router-dom";
import { FiArrowDown, FiArrowUpRight, FiCode, FiLayers, FiLayout, FiDownload } from "react-icons/fi";
import { Assets } from "src/utilities/assets";
import { experience, profile } from "src/data/profile";
import { Card } from "./Card";
import { Reveal } from "./Reveal";

export const MainSection = () => <section className="hero page-width">
  <div className="hero-main">
    <Reveal className="hero-copy">
      <div className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER / FRONTEND-FOCUSED</div>
      <h1>Turning ideas<br />into <span className="serif-accent">digital</span><br /><span className="hero-last">experiences<span className="olive-dot">.</span></span></h1>
      <p className="hero-description">Hey, I’m {profile.name}. I build responsive, scalable web applications with React, Next.js, and TypeScript — with a frontend focus and full-stack experience.</p>
      <div className="button-row"><Link to="/projects" className="button button-dark">Explore my work <FiArrowUpRight /></Link><a href={Assets.cv} download className="button button-outline">Download résumé <FiDownload /></a></div>
      <a className="hero-note" href="#experience"><span className="mini-line" /> Currently at {experience[0].company} · View experience <FiArrowDown /></a>
    </Reveal>
    <Reveal className="hero-visual" delay={0.12}>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <span className="hero-star" aria-hidden="true">✳</span>
      <div className="portrait-frame"><img src={Assets.profile_Image} alt="Shek Rasel, frontend-focused software engineer" fetchPriority="high" /><div className="portrait-caption"><span>SHEK RASEL</span><span>Code. Create. Repeat.</span></div></div>
      <div className="floating-label code-label"><span className="code-icon"><FiCode /></span><div>Built with intention<span>From the first pixel to the last line.</span></div></div>
      <div className="floating-label project-label"><span className="label-star">✳</span><strong>{experience.length}</strong><span>teams<br />contributed to</span></div>
      <span className="visual-caption mono">IDEAS → DESIGN → DEVELOPMENT</span>
    </Reveal>
  </div>
  <div className="hero-bottom"><a href="#selected-work">SCROLL TO EXPLORE <FiArrowDown /></a><span>Good design feels right. Great code makes it work.</span><span className="mono">PORTFOLIO / {new Date().getFullYear()}</span></div>
</section>;

export const Features = () => <section className="section page-width">
  <Reveal className="section-heading"><div><div className="eyebrow">03 / WHAT I DO</div><h2>Built for people.<br /><span className="serif-accent">Made to perform.</span></h2></div><p>Bringing design and development together to turn your next idea into something people love to use.</p></Reveal>
  <div className="services-grid">
    <Reveal><Card icon={<FiCode />} header="Full-stack development" description="Reliable web applications, from responsive interfaces to structured APIs and databases. Every layer built to work together." number="01" /></Reveal>
    <Reveal delay={0.08}><Card icon={<FiLayout />} header="Interface & experience" description="Thoughtful layouts, clear interactions, and the small details that make a digital experience feel effortless." number="02" /></Reveal>
    <Reveal delay={0.16}><Card icon={<FiLayers />} header="Frontend development" description="Fast, accessible, responsive interfaces with React and Next.js. Clean components with just the right amount of motion." number="03" /></Reveal>
  </div>
</section>;
