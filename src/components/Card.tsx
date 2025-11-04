import type { FC, JSX, ReactNode } from "react";
import { BiRightArrowCircle } from "react-icons/bi";

interface CardProps {
  icon: ReactNode | null;
  header: string;
  description: string;
  className?: string;
}

export const Card: FC<CardProps> = ({
  icon,
  header,
  description,
  className,
}): JSX.Element => {
  return (
    <div
      className={`${className} rounded-xl bg-black text-gray p-4 space-y-3 cursor-pointer hover:scale-105 transition-all shadow-xl`}
    >
      <div className="">
        <span className="text-pink">{icon}</span>
      </div>
      <h1 className="text-xl font-semibold">{header}</h1>
      <p className="text-justify text-sm">{description}</p>
      <div className="flex justify-end text-pink mt-5">
        <BiRightArrowCircle size={30} />
      </div>
    </div>
  );
};
