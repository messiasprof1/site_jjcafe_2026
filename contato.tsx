import { createFileRoute } from "@tanstack/react-router";
import { CONTATO, PageHero, WhatsButton, meta } from "@/components/site";

export const Route = createFileRoute("/contato")({
  head: () => ({ links: [{ rel: "canonical", href: "https://www.jjcafe.com.br/contato" }], meta: [{ property: "og:url", content: "https://www.jjcafe.com.br/contato" }, ...meta("Contato | JJ Café", "Fale com José Luiz Messias Ferreira pelo WhatsApp (15) 99795-4949 ou contato@jjcafe.com.br.")] }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHero eyebrow="Contato" title="Vamos conversar" text="Café em grão, locação de máquinas espresso, assistência técnica e consultoria para o seu negócio. Conte o que você precisa." />
      <section className="mx-auto max-w-xl space-y-4 px-6 text-center">
        <WhatsButton label={`WhatsApp ${CONTATO.telefone}`} />
        <p className="pt-6"><a className="text-primary hover:underline" href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a></p>
        <p><a className="text-primary hover:underline" href={`mailto:${CONTATO.email2}`}>{CONTATO.email2}</a></p>
        <p><a className="text-primary hover:underline" href={`mailto:${CONTATO.sac}`}>Atendimento: {CONTATO.sac}</a></p>
        <p><a className="text-primary hover:underline" href={`tel:+${CONTATO.telefone2Intl}`}>Telefone: {CONTATO.telefone2}</a></p>
        <p className="text-muted-foreground">Atendimento na Região Metropolitana de Sorocaba – SP</p>
        <p className="text-sm text-muted-foreground">Ao abrir o WhatsApp ou seu aplicativo de e-mail, você passa a utilizar esses serviços. Envie apenas as informações necessárias ao atendimento.</p>
      </section>
    </>
  );
}
