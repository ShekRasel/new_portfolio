import { MainSection, Features } from "src/components/main.section";
import { AboutMe } from "./about.me";
import { Skill } from "src/components/Skill";
import { Project } from "./Project";
import { ContactBanner } from "src/components/ContactBanner";
import { Experience } from "src/components/Experience";

export const Home = () => <><MainSection /><div className="expertise-strip"><span>Thoughtful interfaces</span><span aria-hidden="true">✳</span><span>Powerful applications</span><span aria-hidden="true">✳</span><span>Meaningful experiences</span><span aria-hidden="true">✳</span><span>Built with care</span></div><Project featured /><Experience /><Features /><AboutMe compact /><Skill /><ContactBanner /></>;
