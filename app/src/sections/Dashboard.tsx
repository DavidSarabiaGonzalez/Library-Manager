import InfoCard from "../components/InfoCard";

export default function DashBoard() {
  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <InfoCard text="Total de libros" quantity="12.4K" to="/books" />
        <InfoCard text="Disponible" quantity="8.9K" to="/books" />
        <InfoCard text="Prestamos activos" quantity="789" to="/loans" />
        <InfoCard text="Usuarios registrados" quantity="3.2K" to="/users" />
      </section>

      <section className=" grid grid-cols-5 justify-center items-center w-full h-1/2 gap-6">
        <article className="border border-gray-300 aspect-auto w-full h-full box-border p-4 col-span-3 rounded-md flex flex-col justify-between">
          <div className="flex flex-row justify-between items-center">
            <h4>Prestamos evolucion</h4>

            <select
              name="graphic"
              id="graphic"
              className="rounded-md border border-gray-300 px-2 py-1 "
            >
              <option value="loans">Préstamos</option>
              <option value="books">Libros</option>
              <option value="users">Usuarios</option>
            </select>
          </div>

          <canvas className="max-w-20"></canvas>
        </article>

        <article className="border border-gray-300 aspect-auto w-full h-full box-border p-2 rounded-md col-span-2">
          <h4>Popular</h4>
        </article>
      </section>

      <section className=" grid grid-cols-5 justify-center items-center w-full h-1/2 gap-6">
        <article className="border border-gray-300 aspect-auto w-full h-full box-border p-2  col-span-3 rounded-md">
          <h4>Prestamos evolucion</h4>
        </article>

        <article className="border border-gray-300 aspect-auto w-full h-full box-border p-2 rounded-md col-span-2">
          <h4>Popular</h4>
        </article>
      </section>
    </>
  );
}
