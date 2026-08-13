export type ResourceKind = "ferramenta" | "referência" | "exemplo" | "treino";

export type Resource = {
  label: string;
  url: string;
  kind: ResourceKind;
  note?: string;
};

// Arsenal de cada dia. A chave é o número do dia.
// Para adicionar: basta incluir um item no array do dia.
export const RESOURCES: Record<number, Resource[]> = {
  1: [
    { label: "User Inyerface", url: "https://userinyerface.com", kind: "treino", note: "Jogo feito de propósito com a pior UI do mundo. Ótimo pra abrir a aula." },
    { label: "Can't Unsee", url: "https://cantunsee.space", kind: "treino", note: "Ache o detalhe errado entre duas telas. Vicia." },
    { label: "Mobbin", url: "https://mobbin.com", kind: "exemplo", note: "Milhares de telas reais de apps, organizadas por fluxo." },
  ],
  2: [
    { label: "Design Sprint (Google Ventures)", url: "https://www.thesprintbook.com", kind: "referência", note: "De onde vem o Crazy 8s." },
    { label: "Excalidraw", url: "https://excalidraw.com", kind: "ferramenta", note: "Rascunho rápido no navegador, sem cadastro." },
    { label: "Miro", url: "https://miro.com", kind: "ferramenta", note: "Quadro colaborativo pra dinâmica em grupo." },
  ],
  3: [
    { label: "10 heurísticas de Nielsen (NN/g)", url: "https://www.nngroup.com/articles/ten-usability-heuristics/", kind: "referência", note: "A fonte original, com exemplos." },
    { label: "r/CrappyDesign", url: "https://www.reddit.com/r/CrappyDesign/", kind: "exemplo", note: "Catálogo infinito de design ruim pra caçar heurística violada." },
  ],
  4: [
    { label: "Laws of UX", url: "https://lawsofux.com", kind: "referência", note: "Fitts, Hick, Jakob e companhia, cada uma em uma página." },
    { label: "Deceptive Design", url: "https://www.deceptive.design", kind: "exemplo", note: "Biblioteca de dark patterns com nome e caso real." },
  ],
  5: [
    { label: "Page Flows", url: "https://pageflows.com", kind: "exemplo", note: "Vídeos de fluxos reais: onboarding, checkout, cancelamento." },
    { label: "Material Design — estados", url: "https://m3.material.io", kind: "referência", note: "Como um componente se comporta em cada estado." },
  ],
  6: [
    { label: "NN/g — UX Research", url: "https://www.nngroup.com/topic/user-research/", kind: "referência" },
    { label: "Interaction Design Foundation", url: "https://www.interaction-design.org", kind: "referência", note: "Artigos longos e bem escritos sobre método." },
  ],
  7: [
    { label: "NN/g — entrevistas com usuários", url: "https://www.nngroup.com/articles/user-interviews/", kind: "referência", note: "O que perguntar e o que nunca perguntar." },
  ],
  8: [
    { label: "Mapa de empatia (Gamestorming)", url: "https://gamestorming.com/empathy-mapping/", kind: "referência", note: "O template original e como facilitar." },
    { label: "Canva", url: "https://www.canva.com", kind: "ferramenta", note: "Personas e mapas bem apresentáveis sem saber design." },
  ],
  9: [
    { label: "NN/g — journey mapping", url: "https://www.nngroup.com/articles/journey-mapping-101/", kind: "referência" },
    { label: "Miro", url: "https://miro.com", kind: "ferramenta", note: "Tem template de jornada pronto." },
  ],
  10: [
    { label: "Optimal Workshop", url: "https://www.optimalworkshop.com", kind: "ferramenta", note: "Card sorting online, plano gratuito serve pra turma." },
    { label: "NN/g — card sorting", url: "https://www.nngroup.com/articles/card-sorting-definition/", kind: "referência" },
  ],
  11: [
    { label: "Whimsical", url: "https://whimsical.com", kind: "ferramenta", note: "Fluxograma rápido, bonito por padrão." },
    { label: "Page Flows", url: "https://pageflows.com", kind: "exemplo", note: "Compare o fluxo do aluno com o de um app real." },
  ],
  12: [
    { label: "Figma", url: "https://www.figma.com", kind: "ferramenta", note: "Conta gratuita, roda no navegador. Educacional é grátis." },
    { label: "Figma — comece por aqui", url: "https://help.figma.com/hc/en-us/categories/360002051613-Get-started", kind: "treino", note: "Tutorial oficial do zero." },
    { label: "Comunidade Figma", url: "https://www.figma.com/community", kind: "exemplo", note: "Kits de wireframe prontos pra duplicar." },
  ],
  13: [
    { label: "Coolors", url: "https://coolors.co", kind: "ferramenta", note: "Gera paleta na barra de espaço." },
    { label: "Adobe Color", url: "https://color.adobe.com", kind: "ferramenta", note: "Harmonias e extração de paleta a partir de imagem." },
    { label: "Color (Method of Action)", url: "https://color.method.ac", kind: "treino", note: "Joguinho de matiz, saturação e complementar." },
  ],
  14: [
    { label: "Google Fonts", url: "https://fonts.google.com", kind: "ferramenta", note: "Grátis e usável em projeto real." },
    { label: "Type Scale", url: "https://typescale.com", kind: "ferramenta", note: "Escala tipográfica coerente em segundos." },
    { label: "Kern Type", url: "https://type.method.ac", kind: "treino", note: "Jogo de espacejamento. Curto e divertido." },
    { label: "Fontpair", url: "https://www.fontpair.co", kind: "referência", note: "Combinações de fontes que funcionam." },
  ],
  15: [
    { label: "Material Design 3", url: "https://m3.material.io", kind: "referência", note: "Design system completo e público." },
    { label: "Apple Human Interface Guidelines", url: "https://developer.apple.com/design/human-interface-guidelines", kind: "referência" },
    { label: "Lucide", url: "https://lucide.dev", kind: "ferramenta", note: "Biblioteca de ícones coerente e gratuita." },
  ],
  16: [
    { label: "MDN — design responsivo", url: "https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design", kind: "referência", note: "Em português." },
    { label: "W3C — padrões web", url: "https://www.w3.org/standards/", kind: "referência" },
  ],
  17: [
    { label: "Unsplash", url: "https://unsplash.com", kind: "ferramenta", note: "Fotos livres para uso." },
    { label: "Squoosh", url: "https://squoosh.app", kind: "ferramenta", note: "Comprime imagem no navegador e mostra o antes/depois." },
    { label: "remove.bg", url: "https://www.remove.bg", kind: "ferramenta", note: "Recorta fundo automaticamente." },
  ],
  18: [
    { label: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/", kind: "ferramenta", note: "Testa contraste contra a WCAG." },
    { label: "WCAG 2.2 — referência rápida", url: "https://www.w3.org/WAI/WCAG22/quickref/", kind: "referência" },
    { label: "Coblis — simulador de daltonismo", url: "https://www.color-blindness.com/coblis-color-blindness-simulator/", kind: "treino", note: "Sobe a tela do aluno e vê o que ele não vê." },
    { label: "WAVE", url: "https://wave.webaim.org", kind: "ferramenta", note: "Audita acessibilidade de qualquer site." },
  ],
  19: [
    { label: "Figma — protótipo interativo", url: "https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma", kind: "treino", note: "Guia oficial de prototipagem." },
  ],
  20: [
    { label: "Maze", url: "https://maze.co", kind: "ferramenta", note: "Roda teste de usabilidade em cima do protótipo do Figma." },
    { label: "NN/g — teste com 5 usuários", url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/", kind: "referência", note: "Por que 5 pessoas bastam." },
  ],
  21: [
    { label: "Canva — apresentações", url: "https://www.canva.com", kind: "ferramenta", note: "Pro pitch final." },
    { label: "Bestfolios", url: "https://www.bestfolios.com", kind: "exemplo", note: "Portfólios de UX reais, pra mirar o case final." },
  ],
};

export function getResources(day: number): Resource[] {
  return RESOURCES[day] ?? [];
}
