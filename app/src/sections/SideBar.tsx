import {
  BookIcon,
  OpenBookIcon,
  HomeIcon,
  LoanIcon,
  UsersIcon,
  UserIcon,
} from "../assets/icons/icons";
import { NavigationLink } from "../components/NavigationLink";

export default function SideBar() {
  return (
    <>
      <aside className="[grid-area:sidebar]   hidden sm:flex sm:flex-col gap-2 border-2 border-gray-300 z-50">
        <header className="flex flex-row justify-items-center items-center m-2">
          <BookIcon className="size-16 text-blue-500" />
          <h2 className="font-bold text-lg md:text-xl">Library Manager</h2>
        </header>

        <nav>
          <NavigationLink
            to="/"
            icon={<HomeIcon className="size-8" />}
            text="DashBoard"
          />

          <NavigationLink
            to="/books"
            icon={<OpenBookIcon className="size-8" />}
            text="Libros"
          />

          <NavigationLink
            to="/loans"
            icon={<LoanIcon className="size-8" />}
            text="Prestamos"
          />

          <NavigationLink
            to="/authors"
            icon={<UserIcon className="size-8" />}
            text="Autores"
          />

          <NavigationLink
            to="/users"
            icon={<UsersIcon className="size-8" />}
            text="Usuarios"
          />
        </nav>
      </aside>
    </>
  );
}
