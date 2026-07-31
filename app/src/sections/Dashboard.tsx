import { useEffect, useState } from "react";
import { BookPreview } from "../components/BookPreview";
import { ChartComponent } from "../components/ChartComponent";
import InfoCard from "../components/InfoCard";
import { getViewDashboard } from "../lib/views";

export default function DashBoard() {
  interface DashboardStats {
    totalBooks: number;
    availableBooks: number;
    totalUsers: number;
    activeLoans: number;
  }

  const [stats, setStats] = useState<DashboardStats>({
    totalBooks: 0,
    availableBooks: 0,
    totalUsers: 0,
    activeLoans: 0,
  });

  useEffect(() => {
    async function load() {
      const data = await getViewDashboard();

      setStats({
        totalBooks: data.total_books,
        availableBooks: data.available_books,
        totalUsers: data.total_users,
        activeLoans: data.active_loans,
      });
    }

    load();
  }, []);

  const loansData = [
    { time: "2026-07-01", value: 12 },
    { time: "2026-07-02", value: 18 },
    { time: "2026-07-03", value: 15 },
    { time: "2026-07-04", value: 23 },
    { time: "2026-07-05", value: 20 },
    { time: "2026-07-06", value: 28 },
  ];
  console.log(stats);
  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <InfoCard
          text="Total de libros"
          quantity={String(stats.totalBooks)}
          to="/books"
        />
        <InfoCard
          text="Disponible"
          quantity={String(stats.availableBooks)}
          to="/books"
        />
        <InfoCard
          text="Prestamos activos"
          quantity={String(stats.activeLoans)}
          to="/loans"
        />
        <InfoCard
          text="Usuarios registrados"
          quantity={String(stats.totalUsers)}
          to="/users"
        />
      </section>

      <section className=" grid grid-cols-1 lg:grid-cols-5 justify-center items-center w-full h-auto gap-6">
        <article className="border border-gray-300 aspect-auto w-full h-full box-border p-4 col-span-3 rounded-md flex flex-col justify-between gap-4">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-sm font-bold sm:text-base lg:text-lg md:text-3xl">
              Prestamos evolucion
            </h2>

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

          <ChartComponent data={loansData} />
        </article>

        <article className="border border-gray-300 aspect-auto w-full h-full box-border p-4 rounded-md col-span-2 flex flex-col justify-start items-start">
          <h2 className="text-sm font-bold sm:text-bqase lg:text-lg md:text-3xl">
            Popular
          </h2>
          <div className="pt-2 flex flex-col gap-4">
            <BookPreview
              title="Aprendiento Git y GitHub"
              author={["Miguel Angel Duran"]}
              category={["Educativo"]}
              available="AVAILABLE"
            />

            <BookPreview
              title="Harry Potter"
              author={["J. K. Rowling"]}
              category={["Magico", "Sobrenatural"]}
              available="DAMAGED"
            />
          </div>
        </article>
      </section>

      <section className=" grid lg:grid-cols-5 grid-cols-1 justify-center items-center w-full gap-6">
        <article className="border border-gray-300 aspect-auto w-full h-full box-border p-4  col-span-3 rounded-md">
          <h2 className="text-sm font-bold sm:text-base lg:text-lg md:text-3xl">
            Actividad reciente
          </h2>
        </article>

        <article className="border border-gray-300 aspect-auto w-full h-full box-border p-4 rounded-md col-span-2">
          <h2 className="text-sm font-bold sm:text-base lg:text-lg md:text-3xl">
            Préstamos populares
          </h2>
        </article>
      </section>
    </>
  );
}
