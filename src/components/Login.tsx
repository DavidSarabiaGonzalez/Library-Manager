import { useEffect, useState } from "react";
import { type Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState<Session | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();
  }, [session]);

  const signInWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (!error) {
      navigate(0);
    }
  };

  const signUpWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (!error) {
      navigate(0);
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (!error) {
      navigate(0);
    }
  };

  return (
    <div>
      {session === null ? (
        <div>
          <div>
            <button
              onClick={async () => {
                const { data, error } = await supabase.auth.getSession();
                console.log(data, error);
              }}
            >
              Comprobar inicio de sesion
            </button>

            <h2>Crear cuenta</h2>
            <form onSubmit={signUpWithEmail}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit">Crear Cuenta</button>
            </form>
          </div>

          <div>
            <h2>Iniciar Sesion</h2>
            <form onSubmit={signInWithEmail}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit">Iniciar Sesion</button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h1>Sesion Iniciada</h1>
          <button type="button" onClick={signOut}>
            Cerrar Sesion
          </button>
        </div>
      )}
    </div>
  );
}
