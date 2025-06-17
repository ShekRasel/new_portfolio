import { type FC, type JSX } from "react";
import { Navbar } from "src/components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "src/components/Footer";
export const MainLayout: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
