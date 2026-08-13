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

  "duplo-diamante": {
    title: "Duplo diamante: abrir para explorar, fechar para decidir",
    svg: (
      <svg viewBox="0 0 680 300" className="w-full" role="img"
        aria-label="Duas fases em losango: descobrir e definir o problema, depois desenvolver e entregar a solução.">
        <path d="M60 150 L200 60 L340 150 L200 240 Z" fill="var(--surface)"
          stroke="var(--cyan)" strokeWidth="1" />
        <path d="M340 150 L480 60 L620 150 L480 240 Z" fill="var(--surface)"
          stroke="var(--mint)" strokeWidth="1" />

        <text x="130" y="146" textAnchor="middle" style={{ ...T.label, fill: "var(--cyan)" }}>Descobrir</text>
        <text x="130" y="164" textAnchor="middle" style={T.small}>pesquisa, dados</text>
        <text x="272" y="146" textAnchor="middle" style={{ ...T.label, fill: "var(--cyan)" }}>Definir</text>
        <text x="272" y="164" textAnchor="middle" style={T.small}>o problema certo</text>
        <text x="410" y="146" textAnchor="middle" style={{ ...T.label, fill: "var(--mint)" }}>Desenvolver</text>
        <text x="410" y="164" textAnchor="middle" style={T.small}>ideias, protótipos</text>
        <text x="552" y="146" textAnchor="middle" style={{ ...T.label, fill: "var(--mint)" }}>Entregar</text>
        <text x="552" y="164" textAnchor="middle" style={T.small}>testar e lançar</text>

        <text x="200" y="42" textAnchor="middle" style={T.small}>problema</text>
        <text x="480" y="42" textAnchor="middle" style={T.small}>solução</text>
        <text x="340" y="276" textAnchor="middle" style={T.cap}>
          cada losango abre (muitas opções) e fecha (uma escolha)
        </text>
      </svg>
    ),
  },

  "mensagem-de-erro": {
    title: "Anatomia de um bom erro (heurística 9)",
    svg: (
      <svg viewBox="0 0 680 300" className="w-full" role="img"
        aria-label="Comparação entre uma mensagem de erro ruim e uma boa, com diagnóstico e saída.">
        <rect x="30" y="30" width="300" height="200" rx="12"
          fill="var(--surface)" stroke="var(--coral)" strokeWidth="1" />
        <text x="50" y="58" style={{ ...T.label, fill: "var(--coral)" }}>Ruim</text>
        <text x="50" y="96" style={T.small}>&quot;Erro 0x8007. Operação falhou.&quot;</text>
        <text x="50" y="140" style={T.small}>não diz o que houve</text>
        <text x="50" y="162" style={T.small}>não diz de quem é a culpa</text>
        <text x="50" y="184" style={T.small}>não oferece saída</text>

        <rect x="350" y="30" width="300" height="200" rx="12"
          fill="var(--surface)" stroke="var(--mint)" strokeWidth="1" />
        <text x="370" y="58" style={{ ...T.label, fill: "var(--mint)" }}>Bom</text>
        <text x="370" y="96" style={T.small}>&quot;Senha precisa de 8 caracteres.</text>
        <text x="370" y="114" style={T.small}>Você digitou 5.&quot;</text>
        <text x="370" y="152" style={T.small}>linguagem de gente</text>
        <text x="370" y="174" style={T.small}>diagnostica o problema</text>
        <text x="370" y="196" style={T.small}>indica a saída</text>

        <text x="340" y="270" textAnchor="middle" style={T.cap}>
          erro bom não culpa o usuário: ele explica e resolve
        </text>
      </svg>
    ),
  },

  "leis-fitts-hick": {
    title: "Fitts e Hick: tamanho, distância e número de opções",
    svg: (
      <svg viewBox="0 0 680 320" className="w-full" role="img"
        aria-label="Lei de Fitts: alvo maior e mais perto é mais rápido de acertar. Lei de Hick: mais opções, mais tempo para decidir.">
        <rect x="30" y="24" width="300" height="230" rx="12"
          fill="var(--surface)" stroke="var(--cyan)" strokeWidth="1" />
        <text x="50" y="52" style={{ ...T.label, fill: "var(--cyan)" }}>Lei de Fitts</text>
        <text x="50" y="70" style={T.small}>alvo maior e mais perto = mais rápido</text>

        <circle cx="80" cy="120" r="5" fill="var(--muted-foreground)" />
        <rect x="240" y="104" width="24" height="24" rx="4" fill="var(--coral)" opacity="0.6" />
        <path d="M92 120 L232 118" stroke="var(--coral)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
        <text x="160" y="146" textAnchor="middle" style={T.small}>longe e pequeno: lento</text>

        <circle cx="80" cy="196" r="5" fill="var(--muted-foreground)" />
        <rect x="140" y="176" width="80" height="40" rx="6" fill="var(--mint)" opacity="0.55" />
        <path d="M92 196 L132 196" stroke="var(--mint)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
        <text x="180" y="234" textAnchor="middle" style={T.small}>perto e grande: rápido</text>

        <rect x="350" y="24" width="300" height="230" rx="12"
          fill="var(--surface)" stroke="var(--gold)" strokeWidth="1" />
        <text x="370" y="52" style={{ ...T.label, fill: "var(--gold)" }}>Lei de Hick</text>
        <text x="370" y="70" style={T.small}>mais opções = mais tempo pra decidir</text>

        {[0, 1, 2].map((i) => (
          <rect key={`h1-${i}`} x={372 + i * 40} y="98" width="32" height="20" rx="4"
            fill="var(--mint)" opacity="0.5" />
        ))}
        <text x="512" y="113" style={T.small}>3 opções: decide rápido</text>

        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`h2-${i}`} x={372 + (i % 5) * 24} y={166 + Math.floor(i / 5) * 26}
            width="18" height="18" rx="3" fill="var(--coral)" opacity="0.5" />
        ))}
        <text x="500" y="196" style={T.small}>10 opções: trava</text>

        <text x="340" y="292" textAnchor="middle" style={T.cap}>
          menu com 30 itens não é generosidade, é paralisia
        </text>
      </svg>
    ),
  },

  "mapa-de-estados": {
    title: "Todo componente tem mais de um estado",
    svg: (
      <svg viewBox="0 0 680 300" className="w-full" role="img"
        aria-label="Seis estados de um botão: padrão, hover, carregando, sucesso, erro e vazio ou desabilitado.">
        {[
          ["Padrão", "var(--muted-foreground)", 40, 40],
          ["Hover / foco", "var(--cyan)", 250, 40],
          ["Carregando", "var(--gold)", 460, 40],
          ["Sucesso", "var(--mint)", 40, 140],
          ["Erro", "var(--coral)", 250, 140],
          ["Vazio / desabilitado", "var(--border)", 460, 140],
        ].map(([label, color, x, y]) => (
          <g key={label as string}>
            <rect x={x as number} y={y as number} width="180" height="64" rx="10"
              fill="var(--surface)" stroke={color as string} strokeWidth="1" />
            <rect x={(x as number) + 20} y={(y as number) + 20} width="80" height="24" rx="6"
              fill={color as string} opacity="0.45" />
            <text x={(x as number) + 20} y={(y as number) + 58} style={T.small}>{label as string}</text>
          </g>
        ))}
        <text x="340" y="248" textAnchor="middle" style={T.small}>
          o estado esquecido com mais frequência é o vazio: a tela sem nenhum dado ainda
        </text>
        <text x="340" y="276" textAnchor="middle" style={T.cap}>
          desenhar só o estado feliz é o erro mais comum de quem começa
        </text>
      </svg>
    ),
  },

  "dark-patterns-ecommerce": {
    title: "Anatomia de um app de compras predatório",
    svg: (
      <svg viewBox="0 0 680 420" className="w-full" role="img"
        aria-label="Tela genérica de e-commerce com seis padrões manipulativos destacados.">
        <rect x="210" y="20" width="260" height="380" rx="20"
          fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />

        <rect x="228" y="44" width="224" height="30" rx="6" fill="var(--coral)" opacity="0.35" />
        <text x="340" y="64" textAnchor="middle" style={{ ...T.small, fill: "var(--foreground)" }}>ACABA EM 04:59 ⏱</text>

        <rect x="228" y="86" width="224" height="90" rx="6" fill="var(--surface-2)" />
        <text x="340" y="136" textAnchor="middle" style={T.small}>foto do produto</text>

        <text x="228" y="200" style={{ ...T.small, fill: "var(--coral)" }}>Restam 2 unidades!</text>
        <text x="228" y="222" style={T.small}>R$ 199,00  <tspan fill="var(--mint)">R$ 12,90</tspan></text>

        <rect x="228" y="238" width="224" height="34" rx="6" fill="var(--mint)" opacity="0.5" />
        <text x="340" y="259" textAnchor="middle" style={{ ...T.small, fill: "var(--foreground)" }}>COMPRAR AGORA</text>

        <rect x="228" y="284" width="224" height="60" rx="6" fill="var(--gold)" opacity="0.3" />
        <text x="340" y="310" textAnchor="middle" style={T.small}>🎡 GIRE E GANHE</text>
        <text x="340" y="330" textAnchor="middle" style={T.small}>cupom expira em 10 min</text>
        <text x="443" y="296" style={{ fontSize: 9, fill: "var(--muted-foreground)" }}>×</text>

        <text x="228" y="368" style={{ fontSize: 8, fill: "var(--muted-foreground)" }}>ao continuar você aceita receber notificações</text>

        {[
          ["contagem falsa: reinicia sozinha", 74, 60],
          ["escassez inventada", 200, 195],
          ["preço 'de/por' que nunca existiu", 226, 217],
          ["cassino disfarçado de desconto", 300, 305],
          ["botão de fechar quase invisível", 340, 296],
          ["consentimento escondido no rodapé", 380, 366],
        ].map(([label, y, ty], i) => (
          <g key={label as string}>
            <line x1={i % 2 === 0 ? 210 : 470} y1={ty as number}
              x2={i % 2 === 0 ? 190 : 490} y2={y as number}
              stroke="var(--coral)" strokeWidth="0.8" strokeDasharray="2 2" />
            <text x={i % 2 === 0 ? 184 : 496} y={(y as number) + 4}
              textAnchor={i % 2 === 0 ? "end" : "start"}
              style={{ ...T.small, fill: "var(--coral)" }}>
              {label as string}
            </text>
          </g>
        ))}
      </svg>
    ),
  },

  "mapa-empatia": {
    title: "Mapa de empatia: quatro quadrantes, uma pessoa",
    svg: (
      <svg viewBox="0 0 680 340" className="w-full" role="img"
        aria-label="Quatro quadrantes: pensa e sente, vê, fala e faz, ouve, em torno da pessoa.">
        {[
          ["PENSA E SENTE", "medos, expectativas, o que não diz em voz alta", 60, 30, "var(--violet)"],
          ["VÊ", "o que aparece na tela dele, o que os amigos usam", 360, 30, "var(--cyan)"],
          ["FALA E FAZ", "o que ele declara e o que de fato faz (nem sempre bate)", 60, 180, "var(--mint)"],
          ["OUVE", "amigos, streamers, algoritmo, família", 360, 180, "var(--gold)"],
        ].map(([t, d, x, y, c]) => (
          <g key={t as string}>
            <rect x={x as number} y={y as number} width="260" height="120" rx="10"
              fill="var(--surface)" stroke={c as string} strokeWidth="1" />
            <text x={(x as number) + 20} y={(y as number) + 32}
              style={{ ...T.label, fill: c as string }}>{t as string}</text>
            <text x={(x as number) + 20} y={(y as number) + 58} style={T.small}>{d as string}</text>
          </g>
        ))}
        <circle cx="340" cy="170" r="30" fill="var(--surface-2)" stroke="var(--foreground)" strokeWidth="1" />
        <text x="340" y="174" textAnchor="middle" style={T.small}>pessoa</text>
        <text x="340" y="326" textAnchor="middle" style={T.cap}>
          quando &quot;fala&quot; e &quot;faz&quot; se contradizem, a verdade está no &quot;faz&quot;
        </text>
      </svg>
    ),
  },

  "user-flow": {
    title: "User flow: cada losango é uma chance de perder o usuário",
    svg: (
      <svg viewBox="0 0 680 300" className="w-full" role="img"
        aria-label="Fluxo com decisão: se o usuário já tem conta segue para o carrinho, senão cai em cadastro.">
        <defs>
          <marker id="flowArrow" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="var(--muted-foreground)" strokeWidth="1.5" />
          </marker>
        </defs>

        <ellipse cx="70" cy="140" rx="46" ry="26" fill="var(--surface)" stroke="var(--mint)" strokeWidth="1" />
        <text x="70" y="144" textAnchor="middle" style={T.small}>abre o app</text>

        <path d="M150 140 L196 140" stroke="var(--muted-foreground)" markerEnd="url(#flowArrow)" />

        <path d="M270 100 L330 140 L270 180 L210 140 Z" fill="var(--surface)" stroke="var(--gold)" strokeWidth="1" />
        <text x="270" y="138" textAnchor="middle" style={T.small}>já tem</text>
        <text x="270" y="154" textAnchor="middle" style={T.small}>conta?</text>

        <path d="M270 100 L270 60 L420 60" stroke="var(--muted-foreground)" markerEnd="url(#flowArrow)" fill="none" />
        <text x="300" y="52" style={{ ...T.small, fill: "var(--mint)" }}>sim</text>
        <path d="M270 180 L270 220 L420 220" stroke="var(--muted-foreground)" markerEnd="url(#flowArrow)" fill="none" />
        <text x="300" y="238" style={{ ...T.small, fill: "var(--coral)" }}>não</text>

        <rect x="424" y="38" width="150" height="44" rx="8" fill="var(--surface)" stroke="var(--mint)" strokeWidth="1" />
        <text x="499" y="65" textAnchor="middle" style={T.small}>vai pro carrinho</text>

        <rect x="424" y="198" width="150" height="44" rx="8" fill="var(--surface)" stroke="var(--coral)" strokeWidth="1" />
        <text x="499" y="225" textAnchor="middle" style={T.small}>cadastro</text>

        <text x="340" y="286" textAnchor="middle" style={T.cap}>
          todo caminho &quot;não&quot; é onde as pessoas desistem: desenhe ele com carinho
        </text>
      </svg>
    ),
  },

  "fidelidade": {
    title: "Da caneta ao protótipo: fidelidade cresce, custo de mudar também",
    svg: (
      <svg viewBox="0 0 680 300" className="w-full" role="img"
        aria-label="Quatro etapas: rascunho, wireframe, alta fidelidade e protótipo interativo.">
        {[
          ["Rascunho", "papel, 2 minutos", 30, "var(--muted-foreground)"],
          ["Wireframe", "caixas cinzas, sem cor", 195, "var(--cyan)"],
          ["Alta fidelidade", "cor, tipo, imagem real", 360, "var(--mint)"],
          ["Protótipo", "clicável, navegável", 525, "var(--gold)"],
        ].map(([t, d, x, c]) => (
          <g key={t as string}>
            <rect x={x as number} y="60" width="126" height="130" rx="10"
              fill="var(--surface)" stroke={c as string} strokeWidth="1" />
            <rect x={(x as number) + 18} y="80" width="90" height="10" rx="2" fill={c as string} opacity="0.5" />
            <rect x={(x as number) + 18} y="98" width="60" height="8" rx="2" fill={c as string} opacity="0.3" />
            <rect x={(x as number) + 18} y="114" width="90" height="34" rx="4" fill={c as string} opacity="0.18" />
            <text x={(x as number) + 63} y="172" textAnchor="middle"
              style={{ ...T.label, fill: c as string }}>{t as string}</text>
            <text x={(x as number) + 63} y="210" textAnchor="middle" style={T.small}>{d as string}</text>
          </g>
        ))}
        <path d="M30 240 L650 240" stroke="var(--muted-foreground)" strokeWidth="1" strokeDasharray="3 3" />
        <text x="40" y="262" style={T.small}>barato de jogar fora</text>
        <text x="640" y="262" textAnchor="end" style={T.small}>caro de refazer</text>
        <text x="340" y="290" textAnchor="middle" style={T.cap}>
          erre no papel, onde o prejuízo é uma folha amassada
        </text>
      </svg>
    ),
  },

  "contraste-wcag": {
    title: "Contraste: o que passa e o que reprova",
    svg: (
      <svg viewBox="0 0 680 280" className="w-full" role="img"
        aria-label="Três amostras de contraste: reprovado, mínimo aprovado e confortável.">
        {[
          ["1.8:1", "reprova", "var(--coral)", 40, 0.22],
          ["4.5:1", "mínimo pra texto normal", "var(--gold)", 250, 0.55],
          ["8.2:1", "confortável", "var(--mint)", 460, 1],
        ].map(([ratio, verdict, c, x, op]) => (
          <g key={ratio as string}>
            <rect x={x as number} y="40" width="180" height="110" rx="10"
              fill="var(--surface-2)" stroke={c as string} strokeWidth="1" />
            <text x={(x as number) + 90} y="88" textAnchor="middle"
              style={{ fontSize: 17, fontWeight: 700, fill: "var(--foreground)", opacity: op as number }}>
              texto exemplo
            </text>
            <text x={(x as number) + 90} y="116" textAnchor="middle"
              style={{ fontSize: 11, fill: "var(--foreground)", opacity: op as number }}>
              linha secundária menor
            </text>
            <text x={(x as number) + 90} y="176" textAnchor="middle"
              style={{ ...T.label, fill: c as string }}>{ratio as string}</text>
            <text x={(x as number) + 90} y="196" textAnchor="middle" style={T.small}>{verdict as string}</text>
          </g>
        ))}
        <text x="340" y="240" textAnchor="middle" style={T.small}>
          cinza claro sobre branco é bonito no monitor do designer e ilegível no ônibus
        </text>
        <text x="340" y="266" textAnchor="middle" style={T.cap}>
          WCAG pede 4.5:1 para texto normal e 3:1 para texto grande
        </text>
      </svg>
    ),
  },

  "breakpoints": {
    title: "O mesmo conteúdo, três larguras",
    svg: (
      <svg viewBox="0 0 680 300" className="w-full" role="img"
        aria-label="Layout em coluna única no celular, duas colunas no tablet e três no desktop.">
        <g>
          <rect x="40" y="40" width="120" height="200" rx="12" fill="var(--surface)" stroke="var(--cyan)" strokeWidth="1" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="56" y={64 + i * 58} width="88" height="46" rx="4" fill="var(--cyan)" opacity="0.3" />
          ))}
          <text x="100" y="264" textAnchor="middle" style={T.small}>celular</text>
          <text x="100" y="282" textAnchor="middle" style={{ fontSize: 10, fill: "var(--muted-foreground)" }}>1 coluna</text>
        </g>

        <g>
          <rect x="200" y="60" width="200" height="160" rx="12" fill="var(--surface)" stroke="var(--mint)" strokeWidth="1" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={216 + (i % 2) * 88} y={84 + Math.floor(i / 2) * 62} width="80" height="50" rx="4"
              fill="var(--mint)" opacity="0.3" />
          ))}
          <text x="300" y="264" textAnchor="middle" style={T.small}>tablet</text>
          <text x="300" y="282" textAnchor="middle" style={{ fontSize: 10, fill: "var(--muted-foreground)" }}>2 colunas</text>
        </g>

        <g>
          <rect x="436" y="76" width="204" height="128" rx="12" fill="var(--surface)" stroke="var(--gold)" strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={452 + (i % 3) * 60} y={96 + Math.floor(i / 3) * 46} width="52" height="38" rx="4"
              fill="var(--gold)" opacity="0.3" />
          ))}
          <text x="538" y="264" textAnchor="middle" style={T.small}>desktop</text>
          <text x="538" y="282" textAnchor="middle" style={{ fontSize: 10, fill: "var(--muted-foreground)" }}>3 colunas</text>
        </g>
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
