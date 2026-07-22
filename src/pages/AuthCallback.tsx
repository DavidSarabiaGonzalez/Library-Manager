import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function AuthCallback() {
  useEffect(() => {
    async function handleAuth() {
      const { data, error } = await supabase.auth.exchangeCodeForSession(
        window.location.href,
      );

      console.log(data);
      console.log(error);
    }

    handleAuth();
  }, []);

  return <h1>Iniciando sesión...</h1>;
}
