import { page as produkteContent } from "@/content/pages/produkte";
import { PageRenderer } from "@/components/page-renderer";

export function ProduktePage() {
  return <PageRenderer content={produkteContent} />;
}
