import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="space-y-6 text-center">
      <p className="font-serif text-sm uppercase tracking-[0.3em] text-foreground/60">404</p>
      <h1 className="font-serif text-4xl text-foreground">Seite nicht gefunden</h1>
      <p className="text-foreground/70">Vielleicht hilft dir ein Blick zurück zur Startseite.</p>
      <div className="flex justify-center">
        <Button asChild>
          <Link to="/">Zur Startseite</Link>
        </Button>
      </div>
    </div>
  );
}
