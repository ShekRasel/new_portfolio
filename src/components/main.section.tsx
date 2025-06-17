import { FaBars, FaFacebook, FaReact } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { LuLinkedin } from "react-icons/lu";
import { SecondaryButton } from "./buttons/secondary.button";
import { PrimaryButton } from "./buttons/primary.button";
import animationData from "src/lottiesAnimation/work-hard.json";
import Lottie from "react-lottie";
import { Card } from "./Card";
import { MdAndroid } from "react-icons/md";

export const MainSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="space-y-16">
      <div className="relative">
        <div className="bg-blue p-6 lg:p-0 lg:px-20 lg:py-20 flex flex-col lg:flex-row rounded-md text-white items-center gap-10 lg:gap-20">
          <div className="lg:w-1/2 space-y-8 z-20">
            <div className="flex gap-8">
              <FaFacebook size={30} />
              <LuLinkedin size={30} />
              <GrGithub size={30} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Hello, I'M <span className="text-pink">Rasel</span>
              </h1>
              <h1 className="text-3xl font-semibold">React Developer</h1>
            </div>
            <p>
              I am passionate about coding and making awesome interactive
              layouts for web applications.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <SecondaryButton>Get Resume</SecondaryButton>
              <PrimaryButton>Contact Me</PrimaryButton>
            </div>
          </div>

          {/* lottie animation */}
          <div className="lg:w-1/2 z-20">
            <Lottie options={defaultOptions} width={"80%"} />
          </div>
        </div>

        {/*curve div*/}
        <div className="custom-shape-divider-bottom rounded-md">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
        82.39-16.72,168.19-17.73,250.45-.39,
        C823.78,31,906.67,72,985.66,92.83,
        c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35,
        A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <Features />
    </div>
  );
};

import { type FC, type JSX } from "react";

export const Features: FC = (): JSX.Element => {
  const header1 = "Web Development";
  const header2 = "UX & UI Design";
  const header3 = "Front-End Development";
  const description1 =
    "To create and maintain a website is my work. I'm also responsible for the site's technical aspects, such as its performance and capacity.";
  const description2 =
    "I will make your website good user experience.By best UI UX design I create the user interface for an app, website, or other interactive media";
  const description3 =
    "I’ll handle everything from to front-end development process until it is time to make your project live.";
  const icon1 = <FaReact size={30} />;
  const icon2 = <FaBars size={30} />;
  const icon3 = <MdAndroid size={30} />;
  return (
    <div className="space-y-3 lg:space-y-6">
      <h1 className="text-center text-xl  lg:text-2xl font-semibold text-pink">
        Freatures
      </h1>
      <div className="w-full h-0.5 bg-white" />

      <h1 className="text-gray text-center text-2xl lg:text-3xl font-semibold">
        What I do
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card header={header1} description={description1} icon={icon1} />
        <Card header={header2} description={description2} icon={icon2} />
        <Card header={header3} description={description3} icon={icon3} />
      </div>
    </div>
  );
};
