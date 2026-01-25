import { page as veranstaltungenContent } from "@/content/pages/veranstaltungen";
import { PageRenderer } from "@/components/page-renderer";

export function VeranstaltungenPage() {
  return <PageRenderer content={veranstaltungenContent} />;
}
