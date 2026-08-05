import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { getViewBooks } from "../lib/views";
import { AvailablePill } from "../components/AvailablePill";

export default function Books() {
  interface Book {
    id: string;
    cover_url: string;
    title: string;
    isbn: string;
    authors: string[];
    categories: string[];
    total_copies: number;
    available_copies: number;
  }

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function loadBooks() {
      const books = await getViewBooks();
      setBooks(books);
    }

    loadBooks();
  }, []);

  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-center w-full">
        <header className="flex flex-row gap-2">
          <SearchBar placeholder="Introduce un libro..." button={true} />
        </header>

        <main>
          <table className="border-2 border-gray-300 text-left rounded-lg">
            <thead className="text-left bg-gray-300/80 font-bold">
              <tr className="border text-left">
                <th className="px-4 py-2">Cover</th>
                <th className="px-4 py-2">Titulo</th>
                <th className="px-4 py-2">ISBN</th>
                <th className="px-4 py-2">Autor</th>
                <th className="px-4 py-2">Categoria</th>
                <th className="px-4 py-2">Cantidad</th>
                <th className="px-4 py-2">Disponibilidad</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book: Book) => {
                return (
                  <tr key={book.id} className="border-b-2 border-gray-300">
                    <td className="px-4 py-2">
                      <img
                        src={book.cover_url}
                        alt=""
                        className="h-20 aspect-53.33/80"
                      />
                    </td>
                    <td className="px-4 py-2">{book.title}</td>
                    <td className="px-4 py-2">{book.isbn}</td>
                    <td className="px-4 py-2">{book.authors}</td>
                    <td className="px-4 py-2">{book.categories}</td>
                    <td className="px-4 py-2">{book.total_copies}</td>
                    <td className="px-4 py-2">
                      <AvailablePill
                        quantity={book.available_copies}
                        className="px-4 py-2 "
                      />
                    </td>
                    <td className="px-4 py-2">accion</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </section>
    </>
  );
}
