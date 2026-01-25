import { page as kontaktContent } from "@/content/pages/kontakt";
import { PageRenderer } from "@/components/page-renderer";

export function KontaktPage() {
  return (
    <PageRenderer content={kontaktContent}>
      <section className="space-y-8 rounded-3xl border border-border/60 bg-surface p-6">
        <div>
          <h2 className="font-serif text-2xl text-foreground">Anfahrt</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-foreground/80">
            {kontaktContent.directions.map((step, index) => (
              <li key={`${step}-${index}`}>{step}</li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="font-serif text-xl text-foreground">Credits</h3>
          <ul className="mt-3 space-y-1 text-sm text-foreground/70">
            {kontaktContent.credits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </div>
      </section>
    </PageRenderer>
  );
}
