import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, WhatsButton, meta } from "@/components/site";

export const Route = createFileRoute("/cursos")({
  head: () => ({ links: [{ rel: "canonical", href: "https://www.jjcafe.com.br/cursos" }], meta: [{ property: "og:url", content: "https://www.jjcafe.com.br/cursos" }, ...meta("Cursos, mentorias e consultoria | JJ Café", "Consultoria financeira, organizacional e administrativa, processos, contratos, layout, implantação de ERP Omie e capacitação.")] }),
  component: Cursos,
});

function Cursos() {
  return (
    <>
      <PageHero eyebrow="Conhecimento" title="Consultoria & Cursos" text="Gestão financeira, organização e processos para sua empresa, com capacitação prática e experiência em operações." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        <Card tag="Udemy" title="Treinamento técnico · KLM1602">
          <p>Curso online na Udemy voltado à máquina de café espresso Kalerm KLM1602, com componentes internos, funcionamento, desmontagem e manutenção. Consulte na plataforma o conteúdo, os requisitos e as condições de inscrição.</p>
          <p className="mt-3 text-sm">A referência à marca identifica o equipamento abordado no curso e não indica parceria comercial atual da JJ Café.</p>
          <div className="mt-6"><a className="btn-gold" href="https://www.udemy.com/course/treinamento-tecnico-maquina-de-cafe-espresso-klm1602/" target="_blank" rel="noopener noreferrer">Ver curso na Udemy</a></div>
        </Card>
        <Card tag="Infoproduto" title="Negócio IA 30D">
          <p>Programa de 30 dias para criar e acelerar seu negócio usando Inteligência Artificial.</p>
          <div className="mt-6"><a className="btn-gold" href="https://negocioia30d.com.br" target="_blank" rel="noreferrer">Conhecer o Negócio IA 30D</a></div>
        </Card>
        <Card tag="Empresas" title="Consultoria em Gestão">
          <p>Consultoria financeira, organizacional e administrativa para entender a operação e definir prioridades de melhoria.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Organização financeira e indicadores de gestão.</li>
            <li>Mapeamento e melhoria de processos administrativos e operacionais.</li>
            <li>Gestão de contratos e organização do layout operacional.</li>
            <li>Implantação de ERP Omie e organização dos processos envolvidos.</li>
          </ul>
          <p className="mt-4">O escopo é definido conforme as necessidades da empresa. A menção ao Omie identifica o sistema utilizado; não representa declaração de certificação ou parceria oficial.</p>
          <div className="mt-6"><WhatsButton label="Solicitar diagnóstico" msg="Olá! Gostaria de uma consultoria para minha empresa." /></div>
        </Card>
        <Card tag="Sebrae · IBS" title="Aulas & Palestras">
          <p>Professor dos programas Primeiros Passos, Descomplique, Organize seu Negócio e Pronta para Crescer. Disponível para palestras e treinamentos.</p>
          <div className="mt-6"><WhatsButton label="Convidar para palestra" msg="Olá! Gostaria de convidá-lo para uma palestra/treinamento." /></div>
        </Card>
      </section>
    </>
  );
}
