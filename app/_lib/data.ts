export const profile = {
  name: "Guilherme Nono",
  role: "Desenvolvedor Back-end .NET",
  location: "Igaraçu do Tietê, SP — disponível para mudança",
  github: "https://github.com/GuilhermeNono",
  linkedin: "https://www.linkedin.com/in/guilherme-nono/",
  avatar: "https://avatars.githubusercontent.com/u/43996917?v=4",
  summary:
    "Desenvolvedor Back-end com experiência prática no ecossistema .NET (C#), focado na construção de APIs RESTful escaláveis. Sólidos conhecimentos em Clean Architecture, DDD, Design Patterns e bancos de dados SQL. Vivência com Docker, testes automatizados e metodologias ágeis. Atualmente cursando Gestão da TI na FATEC, busco desafios técnicos que envolvam arquitetura de software e otimização de performance.",
};

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário" },
];

export type SkillGroup = {
  title: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens & Frameworks",
    skills: [
      { name: "C# / .NET Core", level: 95 },
      { name: "ASP.NET Web API", level: 92 },
      { name: "Entity Framework", level: 85 },
      { name: "Go", level: 60 },
      { name: "Java / Spring Boot", level: 55 },
    ],
  },
  {
    title: "Arquitetura & Design",
    skills: [
      { name: "Clean Architecture", level: 90 },
      { name: "DDD", level: 85 },
      { name: "Design Patterns", level: 85 },
      { name: "MVC", level: 80 },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "Modelagem Relacional", level: 85 },
      { name: "Tuning de Consultas", level: 80 },
    ],
  },
  {
    title: "DevOps & Ferramentas",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Git & CI/CD", level: 85 },
      { name: "Swagger", level: 80 },
      { name: "xUnit / Moq", level: 80 },
    ],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Upper",
    role: "Desenvolvedor Back-end",
    period: "Julho de 2023 — Atual",
    bullets: [
      "Atuação no desenvolvimento e sustentação de soluções para os setores de Social Media e Fidelização.",
      "Desenvolvimento de APIs RESTful robustas utilizando .NET Core, seguindo os princípios de Clean Architecture e DDD para garantir desacoplamento e manutenibilidade.",
      "Implementação de Design Patterns (como Builder e Abstract Factory) para resolver problemas complexos de criação de objetos e regras de negócio.",
      "Criação e manutenção de ambientes de desenvolvimento isolados utilizando Docker.",
      "Escrita de testes unitários e de integração, assegurando a qualidade do código e reduzindo a incidência de bugs em produção.",
      "Otimização de consultas SQL e gerenciamento de banco de dados relacional para melhoria de performance das aplicações.",
      "Colaboração ativa em Code Reviews e reuniões de arquitetura utilizando Git Flow (Azure Repos e Bitbucket).",
    ],
  },
  {
    company: "MagicStar",
    role: "Estágio em Suporte Técnico",
    period: "Janeiro de 2019 — Julho de 2019",
    bullets: [
      "Diagnóstico e resolução de problemas de hardware e software, desenvolvendo forte capacidade analítica e habilidades de comunicação com o cliente.",
    ],
  },
];

export type EducationEntry = {
  school: string;
  course: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    school: "FATEC — Faculdade de Tecnologia do Estado de São Paulo",
    course: "Gestão da Tecnologia da Informação (Superior Tecnológico)",
    period: "Previsão de conclusão: Dez/2028",
  },
  {
    school: "ETEC — Escola Técnica Estadual",
    course: "Técnico em Desenvolvimento de Sistemas",
    period: "Concluído em 2023",
  },
  {
    school: "ETEC — Escola Técnica Estadual",
    course: "Técnico em Informática",
    period: "Concluído em 2019",
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "FinNet",
    description:
      "API moderna de finanças pessoais construída em .NET 10, com Clean Architecture, vertical slices e um fluxo de aplicação orientado a Result.",
    tags: [".NET 10", "Clean Architecture", "Vertical Slices"],
    url: "https://github.com/GuilhermeNono/FinNet",
    featured: true,
  },
  {
    name: "Nemeya",
    description:
      "Provedor de identidade construído com ASP.NET Core, .NET 8, Docker e SQL Server, oferecendo uma base robusta para autenticação em aplicações modernas.",
    tags: [".NET 8", "Docker", "SQL Server", "Identity"],
    url: "https://github.com/GuilhermeNono/Nemeya",
    featured: true,
  },
  {
    name: "DataPoints",
    description:
      "API para transferência de pontos internos entre usuários utilizando tecnologia blockchain. Desenvolvida em C# com .NET 8, DbUp e Entity Framework.",
    tags: ["C#", ".NET 8", "Blockchain", "DbUp"],
    url: "https://github.com/GuilhermeNono/DataPoints",
    featured: true,
  },
  {
    name: "Freyr-Api",
    description:
      "API .NET para gerenciamento de inventário, produtos e dados de negócio, servindo de base sólida e escalável para sistemas corporativos.",
    tags: ["C#", ".NET", "Inventory"],
    url: "https://github.com/GuilhermeNono/Freyr-Api",
  },
  {
    name: "Engine.Net",
    description:
      "Motor gráfico de estudo construído com .NET 8 e Silk.NET, explorando vertex buffers, shaders GLSL e transformações de coordenadas 3D do zero.",
    tags: [".NET 8", "Silk.NET", "Graphics"],
    url: "https://github.com/GuilhermeNono/Engine.Net",
  },
  {
    name: "SqlBuilder-Net",
    description:
      "Biblioteca .NET para simplificar e controlar a construção de comandos SQL dinâmicos, usando variáveis escalares de forma segura.",
    tags: [".NET", "SQL", "Library"],
    url: "https://github.com/GuilhermeNono/SqlBuilder-Net",
  },
  {
    name: "Webhook-Receiver-Api",
    description:
      "API simples e dinâmica em Go para receber webhooks, pronta para rodar em Docker com um túnel público automático via ngrok.",
    tags: ["Go", "Docker", "Webhooks"],
    url: "https://github.com/GuilhermeNono/Webhook-Receiver-Api",
  },
  {
    name: "ShootUp Game",
    description:
      "Protótipo compacto de um jogo estilo shoot 'em up, com combates arcade, ondas de inimigos, power-ups e progressão por pontuação.",
    tags: ["Game Dev", "C#"],
    url: "https://github.com/Purple-Panther/ShootUpProj",
  },
];
