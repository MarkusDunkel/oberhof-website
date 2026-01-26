import { page as rentalsContent } from "@/content/pages/rentals";
import { PageRenderer } from "@/components/page-renderer";

export function RentalsPage() {
  return <PageRenderer content={rentalsContent} />;
}
