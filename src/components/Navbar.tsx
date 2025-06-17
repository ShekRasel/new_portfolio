import { useRef, useState, type FC, type JSX } from "react";
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "./buttons/primary.button";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useClickOutSite } from "src/hooks/click.outside";

type NavUrl = {
  name: string;
  link: string;
};

export const Navbar: FC = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleMenuOpenClose = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navUrl: NavUrl[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Me",
      link: "/about me",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  // custom hook
  useClickOutSite(divRef, closeMenu);

  return (
    <div className="flex justify-between items-center">
      {/* mobile view */}
      <div ref={divRef} className="lg:hidden">
        <button
          className="bg-white font-bold p-2 rounded-lg cursor-pointer lg:hidden"
          onClick={handleMenuOpenClose}
        >
          <HiOutlineBars3CenterLeft size={25} />
        </button>

        {isMobileMenuOpen && (
          <div className="absolute left-0 flex flex-col bg-darkBlue text-gray top-20 rounded-lg border p-4 w-56 gap-0.5 z-50">
            {navUrl.map((url) => (
              <NavLink
                to={url.link}
                className={({ isActive }) =>
                  `cursor-pointer px-6 py-2 hover:rounded-lg hover:bg-pink hover:text-white ${
                    isActive ? "bg-violet text-white rounded-lg" : "text-gray"
                  }`
                }
                key={url.name}
                onClick={handleMenuOpenClose}
              >
                {url.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <PrimaryButton>SRPort</PrimaryButton>

      {/* desktop view */}
      <div className="gap-4 hidden lg:flex">
        {navUrl.map((url) => (
          <NavLink
            to={url.link}
            className={({ isActive }) =>
              `cursor-pointer px-6 py-3 hover:rounded-lg hover:bg-pink hover:text-white ${
                isActive ? "bg-violet text-white rounded-lg" : "text-gray"
              }`
            }
            key={url.name}
          >
            {url.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
