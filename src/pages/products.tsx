import { page as productsContent } from '@/content/pages/products';
import { PageRenderer } from '@/components/page-renderer';
import { useLanguage } from '@/lib/language';
import { SeoTags } from '@/components/seo-tags';

export function ProductsPage() {
  const { language } = useLanguage();

  return (
    <>
      <SeoTags route="products" />
      <PageRenderer content={productsContent[language]} />
    </>
  );
}
