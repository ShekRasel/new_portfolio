import { Fragment, type FC, type JSX } from "react";
import { Navbar } from "src/components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "src/components/Footer";
export const MainLayout: FC = (): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
