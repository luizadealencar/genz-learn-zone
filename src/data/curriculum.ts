export type Activity = {
  id: string;
  title: string;
  description: string;
  deliverable: string;
  xp: number;
};

export type Day = {
  number: number;
  module: string;
  title: string;
  hook: string;
  objectives: string[];
  theory: { heading: string; points: string[]; figure?: string; people?: string[] }[];
  schedule: { time: string; label: string; detail: string }[];
  activities: Activity[];
};

export type Module = {
  id: string;
  name: string;
  color: string;
  days: number[];
  summary: string;
};

export const COURSE = {
  code: "UC6",
  name: "Elaborar design de interação para aplicações multiplataforma (UI/UX)",
  hours: 84,
  days: 21,
  schedule: "Segunda a sexta · 15h às 19h",
  theme: "Games & e-Sports",
};

export const MODULES: Module[] = [
  {
    id: "m1",
    name: "Fase 1 · Tutorial: fundamentos de UX",
    color: "var(--mint)",
    days: [1, 2, 3, 4, 5],
    summary:
      "O que é experiência do usuário, processo de design, heurísticas e as primeiras análises críticas de interfaces de games.",
  },
  {
    id: "m2",
    name: "Fase 2 · Recon: pesquisa com usuários",
    color: "var(--cyan)",
    days: [6, 7, 8, 9],
    summary:
      "UX Research na prática: entrevistas, pesquisa qualitativa, personas, mapas de empatia e análise de resultados.",
  },
  {
    id: "m3",
    name: "Fase 3 · Level design: arquitetura e wireframes",
    color: "var(--lime)",
    days: [10, 11, 12],
    summary:
      "Arquitetura da informação, fluxos, navegação, rotulagem, busca e wireframes de baixa fidelidade.",
  },
  {
    id: "m4",
    name: "Fase 4 · Skin: UI design",
    color: "var(--gold)",
    days: [13, 14, 15, 16],
    summary:
      "Teoria das cores, tipografia, ícones, grid, componentes, design system e layouts responsivos (W3C).",
  },
  {
    id: "m5",
    name: "Fase 5 · Asset pipeline: imagem e acessibilidade",
    color: "var(--violet)",
    days: [17, 18],
    summary:
      "Produção e tratamento de imagens, formatos, resoluções, exportação otimizada e acessibilidade real.",
  },
  {
    id: "m6",
    name: "Fase 6 · Boss fight: protótipo e entrega",
    color: "var(--coral)",
    days: [19, 20, 21],
    summary:
      "Prototipação interativa, teste de usabilidade, iteração e apresentação do projeto final.",
  },
];

const grid = (
  bloco1: string,
  bloco2: string,
  bloco3: string,
  bloco4: string,
): Day["schedule"] => [
  { time: "15:00 – 16:00", label: "Briefing", detail: bloco1 },
  { time: "16:00 – 16:45", label: "Prática guiada", detail: bloco2 },
  { time: "16:45 – 17:00", label: "Respawn", detail: "Intervalo." },
  { time: "17:00 – 18:15", label: "Missão do dia", detail: bloco3 },
  { time: "18:15 – 19:00", label: "Playtest & feedback", detail: bloco4 },
];

