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
                <th>Cover</th>
                <th>Titulo</th>
                <th>ISBN</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>Cantidad</th>
                <th>Disponibilidad</th>
                <th>Acciones</th>
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
