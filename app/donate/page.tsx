import { loadSiteSpec } from "@/lib/spec-server";
import { DonatePage } from "@/components/DonatePage";

export default async function DonatePageRoute() {
  const spec = await loadSiteSpec();
  return <DonatePage data={spec.content.donate} />;
}
