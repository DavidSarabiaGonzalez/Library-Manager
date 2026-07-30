import { BellIcon, LoupeIcon } from "../assets/icons/icons";

export default function Header() {
  return (
    <>
      <header className="[grid-area:header] flex flex-row justify-between items-center border-b-2 px-8 border-gray-300 w-full h-[8vh] top-0 box-border">
        <form
          role="search"
          className="flex items-center w-full max-w-xl bg-white border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 transition"
        >
          <LoupeIcon className="size-5 text-gray-400 mr-2" />

          <input
            type="search"
            placeholder="Introduce un libro, autor, usuario..."
            className="w-full outline-none bg-transparent text-sm"
          />
        </form>

        <div className="flex flex-row gap-4 justify-center items-center">
          <BellIcon className="size-8 text-gray-700 cursor-pointer  " />
          <img
            src="src/assets/Placeholder_Avatar.webp"
            alt=""
            className="size-12 rounded-full cursor-pointer"
          />
        </div>
      </header>
    </>
  );
}
