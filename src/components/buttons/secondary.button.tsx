import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { onclick?: () => void };
export const SecondaryButton = ({ className = "", children, onclick, onClick, type = "button", ...props }: ButtonProps) => <button type={type} className={"button button-outline " + className} onClick={onClick ?? onclick} {...props}>{children}</button>;
