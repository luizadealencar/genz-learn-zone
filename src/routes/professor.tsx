import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { ALL_ACTIVITIES } from "@/data/curriculum";

export const Route = createFileRoute("/professor")({
  head: () => ({
    meta: [
      { title: "Painel do professor | UX Arena" },
      {
        name: "description",
        content: "Avalie as entregas da turma, dê feedback e libere o XP das missões de UI/UX.",
      },
      { property: "og:title", content: "Painel do professor — UX Arena" },
      { property: "og:description", content: "Correção das entregas e liberação de XP." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ProfessorPage,
});

type Sub = {
  id: string;
  user_id: string;
  day_number: number;
  activity_id: string;
  activity_title: string;
  link: string | null;
  notes: string | null;
  status: "enviado" | "aprovado" | "ajustar";
  xp_awarded: number;
  feedback: string | null;
  created_at: string;
};

function ProfessorPage() {
  const { user, isProfessor, loading } = useAuth();
  const [subs, setSubs] = useState<Sub[]>([]);
  const [names, setNames] = useState<Record<string, string>>({});
  const [filter, setFilter] = useState<"todos" | "enviado" | "aprovado" | "ajustar">("enviado");

  const load = async () => {
    const [{ data: s }, { data: p }] = await Promise.all([
      supabase.from("submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("profiles").select("id,display_name,gamertag"),
    ]);
    setSubs((s as Sub[]) ?? []);
    const map: Record<string, string> = {};
    (p ?? []).forEach((row) => {
      map[row.id] = row.gamertag ? `${row.display_name} (${row.gamertag})` : row.display_name;
    });
    setNames(map);
  };

  useEffect(() => {
    if (isProfessor) void load();
  }, [isProfessor]);

  if (loading) return <div className="p-14 text-center text-muted-foreground">Carregando...</div>;

  if (!user || !isProfessor) {
    return (
      <div className="arena-bg min-h-[calc(100vh-61px)] px-4 py-20">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-3xl font-bold">Área da professora</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Esta página é restrita a quem tem o papel de professor. Se você é a docente da turma,
            peça para adicionar seu papel de professor no banco (tabela de papéis) usando o e-mail
            da sua conta.
          </p>
        </div>
      </div>
    );
  }

  const list = subs.filter((s) => filter === "todos" || s.status === filter);

  return (
    <div className="arena-bg">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <p className="kicker text-primary">Modo mestre</p>
        <h1 className="mt-2 text-4xl font-bold">Painel do professor</h1>
        <p className="mt-3 text-muted-foreground">
          {subs.filter((s) => s.status === "enviado").length} entregas aguardando correção.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(["enviado", "aprovado", "ajustar", "todos"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md border px-3 py-1.5 text-xs ${
                filter === f
                  ? "border-primary text-primary"
                  : "border-border text-muted-foreground"
              }`}
            >
              {f === "enviado"
                ? "Aguardando"
                : f === "aprovado"
                  ? "Aprovadas"
                  : f === "ajustar"
                    ? "Ajustar"
                    : "Todas"}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {list.map((s) => (
            <Review key={s.id} sub={s} studentName={names[s.user_id] ?? "Aluno"} onDone={load} />
          ))}
          {list.length === 0 && (
            <p className="text-sm text-muted-foreground">Nada por aqui neste filtro.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Review({
  sub,
  studentName,
  onDone,
}: {
  sub: Sub;
  studentName: string;
  onDone: () => void;
}) {
  const maxXp = ALL_ACTIVITIES.find((a) => a.id === sub.activity_id)?.xp ?? 100;
  const [xp, setXp] = useState(sub.xp_awarded || maxXp);
  const [feedback, setFeedback] = useState(sub.feedback ?? "");
  const [busy, setBusy] = useState(false);

  async function decide(status: "aprovado" | "ajustar") {
    setBusy(true);
    const rpc = supabase.rpc as unknown as (
      fn: string,
      args: Record<string, unknown>,
    ) => Promise<{ error: { message: string } | null }>;
    const { error } = await rpc("grade_submission", {
      _submission_id: sub.id,
      _status: status,
      _xp: status === "aprovado" ? xp : 0,
      _feedback: feedback,
    });
    setBusy(false);
    if (error) {
      alert(`Não foi possível salvar a correção: ${error.message}`);
      return;
    }
    onDone();
  }

  return (
    <div className="panel p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="font-display font-bold">{studentName}</p>
          <p className="text-xs text-muted-foreground">
            Dia {sub.day_number} · {sub.activity_title} · máx {maxXp} XP
          </p>
        </div>
        <span className="kicker text-primary">{sub.status}</span>
      </div>

      {sub.link && (
        <a
          href={sub.link}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 inline-block break-all text-sm text-cyan underline"
        >
          {sub.link}
        </a>
      )}
      {sub.notes && <p className="mt-2 text-sm text-muted-foreground">{sub.notes}</p>}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label className="text-xs text-muted-foreground">
          XP
          <input
            type="number"
            value={xp}
            min={0}
            max={maxXp}
            onChange={(e) => setXp(Number(e.target.value))}
            className="ml-2 w-20 rounded-md border border-input bg-background px-2 py-1 text-sm"
          />
        </label>
        <input
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Feedback para o aluno"
          className="min-w-52 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        />
        <button
          disabled={busy}
          onClick={() => void decide("aprovado")}
          className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-60"
        >
          Aprovar
        </button>
        <button
          disabled={busy}
          onClick={() => void decide("ajustar")}
          className="rounded-md border border-destructive px-4 py-2 text-sm font-semibold text-destructive disabled:opacity-60"
        >
          Pedir ajuste
        </button>
      </div>
    </div>
  );
}
