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
          <table className="border">
            <thead className="border">
              <tr className="border">
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
                  <tr key={book.id}>
                    <td>
                      <img src={book.cover_url} alt="" className="h-20" />
                    </td>
                    <td>{book.title}</td>
                    <td>{book.isbn}</td>
                    <td>{book.authors}</td>
                    <td>{book.categories}</td>
                    <td>{book.total_copies}</td>
                    <td>
                      <AvailablePill quantity={book.available_copies} />
                    </td>
                    <td>accion</td>
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
