import type { IRoutes } from "src/interfaces/interface";
import { MainLayout } from "src/layouts/main.layout";
import { AboutMe } from "src/pages/about.me";
import { Blog } from "src/pages/Blog";
import { Contact } from "src/pages/Contact";
import { Home } from "src/pages/Home";
import { Project } from "src/pages/Project";
import { ProjectDetails } from "src/pages/project.details";
export const routes: IRoutes[] = [
  {
    path: "/",
    name: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        name: "home",
        element: <Home />,
      },
      {
        path: "/about me",
        name: "about me",
        element: <AboutMe />,
      },
      {
        path: "/projects",
        name: "project",
        element: <Project />,
      },
      {
        path: "/contact",
        name: "contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        name: "blog",
        element: <Blog />,
      },
      {
        path: "/project/:slug",
        name: "projectDeatails",
        element: <ProjectDetails />,
      },
    ],
  },
];
