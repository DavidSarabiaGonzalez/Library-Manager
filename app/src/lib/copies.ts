import { supabase } from "./supabase";

export default async function getAllCopies() {
  const { data, error } = await supabase.from("copies").select("*");

  if (error) throw new Error("Error al recibir las copias de los libros");

  return data;
}
