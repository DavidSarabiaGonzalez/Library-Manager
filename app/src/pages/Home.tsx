import { Login } from "../components/Login";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="">Aplicacion para gestion de bibliotecas</h2>
        <Login></Login>
      </div>
    </>
  );
}
