import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "src/components/Navbar";
import { Footer } from "src/components/Footer";
import { profile } from "src/data/profile";

export const MainLayout = () => {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const titles: Record<string, string> = { "/": profile.title, "/about": "About", "/projects": "Selected Work", "/contact": "Let’s Talk", "/blog": "Journal" };
    document.title = (titles[pathname] ?? (pathname.startsWith("/project/") ? "Project Details" : "Page Not Found")) + " — Shek Rasel";
    if (previousPath.current !== pathname) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);
  return <div className="site-wrap">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <motion.div className="scroll-progress" style={{ scaleX: reduced ? scrollYProgress : scaleX }} />
    <Navbar />
    <main id="main-content" tabIndex={-1}><motion.div key={pathname} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}><Outlet /></motion.div></main>
    <Footer />
  </div>;
};
