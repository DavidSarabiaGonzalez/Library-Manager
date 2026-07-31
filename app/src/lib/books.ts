import { supabase } from "./supabase";

export async function CountAllBooks() {
  const { count, error } = await supabase
    .from("books")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error("Error al contar todos los libros");

  return count;
}
