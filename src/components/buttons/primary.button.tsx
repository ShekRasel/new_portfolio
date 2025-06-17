import { type FC, type JSX, type ReactNode } from "react";
interface ButtonProps {
  onclick?: () => void;
  className?: string;
  children: string | ReactNode;
}
export const PrimaryButton: FC<ButtonProps> = ({
  className,
  children,
}): JSX.Element => {
  return (
    <button
      className={`${className} bg-gradient-to-b from-black to-pink cursor-pointer text-white rounded-lg font-semibold px-6 py-3`}
    >
      {children}
    </button>
  );
};
