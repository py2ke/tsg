import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import place1 from "@/assets/place1.jpg.asset.json";
import place2 from "@/assets/place2.jpg.asset.json";
import { menu, type Section } from "@/lib/menu";
import { GroupList } from "@/components/MenuList";
import { Wave } from "@/components/Wave";

export const Route = createFileRoute("/impresso")({
  head: () => ({
    meta: [
      { title: "Cardápio A4 · The Surfing Goat" },
      { name: "description", content: "Versão para impressão em A4 do cardápio do quiosque The Surfing Goat." },
      { property: "og:title", content: "Cardápio A4 · The Surfing Goat" },
      { property: "og:description", content: "Cardápio impresso do quiosque The Surfing Goat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrintMenu,
});

const byId = (id: string) => menu.find((s) => s.id === id)!;

function SectionBlock({ s, cols, wideFirst = false }: { s: Section; cols: number; wideFirst?: boolean }) {
  return (
    <section className="mb-[5mm]">
      <div className="mb-[3mm] flex items-center gap-[4mm]">
        <img src={s.image} alt={s.title} className="h-[22mm] w-[38mm] rounded-xl object-cover" />
        <div>
          <p className="text-[7pt] uppercase tracking-[0.3em] text-ocean">{s.kicker}</p>
          <h2 className="text-[20pt] font-semibold leading-none">{s.title}</h2>
        </div>
      </div>
      {wideFirst ? (
        <div className="grid grid-cols-3 gap-x-[7mm]">
          <div className="col-span-2 gap-x-[7mm]" style={{ columnCount: 2 }}>
            <GroupList group={s.groups[0]!} compact />
          </div>
          <div>
            {s.groups.slice(1).map((g) => (
              <GroupList key={g.title} group={g} compact />
            ))}
          </div>
        </div>
      ) : (
        <div className="gap-x-[7mm] [&>*]:mb-[3mm]" style={{ columnCount: cols }}>
          {s.groups.map((g) => (
            <GroupList key={g.title} group={g} compact />
          ))}
        </div>
      )}
    </section>
  );
}

function Footer() {
  return (
    <div className="absolute inset-x-0 bottom-0 text-primary">
      <Wave className="h-[8mm] w-full" />
      <div className="bg-primary py-[3mm] text-center text-[7.5pt] tracking-[0.25em] text-primary-foreground">
        THE SURFING GOAT · VALORES EM R$ · BOAS ONDAS
      </div>
    </div>
  );
}

function PrintMenu() {
  return (
    <div className="min-h-screen bg-muted py-8 print:bg-background print:py-0">
      <div className="no-print mx-auto mb-6 flex max-w-[210mm] justify-between px-2">
        <Link to="/" className="text-sm underline">← Versão celular</Link>
        <button onClick={() => window.print()} className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">
          Imprimir / salvar PDF
        </button>
      </div>

      {/* Página 1 — Comidas */}
      <div className="a4-page mx-auto mb-8 shadow-2xl">
        <div className="bg-sky-grad relative h-[78mm]">
          <img src={place1.url} alt="" className="absolute inset-y-0 right-0 h-full w-[55%] object-cover [mask-image:linear-gradient(to_right,transparent,black_35%)]" />
          <div className="relative flex h-full w-[52%] flex-col items-center justify-center text-center">
            <img src={logo.url} alt="The Surfing Goat" className="w-[62mm]" />
            <h1 className="-mt-[2mm] text-[26pt] font-semibold leading-none">The Surfing Goat</h1>
            <p className="mt-[2mm] text-[8pt] uppercase tracking-[0.35em] text-ocean">Quiosque · pé na areia</p>
          </div>
          <Wave className="absolute -bottom-px left-0 h-[7mm] w-full text-background" />
        </div>
        <div className="px-[12mm] pt-[5mm]">
          <SectionBlock s={byId("mar")} cols={2} />
          <SectionBlock s={byId("petiscos")} cols={3} />
        </div>
        <Footer />
      </div>

      {/* Página 2 — Bebidas */}
      <div className="a4-page mx-auto shadow-2xl">
        <div className="relative h-[34mm]">
          <img src={place2.url} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-transparent" />
          <div className="absolute left-[12mm] top-1/2 flex -translate-y-1/2 items-center gap-[4mm] text-primary-foreground">
            <div className="rounded-full bg-background p-[1.5mm]"><img src={logo.url} alt="" className="h-[22mm] w-[22mm] object-contain" /></div>
            <div>
              <p className="text-[7pt] uppercase tracking-[0.35em] opacity-80">The Surfing Goat</p>
              <h1 className="text-[24pt] font-semibold leading-none">Bar & Bebidas</h1>
            </div>
          </div>
          <Wave className="absolute -bottom-px left-0 h-[7mm] w-full text-background" />
        </div>
        <div className="px-[12mm] pt-[4mm]">
          <SectionBlock s={byId("drinks")} cols={3} />
          <SectionBlock s={byId("bebidas")} cols={3} wideFirst />
        </div>
        <Footer />
      </div>
    </div>
  );
}
