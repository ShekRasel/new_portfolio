import { useRoutes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { routes } from "src/routes";

export const App = () => {
  const route = useRoutes(routes);
  return <MotionConfig reducedMotion="user">{route}</MotionConfig>;
};
