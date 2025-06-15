import type { IRoutes } from "src/interfaces/interface";
import { MainLayout } from "src/layouts/main.layout";
import { Home } from "src/pages/Home";
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
    ],
  },
];
