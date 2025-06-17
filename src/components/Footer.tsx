import type { FC, JSX } from "react";
import { FaFacebook } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { LuLinkedin } from "react-icons/lu";

export const Footer: FC = (): JSX.Element => {
  return (
    <div className="flex justify-between p-4 lg:p-6 bg-black rounded-md text-gray w-full">
      <p>Copyright © 2025 - All right reserved by SRPort</p>
      <div className="flex gap-4 text-white">
        <FaFacebook size={30} />
        <LuLinkedin size={30} />
        <GrGithub size={30} />
      </div>
    </div>
  );
};
