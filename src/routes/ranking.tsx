import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { levelFor, TOTAL_XP } from "@/data/curriculum";
import { useAuth } from "@/lib/auth";
import { Crown, Medal } from "lucide-react";

export const Route = createFileRoute("/ranking")({
  head: () => ({
    meta: [
      { title: "Ranking da turma | UX Arena" },
      {
        name: "description",
        content:
          "Placar de XP da turma de UI/UX: veja os níveis, as conquistas e quem está liderando a arena.",
      },
      { property: "og:title", content: "Ranking da turma — UX Arena" },
      { property: "og:description", content: "Placar de XP, níveis e conquistas da turma." },
    ],
  }),
  component: RankingPage,
});

type Row = { id: string; display_name: string; gamertag: string | null; turma: string | null; xp: number };

function RankingPage() {
  const { user } = useAuth();
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    void supabase
      .from("profiles")
      .select("id,display_name,gamertag,turma,xp")
      .order("xp", { ascending: false })
      .then(({ data }) => setRows((data as Row[]) ?? []));
  }, [user]);

  return (
    <div className="arena-bg grid-lines min-h-[calc(100vh-61px)]">
      <div className="mx-auto max-w-3xl px-4 py-14">
        <p className="kicker text-primary">Leaderboard</p>
        <h1 className="mt-2 text-4xl font-bold">Ranking da arena</h1>
        <p className="mt-3 text-muted-foreground">
          XP só entra quando a missão é aprovada. Máximo possível no curso: {TOTAL_XP} XP.
        </p>

        {!user && (
          <p className="panel mt-8 p-5 text-sm text-muted-foreground">
            Entre com sua conta para ver o placar completo da turma.
          </p>
        )}

        <div className="mt-8 space-y-3">
          {rows?.map((r, i) => {
            const lvl = levelFor(r.xp);
            const isMe = r.id === user?.id;
            return (
              <div
                key={r.id}
                className={`panel flex items-center gap-4 p-4 ${isMe ? "glow" : ""}`}
              >
                <span className="w-10 shrink-0 text-center font-display text-xl font-bold">
                  {i === 0 ? (
                    <Crown className="mx-auto h-6 w-6 text-gold" />
                  ) : i === 1 || i === 2 ? (
                    <Medal className="mx-auto h-5 w-5 text-cyan" />
                  ) : (
                    i + 1
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">
                    {r.gamertag ? `${r.gamertag}` : r.display_name}
                    {isMe && <span className="kicker ml-2 text-primary">você</span>}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {r.display_name}
                    {r.turma ? ` · ${r.turma}` : ""} · {lvl.current.name}
                  </p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${lvl.progress}%` }}
                    />
                  </div>
                </div>
                <span className="font-display text-lg font-bold text-primary">{r.xp} XP</span>
              </div>
            );
          })}
          {rows?.length === 0 && (
            <p className="text-sm text-muted-foreground">Ninguém pontuou ainda. Seja o primeiro.</p>
          )}
        </div>
      </div>
    </div>
  );
}
