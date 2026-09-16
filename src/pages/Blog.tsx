import { FiArrowUpRight, FiCode, FiPenTool, FiBookOpen } from "react-icons/fi";
import { Reveal } from "src/components/Reveal";
import { ContactBanner } from "src/components/ContactBanner";

export const Blog = () => <>
  <section className="page-width page-section journal-page"><Reveal className="section-heading"><div><div className="eyebrow">THE JOURNAL</div><h1 className="page-title">Notes from<br /><span className="serif-accent">the building process.</span></h1></div><p>A space for ideas, experiments, and lessons learned along the way. From the first line of code to the finishing touches.</p></Reveal>
    <Reveal className="journal-feature"><div className="journal-art" aria-hidden="true"><span className="art-bracket">{"{"}</span><span className="art-asterisk">✳</span><span className="art-bracket">{"}"}</span><span className="mono">THINK. BUILD. REFINE.</span></div><div className="journal-feature-copy"><span className="small-badge">IN THE WORKS</span><h2>A little space<br />for <span className="serif-accent">big ideas.</span></h2><p>I’m putting together my first collection of notes on development, design, and the things I learn while building. There are no published posts just yet.</p><a className="text-link" href="https://github.com/ShekRasel" target="_blank" rel="noreferrer">Explore what I’m building <FiArrowUpRight /></a></div></Reveal>
    <Reveal className="journal-topics"><div><FiCode /><h3>Development</h3><p>Clean code, useful patterns, and lessons from real projects.</p></div><div><FiPenTool /><h3>Design & interaction</h3><p>The details that make interfaces feel intuitive and considered.</p></div><div><FiBookOpen /><h3>Learning in public</h3><p>Experiments, discoveries, and the ongoing process of getting better.</p></div></Reveal>
  </section><ContactBanner />
</>;
