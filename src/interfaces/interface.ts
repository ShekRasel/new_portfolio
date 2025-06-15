import type { ReactNode } from "react";

export interface IRoutes {
  path: string;
  name: string;
  element: ReactNode | null;
  children?: IRoutes[];
}
