import { page as productsContent } from "@/content/pages/products";
import { PageRenderer } from "@/components/page-renderer";

export function ProductsPage() {
  return <PageRenderer content={productsContent} />;
}
