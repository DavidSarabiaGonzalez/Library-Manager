import { supabase } from "./supabase";

export async function getViewDashboard() {
  const { data, error } = await supabase
    .from("dashboard_stats")
    .select("*")
    .single();

  if (error) throw new Error("Error al contar");
  return data;
}

export async function getViewBooks() {
  const { data, error } = await supabase.from("books_list").select("*");

  if (error) throw new Error("Error al recibir los datos de los libros");
  return data;
}
