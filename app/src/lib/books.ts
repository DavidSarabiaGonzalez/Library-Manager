import { supabase } from "./supabase";

export async function countAllBooks() {
  const { count, error } = await supabase
    .from("books")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error("Error al contar todos los libros");

  return count;
}

export async function getAllBooks() {
  const { data, error } = await supabase.from("books").select("*");

  if (error) throw new Error("Error al seleccionar todos los libros");

  return data;
}
