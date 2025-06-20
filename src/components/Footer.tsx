import type { FC, JSX } from "react";
import { FaFacebook } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { LuLinkedin } from "react-icons/lu";

export const Footer: FC = (): JSX.Element => {
  return (
    <div className="flex justify-between p-4 lg:p-6 bg-black rounded-md text-gray w-full">
      <p>Copyright © 2025 - All right reserved by Shek Rasel</p>
      <div className="flex gap-4 text-white">
        <a href="https://web.facebook.com/md.rasel.970600" target="blank">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.linkedin.com/in/shek-rasel/" target="blank">
          {" "}
          <LuLinkedin size={30} />
        </a>
        <a href="https://github.com/ShekRasel" target="blank">
          {" "}
          <GrGithub size={30} />
        </a>
      </div>
    </div>
  );
};
