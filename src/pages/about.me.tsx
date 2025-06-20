import { type FC, type JSX } from "react";
import Lottie from "react-lottie";
import { PrimaryButton } from "src/components/buttons/primary.button";
import animationData from "src/lottiesAnimation/about.json";
import { Assets } from "src/utilities/assets";

export const AboutMe: FC = (): JSX.Element => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col lg:flex-row rounded-md items-center gap-10 lg:gap-20">
      <div className="lg:w-1/2">
        <Lottie options={defaultOptions} width={"80%"} />
      </div>
      <div className="lg:w-1/2 text-gray space-y-5">
        <h1 className="text-2xl lg:text-3xl font-semibold">About Me</h1>
        <p className="text-justify">
          My name is Shek Rasel. I am a Web Developer focused on MERN Stack but
          still exploring other technology frameworks which catch my interest,
          and I am very passionate and dedicated to my work. I love creating
          pages where I can make enjoyable interactions and experiences for
          everyone.
        </p>
        <p className="text-justify">
          I like to learn and make new things. As well as I also love traveling,
          sight seeing, and reading books in my free time.
        </p>
        <a href={Assets.cv} download>
          <PrimaryButton>Get Resume</PrimaryButton>
        </a>
      </div>
    </div>
  );
};
