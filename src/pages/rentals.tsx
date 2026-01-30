import { page as rentalsContent } from '@/content/pages/rentals';
import { PageRenderer } from '@/components/page-renderer';
import { useLanguage } from '@/lib/language';
import { SeoTags } from '@/components/seo-tags';

export function RentalsPage() {
  const { language } = useLanguage();
  const content = rentalsContent[language];

  return (
    <>
      <SeoTags
        route="rentals"
        title={content.seo.title}
        description={content.seo.description}
      />

      <PageRenderer content={content} />
    </>
  );
}
