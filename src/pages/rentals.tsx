import { page as rentalsContent } from "@/content/pages/rentals";
import { PageRenderer } from "@/components/page-renderer";
import { useLanguage } from "@/lib/language";

export function RentalsPage() {
  const { language } = useLanguage();

  return <PageRenderer content={rentalsContent[language]} />;
}
