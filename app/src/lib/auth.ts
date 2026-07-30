import { supabase } from "./supabase";

export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (!error) {
    return true;
  }

  return false;
}
