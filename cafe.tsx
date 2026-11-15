import { createFileRoute } from "@tanstack/react-router";
import { Card, PageHero, WhatsButton, meta } from "@/components/site";

export const Route = createFileRoute("/cafe")({
  head: () => ({ links: [{ rel: "canonical", href: "https://www.jjcafe.com.br/cafe" }], meta: [{ property: "og:url", content: "https://www.jjcafe.com.br/cafe" }, ...meta("Café em grão e locação de máquinas | JJ Café", "Venda de café em grão, locação de máquinas espresso e assistência técnica na Região Metropolitana de Sorocaba – SP.")] }),
  component: Cafe,
});

function Cafe() {
  return (
    <>
      <PageHero eyebrow="JJ Café" title="Café & Máquinas" text="Café em grão, locação de máquinas espresso e assistência técnica para empresas na Região Metropolitana de Sorocaba – SP." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        <Card tag="Locação" title="Máquinas automáticas">Locação de máquinas de café espresso para o seu negócio. Consulte opções de equipamento, condições contratuais e disponibilidade.</Card>
        <Card tag="Produto" title="Café em grão">Venda de café em grão para o consumo do seu negócio. Converse conosco sobre perfil do café, volumes e condições de fornecimento.</Card>
        <Card tag="Serviço" title="Assistência técnica">Manutenção e suporte técnico para máquinas de café espresso. Informe marca, modelo e necessidade para confirmar o atendimento.</Card>
      </section>
      <section className="mx-auto mt-12 max-w-4xl px-6">
        <h2 className="text-3xl">Como solicitar uma proposta</h2>
        <p className="mt-4 text-muted-foreground">Informe sua cidade, tipo de estabelecimento, consumo estimado e se precisa de café, locação ou assistência. Para manutenção, inclua a marca e o modelo da máquina. A proposta detalhará o escopo e as condições combinadas.</p>
      </section>
      <div className="mt-14 text-center">
        <WhatsButton label="Pedir orçamento" msg="Olá! Gostaria de um orçamento de máquina/café." />
      </div>
    </>
  );
}
