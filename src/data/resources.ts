export type ResourceKind = "ferramenta" | "referência" | "exemplo" | "treino";

export type Resource = {
  label: string;
  url: string;
  kind: ResourceKind;
  note?: string;
  pt?: boolean; // conteúdo em português
};

// Arsenal de cada dia. A chave é o número do dia.
// Regra: preferir português e gratuito. Se for em inglês, só entra
// quando funciona no visual (jogo, catálogo de imagens).
export const RESOURCES: Record<number, Resource[]> = {
  1: [
    { label: "User Inyerface", url: "https://userinyerface.com", kind: "treino", note: "Jogo com a pior interface possível. Não precisa saber inglês pra sofrer nele." },
    { label: "Can't Unsee", url: "https://cantunsee.space", kind: "treino", note: "Ache o detalhe errado entre duas telas. Puro visual." },
    { label: "UX Collective Brasil", url: "https://brasil.uxdesign.cc/", kind: "referência", note: "A principal publicação de UX em português.", pt: true },
  ],
  2: [
    { label: "Excalidraw", url: "https://excalidraw.com", kind: "ferramenta", note: "Rascunho no navegador, sem cadastro e sem limite. Ideal pro Crazy 8s." },
    { label: "UX Collective Brasil", url: "https://brasil.uxdesign.cc/", kind: "referência", note: "Busque por 'duplo diamante' e 'design thinking'.", pt: true },
  ],
  3: [
    { label: "r/CrappyDesign", url: "https://www.reddit.com/r/CrappyDesign/", kind: "exemplo", note: "Design ruim do mundo todo. A imagem fala sozinha." },
    { label: "Padrão Digital de Governo", url: "https://www.gov.br/ds/", kind: "referência", note: "Design system oficial do governo brasileiro, todo em português.", pt: true },
  ],
  4: [
    { label: "Deceptive Design", url: "https://www.deceptive.design", kind: "exemplo", note: "Catálogo de dark patterns com print de caso real." },
    { label: "Laws of UX", url: "https://lawsofux.com", kind: "referência", note: "Em inglês, mas cada lei cabe em uma imagem e uma frase." },
  ],
  5: [
    { label: "Padrão Digital — componentes", url: "https://www.gov.br/ds/", kind: "referência", note: "Cada componente com seus estados, documentado em português.", pt: true },
    { label: "Material Design 3", url: "https://m3.material.io", kind: "referência", note: "Referência visual de estados; dá pra usar só olhando." },
  ],
  6: [
    { label: "UX Collective Brasil", url: "https://brasil.uxdesign.cc/", kind: "referência", note: "Busque 'pesquisa com usuários'. Artigos longos, em português.", pt: true },
    { label: "Somos Tera", url: "https://medium.com/somos-tera", kind: "referência", note: "Publicação brasileira com material introdutório de UX.", pt: true },
  ],
  7: [
    { label: "Google Forms", url: "https://forms.google.com", kind: "ferramenta", note: "Roteiro de entrevista e questionário, grátis e em português.", pt: true },
    { label: "UX Collective Brasil", url: "https://brasil.uxdesign.cc/", kind: "referência", note: "Busque 'entrevista com usuário'.", pt: true },
  ],
  8: [
    { label: "Canva", url: "https://www.canva.com/pt_br/", kind: "ferramenta", note: "Persona e mapa de empatia apresentáveis, interface em português.", pt: true },
    { label: "Excalidraw", url: "https://excalidraw.com", kind: "ferramenta", note: "Se preferir rascunho rápido em vez de arte." },
  ],
  9: [
    { label: "Canva", url: "https://www.canva.com/pt_br/", kind: "ferramenta", note: "Tem template de mapa de jornada em português.", pt: true },
    { label: "UX Collective Brasil", url: "https://brasil.uxdesign.cc/", kind: "referência", note: "Busque 'mapa de jornada'.", pt: true },
  ],
  10: [
    { label: "Excalidraw", url: "https://excalidraw.com", kind: "ferramenta", note: "Card sorting com post-its virtuais, sem limite de plano." },
    { label: "Padrão Digital de Governo", url: "https://www.gov.br/ds/", kind: "referência", note: "Exemplo real de arquitetura da informação em português.", pt: true },
  ],
  11: [
    { label: "Excalidraw", url: "https://excalidraw.com", kind: "ferramenta", note: "Fluxograma sem cadastro, exporta PNG." },
    { label: "Figma", url: "https://www.figma.com", kind: "ferramenta", note: "Dá pra deixar a interface em português nas preferências.", pt: true },
  ],
  12: [
    { label: "Figma", url: "https://www.figma.com", kind: "ferramenta", note: "Preferences → Language → Português. Plano gratuito basta.", pt: true },
    { label: "Comunidade Figma", url: "https://www.figma.com/community", kind: "exemplo", note: "Kits de wireframe gratuitos pra duplicar e estudar." },
  ],
  13: [
    { label: "Coolors", url: "https://coolors.co", kind: "ferramenta", note: "Gera paleta na barra de espaço." },
    { label: "Adobe Color", url: "https://color.adobe.com", kind: "ferramenta", note: "Harmonias e extração de paleta a partir de imagem.", pt: true },
    { label: "Color (Method of Action)", url: "https://color.method.ac", kind: "treino", note: "Joguinho de matiz, saturação e complementar." },
  ],
  14: [
    { label: "Google Fonts", url: "https://fonts.google.com", kind: "ferramenta", note: "Grátis e usável em projeto real." },
    { label: "Kern Type", url: "https://type.method.ac", kind: "treino", note: "Jogo de espacejamento. Curto e viciante." },
    { label: "Shape Type", url: "https://shape.method.ac", kind: "treino", note: "Mesma pegada, agora desenhando a curva da letra." },
  ],
  15: [
    { label: "Padrão Digital de Governo", url: "https://www.gov.br/ds/", kind: "referência", note: "Design system público, completo e em português. O melhor exemplo pra turma.", pt: true },
    { label: "Lucide", url: "https://lucide.dev", kind: "ferramenta", note: "Ícones gratuitos e coerentes entre si." },
    { label: "Material Design 3", url: "https://m3.material.io", kind: "referência", note: "Referência internacional de design system." },
  ],
  16: [
    { label: "MDN — design responsivo", url: "https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design", kind: "referência", note: "Documentação em português.", pt: true },
    { label: "Padrão Digital de Governo", url: "https://www.gov.br/ds/", kind: "referência", note: "Grid e breakpoints documentados em português.", pt: true },
  ],
  17: [
    { label: "Pexels", url: "https://www.pexels.com/pt-br/", kind: "ferramenta", note: "Fotos gratuitas, site em português.", pt: true },
    { label: "Squoosh", url: "https://squoosh.app", kind: "ferramenta", note: "Comprime imagem no navegador, com antes/depois lado a lado." },
    { label: "remove.bg", url: "https://www.remove.bg/pt-br", kind: "ferramenta", note: "Recorta fundo automaticamente. Versão em português.", pt: true },
  ],
  18: [
    { label: "eMAG — Modelo de Acessibilidade", url: "https://emag.governoeletronico.gov.br/", kind: "referência", note: "Padrão oficial brasileiro de acessibilidade digital.", pt: true },
    { label: "Cartilhas do W3C Brasil", url: "https://ceweb.br/cartilhas/", kind: "referência", note: "Fascículos gratuitos de acessibilidade, didáticos e em português.", pt: true },
    { label: "Ferramentas de acessibilidade (gov.br)", url: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/ferramentas", kind: "ferramenta", note: "Lista oficial, com o ASES — o avaliador brasileiro.", pt: true },
    { label: "Coblis — simulador de daltonismo", url: "https://www.color-blindness.com/coblis-color-blindness-simulator/", kind: "treino", note: "Sobe a tela do aluno e mostra o que ele não vê. Puro visual." },
  ],
  19: [
    { label: "Figma", url: "https://www.figma.com", kind: "ferramenta", note: "Aba Prototype. Com idioma em português fica bem navegável.", pt: true },
    { label: "Comunidade Figma", url: "https://www.figma.com/community", kind: "exemplo", note: "Protótipos prontos pra abrir e desmontar." },
  ],
  20: [
    { label: "OBS Studio", url: "https://obsproject.com/pt-br/", kind: "ferramenta", note: "Grava tela e voz durante o teste. Grátis e em português.", pt: true },
    { label: "Google Forms", url: "https://forms.google.com", kind: "ferramenta", note: "Roteiro do teste e coleta das respostas.", pt: true },
    { label: "UX Collective Brasil", url: "https://brasil.uxdesign.cc/", kind: "referência", note: "Busque 'teste de usabilidade'.", pt: true },
  ],
  21: [
    { label: "Canva", url: "https://www.canva.com/pt_br/", kind: "ferramenta", note: "Pro pitch final, em português.", pt: true },
    { label: "UX Collective Brasil — cases", url: "https://brasil.uxdesign.cc/", kind: "exemplo", note: "Busque 'estudo de caso'. Cases de UX escritos por brasileiros.", pt: true },
    { label: "Comunidade Figma", url: "https://www.figma.com/community", kind: "exemplo", note: "Templates gratuitos de apresentação e de case de portfólio." },
  ],
};

export function getResources(day: number): Resource[] {
  return RESOURCES[day] ?? [];
}
