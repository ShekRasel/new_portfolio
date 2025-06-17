import type { FC, JSX } from "react";
import { MainSection } from "src/components/main.section";
import { AboutMe } from "./about.me";
import { Skill } from "src/components/Skill";
import { Project } from "./Project";
import { Contact } from "./Contact";

export const Home: FC = (): JSX.Element => {
  return (
    <div className="space-y-15 lg:space-y-20">
      <MainSection />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};
