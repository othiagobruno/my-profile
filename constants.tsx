import { ExperienceItem, SkillCategory } from './types';
import { Server, Layout, Cloud, Database, Cpu, Layers } from 'lucide-react';
import React from 'react';

export const PROFILE = {
  name: "Thiago Bruno Miranda",
  title: "Tech Lead | Software Engineer",
  summary: "Apaixonado por tecnologia e inovação, com mais de 8 anos de carreira. Tenho atuado em projetos de fintechs, health intelligence, marketplaces e SaaS. Meu foco é unir valor de negócio e excelência técnica, construindo soluções digitais escaláveis e seguras.",
  contact: {
    phone: "+55 99 98807-0754",
    email: "thiagobrunomiranda@gmail.com",
    linkedin: "linkedin.com/in/othiagobruno",
    location: "Brasil"
  }
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Backend & Languages",
    items: ["Node.js", "NestJS", "GoLang", "Python", "PHP", "Clean Code", "DDD", "TDD"],
    icon: <Server className="w-6 h-6 text-cyan-400" />
  },
  {
    category: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Flutter", "Typescript", "Tailwind"],
    icon: <Layout className="w-6 h-6 text-cyan-400" />
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (Fargate, Lambda)", "Google Cloud", "Azure", "Docker", "Jenkins", "Microservices"],
    icon: <Cloud className="w-6 h-6 text-cyan-400" />
  },
  {
    category: "Data & Messaging",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "SQS", "BullMQ", "GraphQL"],
    icon: <Database className="w-6 h-6 text-cyan-400" />
  },
  {
    category: "Specialized",
    items: ["System Architecture", "AI Integrations", "Open Finance", "SaaS Platforms"],
    icon: <Cpu className="w-6 h-6 text-cyan-400" />
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    company: "Be Growth Brasil Internet S.A.",
    role: "Líder Técnico",
    period: "Abr 2024 - Presente",
    description: [
      "Líder Técnico com foco em arquitetura de software e gestão de times ágeis.",
      "Definição de estratégias tecnológicas, boas práticas de engenharia e padrões de qualidade.",
      "Garantia de soluções seguras, escaláveis e alinhadas ao negócio."
    ],
    techStack: ["Architecture", "Leadership", "Agile", "Full Stack"]
  },
  {
    id: "2",
    company: "GOK | Inovação Digital",
    role: "Desenvolvedor Backend Senior",
    period: "Ago 2023 - Abr 2024",
    description: [
      "Atuação na squad de Busca da RD (Raia e Drogasil).",
      "Migração completa do microsserviço de busca de PHP para Node.js em apenas 1 mês.",
      "Reestruturação de todos os endpoints aplicando princípios SOLID e DDD com cobertura total de testes unitários (Jest)."
    ],
    techStack: ["Node.js", "PHP", "Jest", "SOLID", "DDD"]
  },
  {
    id: "3",
    company: "Despezzas",
    role: "Fundador",
    period: "Jan 2023 - Abr 2024",
    description: [
      "Desenvolvimento de aplicativo de gestão financeira com mais de 300 mil usuários ativos.",
      "Integração com Open Finance (Brasil) e Plaid - Open Banking (EUA) para conexão com múltiplas instituições financeiras.",
      "Uso de Inteligência Artificial para categorização automática de transações e geração de insights personalizados."
    ],
    techStack: ["AI", "Open Finance", "Plaid", "Mobile", "Fintech"]
  },
  {
    id: "4",
    company: "dr.consulta",
    role: "Desenvolvedor React Senior",
    period: "Mar 2023 - Jun 2023",
    description: [
      "Participação no revamp do aplicativo e criação do novo aplicativo Cuidarme a partir do código existente do DrConsulta.",
      "Criação de CLI que rodasse o app de acordo com o solicitado, reduzindo sprint prevista para 15 dias em apenas 5 dias.",
      "Solução bem recebida pela equipe e cliente."
    ],
    techStack: ["React", "CLI", "Automation", "Mobile"]
  },
  {
    id: "5",
    company: "Dasa",
    role: "Desenvolvedor Backend Senior",
    period: "Nov 2021 - Mar 2023",
    description: [
      "Desenvolvedor backend com foco em NestJS e GraphQL.",
      "Desenvolvimento de mais de 50% dos testes unitários do backend.",
      "Contribuição nas decisões de regras, arquitetura e implementações das principais funcionalidades do portal."
    ],
    techStack: ["NestJS", "GraphQL", "Testing", "Architecture"]
  },
  {
    id: "6",
    company: "Connectabil",
    role: "Desenvolvedor Full Stack Senior",
    period: "Mar 2022 - Out 2022",
    description: [
      "Reconstrução completa do frontend com Next.js.",
      "Criação de aplicativo Flutter para candidatos (entregue como bônus) em 1 mês.",
      "Desenvolvimento de 4 micro-frontends da plataforma em 5 meses, criando solução escalável e fácil de manter."
    ],
    techStack: ["Next.js", "Flutter", "Micro-frontends"]
  },
  {
    id: "7",
    company: "Connectabil",
    role: "Desenvolvedor Full Stack",
    period: "Abr 2021 - Nov 2021",
    description: [
      "Criação de plataforma completa usando React, Node.js, React-Query, Chakra-UI e MongoDB.",
      "Interface amigável em React com backend em Node.js e NestJS.",
      "Utilização de React-Query para melhorar performance das requisições e Chakra-UI para estilização."
    ],
    techStack: ["React", "Node.js", "NestJS", "MongoDB", "React-Query", "Chakra-UI"]
  },
  {
    id: "8",
    company: "Bevas Wealth Management",
    role: "Desenvolvedor Full Stack Senior",
    period: "Dez 2021 - Mar 2022",
    description: [
      "Líder de projeto desafiador com React Native, ReactJS e NestJS.",
      "Criação completa de aplicativo com React Native em apenas 3 meses.",
      "Desenvolvimento de BFF que consumia backend legado da plataforma e construção de administrativo, garantindo satisfação do cliente."
    ],
    techStack: ["React Native", "React", "NestJS", "MySQL", "Docker", "BFF"]
  },
  {
    id: "9",
    company: "SENSI CONECT",
    role: "Desenvolvedor Full Stack Senior",
    period: "Jan 2020 - Mar 2022",
    description: [
      "Atuação no desenvolvimento de diversos projetos, trazendo novas tecnologias para a empresa.",
      "Introdução de Node.js no backend, trazendo mais flexibilidade e velocidade para o time considerando facilidade de desenvolvimento e curva de aprendizado.",
      "Implementação de Flutter em novos projetos."
    ],
    techStack: ["Node.js", "Flutter", "Innovation"]
  },
  {
    id: "10",
    company: "SENSI CONECT",
    role: "Desenvolvedor Front End",
    period: "Mar 2019 - Jan 2020",
    description: [
      "Apoio em projetos existentes da empresa.",
      "Criação de novas bibliotecas para uso interno (como biblioteca de UI para aplicações em React Native).",
      "Ajuda e treinamento para desenvolvedores trainee e junior, além de participação em entregas diretas com o cliente."
    ],
    techStack: ["React Native", "UI Libraries", "Mentoring"]
  },
  {
    id: "11",
    company: "Freelance",
    role: "Desenvolvedor Full Stack",
    period: "Jan 2017 - Mar 2019",
    description: [
      "Desenvolvimento de projetos diversos como freelancer.",
      "Experiência com múltiplas tecnologias e stacks.",
      "Atendimento direto a clientes e gestão de projetos."
    ],
    techStack: ["Full Stack", "Multiple Technologies", "Client Management"]
  }
];