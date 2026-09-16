import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [["Home", "/"], ["About", "/about"], ["Projects", "/projects"], ["Journal", "/blog"], ["Contact", "/contact"]];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 681px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header} onBlur={event => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }}>
      <div className="nav-shell">
        <Link to="/" className="brand" aria-label="Shek Rasel home" onClick={() => setOpen(false)}>rasel<span className="brand-dot">.</span><span className="brand-caption">SOFTWARE ENGINEER</span></Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([name, path]) => <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => isActive || (path === "/projects" && location.pathname.startsWith("/project/")) ? "nav-link active" : "nav-link"}>{name}</NavLink>)}
        </nav>
        <Link className="button button-dark nav-cta" to="/contact">Let’s talk <FiArrowUpRight /></Link>
        <button ref={toggle} className="menu-toggle icon-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      </div>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav">{links.map(([name, path], index) => <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)}><span className="mono">0{index + 1}</span>{name}<FiArrowUpRight /></NavLink>)}</nav>}
    </header>
  );
};
