import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiArrowUp, FiMail } from "react-icons/fi";
import { profile } from "src/data/profile";

export const Footer = () => <footer className="site-footer page-width">
  <div className="footer-top"><Link to="/" className="brand">rasel<span className="brand-dot">.</span></Link><p>Thoughtfully designed. Carefully built.</p><div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a><a href={"mailto:" + (import.meta.env.VITE_CONTACT_EMAIL?.trim() || profile.email)} aria-label="Email Shek Rasel"><FiMail /></a></div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} Shek Rasel. All rights reserved.</span><span>Built with React & a little obsession.</span><button onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>Back to top <FiArrowUp /></button></div>
</footer>;
