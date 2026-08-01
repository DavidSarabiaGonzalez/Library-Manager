import { LoupeIcon } from "../assets/icons/Icons";

interface searchBarProps {
  placeholder?: string;
  button?: boolean;
}

export default function SearchBar({
  placeholder = "Busqueda global...",
  button = false,
}: searchBarProps) {
  return (
    <form
      role="search"
      className="flex flex-row gap-2 w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex items-center w-full max-w-sm lg:max-w-xl bg-white border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500 transition box-border">
        <LoupeIcon className="size-5 text-gray-400 mr-2" />

        <input
          type="search"
          placeholder={placeholder}
          className="w-full outline-none bg-transparent text-sm"
        />
      </div>

      {button ? (
        <button
          type="submit"
          className=" bg-blue-400 rounded-md px-2 cursor-pointer"
        >
          Buscar
        </button>
      ) : null}
    </form>
  );
}
