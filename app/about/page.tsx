import { loadSiteSpec } from "@/lib/spec-server";
import { ContentPage } from "@/components/ContentPage";

export default async function AboutPage() {
  const spec = await loadSiteSpec();
  return <ContentPage data={spec.content.about} />;
}
