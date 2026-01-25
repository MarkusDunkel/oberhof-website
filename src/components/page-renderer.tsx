import type { PageContent as GenericPageContent } from "@/content/pages/der-hof";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type Section = GenericPageContent["sections"][number];

type PageRendererProps<T extends GenericPageContent> = {
  content: T;
  children?: React.ReactNode;
};

export function PageRenderer<T extends GenericPageContent>({ content, children }: PageRendererProps<T>) {
  const isExternalCta = /^(https?:)?\/\//.test(content.cta.primaryHref) || content.cta.primaryHref.startsWith("mailto:") || content.cta.primaryHref.startsWith("tel:");

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <p className="font-serif text-sm uppercase tracking-[0.3em] text-foreground/60">{content.slug}</p>
        <h1 className="font-serif text-4xl text-foreground sm:text-5xl">{content.hero.title}</h1>
        <p className="text-lg text-foreground/80 sm:text-xl">{content.hero.subtitle}</p>
      </header>
      <div className="space-y-10">
        {content.sections.map((section, index) => (
          <section key={`${section.title}-${index}`} className="space-y-4 rounded-3xl bg-white/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <h2 className="font-serif text-2xl text-foreground">{section.title}</h2>
            {renderSection(section)}
          </section>
        ))}
      </div>
      {children}
      <section className="rounded-3xl border border-foreground/10 bg-white/80 p-8 text-center sm:text-left">
        <div className="space-y-2">
          <p className="font-serif text-3xl text-foreground">{content.cta.title}</p>
          <p className="text-foreground/80">{content.cta.body}</p>
        </div>
        <div className="mt-6">
          <Button asChild>
            {isExternalCta ? (
              <a href={content.cta.primaryHref}>{content.cta.primaryLabel}</a>
            ) : (
              <Link to={content.cta.primaryHref}>{content.cta.primaryLabel}</Link>
            )}
          </Button>
        </div>
      </section>
    </div>
  );
}

function renderSection(section: Section) {
  switch (section.kind) {
    case "prose":
      return <p className="text-lg leading-relaxed text-foreground/80">{section.body}</p>;
    case "bullets":
      return (
        <ul className="list-disc space-y-2 pl-5 text-foreground/80">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "facts":
      return (
        <dl className="grid gap-4 sm:grid-cols-2">
          {section.items.map((fact) => (
            <div key={fact.label} className="rounded-2xl bg-background/50 p-4">
              <dt className="text-sm uppercase tracking-wide text-foreground/60">{fact.label}</dt>
              <dd className="text-lg text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      );
    default:
      return null;
  }
}
