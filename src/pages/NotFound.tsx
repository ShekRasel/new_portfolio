import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export const NotFound = ({ project = false }: { project?: boolean }) => <section className="page-width not-found"><span className="error-number serif-accent">404</span><div className="eyebrow">A SMALL DETOUR</div><h1>{project ? "That project isn’t here." : "This page took a different path."}</h1><p>Let’s get you back to something worth exploring.</p><Link className="button button-dark" to={project ? "/projects" : "/"}>{project ? "Explore projects" : "Back to home"}<FiArrowUpRight /></Link></section>;
