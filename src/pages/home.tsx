import { homeContent } from "@/content/pages/home";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 rounded-3xl bg-white/70 p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
        <p className="font-serif text-sm uppercase tracking-[0.35em] text-foreground/60">Oberhof</p>
        <h1 className="font-serif text-5xl text-foreground sm:text-6xl">{homeContent.heroTitle}</h1>
        <p className="mx-auto max-w-3xl text-lg text-foreground/80 sm:text-xl">{homeContent.heroSubtitle}</p>
        <Button asChild size="lg" className="mt-4">
          <Link to={homeContent.cta.primaryHref}>{homeContent.cta.primaryLabel}</Link>
        </Button>
      </section>
      <section className="grid gap-6 sm:grid-cols-3">
        {homeContent.tiles.map((tile) => (
          <Link
            key={tile.title}
            to={tile.href}
            className="flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="space-y-3">
              <p className="font-serif text-2xl text-foreground">{tile.title}</p>
              <p className="text-sm text-foreground/70">{tile.description}</p>
            </div>
            <span className="mt-6 text-sm font-semibold text-accent">Mehr erfahren →</span>
          </Link>
        ))}
      </section>
      <section className="rounded-3xl bg-background/60 p-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {homeContent.highlights.map((highlight) => (
            <p key={highlight} className="text-lg text-foreground/80">
              {highlight}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
