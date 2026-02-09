import { loadSiteSpec } from "@/lib/spec-server";
import { LegalPage } from "@/components/LegalPage";

export default async function PrivacyPolicyPage() {
  const spec = await loadSiteSpec();
  return <LegalPage data={spec.content.privacyPolicy} />;
}
