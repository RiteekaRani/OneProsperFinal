import { loadSiteSpec } from "@/lib/spec-server";
import { LegalPage } from "@/components/LegalPage";

export default async function TermsOfServicePage() {
  const spec = await loadSiteSpec();
  return <LegalPage data={spec.content.termsOfService} />;
}
