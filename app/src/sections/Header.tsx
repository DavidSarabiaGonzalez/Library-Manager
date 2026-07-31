import { BellIcon, LoupeIcon } from "../assets/icons/Icons";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const titles: Record<string, string> = {
    "/": "Dashboard",
    "/books": "Libros",
    "/loans": "Prestamos",
    "/authors": "Autores",
    "/users": "Usuarios",
  };

  const title = titles[location.pathname] ?? "DashBoard";
  return (
    <>
      <header className="[grid-area:header] flex flex-row justify-center md:justify-around items-center border-b-2 px-8 border-gray-300 w-full h-[8vh] top-0">
        <h1 className="text-2xl font-bold md:hidden flex flex-row justify-center items-center">
          {title}
        </h1>

        <div className="hidden md:flex w-full flex-row justify-between items-center">
          <form
            role="search"
            className="flex items-center w-full max-w-sm lg:max-w-xl bg-white border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 transition box-border"
          >
            <LoupeIcon className="size-5 text-gray-400 mr-2" />

            <input
              type="search"
              placeholder="Introduce un libro, autor, usuario..."
              className="w-full outline-none bg-transparent text-sm"
            />
          </form>

          <div className="flex flex-row gap-4 justify-center items-center">
            <BellIcon className="size-8 shrink-0 text-gray-700 cursor-pointer  " />
            <img
              src="src/assets/Placeholder_Avatar.webp"
              alt=""
              className="size-12 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
}
