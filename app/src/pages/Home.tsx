import Header from "../sections/Header";
import SideBar from "../sections/SideBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="zones-container min-w-full min-h-screen bg-gray-200 ">
        <Header />
        <SideBar />
        <main className="[grid-area:main] m-4 flex flex-col gap-6 justify-start items-center">
          <Outlet />
        </main>
      </div>
    </>
  );
}
