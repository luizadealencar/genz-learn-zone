import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DAYS, getDay, getModule } from "@/data/curriculum";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, ArrowRight, Target, BookOpen, Trophy, Link2 } from "lucide-react";
import { Figure } from "@/components/Figure";
import { getResources } from "@/data/resources";
import { getPeople } from "@/data/people";

export const Route = createFileRoute("/trilha/$dia")({
  loader: ({ params }) => {
    const day = getDay(Number(params.dia));
    if (!day) throw notFound();
    return { day };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Aula não encontrada | UX Arena" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `Dia ${loaderData.day.number}: ${loaderData.day.title} | UX Arena`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.day.hook },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.day.hook },
      ],
    };
  },
  component: DayPage,
});

type Submission = {
  id: string;
  activity_id: string;
  link: string | null;
  notes: string | null;
  status: "enviado" | "aprovado" | "ajustar";
  xp_awarded: number;
  feedback: string | null;
};

function DayPage() {
  const { day } = Route.useLoaderData();
  const mod = getModule(day.module);
  const { user } = useAuth();
  const [subs, setSubs] = useState<Submission[]>([]);

  const load = () => {
    if (!user) return;
    void supabase
      .from("submissions")
      .select("*")
      .eq("user_id", user.id)
      .eq("day_number", day.number)
      .then(({ data }) => setSubs((data as Submission[]) ?? []));
  };
  useEffect(load, [user, day.number]);

  const prev = DAYS.find((d) => d.number === day.number - 1);
  const next = DAYS.find((d) => d.number === day.number + 1);

  return (
    <div className="arena-bg">
      <article className="mx-auto max-w-4xl px-4 py-12">
        <Link to="/trilha" className="kicker text-muted-foreground hover:text-primary">
          ← voltar para a trilha
        </Link>

        <header className="mt-6">
          <p className="kicker" style={{ color: mod?.color }}>
            Dia {String(day.number).padStart(2, "0")} · {mod?.name}
          </p>
          <h1 className="mt-2 text-4xl font-bold leading-tight">{day.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{day.hook}</p>
        </header>

        <section className="panel mt-8 p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold">
            <Target className="h-4 w-4 text-primary" /> Objetivos da aula
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {day.objectives.map((o) => (
              <li key={o} className="flex gap-2">
                <span className="text-primary">▸</span>
                {o}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="kicker text-muted-foreground">Cronograma 15h – 19h</h2>
          <div className="mt-3 space-y-2">
            {day.schedule.map((s) => (
              <div
                key={s.time}
                className="flex flex-col gap-1 rounded-lg border border-border bg-surface/60 p-4 sm:flex-row sm:items-center sm:gap-5"
              >
                <span className="kicker w-32 shrink-0 text-primary">{s.time}</span>
                <span className="w-36 shrink-0 text-sm font-semibold">{s.label}</span>
                <span className="text-sm text-muted-foreground">{s.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
            <BookOpen className="h-5 w-5 text-primary" /> Conteúdo da aula
          </h2>
          <div className="mt-4 space-y-6">
            {day.theory.map((block) => (
              <div key={block.heading} className="panel p-6">
                <h3 className="font-display text-lg font-bold text-accent-foreground">
                  {block.heading}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {block.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Figure id={block.figure} />
                {getPeople(block.people).map((person) => (
                  <div key={person.name} className="mt-4 rounded-lg border-l-2 border-primary bg-background/40 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      De onde vem essa ideia
                    </p>
                    <p className="mt-1 font-display text-sm font-bold text-primary">
                      {person.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {person.lived}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {person.what}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {person.why}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {getResources(day.number).length > 0 && (
          <section className="mt-12">
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
              <Link2 className="h-5 w-5 text-primary" /> Arsenal do dia
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {getResources(day.number).map((r) => (
                <a
                  key={r.url + r.label}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel block p-4 transition-colors hover:border-primary"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold text-primary">
                      {r.label}
                    </span>
                    <span className="flex shrink-0 items-center gap-1">
                      {r.pt && (
                        <span className="rounded border border-primary/60 px-1.5 py-0.5 text-[10px] font-bold uppercase text-primary">
                          PT
                        </span>
                      )}
                      <span className="rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {r.kind}
                      </span>
                    </span>
                  </div>
                  {r.note && (
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {r.note}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12">
          <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
            <Trophy className="h-5 w-5 text-primary" /> Missões do dia
          </h2>
          <div className="mt-4 space-y-5">
            {day.activities.map((a) => (
              <ActivityCard
                key={a.id}
                dayNumber={day.number}
                activity={a}
                submission={subs.find((s) => s.activity_id === a.id) ?? null}
                onSaved={load}
              />
            ))}
          </div>
        </section>

        <nav className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-6">
          {prev ? (
            <Link
              to="/trilha/$dia"
              params={{ dia: String(prev.number) }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Dia {prev.number}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to="/trilha/$dia"
              params={{ dia: String(next.number) }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              Dia {next.number} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
}

const STATUS_LABEL: Record<string, string> = {
  enviado: "Em análise",
  aprovado: "Aprovada",
  ajustar: "Precisa de ajustes",
};

function ActivityCard({
  dayNumber,
  activity,
  submission,
  onSaved,
}: {
  dayNumber: number;
  activity: { id: string; title: string; description: string; deliverable: string; xp: number };
  submission: Submission | null;
  onSaved: () => void;
}) {
  const { user } = useAuth();
  const [link, setLink] = useState(submission?.link ?? "");
  const [notes, setNotes] = useState(submission?.notes ?? "");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    setLink(submission?.link ?? "");
    setNotes(submission?.notes ?? "");
  }, [submission?.id]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.from("submissions").upsert(
      {
        user_id: user.id,
        day_number: dayNumber,
        activity_id: activity.id,
        activity_title: activity.title,
        link,
        notes,
        status: "enviado" as const,
      },
      { onConflict: "user_id,activity_id" },
    );
    setMsg(error ? error.message : "Entrega registrada! Aguarde a avaliação.");
    setBusy(false);
    onSaved();
  }

  return (
    <div className="panel p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold">{activity.title}</h3>
        <span className="kicker rounded-md bg-surface-2 px-2 py-1 text-primary">
          +{activity.xp} XP
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{activity.description}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        <strong className="text-foreground">Entrega:</strong> {activity.deliverable}
      </p>

      {submission && (
        <div className="mt-4 rounded-lg border border-border bg-surface-2 p-4 text-sm">
          <p>
            Status:{" "}
            <strong
              className={
                submission.status === "aprovado"
                  ? "text-primary"
                  : submission.status === "ajustar"
                    ? "text-destructive"
                    : "text-foreground"
              }
            >
              {STATUS_LABEL[submission.status]}
            </strong>
            {submission.status === "aprovado" && ` · ${submission.xp_awarded} XP conquistados`}
          </p>
          {submission.feedback && (
            <p className="mt-2 text-muted-foreground">
              <strong className="text-foreground">Feedback:</strong> {submission.feedback}
            </p>
          )}
        </div>
      )}

      {user ? (
        <form onSubmit={send} className="mt-4 space-y-3">
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Link da entrega (Figma, Drive, PDF...)"
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Comentário para a professora (opcional)"
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <div className="flex items-center gap-3">
            <button
              disabled={busy}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-60"
            >
              {submission ? "Reenviar entrega" : "Enviar entrega"}
            </button>
            {msg && <span className="text-xs text-muted-foreground">{msg}</span>}
          </div>
        </form>
      ) : (
        <Link
          to="/auth"
          className="mt-4 inline-block rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary"
        >
          Entrar para enviar
        </Link>
      )}
    </div>
  );
}
