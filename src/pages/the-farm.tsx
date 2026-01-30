import { page as farmContent } from '@/content/pages/the-farm';
import { PageRenderer } from '@/components/page-renderer';
import { useLanguage } from '@/lib/language';
import { SeoTags } from '@/components/seo-tags';

export function TheFarmPage() {
  const { language } = useLanguage();
  const content = farmContent[language];

  return (
    <>
      <SeoTags
        route="the-farm"
        title={content.seo.title}
        description={content.seo.description}
      />
      <PageRenderer content={content} />
    </>
  );
}
