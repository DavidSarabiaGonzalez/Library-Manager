import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
  to: string;
  icon: ReactNode;
  text: string;
}

export const NavigationLink = ({ to, icon, text }: NavigationLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? "text-blue-800 bg-blue-300/50 hover:scale-105 hover:bg-blue-300/80 hover:transition" : "text-black hover:bg-gray-300/70   hover:scale-105 hover:transition"} flex items-center gap-2 px-4 py-2 my-2 rounded-md lg:mx-2`
      }
    >
      {({ isActive }) => (
        <div className="justify-center items-center flex gap-2">
          <picture className={isActive ? "text-blue-800" : "text-gray-700"}>
            {icon}
          </picture>

          <h4 className="font-semibold text-sm lg:text-lg">{text}</h4>
        </div>
      )}
    </NavLink>
  );
};
