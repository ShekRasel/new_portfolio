import { type FC, type JSX, type ReactNode } from "react";
interface ButtonProps {
  onclick?: () => void;
  className?: string;
  children: string | ReactNode;
}
export const SecondaryButton: FC<ButtonProps> = ({
  className,
  children,
  onclick,
}): JSX.Element => {
  return (
    <button
      className={`${className} bg-gradient-to-b from-black to-pink cursor-pointer text-white rounded-sm font-semibold px-6 py-3 border border-white`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};
