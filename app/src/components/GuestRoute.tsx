import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Session } from "@supabase/supabase-js";

export function GuestRoute({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      setSession(data.session);
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (session) {
    return <Navigate to="/" replace />;
  }

  return children;
}
