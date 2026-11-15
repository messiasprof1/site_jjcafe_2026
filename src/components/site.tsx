import { Link } from "@tanstack/react-router";

export const CONTATO = {
  whatsapp: "5515997954949",
  telefone: "(15) 99795-4949",
  telefone2: "(11) 93057-1386",
  telefone2Intl: "5511930571386",
  email: "contato@jjcafe.com.br",
  email2: "messias@jjcafe.com.br",
  sac: "sac@jjcafe.com.br",
  linkedin: "https://www.linkedin.com/in/jose-luiz-messias-ferreira-42278111/",
};

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/cursos", label: "Consultoria & Cursos" },
  { to: "/cafe", label: "Café & Máquinas" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="font-display text-2xl text-gold-gradient">JJ Café</Link>
        <nav aria-label="Navegação principal" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 text-sm text-muted-foreground md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-primary">JJ Café</p>
          <p className="mt-2">J J CAFE PRODUTOS E SERVIÇOS LIMITADA</p>
          <p>CNPJ: 39.237.756/0001-94</p>
          <p>Boituva – SP · Região Metropolitana de Sorocaba</p>
        </div>
        <div>
          <p><a href={`tel:+${CONTATO.whatsapp}`}>{CONTATO.telefone}</a></p>
          <p><a href={`tel:+${CONTATO.telefone2Intl}`}>{CONTATO.telefone2}</a></p>
          <p><a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a></p>
          <p><a href={`mailto:${CONTATO.email2}`}>{CONTATO.email2}</a></p>
          <p><a href={`mailto:${CONTATO.sac}`}>Atendimento: {CONTATO.sac}</a></p>
        </div>
        <div className="md:text-right">
          <a href={CONTATO.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <p className="mt-2">© {new Date().getFullYear()} JJ Café</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsButton({ msg = "Olá José Luiz, vim pelo site da JJ Café.", label = "Falar no WhatsApp" }: { msg?: string; label?: string }) {
  return (
    <a className="btn-gold" target="_blank" rel="noreferrer"
      href={`https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(msg)}`}>{label}</a>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-5xl md:text-6xl">{title}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>
    </section>
  );
}

export function Card({ title, children, tag, level = 2 }: { title: string; children: React.ReactNode; tag?: string; level?: 2 | 3 }) {
  return (
    <div className="rounded-md border border-border bg-card p-8 transition-colors hover:border-primary">
      {tag && <p className="eyebrow mb-3">{tag}</p>}
      {level === 2 ? <h2 className="text-2xl text-foreground">{title}</h2> : <h3 className="text-2xl text-foreground">{title}</h3>}
      <div className="mt-3 text-muted-foreground">{children}</div>
    </div>
  );
}

export const meta = (title: string, description: string) => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
];
