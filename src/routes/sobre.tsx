import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({ links: [{ rel: "canonical", href: "https://www.jjcafe.com.br/sobre" }], meta: [{ property: "og:url", content: "https://www.jjcafe.com.br/sobre" }, ...meta("Sobre José Luiz Messias Ferreira | JJ Café", "Administrador, consultor e professor com passagem por Três Corações, Nespresso, Fresenius Kabi, GM e Accor.")] }),
  component: Sobre,
});

const trajetoria = [
  ["2020 – atual", "IBS · Programa Sebrae", "Professor de empreendedorismo. Mais de 2.200 horas capacitando empreendedores na região de Sorocaba."],
  ["2020 – atual", "JJ Café Produtos e Serviços", "Venda de café em grão, locação de máquinas espresso, assistência técnica e consultoria financeira, organizacional, administrativa e de processos."],
  ["2015 – 2016", "Café Três Corações", "Gerente Nacional de Pós-Venda, com operações HORECA e Food Solutions em todo o Brasil."],
  ["2009 – 2015", "Fresenius Kabi", "Administrador de operações: contratos de locação e comodato, logística e projeto RFID."],
  ["2008 – 2009", "Projeto General Motors", "Consultor de processos em concessionárias Chevrolet com Kaizen."],
  ["2007 – 2008", "CAIC · Operação de atendimento Nespresso", "Gerente geral na implantação da operação de assistência técnica e pós-venda, com formação da equipe e organização da logística de atendimento."],
  ["2004 – 2007", "UNIP · Universidade Paulista", "Professor universitário em cursos de graduação e gestão, com disciplinas de qualidade, logística, liderança e administração de processos."],
  ["2002 – 2007", "DAB Coffee", "Gerente de operações: gestão de 155 colaboradores e atendimento a uma carteira de 1.300 clientes, com 4.000 máquinas em 2.700 pontos de venda."],
  ["1995 – 2002", "Accor · Dalkia Infra 4", "Gestão regional de infraestrutura com 480 colaboradores indiretos."],
  ["1985 – 1993", "Metalúrgica Taunus", "Atuação do desenho técnico à coordenação de processos de produção, com desenvolvimento de produtos, equipes polivalentes e programação de corte a laser."],
];

const formacao = [
  "Administração de Empresas — FKB",
  "Pós em Planejamento Empresarial — USJT",
  "Pós em Comércio Exterior — USJT",
  "Gestão Estratégica de Operações — FGV",
  "Bacharelado em Tecnologia da Informação, com ênfase em Internet das Coisas — UNIVESP (2025)",
  "Engenharia da Computação — UNIVESP (em andamento)",
  "EMPRETEC — Sebrae",
  "Reforma Tributária — FGV",
];

function Sobre() {
  return (
    <>
      <PageHero eyebrow="Sobre" title="José Luiz Messias Ferreira" text="Administrador, consultor e professor. Uma trajetória que reúne gestão de operações, formação de equipes e experiência no mercado de café para apoiar empreendedores em decisões práticas." />
      <section className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl text-primary">Experiência aplicada ao seu negócio</h2>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>Desde 2020, à frente da JJ Café, conecto café em grão, locação de máquinas espresso e assistência técnica à consultoria financeira, organizacional, administrativa e de processos. O atendimento inclui contratos, layout e implantação de ERP Omie, conforme o escopo acordado. Também ministro aulas de empreendedorismo pela IBS nos programas do Sebrae, com mais de 2.200 horas de capacitação registradas no meu currículo de junho de 2026.</p>
          <p>Minha experiência em pós-venda, locação e comodato inclui operações de café e a gestão de equipamentos para hospitais e clínicas na Fresenius Kabi. Essa vivência contribui para analisar contratos, manutenção, logística e organização do atendimento.</p>
          <p>Na consultoria, trago a prática de melhoria contínua em processos, treinamento de equipes e indicadores de gestão, incluindo atuação em projeto para concessionárias Chevrolet e docência universitária na UNIP.</p>
        </div>
        <h2 className="mt-14 text-3xl text-primary">Resultados ao longo da trajetória</h2>
        <ul className="mt-6 space-y-4 text-muted-foreground">
          <li><strong className="text-foreground">Operações de café em escala:</strong> na DAB Coffee, gestão de 155 colaboradores e atendimento de 1.300 clientes, com 4.000 máquinas distribuídas em 2.700 pontos de venda (2002–2007).</li>
          <li><strong className="text-foreground">Melhoria de processos industriais:</strong> na Taunus, aumento de 15% na produtividade em pedidos de produtos especiais e redução de 50% no prazo de atendimento de pedidos, conforme resultados relatados no currículo (1985–1993).</li>
          <li><strong className="text-foreground">Tecnologia aplicada à operação:</strong> desenvolvimento e implantação de projeto RFID para controle de ativos na Fresenius Kabi (2009–2015).</li>
        </ul>
        <p className="mt-5 text-sm text-muted-foreground">Dados históricos apresentados no currículo de junho de 2026. As experiências citadas não representam vínculos comerciais atuais das empresas com a JJ Café nem garantia de resultados futuros.</p>
        <h2 className="mt-14 text-3xl text-primary">Trajetória selecionada</h2>
        <ol className="mt-8 space-y-8 border-l border-border pl-8">
          {trajetoria.map(([ano, emp, desc]) => (
            <li key={emp}>
              <p className="eyebrow">{ano}</p>
              <h3 className="mt-1 text-2xl">{emp}</h3>
              <p className="mt-1 text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
        <h2 className="mt-20 text-3xl text-primary">Formação</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {formacao.map((f) => <li key={f} className="rounded-md border border-border bg-card px-5 py-4 text-sm">{f}</li>)}
        </ul>
      </section>
    </>
  );
}
