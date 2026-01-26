import { page as productsContent } from "@/content/pages/products";
import { PageRenderer } from "@/components/page-renderer";
import { useLanguage } from "@/lib/language";

export function ProductsPage() {
  const { language } = useLanguage();

  return <PageRenderer content={productsContent[language]} />;
}
