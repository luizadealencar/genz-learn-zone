import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { COURSE, DAYS, MODULES, TOTAL_XP } from "@/data/curriculum";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";
import { Lock, CheckCircle2, Clock } from "lucide-react";

export const Route = createFileRoute("/trilha/")({
  head: () => ({
    meta: [
      { title: "Trilha de 21 dias | UX Arena — UI/UX" },
      {
        name: "description",
        content:
          "Conteúdo das 84 horas de UI/UX divididas em 21 dias de aula: fundamentos de UX, pesquisa, wireframes, UI design, acessibilidade e protótipo final.",
      },
      { property: "og:title", content: "Trilha de 21 dias de UI/UX" },
      {
        property: "og:description",
        content: "Aulas, missões e XP: a jornada completa do curso de design de interação.",
      },
    ],
  }),
  component: TrilhaPage,
});

type Sub = { activity_id: string; status: string };

function TrilhaPage() {
  const { user } = useAuth();
  const [subs, setSubs] = useState<Sub[]>([]);

  useEffect(() => {
    if (!user) return;
    void supabase
      .from("submissions")
      .select("activity_id,status")
      .eq("user_id", user.id)
      .then(({ data }) => setSubs((data as Sub[]) ?? []));
  }, [user]);

  return (
    <div className="arena-bg">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="kicker text-primary">{COURSE.code} · {COURSE.hours} horas</p>
        <h1 className="mt-2 text-4xl font-bold">A trilha completa</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          21 dias de missão, {COURSE.schedule}. Cada dia tem briefing teórico, prática guiada,
          missão avaliada e playtest. Total disponível: {TOTAL_XP} XP.
        </p>

        <div className="mt-12 space-y-14">
          {MODULES.map((mod) => (
            <section key={mod.id}>
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="text-2xl font-bold" style={{ color: mod.color }}>
                  {mod.name}
                </h2>
                <span className="kicker text-muted-foreground">
                  dias {mod.days[0]}–{mod.days[mod.days.length - 1]}
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{mod.summary}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {DAYS.filter((d) => d.module === mod.id).map((day) => {
                  const done = day.activities.filter((a) =>
                    subs.some((s) => s.activity_id === a.id && s.status === "aprovado"),
                  ).length;
                  const sent = day.activities.filter((a) =>
                    subs.some((s) => s.activity_id === a.id),
                  ).length;
                  const xp = day.activities.reduce((s, a) => s + a.xp, 0);
                  return (
                    <Link
                      key={day.number}
                      to="/trilha/$dia"
                      params={{ dia: String(day.number) }}
                      className="panel group flex flex-col p-5 transition-all hover:-translate-y-1 hover:glow"
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="kicker rounded-md px-2 py-1"
                          style={{ background: "var(--surface-2)", color: mod.color }}
                        >
                          Dia {String(day.number).padStart(2, "0")}
                        </span>
                        <span className="kicker text-muted-foreground">{xp} XP</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-bold leading-tight group-hover:text-primary">
                        {day.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{day.hook}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        {!user ? (
                          <>
                            <Lock className="h-3.5 w-3.5" /> entre para enviar
                          </>
                        ) : done === day.activities.length ? (
                          <>
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> missões
                            concluídas
                          </>
                        ) : (
                          <>
                            <Clock className="h-3.5 w-3.5" /> {sent}/{day.activities.length}{" "}
                            enviadas
                          </>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
