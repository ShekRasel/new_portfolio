import { useRoutes } from "react-router-dom";
import { routes } from "src/routes";

export const App = () => {
  const route = useRoutes(routes);
  return <div className="container">{route}</div>;
};
