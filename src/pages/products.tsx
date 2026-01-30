import { page as productsContent } from '@/content/pages/products';
import { PageRenderer } from '@/components/page-renderer';
import { useLanguage } from '@/lib/language';
import { SeoTags } from '@/components/seo-tags';

export function ProductsPage() {
  const { language } = useLanguage();
  const content = productsContent[language];

  return (
    <>
      <SeoTags
        route="products"
        title={content.seo.title}
        description={content.seo.description}
      />

      <PageRenderer content={content} />
    </>
  );
}
