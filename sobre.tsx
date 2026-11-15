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
  ["2009 – 2015", "Fresenius Kabi Brasil", "Administrador de operações, com gestão de mais de 55.000 equipamentos de infusão, contratos de locação e comodato, logística e pós-venda. Criação de projeto RFID para controle de ativos em poder de terceiros."],
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
  "Especialização em Administração e Organização de Comércio Exterior — USJT",
  "Bacharelado em Tecnologia da Informação, com ênfase em Internet das Coisas — UNIVESP (2025)",
];

const atualizacao = [
  { titulo: "Reforma Tributária", instituicao: "FGV Educação Executiva", detalhe: "Curso de atualização · 16 horas-aula · 2026" },
  { titulo: "IA e Automação de Agentes com n8n", instituicao: "Impacta", detalhe: "Treinamento concluído · 28 horas · 2026" },
  { titulo: "Databricks Accredited Generative AI Fundamentals", instituicao: "Databricks Academy", detalhe: "Acreditação em fundamentos · emitida em junho de 2025, com validade indicada até 1º de junho de 2027" },
  { titulo: "Formação Claude Pro: Do Cowork ao Code", instituicao: "Impacta", detalhe: "Treinamento concluído · 15 horas · 2026" },
  { titulo: "Introdução à Análise de Dados — Microsoft Power BI", instituicao: "Escola Virtual da Fundação Bradesco", detalhe: "Curso introdutório · 5 horas · 2024" },
  { titulo: "Inteligência Artificial e o Novo Contexto da Cultura Digital", instituicao: "Escola Virtual da Fundação Bradesco", detalhe: "Curso de atualização · 20 horas · 2025" },
  { titulo: "Capacitações de repasse do programa Descomplique", instituicao: "Sebrae-SP", detalhe: "Atendimento ao cliente, controle de estoque, inteligência emocional, divulgação e recrutamento e seleção · 2022" },
];

function Sobre() {
  return (
    <>
      <PageHero eyebrow="Sobre" title="José Luiz Messias Ferreira" text="Administrador, consultor e professor. Uma trajetória que reúne gestão de operações, formação de equipes e experiência no mercado de café para apoiar empreendedores em decisões práticas." />
      <section className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl text-primary">Experiência aplicada ao seu negócio</h2>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>Desde 2020, à frente da JJ Café, conecto café em grão, locação de máquinas espresso e assistência técnica à consultoria financeira, organizacional, administrativa e de processos. O atendimento inclui contratos, layout e implantação de ERP Omie, conforme o escopo acordado. Também ministro aulas de empreendedorismo pela IBS nos programas do Sebrae, com mais de 2.200 horas de capacitação registradas no meu currículo de junho de 2026.</p>
          <p>Na Fresenius Kabi Brasil, atuei na gestão de mais de 55.000 equipamentos de infusão e criei um projeto RFID para controle de ativos em poder de terceiros. Essa experiência em contratos, locação e comodato, logística e pós-venda contribui para analisar a operação e organizar o acompanhamento de ativos.</p>
          <p>Na consultoria, trago a prática de melhoria contínua em processos, treinamento de equipes e indicadores de gestão, incluindo atuação em projeto para concessionárias Chevrolet e docência universitária na UNIP.</p>
        </div>
        <h2 className="mt-14 text-3xl text-primary">Resultados ao longo da trajetória</h2>
        <ul className="mt-6 space-y-4 text-muted-foreground">
          <li><strong className="text-foreground">Gestão de ativos em escala:</strong> mais de 55.000 equipamentos de infusão sob gestão na Fresenius Kabi Brasil, com atuação em contratos, logística e pós-venda (2009–2015).</li>
          <li><strong className="text-foreground">Melhoria de processos industriais:</strong> na Taunus, aumento de 15% na produtividade em pedidos de produtos especiais e redução de 50% no prazo de atendimento de pedidos, conforme resultados relatados no currículo (1985–1993).</li>
          <li><strong className="text-foreground">Tecnologia aplicada à operação:</strong> criação de projeto RFID para controle de ativos em poder de terceiros na Fresenius Kabi Brasil (2009–2015).</li>
        </ul>
        <p className="mt-5 text-sm text-muted-foreground">Dados históricos da trajetória profissional. As experiências citadas não representam vínculos comerciais atuais das empresas com a JJ Café nem garantia de resultados futuros.</p>
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
        <h2 className="mt-20 text-3xl text-primary">Formação acadêmica concluída</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {formacao.map((f) => <li key={f} className="rounded-md border border-border bg-card px-5 py-4 text-sm">{f}</li>)}
        </ul>
        <p className="mt-5 text-muted-foreground">Em andamento: Engenharia da Computação — UNIVESP.</p>
        <h2 className="mt-14 text-3xl text-primary">Atualização profissional selecionada</h2>
        <p className="mt-4 text-muted-foreground">Estudos em gestão, dados e tecnologia que complementam minha experiência profissional.</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {atualizacao.map((curso) => (
            <li key={curso.titulo} className="rounded-md border border-border bg-card p-6">
              <h3 className="text-xl">{curso.titulo}</h3>
              <p className="mt-2 text-primary">{curso.instituicao}</p>
              <p className="mt-2 text-sm text-muted-foreground">{curso.detalhe}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
