import { createFileRoute } from "@tanstack/react-router";
import { CONTATO, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.jjcafe.com.br/privacidade" }],
    meta: meta("Privacidade | JJ Café", "Como a JJ Café trata os dados de navegação e de atendimento e como solicitar correção ou exclusão de informações."),
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <>
      <PageHero eyebrow="Transparência" title="Aviso de privacidade" text="Como usamos as informações relacionadas à navegação e ao atendimento na JJ Café." />
      <article className="mx-auto max-w-3xl space-y-8 px-6 text-muted-foreground">
        <p>Atualizado em 15 de novembro de 2026.</p>
        <section className="space-y-3">
          <h2 className="text-3xl text-foreground">Quem é responsável pelos dados</h2>
          <p>A J J CAFE PRODUTOS E SERVIÇOS LIMITADA, CNPJ 39.237.756/0001-94, com atuação a partir de Boituva – SP, é responsável pelo tratamento das informações utilizadas em seu atendimento.</p>
          <p>Para dúvidas de privacidade ou pedidos sobre seus dados, escreva para <a className="text-primary underline" href={`mailto:${CONTATO.email}?subject=Privacidade`}>{CONTATO.email}</a>. O endereço {CONTATO.sac} é destinado ao atendimento de clientes de máquinas e produtos.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-3xl text-foreground">Quais informações são tratadas</h2>
          <p>Este site institucional não possui cadastro, área de cliente, formulário de envio ou pagamento online. Quando você escolhe falar conosco por e-mail ou WhatsApp, recebemos as informações que enviar, como nome, telefone, e-mail, empresa, cidade e detalhes da solicitação.</p>
          <p>Envie apenas o necessário para o atendimento. Evite incluir documentos de identificação, dados de saúde, senhas ou informações de outras pessoas sem necessidade.</p>
          <p>A hospedagem pode processar informações técnicas, como endereço IP, data e horário de acesso, endereço solicitado e dados do navegador, para entregar as páginas, manter o serviço e prevenir abusos.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-3xl text-foreground">Para que usamos os dados</h2>
          <p>Usamos as informações de contato para responder dúvidas, entender necessidades, preparar propostas e conduzir o atendimento solicitado. Conforme a situação, o tratamento se relaciona a procedimentos de contratação a seu pedido, execução de contrato ou cumprimento de obrigações legais. Informações técnicas também podem ser tratadas para segurança e funcionamento do serviço, observados os requisitos legais aplicáveis.</p>
          <p>Entrar em contato não inclui você automaticamente em listas de ofertas. Mensagens promocionais somente serão enviadas se você solicitar ou autorizar, e poderá pedir a interrupção pelo mesmo canal ou pelo e-mail de contato.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-3xl text-foreground">Serviços utilizados e links externos</h2>
          <p>Utilizamos Cloudflare para hospedagem e entrega do site e Zoho Mail para e-mail. Ao abrir o WhatsApp, você utiliza um serviço da Meta. As fontes da página são carregadas pelo Google Fonts, o que gera uma conexão com esse fornecedor e pode transmitir informações técnicas, como o IP.</p>
          <p>Links para Udemy, LinkedIn e outros sites levam a serviços com suas próprias condições e políticas de privacidade. Os fornecedores utilizados podem processar informações fora do Brasil; o tratamento e eventuais transferências devem observar as regras aplicáveis de proteção de dados.</p>
          <p>Não há cookies de publicidade ou ferramentas de anúncios adicionados pela JJ Café nesta versão. A infraestrutura pode utilizar recursos técnicos de segurança. Mudanças que incluam coleta adicional serão refletidas neste aviso e, quando necessário, nas opções de consentimento.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-3xl text-foreground">Por quanto tempo guardamos as informações</h2>
          <p>Conservamos as informações pelo tempo necessário ao atendimento e à relação comercial e, quando aplicável, ao cumprimento de obrigações legais e ao exercício de direitos. Encerradas essas necessidades, os dados devem ser eliminados ou anonimizados, consideradas as regras e limitações dos serviços utilizados.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-3xl text-foreground">Seus direitos</h2>
          <p>Você pode solicitar confirmação do tratamento, acesso, correção e informações sobre o uso e compartilhamento dos seus dados. Também pode pedir exclusão, anonimização ou bloqueio nas hipóteses aplicáveis, revogar consentimento e esclarecer dúvidas sobre o tratamento.</p>
          <p>Envie a solicitação para <a className="text-primary underline" href={`mailto:${CONTATO.email}?subject=Privacidade`}>{CONTATO.email}</a>, explicando o que deseja. Podemos precisar confirmar sua identidade de forma proporcional ao pedido. Algumas informações poderão ser mantidas quando houver fundamento legal para isso.</p>
        </section>
      </article>
    </>
  );
}