export const DAYS: Day[] = [
  {
    number: 1,
    module: "m1",
    title: "Game start: o que é UX de verdade",
    hook: "Por que você desinstala um app em 30 segundos e joga 4 horas em outro?",
    objectives: [
      "Diferenciar UX de UI com exemplos concretos.",
      "Reconhecer os segmentos de aplicação de UX no mercado.",
      "Assumir um projeto-desafio para o curso inteiro.",
    ],
    theory: [
      {
        heading: "UX: a experiência inteira",
        points: [
          "UX (User eXperience) é tudo que a pessoa sente antes, durante e depois de usar um produto: descoberta, cadastro, uso, suporte, desinstalação.",
          "UI (User Interface) é a camada visível e interativa: telas, botões, cores, tipografia, ícones, microinterações.",
          "Analogia: UX é o game design (regras, progressão, dificuldade, recompensa); UI é o HUD e a arte.",
          "Um jogo com arte linda e tutorial confuso tem boa UI e péssima UX.",
        ],
        figure: "ux-vs-ui",
        people: ["norman"],
      },
      {
        heading: "Os 5 pilares (Jesse James Garrett, adaptado)",
        points: [
          "Estratégia: qual problema o produto resolve e para quem.",
          "Escopo: quais funcionalidades entram e quais ficam de fora.",
          "Estrutura: como o conteúdo se organiza e como o usuário navega.",
          "Esqueleto: onde cada elemento fica na tela (wireframe).",
          "Superfície: cores, tipos, imagens, identidade (UI).",
        ],
        figure: "cinco-pilares",
        people: ["garrett"],
      },
      {
        heading: "Onde UX aparece no mercado",
        points: [
          "Games e plataformas de e-sports, streaming, apps financeiros, e-commerce, saúde, educação, sistemas internos e governo digital.",
          "Cargos: UX designer, UI designer, UX researcher, product designer, UX writer, designer de acessibilidade.",
        ],
      },
    ],
    schedule: grid(
      "Dinâmica 'melhor e pior app do meu celular'. Conceito de UX x UI. Os 5 pilares.",
      "Análise coletiva de 3 interfaces gamer (loja de skins, plataforma de torneio, launcher).",
      "Cada aluno escolhe o produto-desafio do curso dentro do universo games/e-sports.",
      "Pitch de 60 segundos do desafio escolhido + feedback da turma.",
    ),
    activities: [
      {
        id: "d1-a1",
        title: "Diário de frustração",
        description:
          "Liste 5 momentos reais em que um app, site ou jogo te irritou nesta semana. Para cada um: o que você queria fazer, o que aconteceu e como você se sentiu.",
        deliverable: "Documento ou slide com os 5 casos (link do Google Docs/Drive).",
        xp: 60,
      },
      {
        id: "d1-a2",
        title: "Escolha seu desafio",
        description:
          "Defina o produto que você vai projetar durante todo o curso: app de torneios amadores, loja de skins, hub de clã, plataforma de coach de game, rede de streamers etc. Escreva o problema que ele resolve e para quem.",
        deliverable: "Ficha do projeto: nome, problema, público, plataforma (mobile/web).",
        xp: 80,
      },
    ],
  },
  {
    number: 2,
    module: "m1",
    title: "Processo de design centrado no usuário",
    hook: "Ninguém acerta de primeira. Quem acerta é quem itera rápido.",
    objectives: [
      "Descrever as etapas do processo de design.",
      "Comparar Design Thinking, Double Diamond e Design Sprint.",
      "Aplicar empatia e descoberta ao próprio projeto.",
    ],
    theory: [
      {
        heading: "Double Diamond",
        points: [
          "Descobrir (divergir): pesquisar, ouvir, coletar dados sem julgar.",
          "Definir (convergir): sintetizar e escrever o problema real.",
          "Desenvolver (divergir): gerar muitas ideias e alternativas.",
          "Entregar (convergir): prototipar, testar, refinar e lançar.",
        ],
        figure: "duplo-diamante",
        people: ["knapp"],
      },
      {
        heading: "Design Thinking em 5 etapas",
        points: [
          "Empatia → Definição → Ideação → Prototipagem → Teste.",
          "Empatia não é 'achismo': é observação, escuta e dados.",
          "Ideação usa técnicas como brainstorm, crazy 8s, how might we.",
        ],
      },
      {
        heading: "Abordagens centradas no usuário",
        points: [
          "O usuário participa do processo do começo ao fim, não só no teste final.",
          "Erro comum: projetar para si mesmo. Você não é o usuário.",
          "Iteração > perfeição: versões feias e testadas valem mais que versões lindas e não validadas.",
        ],
      },
    ],
    schedule: grid(
      "Etapas do processo de design. Double Diamond e Design Thinking com exemplos de games.",
      "Crazy 8s: 8 ideias de tela em 8 minutos para o próprio desafio.",
      "Escrever a declaração de problema no formato: [usuário] precisa de [necessidade] porque [insight].",
      "Roda de leitura das declarações de problema. Ajustes.",
    ),
    activities: [
      {
        id: "d2-a1",
        title: "Crazy 8s do seu produto",
        description:
          "Dobre uma folha em 8 partes e desenhe 8 versões diferentes da tela principal do seu produto, 1 minuto cada. Feio é permitido, parado não.",
        deliverable: "Foto da folha com as 8 ideias.",
        xp: 70,
      },
      {
        id: "d2-a2",
        title: "Declaração de problema",
        description:
          "Escreva a frase-problema do seu projeto e justifique em um parágrafo por que ela vale ser resolvida.",
        deliverable: "Texto de até 10 linhas.",
        xp: 50,
      },
    ],
  },
  {
    number: 3,
    module: "m1",
    title: "Heurísticas de Nielsen: caçando bugs de experiência",
    hook: "Hoje você vira auditor de interface. Ninguém sai ileso.",
    objectives: [
      "Identificar as 10 heurísticas de usabilidade.",
      "Aplicar avaliação heurística em uma interface real.",
      "Comunicar problemas de forma assertiva e construtiva.",
    ],
    theory: [
      {
        heading: "As 10 heurísticas de Jakob Nielsen",
        points: [
          "1. Visibilidade do status do sistema (barra de carregamento, 'salvando...').",
          "2. Correspondência com o mundo real (linguagem do usuário, não do sistema).",
          "3. Controle e liberdade (desfazer, sair, cancelar).",
          "4. Consistência e padrões.",
          "5. Prevenção de erros.",
          "6. Reconhecer em vez de lembrar.",
          "7. Flexibilidade e eficiência (atalhos para experts).",
          "8. Estética e design minimalista.",
          "9. Ajudar a reconhecer, diagnosticar e recuperar-se de erros.",
          "10. Ajuda e documentação.",
        ],
        figure: "mensagem-de-erro",
        people: ["nielsen"],
      },
      {
        heading: "Como fazer uma avaliação heurística",
        points: [
          "Escolha o fluxo (ex.: comprar uma skin, entrar em um torneio).",
          "Percorra o fluxo anotando cada violação e a heurística ferida.",
          "Classifique a severidade de 0 (não é problema) a 4 (catastrófico).",
          "Sugira uma solução para cada problema — crítica sem proposta é reclamação.",
        ],
      },
    ],
    schedule: grid(
      "As 10 heurísticas, uma a uma, com print de interfaces reais.",
      "Avaliação heurística coletiva de um fluxo de compra em plataforma gamer.",
      "Missão: cada aluno audita um app/jogo do próprio celular.",
      "Apresentação dos 3 piores bugs de experiência encontrados na turma.",
    ),
    activities: [
      {
        id: "d3-a1",
        title: "Caça-bugs heurística",
        description:
          "Escolha um app ou jogo e audite um fluxo completo. Encontre pelo menos 6 problemas, indique a heurística violada, a severidade (0–4) e uma sugestão de correção.",
        deliverable: "Tabela com print, problema, heurística, severidade e sugestão.",
        xp: 100,
      },
      {
        id: "d3-a2",
        title: "Feedback assertivo",
        description:
          "Comente a auditoria de um colega usando a estrutura: observação → impacto no usuário → sugestão. Sem julgamento pessoal.",
        deliverable: "Texto do feedback enviado ao colega (cole o texto aqui).",
        xp: 40,
      },
    ],
  },
  {
    number: 4,
    module: "m1",
    title: "Usabilidade e leis da experiência",
    hook: "Existem regras que explicam por que o botão grande e perto do polegar sempre vence.",
    objectives: [
      "Aplicar conceitos de usabilidade a interfaces.",
      "Usar as leis de Fitts, Hick e Miller em decisões de design.",
      "Analisar carga cognitiva em telas de jogo.",
    ],
    theory: [
      {
        heading: "Usabilidade em 5 atributos",
        points: [
          "Facilidade de aprendizado, eficiência, memorização, poucos erros e satisfação.",
          "Usabilidade se mede: tempo de tarefa, taxa de sucesso, número de erros.",
        ],
      },
      {
        heading: "Leis que você vai usar toda semana",
        points: [
          "Lei de Fitts: quanto maior e mais próximo o alvo, mais rápido o clique/toque. Alvos de toque: mínimo 44x44 px.",
          "Lei de Hick: quanto mais opções, maior o tempo de decisão. Menus enormes matam a conversão.",
          "Miller (7±2): a memória de trabalho é curta — agrupe informação em blocos.",
          "Lei de Jakob: as pessoas esperam que seu produto funcione como os outros que elas já usam.",
          "Efeito Zeigarnik: tarefas incompletas incomodam — barra de progresso e checklist aumentam conclusão (base de toda gamificação).",
        ],
        figure: "leis-fitts-hick",
        people: ["fitts", "hick"],
      },
      {
        heading: "Gamificação como ferramenta de UX",
        points: [
          "Pontos, níveis, streaks, badges e ranking funcionam quando dão sentido de progresso, não quando viram pressão.",
          "Cuidado com dark patterns: FOMO artificial, loot boxes abusivas, cancelamento escondido.",
        ],
        figure: "dark-patterns-ecommerce",
      },
    ],
    schedule: grid(
      "Atributos de usabilidade e as leis clássicas com exemplos de HUD de games.",
      "Medindo usabilidade: cronometrar uma tarefa em dupla e anotar erros.",
      "Missão: redesenhar uma tela sobrecarregada aplicando Hick e Miller.",
      "Comparação antes/depois entre os grupos.",
    ),
    activities: [
      {
        id: "d4-a1",
        title: "Antes & depois",
        description:
          "Pegue uma tela poluída (loja, menu, HUD) e proponha uma versão simplificada aplicando Hick, Miller e Fitts. Explique cada decisão.",
        deliverable: "Imagem antes/depois + justificativa de 3 decisões.",
        xp: 90,
      },
      {
        id: "d4-a2",
        title: "Caça ao dark pattern",
        description:
          "Encontre 2 dark patterns em produtos que você usa e explique o dano causado ao usuário e como resolveria de forma ética.",
        deliverable: "Prints + análise.",
        xp: 60,
      },
    ],
  },
  {
    number: 5,
    module: "m1",
    title: "Design de interação: o diálogo entre pessoa e sistema",
    hook: "Toda interface é uma conversa. A maioria é mal-educada.",
    objectives: [
      "Conceituar design de interação e sua conexão com UX e UI.",
      "Mapear estados, feedbacks e microinterações.",
      "Fechar a Fase 1 com um checkpoint avaliativo.",
    ],
    theory: [
      {
        heading: "Design de Interação (IxD)",
        points: [
          "Cuida do comportamento: o que acontece quando o usuário toca, arrasta, erra, espera.",
          "Dimensões: palavras, representações visuais, objetos físicos/espaço, tempo e comportamento.",
          "Diferença: UX cobre a jornada inteira; IxD foca no diálogo; UI é a materialização visual.",
        ],
      },
      {
        heading: "Estados que todo componente tem",
        points: [
          "Padrão, hover/focus, pressionado, carregando, sucesso, erro, desabilitado, vazio.",
          "Tela vazia (empty state) é oportunidade: explique e convide à ação.",
          "Feedback deve ser imediato (<100 ms para toque, indicador acima de 1 s).",
        ],
        figure: "mapa-de-estados",
      },
      {
        heading: "Microinterações",
        points: [
          "Gatilho → regra → feedback → loop/modo.",
          "Exemplos: curtir, atualizar puxando a tela, conquista desbloqueada, som de recompensa.",
        ],
      },
    ],
    schedule: grid(
      "IxD, estados de componentes e microinterações. Referências de UI motion em games.",
      "Mapa de estados de um botão 'Entrar no torneio' desenhado no quadro.",
      "Checkpoint 1: prova prática de análise de interface (individual).",
      "Correção comentada do checkpoint + entrega de XP bônus.",
    ),
    activities: [
      {
        id: "d5-a1",
        title: "Mapa de estados",
        description:
          "Escolha um componente crítico do seu projeto e desenhe todos os seus estados, incluindo erro e vazio.",
        deliverable: "Imagem do mapa de estados com legendas.",
        xp: 80,
      },
      {
        id: "d5-a2",
        title: "Checkpoint Fase 1",
        description:
          "Prova prática: analisar uma interface entregue em aula usando UX/UI, heurísticas e leis de usabilidade.",
        deliverable: "Arquivo da avaliação respondida.",
        xp: 150,
      },
    ],
  },
  {
    number: 6,
    module: "m2",
    title: "UX Research: planejando a investigação",
    hook: "Você não vai adivinhar o que o jogador quer. Você vai perguntar.",
    objectives: [
      "Definir objetivos e perguntas de pesquisa.",
      "Diferenciar pesquisa qualitativa e quantitativa, primária e secundária.",
      "Planejar a pesquisa do próprio projeto.",
    ],
    theory: [
      {
        heading: "Tipos de pesquisa",
        points: [
          "Qualitativa: entende motivos e comportamentos (entrevista, observação, diário).",
          "Quantitativa: mede em escala (questionário, analytics, teste A/B).",
          "Primária (você coleta) x secundária (dados que já existem, desk research).",
          "Atitudinal (o que dizem) x comportamental (o que fazem) — quase nunca coincidem.",
        ],
      },
      {
        heading: "Plano de pesquisa",
        points: [
          "Objetivo, perguntas de pesquisa, público, método, número de participantes, roteiro, cronograma.",
          "5 a 8 entrevistas já revelam a maioria dos padrões em pesquisa qualitativa.",
        ],
      },
      {
        heading: "Ética e LGPD",
        points: [
          "Consentimento, anonimato, finalidade clara, sigilo dos dados coletados.",
          "Nunca publique nome, imagem ou conversa de participante sem autorização.",
        ],
      },
    ],
    schedule: grid(
      "Conceito de UX Research, tipos de pesquisa, definição de problema e objetivos.",
      "Desk research guiada: dados sobre público gamer no Brasil.",
      "Missão: escrever o plano de pesquisa do projeto.",
      "Revisão em dupla dos planos (peer review).",
    ),
    activities: [
      {
        id: "d6-a1",
        title: "Plano de pesquisa",
        description:
          "Monte o plano de pesquisa do seu produto: objetivo, 3 perguntas de pesquisa, método, perfil e quantidade de participantes.",
        deliverable: "Documento do plano.",
        xp: 80,
      },
      {
        id: "d6-a2",
        title: "Desk research",
        description:
          "Reúna 5 dados confiáveis sobre o público do seu produto (fontes: Pesquisa Game Brasil, Newzoo, IBGE, matérias especializadas). Cite as fontes.",
        deliverable: "Lista de dados com links das fontes.",
        xp: 70,
      },
    ],
  },
  {
    number: 7,
    module: "m2",
    title: "Entrevistas e coleta de dados",
    hook: "Perguntar mal gera resposta bonita e inútil.",
    objectives: [
      "Construir roteiro de entrevista sem perguntas enviesadas.",
      "Aplicar técnicas de moderação.",
      "Realizar entrevistas reais com colegas.",
    ],
    theory: [
      {
        heading: "Como perguntar",
        points: [
          "Pergunte sobre o passado concreto: 'me conta a última vez que você...' em vez de 'você usaria...?'.",
          "Evite perguntas fechadas, duplas e que sugerem a resposta.",
          "Use os 5 porquês para chegar à motivação real.",
          "Silêncio é técnica: espere, a melhor resposta vem depois da pausa.",
        ],
      },
      {
        heading: "Moderação",
        points: [
          "Abertura (contexto e consentimento) → aquecimento → aprofundamento → fechamento.",
          "Não defenda seu produto, não corrija o participante, não induza.",
          "Registre: gravação com autorização, anotações, observações de comportamento.",
        ],
      },
    ],
    schedule: grid(
      "Técnicas de entrevista, vieses comuns, roteiro em funil.",
      "Reescrita coletiva de perguntas ruins para perguntas boas.",
      "Missão: entrevistas cruzadas em trio (entrevistador, participante, observador).",
      "Debriefing: o que surpreendeu em cada entrevista.",
    ),
    activities: [
      {
        id: "d7-a1",
        title: "Roteiro de entrevista",
        description:
          "Crie um roteiro com 10 perguntas abertas em funil, sem viés, ligado às suas perguntas de pesquisa.",
        deliverable: "Roteiro completo.",
        xp: 70,
      },
      {
        id: "d7-a2",
        title: "Duas entrevistas reais",
        description:
          "Entreviste 2 pessoas do público-alvo (podem ser colegas ou amigos gamers). Registre as respostas e 3 insights de cada uma.",
        deliverable: "Transcrição resumida + insights.",
        xp: 120,
      },
    ],
  },
  {
    number: 8,
    module: "m2",
    title: "Personas e mapas de empatia",
    hook: "Pare de projetar para 'todo mundo'. Todo mundo não existe.",
    objectives: [
      "Modelar personas a partir de dados reais.",
      "Construir mapas de empatia.",
      "Organizar informações coletadas em análises.",
    ],
    theory: [
      {
        heading: "Persona baseada em dados",
        points: [
          "Estrutura: nome, foto/ilustração, idade, contexto, rotina, objetivos, frustrações, comportamento digital, citação real.",
          "Persona não é invenção: cada característica vem de padrão observado na pesquisa.",
          "Proto-persona é aceitável no começo, desde que marcada como hipótese.",
          "2 a 3 personas por produto; mais que isso perde foco.",
        ],
        people: ["cooper"],
      },
      {
        heading: "Mapa de empatia",
        points: [
          "Quadrantes: o que pensa e sente, o que vê, o que ouve, o que fala e faz + dores e ganhos.",
          "Serve para transformar transcrição bruta em entendimento compartilhado pela equipe.",
        ],
        figure: "mapa-empatia",
      },
      {
        heading: "Da coleta à síntese",
        points: [
          "Afinidade: escreva cada achado num post-it e agrupe por semelhança.",
          "Cada grupo vira um tema; cada tema vira um insight; cada insight aponta uma oportunidade.",
        ],
      },
    ],
    schedule: grid(
      "Personas, proto-personas e mapas de empatia com exemplos do mercado gamer.",
      "Diagrama de afinidade coletivo com os achados das entrevistas do dia 7.",
      "Missão: montar 2 personas + 1 mapa de empatia do projeto.",
      "Galeria de personas: turma circula e comenta.",
    ),
    activities: [
      {
        id: "d8-a1",
        title: "Duas personas",
        description:
          "Crie 2 personas do seu produto com base nas entrevistas. Cada característica precisa ter origem em um dado coletado.",
        deliverable: "Fichas das personas (imagem ou PDF).",
        xp: 110,
      },
      {
        id: "d8-a2",
        title: "Mapa de empatia",
        description:
          "Monte o mapa de empatia da persona principal com os 6 quadrantes preenchidos.",
        deliverable: "Imagem do mapa de empatia.",
        xp: 80,
      },
    ],
  },
  {
    number: 9,
    module: "m2",
    title: "Jornada do usuário e análise de resultados",
    hook: "Onde exatamente o jogador desiste? Vamos marcar no mapa.",
    objectives: [
      "Construir a jornada do usuário com pontos de dor.",
      "Analisar resultados e priorizar oportunidades.",
      "Fechar a Fase 2 com relatório de pesquisa.",
    ],
    theory: [
      {
        heading: "Jornada do usuário",
        points: [
          "Colunas: fases da jornada; linhas: ações, pensamentos, emoções, pontos de contato, dores e oportunidades.",
          "Curva de emoção mostra onde a experiência quebra.",
          "Mapeie a jornada atual (as is) antes de propor a futura (to be).",
        ],
      },
      {
        heading: "Priorização",
        points: [
          "Matriz esforço x impacto: comece pelo alto impacto e baixo esforço.",
          "MoSCoW: must, should, could, won't.",
          "Justifique com dado, não com gosto pessoal.",
        ],
      },
      {
        heading: "Relatório de pesquisa",
        points: [
          "Objetivo, método, participantes, principais achados, insights, oportunidades e próximos passos.",
          "Comunique com evidência: citação real do participante ao lado de cada insight.",
        ],
      },
    ],
    schedule: grid(
      "Jornada do usuário, curva de emoção e técnicas de priorização.",
      "Construção guiada da jornada de uma persona da turma.",
      "Missão: jornada do próprio projeto + matriz de priorização.",
      "Checkpoint 2: apresentação de 5 min do relatório de pesquisa.",
    ),
    activities: [
      {
        id: "d9-a1",
        title: "Jornada do usuário",
        description:
          "Desenhe a jornada atual da sua persona com fases, ações, emoções, dores e oportunidades.",
        deliverable: "Imagem da jornada.",
        xp: 100,
      },
      {
        id: "d9-a2",
        title: "Checkpoint Fase 2 — relatório",
        description:
          "Entregue o relatório de pesquisa com achados, insights priorizados (esforço x impacto) e próximos passos.",
        deliverable: "PDF ou slides do relatório.",
        xp: 150,
      },
    ],
  },
  {
    number: 10,
    module: "m3",
    title: "Arquitetura da informação: organizando o inventário",
    hook: "Menu bagunçado é mochila de RPG sem categoria.",
    objectives: [
      "Aplicar elementos e conceitos de AI.",
      "Organizar conteúdo, rotulagem, navegação e busca.",
      "Criar o sitemap do projeto.",
    ],
    theory: [
      {
        heading: "Os 4 sistemas da AI (Rosenfeld & Morville)",
        points: [
          "Organização: como o conteúdo é agrupado (por tema, tarefa, público, ordem alfabética, cronologia).",
          "Rotulagem: os nomes que aparecem — use a linguagem do usuário, não a interna da empresa.",
          "Navegação: global, local, contextual, breadcrumbs, footer.",
          "Busca: campo, filtros, facetas, sugestões, resultado vazio útil.",
        ],
        people: ["rosenfeld-morville"],
      },
      {
        heading: "Card sorting e tree testing",
        points: [
          "Card sorting aberto: o usuário cria as categorias. Fechado: usa as suas.",
          "Tree testing valida se a pessoa encontra o item no menu proposto.",
        ],
      },
      {
        heading: "Sitemap e fluxo",
        points: [
          "Sitemap mostra a estrutura de telas; user flow mostra o caminho para completar uma tarefa.",
          "Notação de fluxo: retângulo = tela, losango = decisão, seta = ação.",
        ],
      },
    ],
    schedule: grid(
      "Sistemas de AI, rotulagem e padrões de navegação mobile x web.",
      "Card sorting em grupo com cartões de funcionalidades de plataforma de e-sports.",
      "Missão: sitemap do seu produto com no mínimo 12 telas.",
      "Tree testing rápido: um colega tenta achar 3 itens no seu sitemap.",
    ),
    activities: [
      {
        id: "d10-a1",
        title: "Sitemap",
        description:
          "Construa o sitemap do seu produto com hierarquia clara e rótulos na linguagem do usuário.",
        deliverable: "Imagem/link do sitemap (FigJam, Whimsical, papel).",
        xp: 90,
      },
      {
        id: "d10-a2",
        title: "Card sorting",
        description:
          "Faça um card sorting com 3 pessoas usando 15 itens do seu produto e registre como cada uma agrupou.",
        deliverable: "Fotos ou tabela dos agrupamentos + conclusão.",
        xp: 80,
      },
    ],
  },
  {
    number: 11,
    module: "m3",
    title: "User flows: o caminho até a vitória",
    hook: "Quantos toques até entrar num torneio? Se forem mais de 5, você tem um problema.",
    objectives: [
      "Mapear fluxos de tarefa completos.",
      "Reduzir passos e prever caminhos de erro.",
      "Documentar o fluxo principal do projeto.",
    ],
    theory: [
      {
        heading: "Anatomia de um fluxo",
        points: [
          "Entrada (de onde a pessoa vem) → passos → decisões → sucesso.",
          "Sempre desenhe também o caminho infeliz: erro de senha, sem internet, pagamento recusado, sala cheia.",
          "Conte os toques: cada passo extra derruba a conversão.",
        ],
        figure: "user-flow",
      },
      {
        heading: "Padrões que economizam passos",
        points: [
          "Login social, preenchimento automático, valores padrão inteligentes, ação em massa, undo em vez de confirmação.",
          "Onboarding progressivo: peça informação só quando ela for necessária.",
        ],
      },
    ],
    schedule: grid(
      "User flow, task flow e wireflow. Notação e boas práticas.",
      "Refatoração coletiva de um fluxo de cadastro com 9 passos.",
      "Missão: desenhar 2 fluxos do projeto (principal e secundário) com caminho de erro.",
      "Cronometragem em dupla: quantos passos e quantas dúvidas.",
    ),
    activities: [
      {
        id: "d11-a1",
        title: "Fluxo principal",
        description:
          "Desenhe o fluxo da tarefa mais importante do seu produto, incluindo pelo menos 2 caminhos de erro.",
        deliverable: "Imagem/link do fluxo.",
        xp: 90,
      },
      {
        id: "d11-a2",
        title: "Dieta de passos",
        description:
          "Reduza um fluxo existente (seu ou de um app real) em pelo menos 2 passos e justifique cada corte.",
        deliverable: "Antes/depois + justificativa.",
        xp: 70,
      },
    ],
  },
  {
    number: 12,
    module: "m3",
    title: "Wireframes de baixa fidelidade",
    hook: "Caixa cinza é o melhor amigo do designer: barata de mudar, honesta de testar.",
    objectives: [
      "Criar wireframes seguindo princípios de arquitetura da informação.",
      "Aplicar hierarquia visual e grid antes da estética.",
      "Produzir o wireframe das telas-chave.",
    ],
    theory: [
      {
        heading: "Por que baixa fidelidade",
        points: [
          "Foca em estrutura, prioridade e conteúdo — sem discussão de cor.",
          "Rápido de refazer: você testa 5 versões no tempo de finalizar uma.",
          "Fidelidades: crocodilo (rabisco) → lo-fi → mid-fi → hi-fi.",
        ],
        figure: "fidelidade",
      },
      {
        heading: "Hierarquia visual",
        points: [
          "Tamanho, peso, contraste, espaçamento e posição definem o que a pessoa lê primeiro.",
          "Padrões de leitura: F (conteúdo denso) e Z (páginas de campanha).",
          "Uma tela = um objetivo principal = um botão primário.",
        ],
        figure: "hierarquia-boa-ruim",
      },
      {
        heading: "Grid e layout",
        points: [
          "Mobile: 4 colunas, margem de 16 a 24 px, gutter de 16 px.",
          "Web: 12 colunas, largura máxima de conteúdo entre 1140 e 1280 px.",
          "Espaçamento em escala de 4 ou 8 px.",
        ],
      },
    ],
    schedule: grid(
      "Fidelidades, hierarquia visual, grid e padrões de leitura.",
      "Wireframe guiado de uma tela de torneio no papel e depois no Figma.",
      "Missão: wireframes lo-fi de 5 telas do projeto.",
      "Checkpoint 3: crítica em grupo dos wireframes (o que se entende sem explicação?).",
    ),
    activities: [
      {
        id: "d12-a1",
        title: "Wireframes lo-fi",
        description:
          "Produza wireframes de 5 telas-chave do seu produto seguindo seu sitemap e fluxo, com grid e hierarquia definidos.",
        deliverable: "Link do Figma ou PDF com as 5 telas.",
        xp: 130,
      },
      {
        id: "d12-a2",
        title: "Teste do estranho",
        description:
          "Mostre seus wireframes a alguém sem explicar. Anote o que a pessoa entendeu, o que não entendeu e o que mudaria.",
        deliverable: "Anotações do teste + ajustes planejados.",
        xp: 60,
      },
    ],
  },
  {
    number: 13,
    module: "m4",
    title: "Teoria das cores e comunicação visual",
    hook: "Vermelho e verde no mesmo botão? Bem-vindo ao inferno da acessibilidade.",
    objectives: [
      "Aplicar teoria das cores em interfaces.",
      "Construir uma paleta funcional com cores semânticas.",
      "Verificar contraste segundo a WCAG.",
    ],
    theory: [
      {
        heading: "Fundamentos",
        points: [
          "Matiz, saturação e brilho (HSB). Modelos RGB (tela) e CMYK (impressão).",
          "Harmonias: análoga, complementar, tríade, monocromática.",
          "Psicologia da cor é contextual e cultural — não é regra universal.",
        ],
      },
      {
        heading: "Paleta de produto",
        points: [
          "Primária (marca/ação), secundária, neutros (fundo, borda, texto) e semânticas: sucesso, alerta, erro, informação.",
          "Escala de 9 tons por cor facilita estados e temas escuros.",
          "Nunca comunique só por cor: use ícone e texto junto.",
        ],
      },
      {
        heading: "Contraste WCAG",
        points: [
          "Texto normal: mínimo 4.5:1. Texto grande (24 px ou 19 px em negrito): 3:1. Componentes e ícones: 3:1.",
          "Ferramentas: WebAIM Contrast Checker, plugin Stark, contraste nativo do Figma.",
        ],
        figure: "contraste-wcag",
      },
    ],
    schedule: grid(
      "Teoria das cores, modelos RGB/CMYK, harmonias e cores semânticas.",
      "Construção de escala de tons e teste de contraste ao vivo.",
      "Missão: paleta completa do projeto com verificação de contraste.",
      "Prova dos 9: simular daltonismo na paleta da turma.",
    ),
    activities: [
      {
        id: "d13-a1",
        title: "Paleta do produto",
        description:
          "Defina a paleta do seu produto: primária, secundária, 5 neutros e 4 cores semânticas, com códigos hex.",
        deliverable: "Imagem da paleta com hex e nomes.",
        xp: 90,
      },
      {
        id: "d13-a2",
        title: "Relatório de contraste",
        description:
          "Teste 6 combinações de cor da sua paleta no WebAIM e registre a razão de contraste e se passa em AA.",
        deliverable: "Tabela com prints dos testes.",
        xp: 70,
      },
    ],
  },
  {
    number: 14,
    module: "m4",
    title: "Tipografia para interface",
    hook: "Se o jogador precisa apertar os olhos, você perdeu.",
    objectives: [
      "Analisar tipografia e classificações tipográficas.",
      "Definir escala tipográfica e hierarquia.",
      "Avaliar legibilidade em telas.",
    ],
    theory: [
      {
        heading: "Classificação e anatomia",
        points: [
          "Serifada, sem serifa, monoespaçada, display, script.",
          "Anatomia: altura-x, ascendente, descendente, contraforma, peso.",
          "Fontes de display (as 'gamer') servem para título, nunca para parágrafo.",
        ],
      },
      {
        heading: "Escala e ritmo",
        points: [
          "Escala modular (1.25 ou 1.333): 12, 14, 16, 20, 24, 32, 40, 48 px.",
          "Corpo mínimo em mobile: 16 px. Entrelinha de 1.4 a 1.6 no corpo, 1.1 a 1.2 em títulos.",
          "Comprimento de linha ideal: 45 a 75 caracteres.",
          "Tracking negativo em títulos grandes; nunca em texto pequeno.",
        ],
      },
      {
        heading: "Pareamento e licença",
        points: [
          "Combine no máximo 2 famílias: uma para títulos, outra para texto.",
          "Verifique licença de uso: Google Fonts é livre; fontes comerciais exigem compra.",
        ],
      },
    ],
    schedule: grid(
      "Classificações, anatomia, escala modular e legibilidade em tela.",
      "Auditoria tipográfica de 3 sites de e-sports.",
      "Missão: definir a escala tipográfica do projeto e aplicar em 2 telas.",
      "Teste de leitura a 1 metro de distância no celular.",
    ),
    activities: [
      {
        id: "d14-a1",
        title: "Sistema tipográfico",
        description:
          "Escolha o par de fontes do seu produto e monte a escala completa (display, h1–h4, corpo, legenda, botão) com tamanho, peso e entrelinha.",
        deliverable: "Imagem do sistema tipográfico aplicado.",
        xp: 90,
      },
      {
        id: "d14-a2",
        title: "Auditoria tipográfica",
        description:
          "Analise a tipografia de um site/app gamer: fontes usadas, tamanhos, problemas de legibilidade e sua proposta de correção.",
        deliverable: "Análise com prints.",
        xp: 60,
      },
    ],
  },
  {
    number: 15,
    module: "m4",
    title: "UI Design: componentes, ícones e design system",
    hook: "Componente é asset reutilizável. Quem repete trabalho não termina o projeto.",
    objectives: [
      "Projetar botões, campos, cards e ícones consistentes.",
      "Montar um mini design system.",
      "Usar ferramentas de prototipação (Figma) com componentes e variantes.",
    ],
    theory: [
      {
        heading: "Componentes essenciais",
        points: [
          "Botões (primário, secundário, terciário, destrutivo) com todos os estados.",
          "Campos de formulário com label, placeholder, mensagem de ajuda e erro.",
          "Cards, listas, tabs, modais, toasts, badges, avatares, barra de progresso.",
        ],
      },
      {
        heading: "Ícones",
        points: [
          "Mesma família, mesma grade (24 px) e mesma espessura de traço.",
          "Ícone sozinho é ambíguo: acompanhe de rótulo sempre que possível.",
          "Bibliotecas: Lucide, Phosphor, Material Symbols.",
        ],
      },
      {
        heading: "Design system e tokens",
        points: [
          "Tokens: cor, espaçamento, raio, sombra, tipografia — definidos uma vez e reutilizados.",
          "Atomic design: átomos → moléculas → organismos → templates → páginas.",
          "No Figma: componentes, variantes, auto layout e bibliotecas compartilhadas.",
        ],
      },
    ],
    schedule: grid(
      "Componentes, estados, ícones e conceito de design system e tokens.",
      "Oficina de Figma: auto layout, componentes e variantes.",
      "Missão: montar a biblioteca base do projeto (cores, tipos, botões, campos, cards).",
      "Troca de bibliotecas entre duplas para teste de consistência.",
    ),
    activities: [
      {
        id: "d15-a1",
        title: "Mini design system",
        description:
          "Monte no Figma a biblioteca do seu produto: tokens de cor e espaçamento, tipografia, botões com variantes e estados, campos e cards.",
        deliverable: "Link do arquivo Figma.",
        xp: 140,
      },
      {
        id: "d15-a2",
        title: "Set de ícones",
        description:
          "Selecione ou desenhe 12 ícones do seu produto na mesma grade e espessura, com nome padronizado.",
        deliverable: "Imagem do conjunto de ícones.",
        xp: 70,
      },
    ],
  },
  {
    number: 16,
    module: "m4",
    title: "Layouts responsivos e padrões W3C",
    hook: "Seu layout precisa sobreviver do celular de 5 polegadas ao monitor ultrawide.",
    objectives: [
      "Criar layouts adaptáveis conforme padrões da internet.",
      "Aplicar breakpoints, grid fluido e mobile first.",
      "Considerar requisitos de acessibilidade e usabilidade em sites responsivos.",
    ],
    theory: [
      {
        heading: "Responsivo x adaptativo",
        points: [
          "Responsivo: grid fluido que se reorganiza continuamente.",
          "Adaptativo: layouts fixos trocados em breakpoints específicos.",
          "Mobile first: projete a versão pequena primeiro e vá acrescentando.",
        ],
      },
      {
        heading: "Breakpoints e comportamento",
        points: [
          "Referências: 360–767 (mobile), 768–1023 (tablet), 1024–1439 (desktop), 1440+ (wide).",
          "Padrões de reflow: coluna única, cards que empilham, menu que vira hambúrguer, tabela que vira lista.",
          "Alvos de toque de 44 px e área de polegar no mobile.",
        ],
        figure: "breakpoints",
      },
      {
        heading: "Padrões W3C",
        points: [
          "HTML semântico: header, nav, main, section, article, footer.",
          "WCAG 2.2 (perceptível, operável, compreensível, robusto) e WAI-ARIA quando o HTML não basta.",
          "Zoom até 200% sem quebrar layout e sem rolagem horizontal.",
        ],
      },
    ],
    schedule: grid(
      "Responsividade, breakpoints, mobile first e padrões W3C/WCAG.",
      "Adaptação guiada de uma tela desktop para mobile e tablet.",
      "Missão: versões responsivas de 2 telas do projeto.",
      "Checkpoint 4: apresentação das telas em 3 tamanhos.",
    ),
    activities: [
      {
        id: "d16-a1",
        title: "Trio responsivo",
        description:
          "Entregue 2 telas do seu produto em três tamanhos (mobile, tablet, desktop) explicando o que muda em cada breakpoint.",
        deliverable: "Imagens das 6 telas + notas de reflow.",
        xp: 130,
      },
      {
        id: "d16-a2",
        title: "Checklist W3C",
        description:
          "Avalie um site real com um checklist de 10 itens de responsividade e acessibilidade (semântica, zoom 200%, alvo de toque, contraste, foco visível...).",
        deliverable: "Checklist preenchido com evidências.",
        xp: 70,
      },
    ],
  },
  {
    number: 17,
    module: "m5",
    title: "Produção e tratamento de imagens",
    hook: "Sua tela linda pesando 12 MB não carrega no 3G do intervalo.",
    objectives: [
      "Usar formatos, resoluções e modos de cor corretos para a web.",
      "Realizar ajuste, recorte e retoque em imagens digitais.",
      "Otimizar exportação de imagens e arquivos de multimídia.",
    ],
    theory: [
      {
        heading: "Formatos e quando usar",
        points: [
          "JPG: fotos, sem transparência. PNG: transparência e traços nítidos. WebP/AVIF: web moderna, muito mais leve.",
          "SVG: vetor, ícones e logos — escala infinita e peso mínimo.",
          "GIF só para animação simples e legada; prefira vídeo MP4/WebM ou Lottie.",
        ],
      },
      {
        heading: "Resolução e cor",
        points: [
          "Tela trabalha em px e RGB; 72 ppi é referência histórica — o que importa é a dimensão em pixels.",
          "Exporte @1x, @2x e @3x para telas de alta densidade.",
          "Compressão: alvo abaixo de 200 KB por imagem de conteúdo; use TinyPNG/Squoosh.",
        ],
      },
      {
        heading: "Ajuste, recorte e retoque",
        points: [
          "Recorte com intenção: enquadramento, regra dos terços, espaço para texto.",
          "Ajustes: níveis, curvas, saturação, nitidez. Camadas e máscaras para edição não destrutiva.",
          "Retoque ético: nunca altere o sentido de uma imagem jornalística ou de pessoa real sem autorização.",
          "IA generativa: útil para cenários e mockups; sempre revise direitos, vieses e qualidade.",
        ],
      },
    ],
    schedule: grid(
      "Formatos, resolução, modos de cor e critérios de publicação na web.",
      "Oficina: recorte, máscara, ajuste e exportação otimizada (Photopea/Photoshop/Figma).",
      "Missão: produzir o pacote de imagens do projeto (capa, banner, avatares, ícone do app).",
      "Comparação de peso e qualidade entre os exports da turma.",
    ),
    activities: [
      {
        id: "d17-a1",
        title: "Pacote de assets",
        description:
          "Produza e trate 5 imagens do seu produto (capa, banner, card de torneio, avatar, ícone) exportando no formato correto e otimizado.",
        deliverable: "Pasta/link com as imagens + tabela de formato, dimensão e peso.",
        xp: 120,
      },
      {
        id: "d17-a2",
        title: "Antes & depois de otimização",
        description:
          "Pegue 3 imagens pesadas e otimize-as. Registre peso antes/depois e a diferença visual percebida.",
        deliverable: "Comparativo com números.",
        xp: 60,
      },
    ],
  },
  {
    number: 18,
    module: "m5",
    title: "Acessibilidade de verdade",
    hook: "Acessibilidade não é extra. É o mínimo — e no Brasil é lei.",
    objectives: [
      "Aplicar conceitos e técnicas de acessibilidade.",
      "Testar interface com leitor de tela e teclado.",
      "Corrigir problemas de acessibilidade no próprio projeto.",
    ],
    theory: [
      {
        heading: "Princípios WCAG (POUR)",
        points: [
          "Perceptível: texto alternativo, legenda, contraste, não depender só de cor.",
          "Operável: navegação por teclado, foco visível, tempo suficiente, sem conteúdo que provoque convulsão.",
          "Compreensível: linguagem clara, comportamento previsível, ajuda em erros.",
          "Robusto: código semântico que funciona com tecnologias assistivas.",
        ],
      },
      {
        heading: "Técnicas práticas",
        points: [
          "Texto alternativo descreve função, não aparência; imagem decorativa recebe alt vazio.",
          "Ordem de foco lógica, skip link, labels sempre associados aos campos.",
          "Legendas e transcrição em vídeo; nunca autoplay com som.",
          "Considere daltonismo, baixa visão, dislexia, TDAH, deficiência motora e uso situacional (sol na tela, uma mão só).",
        ],
        figure: "formulario-bom-ruim",
      },
      {
        heading: "Ferramentas",
        points: [
          "Leitores de tela: NVDA (Windows), VoiceOver (Mac/iOS), TalkBack (Android).",
          "Auditoria: Lighthouse, axe DevTools, WAVE, ASES (governo brasileiro).",
        ],
      },
    ],
    schedule: grid(
      "Conceitos e técnicas de acessibilidade, WCAG e legislação brasileira.",
      "Experiência prática: navegar um site só com teclado e depois com leitor de tela.",
      "Missão: auditoria de acessibilidade do próprio projeto + correções.",
      "Relato das barreiras encontradas e do que mudou.",
    ),
    activities: [
      {
        id: "d18-a1",
        title: "Auditoria de acessibilidade",
        description:
          "Rode Lighthouse/WAVE em um site e liste 8 problemas com o critério WCAG correspondente e a correção proposta.",
        deliverable: "Relatório com prints.",
        xp: 100,
      },
      {
        id: "d18-a2",
        title: "Correções no seu projeto",
        description:
          "Aplique no mínimo 5 melhorias de acessibilidade nas suas telas (contraste, alvo de toque, alt, foco, rótulos) e documente antes/depois.",
        deliverable: "Imagens antes/depois + lista de correções.",
        xp: 90,
      },
    ],
  },
  {
    number: 19,
    module: "m6",
    title: "Protótipo interativo",
    hook: "Hoje seu Figma vira algo que parece de verdade na mão do jogador.",
    objectives: [
      "Prototipar navegação e microinterações no Figma.",
      "Aplicar transições e componentes interativos.",
      "Preparar o protótipo para teste de usabilidade.",
    ],
    theory: [
      {
        heading: "Níveis de protótipo",
        points: [
          "Papel, clicável simples, alta fidelidade com animação, protótipo em código.",
          "Escolha o nível pelo que você precisa aprender, não pelo que impressiona.",
        ],
      },
      {
        heading: "Prototipando no Figma",
        points: [
          "Conexões entre frames, overlays para modais, smart animate para transições.",
          "Componentes interativos para hover, pressionado e toggle.",
          "Variáveis e condicionais para simular estados como login e carrinho.",
        ],
      },
      {
        heading: "Preparando o teste",
        points: [
          "Defina 3 tarefas reais que a pessoa deve conseguir concluir sozinha.",
          "Prepare roteiro, formulário de observação e cronômetro.",
        ],
        people: ["krug"],
      },
    ],
    schedule: grid(
      "Níveis de protótipo, recursos de prototipação e preparação do teste.",
      "Oficina Figma: overlays, smart animate e componentes interativos.",
      "Missão: deixar o protótipo do fluxo principal navegável ponta a ponta.",
      "Teste rápido em dupla: o colega tenta concluir sem ajuda.",
    ),
    activities: [
      {
        id: "d19-a1",
        title: "Protótipo navegável",
        description:
          "Deixe o fluxo principal do seu produto totalmente clicável, com transições e pelo menos 2 microinterações.",
        deliverable: "Link do protótipo do Figma (modo apresentação liberado).",
        xp: 150,
      },
      {
        id: "d19-a2",
        title: "Roteiro de teste",
        description:
          "Escreva o roteiro do teste de usabilidade: contexto, 3 tarefas, o que observar e as perguntas finais.",
        deliverable: "Documento do roteiro.",
        xp: 70,
      },
    ],
  },
  {
    number: 20,
    module: "m6",
    title: "Teste de usabilidade e iteração",
    hook: "Não é o usuário que erra. É a interface que ensina mal.",
    objectives: [
      "Aplicar teste de usabilidade moderado.",
      "Analisar resultados e priorizar correções.",
      "Iterar o protótipo com base em evidência.",
    ],
    theory: [
      {
        heading: "Como conduzir",
        points: [
          "Peça para a pessoa pensar em voz alta. Não ajude, não explique, não defenda.",
          "Registre: taxa de sucesso, tempo, número de erros, comentários e emoções.",
          "5 participantes revelam cerca de 85% dos problemas de usabilidade.",
        ],
      },
      {
        heading: "Análise",
        points: [
          "Agrupe problemas por tela e por severidade (0–4).",
          "Separe problema real de preferência pessoal — conte quantas pessoas travaram no mesmo ponto.",
          "Priorize por impacto x esforço e refaça só o que é evidência.",
        ],
      },
    ],
    schedule: grid(
      "Método do teste de usabilidade, métricas e erros comuns de moderação.",
      "Rodada 1 de testes cruzados entre grupos (moderador + observador).",
      "Missão: consolidar achados e corrigir o protótipo.",
      "Rodada 2 de teste com as correções aplicadas.",
    ),
    activities: [
      {
        id: "d20-a1",
        title: "3 testes de usabilidade",
        description:
          "Teste seu protótipo com 3 pessoas. Registre para cada tarefa: sucesso/falha, tempo, erros e falas relevantes.",
        deliverable: "Planilha ou documento com os resultados.",
        xp: 130,
      },
      {
        id: "d20-a2",
        title: "Iteração documentada",
        description:
          "Aplique as correções prioritárias e mostre antes/depois de pelo menos 3 telas, citando o achado que motivou cada mudança.",
        deliverable: "Comparativo antes/depois com justificativas.",
        xp: 110,
      },
    ],
  },
  {
    number: 21,
    module: "m6",
    title: "Boss fight: apresentação do projeto final",
    hook: "Case fechado, portfólio na mão. Hora de defender seu projeto.",
    objectives: [
      "Organizar o case completo do projeto.",
      "Comunicar decisões de design de maneira assertiva.",
      "Selecionar as informações necessárias para o portfólio.",
    ],
    theory: [
      {
        heading: "Estrutura de um case de portfólio",
        points: [
          "Contexto e problema → seu papel → pesquisa → insights → arquitetura e fluxos → wireframes → UI → protótipo → teste → resultados → aprendizados.",
          "Mostre o processo, não só a tela bonita. Recrutador contrata raciocínio.",
          "Inclua números: passos reduzidos, taxa de sucesso no teste, contraste corrigido.",
        ],
      },
      {
        heading: "Apresentação",
        points: [
          "8 minutos: 1 de contexto, 2 de pesquisa, 3 de solução, 1 de teste, 1 de aprendizados.",
          "Fale para o público, não para o slide. Ensaie o tempo.",
          "Prepare-se para perguntas do tipo 'por que essa decisão?' — a resposta é sempre um dado.",
        ],
      },
    ],
    schedule: grid(
      "Estrutura de case, storytelling e critérios de avaliação final.",
      "Montagem guiada dos slides do case.",
      "Apresentações finais (8 min por aluno/grupo) com banca da turma.",
      "Devolutiva individual, entrega de XP final e cerimônia de conquistas.",
    ),
    activities: [
      {
        id: "d21-a1",
        title: "Case final",
        description:
          "Monte o case completo do seu produto com todas as etapas do curso, do problema ao teste, pronto para portfólio.",
        deliverable: "Link do case (PDF, Figma, Behance ou site).",
        xp: 200,
      },
      {
        id: "d21-a2",
        title: "Apresentação",
        description:
          "Apresente o projeto em 8 minutos defendendo cada decisão com dado de pesquisa ou teste.",
        deliverable: "Slides utilizados na apresentação.",
        xp: 150,
      },
    ],
  },
];

