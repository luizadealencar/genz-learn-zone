// Quem são os nomes que aparecem no conteúdo.
// Use no curriculum.ts assim:  people: ["nielsen", "norman"]

export type Person = {
  name: string;
  lived: string;
  what: string;
  why: string;
};

export const PEOPLE: Record<string, Person> = {
  nielsen: {
    name: "Jakob Nielsen",
    lived: "dinamarquês, nascido em 1957",
    what: "Pesquisador de usabilidade. Publicou em 1994 as 10 heurísticas de usabilidade e fundou com Don Norman a Nielsen Norman Group, consultoria que virou referência mundial na área.",
    why: "As heurísticas dele são até hoje o checklist mais usado para avaliar uma interface sem precisar de teste com usuário. Também é dele a ideia de que 5 pessoas bastam para achar a maioria dos problemas de usabilidade.",
  },
  norman: {
    name: "Don Norman",
    lived: "americano, nascido em 1935",
    what: "Cientista cognitivo. Escreveu 'O Design do Dia a Dia' (1988) e cunhou o termo 'user experience' quando trabalhava na Apple nos anos 1990.",
    why: "Foi ele quem tirou a culpa do usuário: se a pessoa erra ao usar algo, o problema é do design, não dela. A 'porta Norman' — aquela que você empurra quando devia puxar — leva o nome dele.",
  },
  garrett: {
    name: "Jesse James Garrett",
    lived: "americano, nascido em 1975",
    what: "Designer de informação. Publicou em 2000 o diagrama dos 5 planos da experiência do usuário, depois expandido no livro 'The Elements of User Experience'.",
    why: "Os 5 pilares que você viu — estratégia, escopo, estrutura, esqueleto e superfície — são o modelo dele. É o que explica por que não se começa um projeto escolhendo cor.",
  },
  fitts: {
    name: "Paul Fitts",
    lived: "americano, 1912–1965",
    what: "Psicólogo que estudou desempenho humano na aviação militar. Em 1954 formulou a lei que relaciona o tempo de acertar um alvo com o tamanho dele e a distância.",
    why: "A lei foi criada muito antes do mouse existir, mas explica por que botão pequeno em canto de tela irrita, e por que o menu do macOS fica colado no topo.",
  },
  hick: {
    name: "William Edmund Hick",
    lived: "britânico, 1912–1974",
    what: "Psicólogo. Junto com Ray Hyman formulou em 1952 a lei que descreve como o tempo de decisão cresce conforme o número de opções.",
    why: "É a justificativa científica para simplificar menu, reduzir escolha e usar etapas. Mais opção não é mais liberdade: é mais tempo parado decidindo.",
  },
  "rosenfeld-morville": {
    name: "Louis Rosenfeld e Peter Morville",
    lived: "americanos, ativos desde os anos 1990",
    what: "Autores de 'Information Architecture for the World Wide Web' (1998), livro conhecido como 'o livro do urso polar'.",
    why: "Foram eles que organizaram a arquitetura da informação em quatro sistemas: organização, rotulagem, navegação e busca. É o vocabulário que a área usa até hoje.",
  },
  krug: {
    name: "Steve Krug",
    lived: "americano, nascido em 1950",
    what: "Consultor de usabilidade, autor de 'Não Me Faça Pensar' (2000), um dos livros de UX mais vendidos da história.",
    why: "Defendeu que teste de usabilidade não precisa ser caro nem científico: pouca gente, com frequência, já resolve. O título do livro é a regra em si.",
  },
  cooper: {
    name: "Alan Cooper",
    lived: "americano, nascido em 1952",
    what: "Programador e designer, criador do Visual Basic. Introduziu a técnica de personas no livro 'The Inmates Are Running the Asylum' (1998).",
    why: "Antes dele, projetava-se para 'o usuário', uma abstração. A persona obriga a equipe a decidir para quem, com nome e contexto.",
  },
  "design-council": {
    name: "Design Council (Reino Unido)",
    lived: "organização britânica, modelo publicado em 2005",
    what: "Órgão britânico de design que analisou o processo de onze empresas grandes e percebeu que todas seguiam o mesmo ritmo: abrir, fechar, abrir, fechar. Batizou isso de Double Diamond.",
    why: "É o diagrama mais usado no mundo para explicar processo de design. O ponto dele não é a técnica, e sim a disciplina de não pular a primeira metade — a de descobrir qual é o problema.",
  },
  knapp: {
    name: "Jake Knapp",
    lived: "americano, nascido em 1978",
    what: "Ex-designer do Google Ventures. Criou o formato Design Sprint e escreveu o livro 'Sprint' (2016).",
    why: "O Crazy 8s — oito ideias em oito minutos — vem do método dele. A ideia é gerar quantidade antes de julgar qualidade.",
  },
};

export function getPeople(ids?: string[]): Person[] {
  if (!ids) return [];
  return ids.map((id) => PEOPLE[id]).filter((p): p is Person => Boolean(p));
}
