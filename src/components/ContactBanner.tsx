import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "./Reveal";

export const ContactBanner = () => <section className="page-width contact-banner-wrap"><Reveal className="contact-banner"><div className="eyebrow">HAVE SOMETHING IN MIND?</div><div className="banner-main"><h2>Good things start<br />with a <span className="serif-accent">conversation.</span></h2><Link to="/contact" className="round-cta" aria-label="Let’s talk about your project"><FiArrowUpRight /></Link></div><div className="banner-bottom"><p>Let’s make your next idea a reality.</p><Link className="text-link" to="/contact">Start a conversation <FiArrowUpRight /></Link></div><span className="banner-decoration" aria-hidden="true">✳</span></Reveal></section>;