export const TOTAL_XP = DAYS.reduce(
  (sum, d) => sum + d.activities.reduce((s, a) => s + a.xp, 0),
  0,
);

export const ALL_ACTIVITIES = DAYS.flatMap((d) =>
  d.activities.map((a) => ({ ...a, day: d.number })),
);

export function getDay(n: number) {
  return DAYS.find((d) => d.number === n);
}

export function getModule(id: string) {
  return MODULES.find((m) => m.id === id);
}

export const LEVELS = [
  { name: "Bronze I", min: 0 },
  { name: "Bronze II", min: 200 },
  { name: "Prata I", min: 500 },
  { name: "Prata II", min: 900 },
  { name: "Ouro I", min: 1400 },
  { name: "Ouro II", min: 2000 },
  { name: "Platina", min: 2700 },
  { name: "Diamante", min: 3400 },
  { name: "Lenda do UX", min: 4000 },
];

export function levelFor(xp: number) {
  let current = LEVELS[0]!;
  let index = 0;
  LEVELS.forEach((l, i) => {
    if (xp >= l.min) {
      current = l!;
      index = i;
    }
  });
  const next = LEVELS[index + 1];
  const progress = next
    ? Math.round(((xp - current.min) / (next.min - current.min)) * 100)
    : 100;
  return { current, next, progress, index };
}
