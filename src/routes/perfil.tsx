import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { ALL_ACTIVITIES, levelFor, TOTAL_XP } from "@/data/curriculum";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Meu perfil e progresso | UX Arena" },
      {
        name: "description",
        content:
          "Acompanhe seu XP, seu nível, suas entregas e o feedback da professora no curso de UI/UX.",
      },
      { property: "og:title", content: "Meu perfil — UX Arena" },
      { property: "og:description", content: "XP, nível, entregas e feedback do curso de UI/UX." },
    ],
  }),
  component: PerfilPage,
});

type Sub = {
  id: string;
  day_number: number;
  activity_id: string;
  activity_title: string;
  status: string;
  xp_awarded: number;
  feedback: string | null;
  link: string | null;
};

const BADGES = [
  { id: "b1", name: "First Blood", desc: "Primeira entrega aprovada", need: 1 },
  { id: "b2", name: "Combo x5", desc: "5 missões aprovadas", need: 5 },
  { id: "b3", name: "Researcher", desc: "10 missões aprovadas", need: 10 },
  { id: "b4", name: "Design System", desc: "20 missões aprovadas", need: 20 },
  { id: "b5", name: "Boss Slayer", desc: "30 missões aprovadas", need: 30 },
  { id: "b6", name: "Platinado", desc: "Todas as 42 missões aprovadas", need: 42 },
];

function PerfilPage() {
  const { user, profile, refreshProfile } = useAuth();
  const [subs, setSubs] = useState<Sub[]>([]);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [turma, setTurma] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    setName(profile?.display_name ?? "");
    setTag(profile?.gamertag ?? "");
    setTurma(profile?.turma ?? "");
  }, [profile?.id, profile?.display_name, profile?.gamertag, profile?.turma]);

  useEffect(() => {
    if (!user) return;
    void supabase
      .from("submissions")
      .select("*")
      .eq("user_id", user.id)
      .order("day_number")
      .then(({ data }) => setSubs((data as Sub[]) ?? []));
  }, [user]);

  if (!user) {
    return (
      <div className="arena-bg min-h-[calc(100vh-61px)] px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Você ainda não entrou</h1>
        <p className="mt-3 text-muted-foreground">Crie seu player para começar a pontuar.</p>
        <Link
          to="/auth"
          className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-bold text-primary-foreground"
        >
          Entrar na arena
        </Link>
      </div>
    );
  }

  const approved = subs.filter((s) => s.status === "aprovado").length;
  const lvl = levelFor(profile?.xp ?? 0);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: name, gamertag: tag, turma })
      .eq("id", user.id);
    setMsg(error ? error.message : "Perfil atualizado.");
    await refreshProfile();
  }

  return (
    <div className="arena-bg">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <p className="kicker text-primary">Player card</p>
        <h1 className="mt-2 text-4xl font-bold">{profile?.display_name ?? "Player"}</h1>

        <div className="panel mt-6 p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker text-muted-foreground">Nível atual</p>
              <p className="font-display text-3xl font-bold text-primary">{lvl.current.name}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-3xl font-bold">{profile?.xp ?? 0} XP</p>
              <p className="text-xs text-muted-foreground">de {TOTAL_XP} XP possíveis</p>
            </div>
          </div>
          <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div className="h-full rounded-full bg-primary" style={{ width: `${lvl.progress}%` }} />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {lvl.next
              ? `Faltam ${lvl.next.min - (profile?.xp ?? 0)} XP para ${lvl.next.name}`
              : "Nível máximo alcançado."}
          </p>
        </div>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold">Conquistas</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {BADGES.map((b) => {
              const got = approved >= b.need;
              return (
                <div
                  key={b.id}
                  className={`panel p-4 ${got ? "glow" : "opacity-45"}`}
                >
                  <p className="font-display font-bold">{b.name}</p>
                  <p className="text-xs text-muted-foreground">{b.desc}</p>
                  <p className="kicker mt-2 text-primary">
                    {Math.min(approved, b.need)}/{b.need}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold">
            Minhas entregas ({subs.length}/{ALL_ACTIVITIES.length})
          </h2>
          <div className="mt-4 space-y-2">
            {subs.map((s) => (
              <div
                key={s.id}
                className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-surface/60 p-4 text-sm"
              >
                <span className="kicker w-16 text-muted-foreground">Dia {s.day_number}</span>
                <span className="flex-1 font-semibold">{s.activity_title}</span>
                <span
                  className={
                    s.status === "aprovado"
                      ? "text-primary"
                      : s.status === "ajustar"
                        ? "text-destructive"
                        : "text-muted-foreground"
                  }
                >
                  {s.status === "aprovado"
                    ? `Aprovada · +${s.xp_awarded} XP`
                    : s.status === "ajustar"
                      ? "Precisa de ajustes"
                      : "Em análise"}
                </span>
                <Link
                  to="/trilha/$dia"
                  params={{ dia: String(s.day_number) }}
                  className="kicker text-primary"
                >
                  abrir
                </Link>
                {s.feedback && (
                  <p className="w-full text-xs text-muted-foreground">Feedback: {s.feedback}</p>
                )}
              </div>
            ))}
            {subs.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Nenhuma entrega ainda. Comece pelo{" "}
                <Link to="/trilha/$dia" params={{ dia: "1" }} className="text-primary">
                  Dia 01
                </Link>
                .
              </p>
            )}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold">Editar player</h2>
          <form onSubmit={save} className="panel mt-4 space-y-3 p-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <input
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Gamertag"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <input
              value={turma}
              onChange={(e) => setTurma(e.target.value)}
              placeholder="Turma"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
              Salvar
            </button>
            {msg && <span className="ml-3 text-xs text-muted-foreground">{msg}</span>}
          </form>
        </section>
      </div>
    </div>
  );
}
