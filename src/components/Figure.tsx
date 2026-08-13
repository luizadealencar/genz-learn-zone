import type { ReactNode } from "react";

// Registro de figuras da trilha.
// Para adicionar uma figura nova: crie a entrada aqui com um id
// e referencie esse id no bloco de theory do dia, em curriculum.ts:
//   { heading: "...", points: [...], figure: "meu-id" }

const T = {
  label: { fontSize: 13, fontWeight: 600, fill: "var(--foreground)" } as const,
  small: { fontSize: 11.5, fill: "var(--muted-foreground)" } as const,
  cap: { fontSize: 11.5, fill: "var(--muted-foreground)" } as const,
};

const FIGURES: Record<string, { title: string; svg: ReactNode }> = {
  "ux-vs-ui": {
    title: "UX é a jornada inteira; UI é a camada visível de uma etapa",
    svg: (
      <svg viewBox="0 0 680 400" className="w-full" role="img"
        aria-label="UX abrange descoberta, cadastro, uso, suporte e desinstalação. UI é a camada visível dentro da etapa de uso.">
        <rect x="20" y="24" width="640" height="176" rx="16"
          fill="var(--surface)" stroke="var(--violet)" strokeWidth="1" opacity="0.95" />
        <text x="40" y="52" style={{ ...T.label, fill: "var(--violet)" }}>UX</text>
        <text x="72" y="52" style={T.small}>tudo que a pessoa sente, do primeiro contato ao fim</text>

        {[
          ["Descoberta", 40],
          ["Cadastro", 164],
          ["Uso", 288],
          ["Suporte", 412],
          ["Desinstalar", 536],
        ].map(([label, x], i) => (
          <g key={label as string}>
            <rect x={x as number} y="78" width="104" height="52" rx="8"
              fill={i === 2 ? "var(--surface-2)" : "transparent"}
              stroke={i === 2 ? "var(--mint)" : "var(--border)"}
              strokeWidth={i === 2 ? 1.5 : 1} />
            <text x={(x as number) + 52} y="109" textAnchor="middle"
              style={i === 2 ? { ...T.label, fill: "var(--mint)" } : T.small}>
              {label as string}
            </text>
          </g>
        ))}

        <text x="340" y="166" textAnchor="middle" style={T.small}>
          a jornada continua mesmo quando ninguém está olhando a tela
        </text>

        <path d="M340 130 L340 244" stroke="var(--mint)" strokeWidth="1"
          strokeDasharray="4 4" fill="none" />

        <rect x="180" y="252" width="320" height="96" rx="12"
          fill="var(--surface-2)" stroke="var(--mint)" strokeWidth="1" />
        <text x="340" y="284" textAnchor="middle" style={{ ...T.label, fill: "var(--mint)" }}>UI</text>
        <text x="340" y="306" textAnchor="middle" style={T.small}>telas, botões, cores, tipografia, ícones</text>
        <text x="340" y="326" textAnchor="middle" style={T.small}>a camada visível de uma etapa só</text>

        <text x="340" y="376" textAnchor="middle" style={T.cap}>
          arte linda + tutorial confuso = boa UI, péssima UX
        </text>
      </svg>
    ),
  },

  "cinco-pilares": {
    title: "Os 5 pilares: do abstrato ao concreto",
    svg: (
      <svg viewBox="0 0 680 360" className="w-full" role="img"
        aria-label="Cinco camadas empilhadas: estratégia, escopo, estrutura, esqueleto e superfície, do mais abstrato ao mais concreto.">
        {[
          ["Superfície", "cores, tipos, imagens, identidade", "var(--mint)", 24],
          ["Esqueleto", "onde cada elemento fica na tela", "var(--cyan)", 84],
          ["Estrutura", "como o conteúdo se organiza e navega", "var(--lime)", 144],
          ["Escopo", "o que entra e o que fica de fora", "var(--gold)", 204],
          ["Estratégia", "que problema resolve e para quem", "var(--violet)", 264],
        ].map(([name, desc, color, y]) => (
          <g key={name as string}>
            <rect x="150" y={y as number} width="400" height="48" rx="8"
              fill="var(--surface)" stroke={color as string} strokeWidth="1" />
            <text x="172" y={(y as number) + 22} style={{ ...T.label, fill: color as string }}>
              {name as string}
            </text>
            <text x="172" y={(y as number) + 39} style={T.small}>{desc as string}</text>
          </g>
        ))}

        <path d="M92 300 L92 40" stroke="var(--muted-foreground)" strokeWidth="1"
          fill="none" markerEnd="url(#pilarArrow)" />
        <defs>
          <marker id="pilarArrow" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="var(--muted-foreground)"
              strokeWidth="1.5" strokeLinecap="round" />
          </marker>
        </defs>
        <text x="80" y="316" textAnchor="middle" style={T.small}>abstrato</text>
        <text x="80" y="34" textAnchor="middle" style={T.small}>concreto</text>

        <text x="340" y="340" textAnchor="middle" style={T.cap}>
          erro clássico: começar pela superfície antes de definir a estratégia
        </text>
      </svg>
    ),
  },
};

export function Figure({ id }: { id?: string | undefined }) {
  if (!id) return null;
  const fig = FIGURES[id];
  if (!fig) return null;

  return (
    <figure className="mt-5 rounded-xl border border-border bg-background/40 p-4">
      {fig.svg}
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
        {fig.title}
      </figcaption>
    </figure>
  );
}

export const FIGURE_IDS = Object.keys(FIGURES);
