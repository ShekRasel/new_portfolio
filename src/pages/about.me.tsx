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
          I’m Shek Rasel, a passionate and dedicated Full-Stack Web Developer
          specializing in the MERN Stack, while continuously exploring other
          technologies that spark my interest. I thrive on crafting engaging
          digital experiences and enjoy creating interactive UIs that not only
          function well but also delight users. With hands-on experience
          delivering 20+ responsive, SEO-optimized applications, I bring a solid
          command of both frontend and backend development. I’m proficient in
          modern tools like React.js, Next.js, Tailwind CSS, Zustand, and
          animation libraries such as Framer Motion and GSAP. On the backend, I
          work with Node.js, Express.js, NestJS, and Java Spring Boot, and I’m
          confident working with databases like MongoDB, PostgreSQL, MySQL, and
          Oracle DB. I follow clean code practices, apply TypeScript and OOP
          principles, and structure backends using layered architecture (routes
          → controllers → services → models). I’m comfortable with the full
          development cycle—from planning with Figma, API testing in Postman,
          and managing authentication with Clerk, to deploying via Vercel and
          integrating CMS like Sanity.
        </p>
        <p className="text-justify">
          Outside of coding, I love learning, building new things, traveling,
          sightseeing, and reading books in my free time. I’m always curious,
          always improving, and always creating.
        </p>
        <a href={Assets.cv} download>
          <PrimaryButton>Get Resume</PrimaryButton>
        </a>
      </div>
    </div>
  );
};
