import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar na UX Arena | Curso UI/UX" },
      {
        name: "description",
        content:
          "Acesse a UX Arena para ver as aulas, enviar suas atividades e acompanhar seu XP no ranking da turma.",
      },
      { property: "og:title", content: "Entrar na UX Arena" },
      {
        property: "og:description",
        content: "Área do aluno do curso de design de interação UI/UX.",
      },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [gamertag, setGamertag] = useState("");
  const [turma, setTurma] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user) void navigate({ to: "/trilha" });
  }, [user, navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
          data: { display_name: displayName, gamertag, turma },
        },
      });
      setMsg(
        error
          ? error.message
          : "Conta criada! Confirme o e-mail que enviamos para começar a jogar.",
      );
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
    }
    setBusy(false);
  }

  return (
    <div className="arena-bg min-h-[calc(100vh-61px)] px-4 py-16">
      <div className="mx-auto max-w-md">
        <p className="kicker text-primary">Área do aluno</p>
        <h1 className="mt-2 text-3xl font-bold">
          {mode === "login" ? "Entrar na arena" : "Criar meu player"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Use seu e-mail para acompanhar as aulas, enviar atividades e subir no ranking.
        </p>

        <form onSubmit={submit} className="panel mt-8 space-y-4 p-6">
          {mode === "signup" && (
            <>
              <Field
                label="Seu nome"
                value={displayName}
                onChange={setDisplayName}
                placeholder="Maria Souza"
                required
              />
              <Field
                label="Gamertag (apelido)"
                value={gamertag}
                onChange={setGamertag}
                placeholder="mariaUX"
              />
              <Field label="Turma" value={turma} onChange={setTurma} placeholder="UC6 - Manhã" />
            </>
          )}
          <Field
            label="E-mail"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="voce@email.com"
            required
          />
          <Field
            label="Senha"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="mínimo 6 caracteres"
            required
          />

          {msg && <p className="text-sm text-accent-foreground">{msg}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-primary py-3 font-display font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {busy ? "Carregando..." : mode === "login" ? "Entrar" : "Criar conta"}
          </button>

          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setMsg(null);
            }}
            className="w-full text-center text-sm text-muted-foreground hover:text-foreground"
          >
            {mode === "login"
              ? "Ainda não tenho conta — criar player"
              : "Já tenho conta — entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/trilha" className="text-primary hover:underline">
            Ver o conteúdo das aulas
          </Link>{" "}
          sem entrar.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
