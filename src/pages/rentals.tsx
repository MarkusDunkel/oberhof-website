import { page as rentalsContent } from '@/content/pages/rentals';
import { PageRenderer } from '@/components/page-renderer';
import { useLanguage } from '@/lib/language';
import { SeoTags } from '@/components/seo-tags';

export function RentalsPage() {
  const { language } = useLanguage();

  return (
    <>
      <SeoTags route="rentals" />
      <PageRenderer content={rentalsContent[language]} />
    </>
  );
}
