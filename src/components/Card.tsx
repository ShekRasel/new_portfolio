import type { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Card = ({ icon, header, description, className = "", number }: { icon: ReactNode; header: string; description: string; className?: string; number?: string }) => <article className={"service-card " + className}>
  <div className="service-top"><span className="service-icon">{icon}</span><span className="mono">/{number}</span></div><h3>{header}</h3><p>{description}</p><Link className="text-link" to="/contact">Let’s build something <FiArrowUpRight /></Link>
</article>;
