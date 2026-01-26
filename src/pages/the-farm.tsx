import { page as farmContent } from "@/content/pages/the-farm";
import { PageRenderer } from "@/components/page-renderer";
import { useLanguage } from "@/lib/language";

export function TheFarmPage() {
  const { language } = useLanguage();

  return <PageRenderer content={farmContent[language]} />;
}
