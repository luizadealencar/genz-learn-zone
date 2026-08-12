import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-arena.jpg";
import { COURSE, MODULES, TOTAL_XP, DAYS } from "@/data/curriculum";
import { Gamepad2, Trophy, Upload, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UX Arena — curso de UI/UX em 21 dias de missão" },
      {
        name: "description",
        content:
          "Site da turma de UC6 (UI/UX): 84 horas de aula em tema games e e-sports, com conteúdo diário, missões gamificadas, envio de atividades e ranking de XP.",
      },
      { property: "og:title", content: "UX Arena — curso de UI/UX gamificado" },
      {
        property: "og:description",
        content:
          "21 dias de trilha, 42 missões, XP e ranking: o curso de design de interação da turma.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="arena-bg">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Arena de e-sports estilizada com telas de interface e troféu"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <p className="kicker text-primary">
            {COURSE.code} · {COURSE.hours}h · {COURSE.schedule}
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl">
            Você não vai só estudar UI/UX.
            <br />
            Você vai <span className="text-primary">jogar</span> o processo de design.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            21 dias de missão dentro do universo de games e e-sports. Cada aula tem briefing,
            prática, missão avaliada e XP. Suas entregas viram nível, conquistas e um case de
            portfólio no final.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/trilha"
              className="rounded-lg bg-primary px-6 py-3 font-display font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver a trilha completa
            </Link>
            <Link
              to="/auth"
              className="rounded-lg border border-primary px-6 py-3 font-display font-bold text-primary"
            >
              Criar meu player
            </Link>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["21", "dias de aula"],
              ["42", "missões"],
              [`${TOTAL_XP}`, "XP em jogo"],
              ["9", "níveis"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-bold text-primary">{n}</dt>
                <dd className="kicker text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold">Como a arena funciona</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Gamepad2,
              title: "Escolha seu desafio",
              text: "No dia 1 você define o produto gamer que vai projetar durante todo o curso.",
            },
            {
              icon: Users,
              title: "Aula todo dia",
              text: "Das 15h às 19h: briefing teórico, prática guiada, missão do dia e playtest.",
            },
            {
              icon: Upload,
              title: "Envie a missão",
              text: "Cada atividade tem um espaço próprio para enviar o link da sua entrega.",
            },
            {
              icon: Trophy,
              title: "Ganhe XP e suba de nível",
              text: "A professora avalia, libera o XP e você escala de Bronze até Lenda do UX.",
            },
          ].map((c) => (
            <div key={c.title} className="panel p-6">
              <c.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FASES */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-3xl font-bold">As 6 fases do curso</h2>
        <div className="mt-8 space-y-3">
          {MODULES.map((m) => (
            <Link
              key={m.id}
              to="/trilha/$dia"
              params={{ dia: String(m.days[0]) }}
              className="panel flex flex-col gap-2 p-6 transition-all hover:-translate-y-0.5 hover:glow sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="kicker w-28 shrink-0" style={{ color: m.color }}>
                dias {m.days[0]}–{m.days[m.days.length - 1]}
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg font-bold">{m.name}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{m.summary}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PRÓXIMA AULA */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="panel glow p-8">
          <p className="kicker text-primary">Comece por aqui</p>
          <h2 className="mt-2 text-2xl font-bold">Dia 01 — {DAYS[0]!.title}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{DAYS[0]!.hook}</p>
          <Link
            to="/trilha/$dia"
            params={{ dia: "1" }}
            className="mt-6 inline-block rounded-lg bg-primary px-5 py-3 font-display font-bold text-primary-foreground"
          >
            Abrir a aula do dia 1
          </Link>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        UX Arena · {COURSE.code} — {COURSE.name} · {COURSE.hours} horas
      </footer>
    </div>
  );
}
