import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Session } from "@supabase/supabase-js";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("SESSION:", data.session);

      setSession(data.session);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
