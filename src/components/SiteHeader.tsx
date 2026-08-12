import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { levelFor } from "@/data/curriculum";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/trilha", label: "Trilha" },
  { to: "/ranking", label: "Ranking" },
  { to: "/perfil", label: "Meu perfil" },
] as const;

export function SiteHeader() {
  const { user, profile, isProfessor, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const lvl = levelFor(profile?.xp ?? 0);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
            UX
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            UX <span className="text-primary">ARENA</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary bg-accent" }}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          {isProfessor && (
            <Link
              to="/professor"
              activeProps={{ className: "text-primary bg-accent" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Painel do professor
            </Link>
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          {user ? (
            <>
              <div className="hidden text-right sm:block">
                <p className="text-xs font-semibold">{profile?.display_name ?? "Player"}</p>
                <p className="kicker text-primary">
                  {lvl.current.name} · {profile?.xp ?? 0} XP
                </p>
              </div>
              <button
                onClick={() => void signOut()}
                className="rounded-md border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              to="/auth"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Entrar
            </Link>
          )}
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border px-4 py-2 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          {isProfessor && (
            <Link
              to="/professor"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-muted-foreground"
            >
              Painel do professor
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
