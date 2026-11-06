import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import place1 from "@/assets/place1.jpg.asset.json";
import place2 from "@/assets/place2.jpg.asset.json";
import { menu } from "@/lib/menu";
import { GroupList } from "@/components/MenuList";
import { Wave } from "@/components/Wave";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cardápio · The Surfing Goat" },
      { name: "description", content: "Cardápio do quiosque de praia The Surfing Goat: drinks, cervejas, frutos do mar e petiscos." },
      { property: "og:title", content: "Cardápio · The Surfing Goat" },
      { property: "og:description", content: "Drinks, cervejas, frutos do mar e petiscos pé na areia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebMenu,
});

function WebMenu() {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-background shadow-xl">
      <header className="bg-sky-grad relative px-6 pb-10 pt-10 text-center">
        <img src={logo.url} alt="The Surfing Goat" className="mx-auto w-64" />
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">The Surfing Goat</h1>
        <p className="mt-1 text-sm uppercase tracking-[0.3em] text-ocean">Quiosque · pé na areia</p>
      </header>

      <div className="relative">
        <img src={place1.url} alt="Clientes nas mesas do quiosque" className="aspect-[4/3] w-full object-cover" />
        <Wave className="absolute -top-px left-0 h-6 w-full rotate-180 text-sand" />
      </div>

      <nav className="sticky top-0 z-10 flex gap-2 overflow-x-auto bg-primary px-4 py-3">
        {menu.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="shrink-0 rounded-full border border-primary-foreground/30 px-3 py-1 text-sm text-primary-foreground"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {menu.map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-14">
          <div className="relative">
            <img src={s.image} alt={s.title} loading="lazy" width={1280} height={720} className="aspect-video w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary-foreground">
              <p className="text-xs uppercase tracking-[0.3em] opacity-80">{s.kicker}</p>
              <h2 className="text-3xl font-semibold">{s.title}</h2>
            </div>
            <Wave className="absolute -bottom-px left-0 h-5 w-full text-background" />
          </div>
          <div className="space-y-8 px-6 py-8">
            {s.groups.map((g) => (
              <GroupList key={g.title} group={g} />
            ))}
          </div>
          {i === 1 && (
            <img src={place2.url} alt="Mesas na areia do quiosque" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          )}
        </section>
      ))}

      <footer className="bg-sea-grad px-6 py-10 text-center text-primary-foreground">
        <p className="font-display text-2xl">Boas ondas!</p>
        <p className="mt-2 text-xs opacity-80">Valores em reais (R$). Consulte nossa equipe.</p>
        <Link to="/impresso" className="no-print mt-6 inline-block text-xs underline opacity-80">
          Versão para impressão (A4)
        </Link>
      </footer>
    </div>
  );
}
