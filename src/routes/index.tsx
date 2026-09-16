import { Navigate } from "react-router-dom";
import type { IRoutes } from "src/interfaces/interface";
import { MainLayout } from "src/layouts/main.layout";
import { AboutMe } from "src/pages/about.me";
import { Blog } from "src/pages/Blog";
import { Contact } from "src/pages/Contact";
import { Home } from "src/pages/Home";
import { Project } from "src/pages/Project";
import { ProjectDetails } from "src/pages/project.details";
import { NotFound } from "src/pages/NotFound";

export const routes: IRoutes[] = [{
  path: "/", name: "", element: <MainLayout />, children: [
    { path: "", name: "home", element: <Home /> },
    { path: "/about", name: "about", element: <AboutMe /> },
    { path: "/about me", name: "legacyAbout", element: <Navigate to="/about" replace /> },
    { path: "/projects", name: "projects", element: <Project /> },
    { path: "/contact", name: "contact", element: <Contact /> },
    { path: "/blog", name: "blog", element: <Blog /> },
    { path: "/project/:slug", name: "projectDetails", element: <ProjectDetails /> },
    { path: "*", name: "notFound", element: <NotFound /> },
  ],
}];
