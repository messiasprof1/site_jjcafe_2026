import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-cafe.jpg";
import { Card, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ links: [{ rel: "canonical", href: "https://www.jjcafe.com.br/" }], meta: [{ property: "og:url", content: "https://www.jjcafe.com.br/" }, ...meta("JJ Café — Consultoria, cursos e café | José Luiz Messias", "Mais de 40 anos de experiência em gestão, operações e café. Consultoria, aulas de empreendedorismo, cursos online e máquinas de café.")] }),
  component: Index,
});

const numeros = [
  ["40+", "anos de trajetória profissional"],
  ["2.200h", "capacitando empreendedores"],
  ["4.000", "máquinas geridas na DAB Coffee"],
  ["Três Corações · Nespresso", "experiência em café"],
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="" fetchPriority="high" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-32">
          <p className="eyebrow">José Luiz Messias Ferreira</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-tight md:text-7xl">
            Café, máquinas e conhecimento <span className="text-gold-gradient italic">para o seu negócio</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Café em grão, locação de máquinas espresso e assistência técnica na Região Metropolitana de Sorocaba. Consultoria para organizar a gestão, os processos e a tecnologia do seu negócio.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/cafe" className="btn-gold">Café e máquinas para empresas</Link>
            <Link to="/cursos" className="btn-outline-gold">Consultoria e cursos</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {numeros.map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-3xl text-primary">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-24">
        <p className="eyebrow">O hub da JJ Café</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Soluções que conectam operação e gestão</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card level={3} tag="Empresas" title="Consultoria">Consultoria financeira, organizacional e administrativa, processos, contratos, layout e implantação de ERP Omie.<p className="mt-4"><Link to="/cursos" className="text-primary underline">Conhecer a consultoria</Link></p></Card>
          <Card level={3} tag="Online" title="Cursos & Infoprodutos">Treinamento técnico da máquina espresso KLM1602 na Udemy e programas como o Negócio IA 30D.<p className="mt-4"><Link to="/cursos" className="text-primary underline">Explorar cursos</Link></p></Card>
          <Card level={3} tag="Empreendedores" title="Aulas & Palestras">Professor dos programas Sebrae pela IBS: Primeiros Passos, Descomplique, Organize seu Negócio.<p className="mt-4"><Link to="/cursos" className="text-primary underline">Consultar treinamentos</Link></p></Card>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <div className="grid items-center gap-10 rounded-md border border-border bg-card p-10 md:grid-cols-2 md:p-14">
          <div>
            <p className="eyebrow">Para seu comércio</p>
            <h2 className="mt-3 text-4xl">Café em grão & máquinas</h2>
            <p className="mt-4 text-muted-foreground">Venda de café em grão, locação de máquinas espresso e assistência técnica para padarias, escritórios e comércios na Região Metropolitana de Sorocaba.</p>
          </div>
          <div className="md:text-right"><Link to="/cafe" className="btn-outline-gold">Conhecer</Link></div>
        </div>
      </section>
    </>
  );
}
